<template>
  <button class="flex items-center justify-center p-1 mx-1 text-base text-white btn w-28 h-11 sm:mx-4 bg-green hover:bg-lightgreen focus:bg-lightgreen disabled:bg-darkblue" :variant="props.variant" :disabled="props.disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props{
    variant?:string
    disabled?:boolean
}

const props = withDefaults(defineProps<Props>(), { variant: 'accept', disabled: false })

</script>

<style scoped>
.btn[variant="denied"]{
    background-color:#002130 ;
}
.btn[variant="denied"]:hover{
    opacity: 0.7;
}

</style>
