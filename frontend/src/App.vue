<script setup lang="ts">
import { ref } from "vue";
import axios from "@/modules/Axios";

const userId = ref("");
const password = ref("");
const isProcessing = ref(false);

/**
 * 送信
 */
const submit = async () => {
  isProcessing.value = true;
  try {
    const body = {
      userId: userId.value,
      password: password.value,
    }
    const response = await axios.post("/login", body);
    console.log(response);
  } catch (error: any) {
    alert(error.message ? error.message : "何かエラー");
    console.error(error);
  } finally {
    isProcessing.value = false;
  }
}

defineExpose({
  userId,
  password,
  isProcessing,
  submit
});
</script>

<template lang="pug">
.root
  form(@submit.prevent="submit")
    input(type="text" v-model="userId" placeholder="ユーザID")
    br
    input(type="password" v-model="password" placeholder="パスワード")
    br
    input(type="submit" value="ログイン" :disabled="(!userId || !password) || isProcessing")
</template>

<style lang="sass" scoped>
</style>
