<template>
  <div>
    <AppHeading3 class="mb-1 md:mb-2">
      <slot name="title" />
    </AppHeading3>
    <ul class="w-full flex gap-2 md:gap-8 justify-around lg:justify-start">
      <slot />
    </ul>
  </div>
</template>
