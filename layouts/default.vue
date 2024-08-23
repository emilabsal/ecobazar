<template>
  <div>
    <TheHeader />
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from '~/components/header/TheHeader.vue';
</script>

<style lang="sass" scoped></style>
