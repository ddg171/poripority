<template>
  <ShareSnsLink :link="link" class="text-white bg-twttr border-twttr" target="_blank" tabindex="0" title="Twitter">
    <Icon
      class="w-full h-full"
      name="mdi:twitter"
    />
  </ShareSnsLink>
</template>

<script setup lang="ts">
interface Props {
    text?:string
}

const props = defineProps<Props>()

const route = useRoute()
const config = useRuntimeConfig()

const url = computed<string>(() => {
  const baseUrl = config.public.baseURL
  return baseUrl + route.fullPath
})

const link = computed<string>(() => {
  const shareUrl = 'https://twitter.com/intent/tweet?'
  const u = `url=${url.value}`
  const t = props.text ? `&text=${encodeURI(props.text)}` : undefined
  const params = t ? u + t : u
  return shareUrl + params
})

</script>
