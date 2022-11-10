import { ISearchItem } from "@/components/search/Interface";
import axios from "axios";
import { defineStore } from "pinia";

export const useStoreSeacrh = defineStore("search", {
  state: () => ({
    seachedItems: [] as ISearchItem[],
    isLoading: false,
  }),
  actions: {
    async search(query: string) {
      this.isLoading = true;

      try {
        const response = await axios.get(
          process.env.VUE_APP_API + "/user/docs",
          {
            params: {
              search: query,
            },
          }
        );

        this.seachedItems = response.data;
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
