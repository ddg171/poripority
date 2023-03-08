<template>
  <AboutContentSection class=" relative  mb-60" @in="isShown=true">
    <template #heading>
      Skill
    </template>
    <template #default>
      <div class="w-full  md:h-full text-white flex justify-center items-start flex-wrap">
        <div class="pb-2 flex justify-center items-center bg-darkblue w-full  md:w-1/2 sticky top-28">
          <div class="flex flex-col justify-start items-center ">
            <NuxtPicture src="/images/webp/shrimp.webp" legacy-format="jpg" class="w-60 h-60" />
            <p class="w-full text-center text-sm">
              管理人の写真
            </p>
          </div>
        </div>
        <div class="flex flex-col h-full justify-center items-center w-full md:w-1/2 pb-96 flex-grow shrink-0">
          <div class="h-72 ">
            <table class=" w-full">
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

          <div class="">
            <h3>来歴</h3>
            <ul class="text-white flex flex-col gap-4 font-extrabold">
              <li>1991年、広島に生まれる。</li>
              <li>2010年、島流しになり四国で大学生活を過ごす。</li>
              <li>2014年、フーリエ変換がわからず留年したため法文学部に3年次編入。</li>
              <li>2016年、卒業後、接客や販売業を転々としつつポリポリする。</li>
              <li>2017年、このへんでPythonを触って「プログラミング楽しすぎワロタ」となる</li>
              <li>2018年、知り合いからの誘いでA型事業所の職業指導員に転職</li>
              <li>2019年以降、なんでかWebアプリやWebサイト制作に関わる。</li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </AboutContentSection>
</template>

<script setup lang="ts">
const isShown = ref<boolean>(false)

</script>
