<template>
  <AboutContentSection id="loadmap" class="sticky top-0 z-30 py-20 bg-darkblue md:py-28" @in="isShown=true">
    <template #heading>
      <AppHeading2>
        Loadmap
      </AppHeading2>
    </template>
    <template #default>
      <div class="flex flex-col items-start justify-center w-full text-white md:flex-row h-3/4h">
        <div class="flex items-center justify-center w-full pb-2 md:h-1/2h profile-pic bg-darkblue md:w-1/2">
          <div class="flex flex-col items-center justify-start ">
            <NuxtPicture src="/images/webp/shrimp.webp" legacy-format="jpeg" class="w-28 h-28 md:w-60 md:h-60" :img-attrs="{ decoding: 'async'}" />
            <p class="w-full text-sm text-center">
              管理人の写真
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center flex-grow w-full md:h-1/2h md:justify-center profile-data md:w-1/2 md:shrink-0">
          <div class="flex items-center justify-center w-full ">
            <table class="md:w-full ">
              <thead class="text-2xl h-9">
                <tr>
                  <th colspan="2">
                    Data
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="h-16 text-xl">
                  <td class="font-bold">
                    name
                  </td>
                  <td class="w-30">
                    <EffectShuffleSpan text="yamamoto tomohiro" :trriger="isShown" />
                  </td>
                </tr>
                <tr class="h-16 text-xl">
                  <td class="font-bold">
                    Year of birth
                  </td>
                  <td>
                    <EffectShuffleSpan text="1991" :trriger="isShown" :delay="500" />
                  </td>
                </tr>
                <tr class="h-16 text-xl">
                  <td class="font-bold">
                    Hometown
                  </td>
                  <td><EffectShuffleSpan text="Hiroshima,Japan" :trriger="isShown" :delay="750" /></td>
                </tr>

                <tr class="h-16 text-xl">
                  <td class="font-bold">
                    Hobby
                  </td>
                  <td><EffectShuffleSpan text="Photograph,PC game,etc..." :trriger="isShown" :delay="1000" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
  </AboutContentSection>
</template>

<script setup lang="ts">
const isShown = ref<boolean>(false)

</script>
