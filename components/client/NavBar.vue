<template>
  <nav class="navbar h-full px-2 bg-transparent">
    <input id="hamburger-toggle" v-model="isShow" type="checkbox" class="hidden" @change="$emit('toggle',isShow)">
    <label for="hamburger-toggle" class="hamburger-button  block md:hidden p-2 hover:border-solid hover:border-1 hover:border-white">
      <span />
    </label>
    <ul class="nav-links md:h-full self-end  h-0 md:flex  overflow-hidden">
      <li v-for="m ,i in props.menus " :key="i" class=" w-full md:w-24 h-16 font-xl flex justify-center  bg-green items-center mx-2">
        <nuxt-link :to="m.path" tabindex="0" class="w-full h-full flex justify-center items-center" @click="hideNav">
          {{ m.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

type Menu ={
    name:string
    path:string
}
interface Props {
    menus:Menu[]
}

const emits = defineEmits<{(e:'toggle', value:boolean)}>()

const props = withDefaults(defineProps<Props>(), { menus: () => [] })

const isShow = ref<boolean>(false)
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
  width: 50px;
  height: 5px;
  left: calc(50% -25px);
  background:white;
  position: absolute;
  content: "";
  opacity: 1;
  transition: all 0.25s;
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

#hamburger-toggle:checked ~ .nav-links,
.nav-links:focus-within{
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
