<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top__inner">
        <div class="location">
          <NuxtIcon
            class="location__icon"
            name="location"
          />
          <p class="location__text">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>
        <div class="links">
          <NuxtLink
            class="links__link"
            to="/"
            >Sign In</NuxtLink
          >
          /
          <NuxtLink
            class="links__link"
            to="/"
            >Sign Up</NuxtLink
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="sass" scoped>
.header
  &-top
    border-bottom: 1px solid $color-gray-100
    padding-block: 12px
    &__inner
      @extend .container
      +flex($jc: space-between)

.location
  +flex()
  gap: 8px
  &__icon
    color: $color-gray-600
  &__text
    @extend .body-tiny-400
    color: $color-gray-600

.links
  @extend .body-tiny-400
  &__link
    @extend .body-tiny-400
    color: $color-gray-600
</style>
