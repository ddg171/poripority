<template>
    <V2ArticleCardFrame>
        <article class="w-full h-full flex flex-col " @click.stop="router.push(`/blog/${props.article.id}`)">
            <div class="relative overflow-hidden shrink-0">
                <NuxtPicture v-if="props.article.eyecatch?.url" class=" opacity-100 transition-opacity duration-500 "
                    provider="imgix" :src="props.article.eyecatch?.url || ``" format="webp" legacy-format="jpeg"
                    fit="crop" height="200" width="200"
                    :img-attrs="{ class: 'card-thumb aspect-3/2 w-full h-auto hover:scale-105 transition-transform duration-300', alt: `${props.article.title}のサムネイル画像`, height: 200, width: 200, decoding: 'async', loading: 'lazy' }"
                    :modifiers="{ q: 50 }" />
                <div v-else class="px-4 py-8  font-semibold text-lightgreen/75 bg-gray">
                    No Eyecatch
                </div>
            </div>
            <div class="w-full h-full p-4  article-title-bg flex flex-col  justify-between gap-2">
                <div class="flex flex-col gap-1">
                    <NuxtLink :to="`/blog?category=${props.article.category.id}`"
                        class="w-fit px-2 py-1 bg-gray/75 border border-lightgreen text-xs text-white hover:bg-gray  hover:cursor-pointer"
                        @click.stop="() => { }"># {{ props.article.category.name }}</NuxtLink>

                    <h3 class="text-xl font-semibold tracking-tighter text-white ">
                        <NuxtLink :to="to">
                            {{ props.article.title }}
                        </NuxtLink>
                    </h3>
                    <p class="ml-1 text-sm text-lightgray">
                        {{ props.article.subtitle }}
                    </p>

                </div>
                <div class="shrink-0 border-t border-lightgreen pt-4">
                    <p class="mr-2 text-xs text-right text-lightgray">
                        updated at {{ publishedDate }}
                    </p>
                </div>
            </div>
        </article>
    </V2ArticleCardFrame>
</template>

<script setup lang="ts">
import { parseISO } from 'date-fns';
import { defineProps, withDefaults, } from 'vue';
import type { Article } from '~~/types/articles';
interface Props {
    article: Article
    category?: string
}
const router = useRouter()

const props = withDefaults(defineProps<Props>(), { offset: () => 0, category: undefined })

const isPictureLoaded = ref<boolean>(false)



onMounted(() => {
    setTimeout(() => {
        isPictureLoaded.value = true
    }, 5000)
})

const to = computed<string>(
    () => {
        const path = `/blog/${props.article.id}`
        const params: string[] = []
        if (props.category) {
            params.push(`category=${props.category}`)
        }

        return params.length ? path + '?' + params.join('&') : path
    })

const publishedDate = computed<string>(() => articleDate(parseISO(props.article.publishedAt || '')))

</script>
<style scoped>
.article-title-bg {
    background: linear-gradient(to top, #002130c7, #002130c7 50%, rgba(0, 0, 0, 0.0));
}
</style>