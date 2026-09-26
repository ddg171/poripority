<template>
    <V2ArticleCardFrame>
        <article class="w-full h-full relative overflow-hidden" @click.stop="router.push(`/blog/${props.article.id}`)">
            <NuxtPicture v-if="props.article.eyecatch?.url" class="opacity-100 transition-opacity duration-500 "
                provider="imgix" :src="props.article.eyecatch?.url || ``" format="webp" legacy-format="jpeg" fit="crop"
                height="200" width="200"
                :img-attrs="{ class: 'card-thumb w-full h-auto hover:scale-105 transition-transform duration-300', alt: `${props.article.title}のサムネイル画像`, height: 200, width: 200, decoding: 'async', loading: 'lazy' }"
                :modifiers="{ q: 50 }" />
            <div v-else class="w-full h-full flex justify-center items-center text-sm text-white underline">
                {{ msg }}
            </div>
            <div class="absolute bottom-0 left-0 w-full px-1 pb-1 pt-4  article-title-bg flex flex-col justify-end">
                <NuxtLink :to="`/blog?category=${props.article.category.id}`"
                    class="w-fit p-1 bg-gray/75 text-xs text-orange hover:bg-gray hover:font-bold hover:cursor-pointer"
                    @click.stop="() => { }">{{ props.article.category.name }}</NuxtLink>
                <h3 class="text-md font-semibold tracking-tighter text-white hover:underline">
                    <NuxtLink :to="to">
                        {{ props.article.title }}
                    </NuxtLink>
                </h3>
                <p class="text-sm text-lightgray mt-1">
                    {{ publishedDate }}
                </p>
            </div>
        </article>
    </V2ArticleCardFrame>
</template>

<script setup lang="ts">
import { parseISO } from 'date-fns';
import type { Article } from '~~/types/articles';
interface Props {
    article: Article
    category?: string
}
const router = useRouter()

const props = withDefaults(defineProps<Props>(), { offset: () => 0, category: undefined })

const isPictureLoaded = ref<boolean>(false)

const msg = computed<string>(() => {
    return props.article?.eyecatch?.url ? 'loading...' : 'no image'
})

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