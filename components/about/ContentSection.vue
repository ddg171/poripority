<template>
  <section class="w-full min-h-screen  overflow-x-hidden ">
    <IntersectionWrapper :threshold="0.5" trantision="vertical" class="w-full h-full " @in="$emit('in')">
      <div class="flex flex-col items-center w-full">
        <CommonContentWidthBox class="flex flex-col px-2 ">
          <div class="w-full  mb-2 md:mb-8 z-40 ">
            <slot name="heading" />
          </div>
          <slot />
        </CommonContentWidthBox>
      </div>
    </IntersectionWrapper>
  </section>
</template>
