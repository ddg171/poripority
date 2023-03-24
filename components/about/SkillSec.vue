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
          <AboutSkillList>
            <template #title>
              Language
            </template>
            <template #default>
              <AboutSkillListElem name="vscode-icons:file-type-html">
                HTML5
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-css">
                CSS3
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-typescript-official">
                JavaScript<br>/TypeScript
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-python">
                Python
              </AboutSkillListElem>
            </template>
          </AboutSkillList>
          <AboutSkillList>
            <template #title>
              Framework/Detabase
            </template>
            <template #default>
              <AboutSkillListElem name="vscode-icons:file-type-vue">
                Vue3
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-nuxt">
                Nuxt
              </AboutSkillListElem>
              <AboutSkillListElem name="skill-icons:fastapi">
                FastAPI
              </AboutSkillListElem>
              <AboutSkillListElem name="vscode-icons:file-type-firestore">
                Firestore
              </Aboutskilllistelem>
            </template>
          </aboutskilllist>
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
              <AboutSkillListElem name="vscode-icons:file-type-docker">
                Docker
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
