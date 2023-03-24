<template>
  <AboutContentSection id="skill" class=" bg-green z-30" @in="isShown=true">
    <template #heading>
      <AppHeading2 class="z-40">
        Skill
      </AppHeading2>
    </template>
    <template #default>
      <div class="">
        <div class=" w-full z-30 md:h-screen text-white flex flex-col gap-4">
          <!-- 使える言語一覧 -->
          <!-- HTML、CSS、Javascript、Python -->
          <AboutSkillList>
            <template #title>
              Language/FrameWork
            </template>
            <template #default>
              <AboutSkillListElem name="vscode-icons:file-type-html">
                HTML5
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-typescript-official">
                JavaScript<br>/TypeScript
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-python">
                Python
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-vue">
                Vue2/3
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-nuxt">
                Nuxt
              </AboutSkillListElem>
              <AboutSkillListElem name="skill-icons:fastapi">
                FastAPI
              </AboutSkillListElem>
            </template>
          </AboutSkillList>
          <!-- 使えるクラウドサービス。プラットフォーム -->
          <!-- Cloud run、Firebase、Netlify -->
          <AboutSkillList>
            <template #title>
              Platform/Tools
            </template>
            <template #default>
              <AboutSkillListElem name="vscode-icons:file-type-gcp">
                Google Cloud Platform
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-firebase">
                Firebase
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-netlify">
                Netlify
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-git">
                Git
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-docker">
                Docker
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-vscode">
                VSCode
              </AboutSkillListElem>
            </template>
          </aboutskilllist>
        </div>
      </div>
    </template>
  </AboutContentSection>
</template>

<script setup lang="ts">
const isShown = ref<boolean>(false)

</script>
