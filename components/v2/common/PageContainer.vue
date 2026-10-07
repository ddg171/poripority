<template>
    <div class="flex flex-col items-center justify-center w-full gap-2">
        <slot name="hero" />
        <CommonContentWidthBox class="flex flex-col items-center ">
            <slot />
        </CommonContentWidthBox>
    </div>
</template>