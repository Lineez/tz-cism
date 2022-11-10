<template>
  <main>
    <SearchBody />
  </main>
</template>

<script lang="ts">
import SearchBody from "@/components/search/SearchBody.vue";
import { defineComponent } from "vue";

export default defineComponent({ components: { SearchBody } });
</script>

<style lang="scss">
main {
  padding: 0 50px 50px;
}
</style>
