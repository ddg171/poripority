<template>
  <AboutContentSection id="skill" :threshold="0.25" class=" bg-green py-20 md:py-28 z-20" @in="isShown=true">
    <template #heading>
      <AppHeading2 class="z-40">
        Skill
      </AppHeading2>
    </template>
    <template #default>
      <div class="w-full z-30  text-white flex flex-col  justify-center items-center">
        <div class=" w-full  text-white  grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-4 mb-8">
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
              Frameworks
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
              Cloud services
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
              <AboutSkillListElem name="iconoir:laptop-fix">
                Troubleshooting
              </AboutSkillListElem>
            </template>
          </AboutSkillList>
        </div>

        <div class="w-full ">
          <AppHeading3 class="mb-1 md:mb-2">
            Examples
          </AppHeading3>
          <ul class="w-full flex flex-col md:flex-row gap-1 md:gap-2 justify-around lg:justify-start">
            <AboutSkillExampleElem
              name="メール自動送信システム"
              :techs="['Vue.js/Nuxt.js(フロントエンド)','Firestore(DB)','Cloud Functions(バックエンド)','Cloud Scheduler','Sendgrid(メール送信サービス)']"
            >
              <p>
                登録された宛先へメールを自動送信するシステムを制作しました。
                Firestoreにドキュメントが作成されるとCloud Functionsがトリガーされ、Sendgridへメール送信リクエストを送信します。
                管理画面では送信タスクの作成と、テンプレート編集・送信済みタスク結果確認ができます。
              </p>
            </AboutSkillExampleElem>
            <AboutSkillExampleElem
              name="研修参加報告システム"
              :techs="['Vue.js/Nuxt.js(フロントエンド)','Firebase Authentication(認証)','Firestore(DB)','Cloud Functions(バックエンド)','Firebase Storage(ファイル保存)']"
            >
              <p>
                研修参加者が管理者へ参加報告を行うためのWebアプリです。
                管理者は研修参加者の登録と、参加報告の確認ができます。
                研修参加者は参加報告の作成と、参加報告の編集・削除ができます。
                参加報告にはファイルを添付できます。
              </p>
            </AboutSkillExampleElem>
            <AboutSkillExampleElem
              name="このWebサイト"
              :techs="['Vue.js/Nuxt.js(フロントエンド)','Google Cloudrun(バックエンド)','Github Actions(CI/CD)','Firebase Hosting(静的ファイル配信/ドメイン接続)','Micro CMS(コンテンツ管理)']"
            >
              <p>
                NuxtjsとヘッドレスCMSを組み合わせて制作しました。
                Github Actionsにより、リポジトリにpushされると自動でビルド・デプロイが行われます。
                デプロイ先はGoogle CloudrunとFirebase Hostingです。
              </p>
            </AboutSkillExampleElem>
          </ul>
        </div>
      </div>
    </template>
  </AboutContentSection>
</template>

<script setup lang="ts">
const isShown = ref<boolean>(false)

</script>
