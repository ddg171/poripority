<template>
  <article :id="props.id"
    class="p-2 flex flex-col items-start justify-center  h-full bg-darkblue border border-lightgreen">
    <V2CommonAppHeadingH3 class="mb-2">
      <slot name="name" />
    </V2CommonAppHeadingH3>

    <div class="flex items-center justify-center  text-white   bg-green/50">
      <slot name="pic" />
    </div>

    <p class="w-full text-lg font-semibold text-left text-white">
      状況:
      <slot name="status" />
    </p>
    <div class="text-white h-full  flex flex-col justify-between">
      <WorksParaBox>
        <slot name="introduction" />
      </WorksParaBox>
      <div v-if="links.length !== 0" class="mt-auto">
        <p class="w-full text-lg font-semibold">
          リンク・関連ページ
        </p>
        <CommonLinkList :links="links" class="font-semibold text-md" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, } from 'vue';
import type { LinkParams } from '~~/types/components';

interface Props {
  id: string
  links: LinkParams[]
}

const props = withDefaults(defineProps<Props>(), { id: '', links: () => [] })
</script>
