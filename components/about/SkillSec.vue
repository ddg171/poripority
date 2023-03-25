<template>
  <AboutContentSection id="skill" class=" bg-green sticky top-0" @in="isShown=true">
    <template #heading>
      <AppHeading2 class="z-40">
        Skill set
      </AppHeading2>
    </template>
    <template #default>
      <div class="w-full">
        <div class=" w-full z-30  text-white flex flex-col gap-1 md:gap-4 mb-4">
          <AboutSkillList>
            <template #title>
              Languages
            </template>
            <template #default>
              <AboutSkillListElem name="vscode-icons:file-type-html">
                HTML5
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-css">
                CSS3
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-typescript-official">
                TypeScript
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-python">
                Python
              </AboutSkillListElem>
            </template>
          </AboutSkillList>
          <AboutSkillList>
            <template #title>
              Framework
            </template>
            <template #default>
              <AboutSkillListElem name="vscode-icons:file-type-vue">
                Vue3
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-nuxt">
                Nuxt
              </AboutSkillListElem>
              <AboutSkillListElem name="skill-icons:expressjs-light">
                Express
              </AboutSkillListElem>
              <AboutSkillListElem name="skill-icons:fastapi">
                FastAPI
              </AboutSkillListElem>
            </template>
          </AboutSkillList>
          <AboutSkillList>
            <template #title>
              Platform
            </template>
            <template #default>
              <AboutSkillListElem name="skill-icons:gcp-light">
                GCP
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-firebase">
                Firebase
              </AboutSkillListElem>
              <AboutSkillListElem name="logos:sendgrid-icon">
                Sendgrid
              </AboutSkillListElem>
              <AboutSkillListElem name="skill-icons:github-light">
                GitHub
              </AboutSkillListElem>
            </template>
          </AboutSkillList>
          <AboutSkillList>
            <template #title>
              Others
            </template>
            <template #default>
              <AboutSkillListElem name="mdi:photography">
                Photograpy
              </AboutSkillListElem>
              <AboutSkillListElem name="healthicons:drone-outline">
                Drone
              </AboutSkillListElem>
            </template>
          </AboutSkillList>
        </div>
      </div>
    </template>
  </AboutContentSection>
</template>

<script setup lang="ts">
const isShown = ref<boolean>(false)

</script>
