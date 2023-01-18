<template>
  <ul>
    <CommonLinkListElem v-for="l,i in props.links" :key="i">
      <CommonAppLink v-if="!l.isExternal" :to="l.path">
        {{ l.name }}
      </CommonAppLink>
      <CommonExternalLink v-else :to="l.path">
        {{ l.name }}
      </CommonExternalLink>
    </CommonLinkListElem>
  </ul>
</template>

<script setup lang="ts">
import { LinkParams } from '~~/types/components'

interface Props {
    links:LinkParams[]
}

const props = withDefaults(defineProps<Props>(), { links: () => [] })

</script>
