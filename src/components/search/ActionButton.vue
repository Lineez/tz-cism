<template>
  <button class="action-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    color: {
      type: String,
      required: false,
      default: "#DC3545",
    },
  },
});
</script>

<style lang="scss">
.action-button {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 26px;
  font-size: 14px;
  border: 1px solid v-bind(color);
  color: v-bind(color);
  border-radius: 8px;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: v-bind(color);
    color: var(--color-white);
  }
}
</style>
