<template>
  <div class="relative overflow-hidden ">
    <button :disabled="disabled" class="h-8 w-16 p-2 flex items-center justify-center border border-green bg-green hover:bg-lightgreen focus:bg-lightgreen disabled:bg-gray" title="クリックするとURLをクリップボードにコピーします。" @click="copy">
      <Icon name="mdi:content-copy" class="text-white" />
    </button>
    <transition>
      <div
        v-if="resultShow"
        class="h-8 w-16 absolute inset-0 flex items-center justify-center border border-green bg-lightgray text-black p-2 text-sm"
      >
        Copied.
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const resultShow = ref<boolean>(false)

watch(resultShow, (val:boolean) => {
  if (!val) { return }
  setTimeout(() => { resultShow.value = false }, 2000)
})

const url = computed<string>(() => {
  const baseUrl = config.public.baseURL
  return baseUrl + route.fullPath
})

const disabled = ref<boolean>(true)

onMounted(() => {
  disabled.value = typeof navigator.clipboard.writeText !== 'function'
})

const copy = () => {
  if (disabled.value) {
    // error
    return
  }
  navigator.clipboard.writeText(url.value)
  resultShow.value = true
}

</script>
<style scoped>
.v-enter-active{
  transition: all 0.25s ease-out;
}

.v-leave-active {
  transition: all 0.25s ease-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(80px);
}
</style>
