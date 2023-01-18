<template>
  <div class="layout-blog flex flex-col items-center min-h-screen">
    <AppHeader />
    <div class="flex flex-col items-center w-full">
      <PageTop />
      <div class="flex flex-col items-center w-full h-full min-h-screen lg:justify-center lg:items-start lg:flex-row max-w-screen-xl">
        <main class="flex flex-col items-center w-full  bg-transparent ">
          <suspense>
            <template #default>
              <slot />
            </template>
            <template #fallback>
              <div class="flex flex-col w-full h-full p-6 text-white">
                Loading...
              </div>
            </template>
          </suspense>
        </main>
        <div class="sticky top-0 w-full mx-0  lg:w-80  lg:mx-1 shrink-0">
          <aside class="w-full grid gap-2">
            <div class="w-full p-4 text-white  min-h-96 bg-darkblue md:p-6 ">
              <CategoryList />
            </div>
          </aside>
        </div>
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
