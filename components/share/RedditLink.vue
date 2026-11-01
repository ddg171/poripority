<template>
  <ShareSnsLink :link="link" class="text-white bg-reddit border-reddit" target="_blank" tabindex="0" title="Reddit">
    <Icon
      class="w-full h-full text-white"
      name="ph:reddit-logo-fill"
    />
  </ShareSnsLink>
</template>

<script setup lang="ts">
interface Props {
    text?:string
    url?:string
}

const props = defineProps<Props>()

const route = useRoute()
const config = useRuntimeConfig()

const LinkUrl = computed<string>(() => {
  const baseUrl = config.public.baseURL
  return baseUrl + route.fullPath
})
const link = computed<string>(() => {
  const shareUrl = 'https://reddit.com/submit?'
  const u = `url=${LinkUrl.value}`
  const t = props.text ? `&title=${encodeURI(props.text)}` : undefined
  const params = t ? u + t : u
  return shareUrl + params
})

</script>
