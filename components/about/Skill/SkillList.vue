<template>
  <div>
    <V2CommonAppHeadingH3 class="mb-1 md:mb-2">
      <slot name="title" />
    </V2CommonAppHeadingH3>
    <ul class="flex justify-around w-full gap-2 md:gap-8 lg:justify-start">
      <slot />
    </ul>
  </div>
</template>
