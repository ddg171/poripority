<template>
  <AboutContentSection id="loadmap" class="sticky top-0 bg-gray  z-30" @in="isShown=true">
    <template #heading>
      <AppHeading2>
        Profile
      </AppHeading2>
    </template>
    <template #default>
      <div class="flex items-start justify-center w-full flex-col md:flex-row text-white h-3/4h">
        <div class="md:h-1/2h  flex items-center justify-center w-full pb-2 profile-pic bg-darkblue md:w-1/2">
          <div class="flex flex-col items-center justify-start ">
            <NuxtPicture src="/images/webp/shrimp.webp" legacy-format="jpg" class="w-28 h-28 md:w-60 md:h-60" />
            <p class="w-full text-sm text-center">
              管理人の写真
            </p>
          </div>
        </div>
        <div class="md:h-1/2h flex flex-col items-center md:justify-center flex-grow w-full profile-data md:w-1/2 md:shrink-0">
          <div class=" flex w-full items-center justify-center">
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
