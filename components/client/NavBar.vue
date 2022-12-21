<template>
  <nav class="h-full flex">
    <ul class="h-full flex self-end ">
      <li v-for="m ,i in props.menus " :key="i" class="h-full flex justify-center  items-center mx-2">
        <nuxt-link :to="m.path">
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

const props = withDefaults(defineProps<Props>(), { menus: () => [] })
</script>
