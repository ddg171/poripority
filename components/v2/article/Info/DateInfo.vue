<template>
    <p class="ml-1 flex align-items-center justify-start">
        <Icon name="ant-design:calendar-outlined" class=" mr-1 text-xl text-lightgreen" />
        <span class="text-sm text-lightgray">
            {{ publishedDate }}
        </span>
    </p>
</template>

<script setup lang="ts">
import { parseISO } from 'date-fns';
import { defineProps, } from 'vue';

interface Props {
    publishedDate?: string | null
}

const props = defineProps<Props>()

const publishedDate = computed<string>(() => articleDate(parseISO(props.publishedDate || '')))

</script>
