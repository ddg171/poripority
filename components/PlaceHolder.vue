<template>
  <div class="relative grid w-full gap-8 md:gap-2">
    <div v-for="i in 5" :key="i" class="flex flex-col items-start md:flex-row bg-darkblue">
      <div class="w-full overflow-hidden h-60 md:w-48 md:h-48 shrink-0 bg-green/50" />
      <div class="flex flex-col justify-between p-0 m-0 md:h-48 md:px-1 md:py-4 grow bg-gray/50" />
    </div>
    <div class="absolute w-full h-full backdrop-blur-sm">
      <p class="flex items-center justify-center w-full h-48 text-2xl text-center">
        Loading...
      </p>
    </div>
  </div>
</template>
