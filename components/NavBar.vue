<template>
  <nav class=" px-2 md:pr-4 bg-transparent navbar flex flex-row-reverse md:flex-row items-center">
    <input id="hamburger-toggle" v-model="isShow" type="checkbox" class="hidden" @change="$emit('toggle',isShow)">
    <label for="hamburger-toggle" class="block p-2 border border-solid hamburger-button md:hidden border-green hover:border-white">
      <span class="bg-lightgreen" />
    </label>
    <ul class="self-end hidden md:h-full overflow-hidden nav-links  md:flex md:flex-row md:gap-4 md:items-center" @click="hideNav">
      <li v-for="m ,i in props.menus " :key="i" class="w-full h-16 md:h-8 md:pr-4  flex items-center justify-center font-medium border-b border-lightgray border-solid  font-xl bg-green hover:bg-lightgreen  md:border-none">
        <NuxtLink :to="m.path" :is-red="samePath(m.path,currentPath)" tabindex="0" class="h-full w-full pl-2 flex items-center justify-center  overflow-hidden border-l-8 border-solid nav-link  md:justify-start  md:border-l-4 border-l-gray " :data-nowlocation="m.path ===currentPath ">
          <span class=" text-lg md:text-sm font-semibold  tracking-wider" :data-transition="transitionTrigger">
            {{ m.name }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { LinkParams } from '~~/types/components';

interface Props {
    menus?:LinkParams[]

}

const emits = defineEmits<{(e:'toggle', value:boolean):void}>()

const samePath = (path:string, fullPath:string):boolean => {
  if (!fullPath) { return false }
  if (!path) { return false }
  if (fullPath === path) { return true }
  if (path === '/') {
    return path === fullPath
  }
  return !!fullPath.includes(path)
}

const props = withDefaults(defineProps<Props>(), { menus: () => [] })

const isShow = ref<boolean>(false)
const transitionTrigger = ref<boolean>(false)
const hasResizeHandler = ref<boolean>(false)

const route = useRoute()

const currentPath = computed(() => {
  const path = route.path
  const pathArry = path.split('/')
  return '/' + (pathArry.length > 1 ? pathArry[1] : '')
})

const hideNav = () => {
  isShow.value = false
  emits('toggle', false)
}

onMounted(() => {
  if (!hasResizeHandler.value) {
    window.addEventListener('resize', hideNav)
    hasResizeHandler.value = true
  }
  nextTick(() => {
    setTimeout(() => {
      transitionTrigger.value = true
    }, 300)
  })
})

onBeforeUnmount(() => {
  if (!hasResizeHandler.value) { return }
  window.removeEventListener('resize', hideNav)
})
</script>

<style scoped>
.nav-link[data-nowlocation=true]{
  border-color: #C40026 !important;
  transition: border-color 0.5s;
}
.hamburger-button{
  position: relative;
  height: 64px;
  width: 64px;
}

.hamburger-button span,
.hamburger-button::before,
.hamburger-button::after{
  display: block;
  width: 40px;
  height: 5px;
  left: calc(50% - 20px);
  position: absolute;
  content: "";
  opacity: 1;
  transition: all 0.25s;
}

.hamburger-button::before,
.hamburger-button::after{
  width: 50px;
    left: calc(50% - 25px);
  background-color: white;
}

.hamburger-button span{
 position: relative;
}

.hamburger-button span::after,
.hamburger-button span::before{
  display: block;
 position: absolute;
 background-color: #016461;
 width: 8px;
 height: 100%;
 content: "";
}

.hamburger-button span::before{
  left: 8px;
}
.hamburger-button span::after{
left: 24px;
}

.hamburger-button::before{
  top:calc(25% - 5px/2)
}
.hamburger-button span{
  top:calc(50% - 5px/2)
}
.hamburger-button::after{

  top:calc(75% - 5px/2)
}

#hamburger-toggle:checked +.hamburger-button span {
  opacity: 0;
}

#hamburger-toggle:checked +.hamburger-button::before {
  top:calc(50% - 5px/2);
  transform: rotate(45deg);
}
#hamburger-toggle:checked +.hamburger-button::after {
  top:calc(50% - 5px/2);
  transform: rotate(-45deg);
}



@media screen and (max-width: 767px){

#hamburger-toggle:checked ~ .nav-links{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top:80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  margin: 0;
  padding: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
}

#hamburger-toggle:checked~ .nav-links li{
  margin: 0 !important;
}

/* リストの上辺にも境界線を追加 */
#hamburger-toggle:checked~ .nav-links li:first-child{
  border-top: 1px solid;
  margin: 0 !important;
}

}

</style>
