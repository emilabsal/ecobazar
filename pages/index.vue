<template>
  <div>
    <BaseButton
      label="Small Fill"
      icon-right="arrow"
    />
    <BaseCheckbox v-model="c" />
    <!-- <BaseCheckbox
      value="c2"
      v-model="c"
    /> -->
  </div>
</template>

<script setup>
const c = ref(false);
</script>
