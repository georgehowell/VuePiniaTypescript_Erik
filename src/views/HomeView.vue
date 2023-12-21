<script setup lang="ts">
import SearchForm from '../components/SearchForm.vue'
import { useUserStore } from "../stores/userStore";
import { storeToRefs } from "pinia";
import { reactive } from "vue";

let { form1 } = storeToRefs(useUserStore());
let searchText = reactive({ ...form1.value });

function submit() {
  form1.value = { ...searchText };
}

</script>

<template>
  <main>
    <SearchForm />  see: <a href='https://codesandbox.io/p/devbox/staging-breeze-5p5sdu'>this codebox</a> for a working version of input.state
  </main>
</template>
