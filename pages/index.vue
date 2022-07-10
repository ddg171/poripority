<template>
  <section class="px-2 h-full">
    <p>
      This web site is under construction.
    </p>
    <hr class="my-3">
    <h2>Server Middleware Test</h2>
    <ul class="flex flex-wrap">
      <li>
        <button class="rounded-2x1 border-2 border-black m-2" @click="getFromServer">
          Fetch value from backend.
        </button>
      </li>
      <li>
        <button class="rounded-2x1 border-2 border-black m-2" @click="getKey">
          fetch value in private config from backend.
        </button>
      </li>
    </ul>
    <div>
      <p>
        Result:
        {{ state.api }}
      </p>
    </div>
  </section>
</template>

<script setup>
const state = reactive({ api: 'Try it!' })

const getFromServer = async () => {
  const result = await $fetch('/api/hello')
  state.api = result.api
}

const getKey = async () => {
  const result = await $fetch('/api/private')
  state.api = result.api
}

useHead({
  title: 'WIP|poripority.com'
})

</script>
