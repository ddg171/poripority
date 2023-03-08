<template>
  <section id="profile" class="w-full py-20 min-h-screen">
    <IntersectionWrapper :threshold="0.9" trantision="vertical" class="w-full bg-darkblue" @in="$emit('in')">
      <div class="flex flex-col items-center w-full absolute">
        <CommonContentWidthBox class="flex flex-col">
          <div class="bg-darkblue w-full sticky top-12 pt-2 pb-8">
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
