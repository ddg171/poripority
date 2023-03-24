<template>
  <div>
    <AppHeading3 class="mb-2">
      <slot name="title" />
    </AppHeading3>
    <ul class="w-full flex gap-16">
      <slot />
    </ul>
  </div>
</template>
