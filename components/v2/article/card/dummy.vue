<template>
    <V2ArticleCardFrame>
        <div class="w-full h-full dummy-card-content px-2 pb-4 flex flex-col justify-end" />

    </V2ArticleCardFrame>
</template>

<style scoped>
.dummy-card-content {
    background: linear-gradient(270deg, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(0, 0, 0, 0.1) 100%);
    background-size: 200% 100%;
    animation: wave 3s linear infinite;
}

@keyframes wave {
    0% {
        background-position: 100% 0;
    }

    100% {
        background-position: -100% 0;
    }
}
</style>
