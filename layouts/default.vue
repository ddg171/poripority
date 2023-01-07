<template>
  <div class="layout-default min-h-screen flex flex-col items-center">
    <ClientMyHeader />
    <div class="w-full min-h-screen flex  flex-col   items-center">
      <main class="w-full min-h-screen flex flex-col items-center  bg-transparent  ">
        <slot />
      </main>
      <ClientMyFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
