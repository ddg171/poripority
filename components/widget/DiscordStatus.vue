<template>
  <div>
    <ClientOnly>
      <iframe
        title="discord"
        src="https://discord.com/widget?id=282494164799848449&theme=dark"
        loading="lazy"
        width="350"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
useHead(
  { link: [{ rel: 'stylesheet', href: 'https://cdn.discordapp.com' }] }
)
</script>
