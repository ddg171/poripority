<template>
  <section class="w-full min-h-screen pb-20">
    <IntersectionWrapper :threshold="0.9" trantision="vertical" class="w-full h-full bg-darkblue" @in="$emit('in')">
      <div class="flex flex-col items-center w-full">
        <CommonContentWidthBox class="flex flex-col">
          <div class="sticky top-0 z-30 w-full pt-20 pb-8 bg-darkblue">
            <AppHeading2>
              <slot name="heading" />
            </AppHeading2>
          </div>

          <slot />
        </CommonContentWidthBox>
      </div>
    </IntersectionWrapper>
  </section>
</template>
