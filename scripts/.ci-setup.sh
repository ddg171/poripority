#!/bin/bash

# 環境変数の設定
source ./.env

# APIを有効にする
gcloud services enable iamcredentials.googleapis.com run.googleapis.com

# IAM Service Accountを作成する
gcloud iam service-accounts create ${SERVICE_ACCOUNT_NAME} \
  --project="${PROJECT_ID}" \
  --display-name="${SERVICE_ACCOUNT_DISPLAY_NAME}"

# IAM Service Account Credentials API を有効にする
gcloud services enable iamcredentials.googleapis.com \
  --project "${PROJECT_ID}"

# GCSのrole（権限）設定
gcloud projects add-iam-policy-binding ${PROJECT_ID} \
  --role="roles/storage.objectAdmin" \
  --member="serviceAccount:${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"

# Workload IdentityにPoolを作成する
gcloud iam workload-identity-pools create "${POOL_NAME}" \
  --project="${PROJECT_ID}" \
  --location="global" \
  --display-name="${POOL_DISPLAY_NAME}"
export WORKLOAD_IDENTITY_POOL_ID=$( \
  gcloud iam workload-identity-pools describe "${POOL_NAME}" \
    --project="${PROJECT_ID}" \
    --location="global" \
    --format="value(name)" \
)
echo $WORKLOAD_IDENTITY_POOL_ID

# 作成したPoolにProvierを作成する
gcloud iam workload-identity-pools providers create-oidc "${PROVIDER_NAME}" \
  --project="${PROJECT_ID}" \
  --location="global" \
  --workload-identity-pool="${POOL_NAME}" \
  --display-name="${PROVIDER_DISPLAY_NAME}" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.actor=assertion.actor,attribute.aud=assertion.aud" \
  --issuer-uri="https://token.actions.githubusercontent.com"

# Workload Identityでサービス アカウントの権限借用の設定
gcloud iam service-accounts add-iam-policy-binding "${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com" \
  --project="${PROJECT_ID}" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/${WORKLOAD_IDENTITY_POOL_ID}/attribute.repository/${GITHUB_REPO}"

# Workload Indentity Providerのリソース名の確認用
gcloud iam workload-identity-pools providers describe "${PROVIDER_NAME}" \
  --project="${PROJECT_ID}" \
  --location="global" \
  --workload-identity-pool="${POOL_NAME}" \
  --format='value(name)'

 # サービスアカウントのロール設定
gcloud projects add-iam-policy-binding ${PROJECT_ID} \
--member="serviceAccount:${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com" \
--role="roles/run.admin"

gcloud projects add-iam-policy-binding ${PROJECT_ID} \
--member="serviceAccount:${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com" \
--role="roles/storage.admin"

gcloud projects add-iam-policy-binding ${PROJECT_ID} \
--member="serviceAccount:${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com" \
--role="roles/iam.serviceAccountUser"

# WORKLOAD_IDENTITY_PROVIDER

echo $(gcloud iam workload-identity-pools providers describe ${PROVIDER_NAME} --location=global --workload-identity-pool=${POOL_NAME} --format="value(name)")