<template>
  <nav class="navbar h-full px-2 bg-transparent">
    <input id="hamburger-toggle" v-model="isShow" type="checkbox" class="hidden" @change="$emit('toggle',isShow)">
    <label for="hamburger-toggle" class="hamburger-button  block md:hidden p-2 hover:border-solid hover:border  hover:border-white">
      <span class="bg-lightgreen" />
    </label>
    <ul class="nav-links md:h-full self-end  h-0 md:flex  overflow-hidden">
      <li v-for="m ,i in props.menus " :key="i" class=" w-full md:w-24 h-16 font-xl flex justify-center  bg-green hover:bg-lightgreen items-center md:mx-4 border-solid border-white border-b md:border-none">
        <nuxt-link :to="m.path" :is-red="samePath(m.path,currentPath)" tabindex="0" class="navlink w-full h-full md:h-1/2 flex justify-center md:justify-start overflow-hidden items-center md:items-end  border-solid border-l-8 md:border-l-4  border-l-lightgray hovor:border-red focus:border-red md:pl-3 md:pb-1" @click="hideNav">
          <span class="navlink-span" :data-transition="transitionTrigger">
            {{ m.name }}
          </span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { LinkParams } from '~~/types'

interface Props {
    menus:LinkParams[]
    currentPath:string
}

const emits = defineEmits<{(e:'toggle', value:boolean)}>()

const samePath = (path:string, fullPath:string):boolean => {
  if (!fullPath) { return false }
  if (!path) { return false }
  if (fullPath === path) { return true }
  if (path === '/') {
    return path === fullPath
  }
  return !!fullPath.includes(path)
}

const props = withDefaults(defineProps<Props>(), { menus: () => [], currentPath: '/' })

const isShow = ref<boolean>(false)
const transitionTrigger = ref<boolean>(false)
const hasResizeHandler = ref<boolean>(false)

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
    transitionTrigger.value = true
  })
})

onBeforeUnmount(() => {
  if (!hasResizeHandler) { return }
  window.removeEventListener('resize', hideNav)
})
</script>

<style scoped>

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
  left: calc(50% -20px);
  position: absolute;
  content: "";
  opacity: 1;
  transition: all 0.25s;
}

.hamburger-button::before,
.hamburger-button::after{
  width: 50px;
    left: calc(50% -25px);
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
.navlink-span{
  transform: none;
  transition: transform 0.25s ease-out;
  transition-delay:0.2s;
}
.navlink-span[data-transition="false"]{
      transform: translateY(100%);
}

@media screen and (max-width: 767px){

#hamburger-toggle:checked ~ .nav-links{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top:64px;
  left: 0;
  width: 100%;
  height: calc(100vh -64px);
  margin: 0;
  padding: 0;
  z-index: 10;
  backdrop-filter: blur(5px);
}

#hamburger-toggle:checked~ .nav-links li{
  margin: 0 !important;
}
}

</style>
