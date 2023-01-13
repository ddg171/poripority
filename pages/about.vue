<template>
  <div class="page-about flex flex-col items-center w-full max-w-screen-xl ">
    <ClientContentSection>
      <ClientHeader1>
        ABOUT ME
      </ClientHeader1>
      <p>WIP</p>
    </ClientContentSection>
  </div>
</template>

<script setup lang="ts">
import { makeDynamicMeta } from '~~/components/useHeadHelper'

const config = useRuntimeConfig()
const title = 'About|' + config.public.siteName
const description = 'WIP'

const dynamicMeta = makeDynamicMeta(title, description, 'none')
useHead(dynamicMeta)

</script>
