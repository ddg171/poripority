<template>
  <div>
    index.vue
    <div>
        <button @click="getFromServer">api</button>
        <button @click="getKey">private</button>
    </div>
    <div>
        {{state.api}}
    </div>
    <div>
      <nuxt-link to="blogs">to blogs</nuxt-link>
    </div>
  </div>
</template>

<script setup>
const state = reactive({api:"piyo"})

const getFromServer = async ()=>{
    const result= await $fetch("/api/hello")
    state.api = result.api
}

const getKey = async ()=>{
       const result= await $fetch("/api/private")
    state.api = result.api
}


</script>