<template>
  <AboutContentSection id="profile" class="sticky top-0" @in="isShown=true">
    <template #heading>
      Profile
    </template>
    <template #default>
      <div class="flex items-start justify-center w-full text-white h-3/4h">
        <div class="h-1/2h sticky flex items-center justify-center w-full pb-2 profile-pic bg-darkblue md:w-1/2 top-36">
          <div class="flex flex-col items-center justify-start ">
            <NuxtPicture src="/images/webp/shrimp.webp" legacy-format="jpg" class="w-60 h-60" />
            <p class="w-full text-sm text-center">
              管理人の写真
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center flex-grow w-full profile-data md:w-1/2 shrink-0">
          <div class="h-1/2h flex  items-center justify-center">
            <table class="w-full ">
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
                  <td>
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
                  <td><EffectShuffleSpan text="Hiroshima,Japan" :trriger="isShown" :delay="1000" /></td>
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
