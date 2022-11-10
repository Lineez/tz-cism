<template>
  <header class="header">
    <div class="header__logo">MyApp</div>
    <div class="header__user">username</div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  padding: 41px 50px 0;

  // .header__logo
  &__logo {
    font-size: toRem(32);
    font-weight: 700;
  }

  // .header__user
  &__user {
    font-size: toRem(16);
  }
}
</style>
