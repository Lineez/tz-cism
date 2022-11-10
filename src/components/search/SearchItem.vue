<template>
  <div class="result-item">
    <div class="result-item__preview">
      <img
        :src="item.image || 'https://via.placeholder.com/70'"
        :alt="item.name + item.id"
      />
    </div>
    <div class="result-item__info">
      <div class="result-item__name">{{ item.name }}</div>
      <div class="result-item__size">12 MB</div>
    </div>
  </div>
</template>

<script lang="ts">
import { ISearchItem } from "@/components/search/Interface";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<ISearchItem>,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.result-item {
  display: flex;
  align-items: center;
  height: 70px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;

    .result-item__info {
      background-color: #0d6efd;
    }
    .result-item__name {
      color: #f8f9fa;
    }
    .result-item__size {
      color: #dee2e6;
    }
  }

  // .result-item__preview
  &__preview {
    flex: 0 0 70px;
    img {
      display: block;
    }
  }
  // .result-item__info
  &__info {
    flex: 1 1 auto;
    padding: 15px;
  }
  // .result-item__name
  &__name {
    margin-bottom: 4px;
    font-size: toRem(14);
    font-weight: 600;
    color: #212529;
  }
  // .result-item__size
  &__size {
    font-size: toRem(14);
    color: var(--color-gray);
  }
}
</style>
