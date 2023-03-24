<template>
  <section class="w-full min-h-screen  overflow-x-hidden">
    <IntersectionWrapper :threshold="0.5" trantision="vertical" class="w-full h-full " @in="$emit('in')">
      <div class="flex flex-col items-center w-full">
        <CommonContentWidthBox class="flex flex-col ">
          <div class="sticky top-0 w-full pt-20 pb-8 z-100">
            <slot name="heading" />
          </div>
          <slot />
        </CommonContentWidthBox>
      </div>
    </IntersectionWrapper>
  </section>
</template>
