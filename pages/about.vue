<template>
  <div class="page-about flex flex-col items-center w-full max-w-screen-xl ">
    <ContentSection>
      <AppHeading1>
        ABOUT ME
      </AppHeading1>
      <p>WIP</p>
    </ContentSection>
  </div>
</template>

<script setup lang="ts">
import { makeDynamicMeta } from '~~/utils/useHeadHelper'

const config = useRuntimeConfig()
const title = 'About|' + config.public.siteName
const description = 'WIP'

const dynamicMeta = makeDynamicMeta(title, description, 'none')
useHead(dynamicMeta)

</script>
