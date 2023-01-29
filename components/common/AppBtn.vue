<template>
  <button class="btn flex items-center justify-center p-1 mx-1 text-base text-white w-28 h-11 sm:mx-4 bg-green hover:bg-lightgreen focus:bg-lightgreen " :variant="props.variant" @click="$emit('app-click',$event)">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props{
    variant?:string
}

const props = withDefaults(defineProps<Props>(), { variant: 'accept' })

</script>

<style scoped>
.btn[variant="denied"]{
    background-color:#002130 ;
}
.btn[variant="denied"]:hover{
    opacity: 0.7;
}

</style>
