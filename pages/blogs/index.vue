<template>
  <div>
    /blog
    <div>

    </div>
    <div>
      {{currentCount}}/{{totalCount}}件
        <ul>
            <li v-for="a in articles" :key="a.id">
            <nuxt-link :to="`/blogs/${a.id}`">{{a.title}}/{{a.subtitle}}</nuxt-link>
            </li>
        </ul>
        <button @click="more(currentCount)" :disabled="currentCount === totalCount ">more</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Article} from "../../types"

  const {data} = await useFetch("/api/blogs",{params:{limit:3}})
  const articles =reactive<Article[]>(data.value.contents)
  const currentCount = computed<number>(()=>articles.length)
  const totalCount = ref<number>(data.value.totalCount) 

  const more = async (currentCount:number =0)=>{
    console.log("more")
    const result= await $fetch("/api/blogs",{params:{limit:3,offset:currentCount}})
    result.contents.forEach((a:Article)=>articles.push(a))
  }
</script>