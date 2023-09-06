<template>
  <AboutContentSection id="profile" class="py-16 bg-gray " @in="isShown=true">
    <template #heading>
      <AppHeading2>
        Profile
      </AppHeading2>
    </template>
    <template #default>
      <div class="flex flex-col items-start justify-center w-full h-full text-white md:flex-row ">
        <div class="flex items-center justify-center w-full pb-2 md:h-1/2h profile-pic md:w-1/2">
          <div class="flex flex-col items-center justify-start ">
            <NuxtPicture
              src="/images/webp/shrimp.webp"
              legacy-format="jpeg"
              class="w-28 h-28 md:w-60 md:h-60"
              :img-attrs="{ alt:'管理人の写真', height:240,width:240, decoding: 'async'}"
            />
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
                    Place of birth
                  </td>
                  <td><EffectShuffleSpan text="Hiroshima,Japan" :trriger="isShown" :delay="750" /></td>
                </tr>

                <tr class="h-16 text-xl">
                  <td class="font-bold">
                    Hobby
                  </td>
                  <td><EffectShuffleSpan text="Photography ,PC game,etc..." :trriger="isShown" :delay="1000" /></td>
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
