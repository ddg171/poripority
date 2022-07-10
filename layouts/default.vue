<template>
  <div class="w-screen h-screen flex flex-col">
    <nav class="w-full flex justify-center mb-1">
      <div class="container mx-auto flex justify-between h-12 px-4 py-2">
        <h1>poripority.com(WIP)</h1>
        <ul class="flex self-end">
          <li v-for="m ,i in menu " :key="i">
            <div class="mx-4">
              <nuxt-link :to="m.path">
                {{ m.name }}
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div class="flex h-full">
      <main class="w-full flex justify-center bg-slate-400">
        <div class=" h-full container mx-auto bg-white">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
const menu = [
  { name: 'Home', path: '/' },
  { name: 'blog', path: '/blog' }
]
</script>
