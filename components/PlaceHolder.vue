<template>
  <div class="grid w-full gap-8 md:gap-2 relative">
    <div v-for="i in 5" :key="i" class="flex flex-col items-start md:flex-row bg-darkblue">
      <div class=" w-full h-60 overflow-hidden md:w-48 md:h-48 shrink-0 bg-green/50" />
      <div class="flex flex-col justify-between  md:h-48 p-0 m-0 md:px-1  md:py-4 grow bg-gray/50" />
    </div>
    <div class="absolute w-full h-full backdrop-blur-sm">
      <p class="w-full h-48 text-center flex justify-center items-center text-2xl">
        Loading...
      </p>
    </div>
  </div>
</template>
