<template>
  <template v-if="selectedDoc.id">
    <div class="right-side__image">
      <img
        :src="selectedDoc.image || 'https://via.placeholder.com/1500x1500'"
        :alt="selectedDoc.name"
      />
    </div>
    <div class="right-side__info">
      <div class="right-side__actions">
        <div class="search-body__name">{{ selectedDoc.name }}</div>
        <div class="right-side__buttons">
          <ActionButton :color="'#0D6EFD'">Скачать</ActionButton>
          <ActionButton>Удалить</ActionButton>
        </div>
      </div>

      <div class="right-side__description">
        <div class="search-body__name">Описание:</div>
        <div class="right-side__text">{{ selectedDoc.description }}</div>
      </div>
    </div>
  </template>

  <p v-else class="right-side__empty">
    Выберите документ, чтобы посмотреть его содержимое
  </p>
</template>

<script lang="ts">
import ActionButton from "@/components/search/ActionButton.vue";
import { ISearchItem } from "@/components/search/Interface";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    selectedDoc: {
      type: Object as PropType<ISearchItem>,
      required: true,
    },
  },
  components: { ActionButton },
});
</script>

<style lang="scss">
.right-side {
  // .right-side__image
  &__image {
    flex: 0 0 425px;
  }
  // .right-side__info
  &__info {
  }
  // .right-side__empty
  &__empty {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: toRem(14);
    color: var(--color-gray);
  }
  // .right-side__actions
  &__actions {
    margin-bottom: 47px;

    .search-body__name {
      margin-bottom: 14px;
    }
  }
  // .right-side__buttons
  &__buttons {
    display: flex;
    align-items: center;
    column-gap: 17px;
  }
  // .right-side__description
  &__description {
    .search-body__name {
      margin-bottom: 14px;
    }
  }
  // .right-side__text
  &__text {
    font-size: toRem(14);
    color: var(--color-gray);
  }
}
</style>
