<template>
  <div class="search-body">
    <div class="search-body__left left-side">
      <div class="left-side__search">
        <div class="search-body__name">Поиск документа</div>
        <input v-model="query" type="text" placeholder="Введите ID документа" />
      </div>

      <div class="left-side__results">
        <div class="search-body__name">Результаты</div>
        <div v-if="seachedItems.length" class="left-side__items">
          <SearchItem
            v-for="item in seachedItems"
            :key="item.id"
            :item="item"
            @click="selectDoc(item)"
          />
        </div>
        <p v-else-if="isLoading" class="left-side__items-empty">
          Идет загрузка
        </p>
        <p v-else class="left-side__items-empty">Ничего не найдено</p>
      </div>
    </div>

    <div class="search-body__right right-side">
      <DocInfo :selected-doc="selectedDoc" />
    </div>
  </div>
</template>

<script lang="ts">
import DocInfo from "@/components/search/DocInfo.vue";
import { ISearchItem } from "@/components/search/Interface";
import SearchItem from "@/components/search/SearchItem.vue";
import { useStoreSeacrh } from "@/store/search";
import { mapActions, mapState } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      query: "",
      selectedDoc: {} as ISearchItem,
    };
  },
  watch: {
    query: {
      handler() {
        if (this.query) {
          // decorator maybe?
          this.search(this.query);
        }
      },
    },
  },
  methods: {
    ...mapActions(useStoreSeacrh, ["search"]),
    selectDoc(item: ISearchItem) {
      this.selectedDoc = item;
    },
  },
  computed: {
    ...mapState(useStoreSeacrh, ["seachedItems", "isLoading"]),
  },
  components: { SearchItem, DocInfo },
});
</script>

<style lang="scss">
.search-body {
  display: flex;
  background: #fdfdfd;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  min-height: 575px;

  // .search-body__left
  &__left {
    flex: 0 0 23%;
    padding: 27px 17px 27px 22px;
  }
  // .search-body__right
  &__right {
    border-left: 1px solid #e0e0e0;
    padding: 30px;
  }
  // .search-body__name
  &__name {
    font-size: toRem(16);
    font-weight: 600;
  }
}

.left-side {
  // .left-side__search
  &__search {
    display: flex;
    flex-direction: column;
    row-gap: 14px;
    margin-bottom: 30px;

    input {
      height: 50px;
      padding: 0 24px;
      border: 1.5px solid #e9ecef;
      border-radius: 8px;
      color: var(--color-gray);
      font-size: toRem(14);
    }
  }
  // .left-side__results
  &__results {
    .search-body__name {
      margin-bottom: 18px;
    }
  }
  // .left-side__items
  &__items {
    .result-item {
      &:not(:last-child) {
        margin-bottom: 18px;
      }
    }
  }
  // .left-side__items-empty
  &__items-empty {
    font-size: toRem(14);
    color: var(--color-gray);
  }
}

.right-side {
  display: flex;
  width: 100%;
  column-gap: 60px;
}
</style>
