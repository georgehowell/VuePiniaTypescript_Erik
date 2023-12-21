import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore('form1', {
  state: () => ({
    form1: {
      searchText: "",
    }
  }),
  
  getters: {
    getSearchText(searchText) {
      return computed(() => this.form1.searchText)
    }
  },
  actions: {
    setSearchText(value: string) {
      this.form1.searchText = value;
    }
  }

});