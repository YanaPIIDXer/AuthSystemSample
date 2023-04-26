<script setup lang="ts">
import { ref } from "vue";
import axios from "@/modules/Axios";

const userId = ref("");
const password = ref("");
const isProcessing = ref(false);

/**
 * ログイン
 */
const submitLogin = async () => {
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
};

/**
 * 新規登録
 */
const submitRegister = async () => {
  isProcessing.value = true;
  try {
    const body = {
      userId: userId.value,
      password: password.value,
    }
    const response = await axios.post("/register", body);
    console.log(response);
  } catch (error: any) {
    alert(error.message ? error.message : "何かエラー");
    console.error(error);
  } finally {
    isProcessing.value = false;
  }
};

defineExpose({
  userId,
  password,
  isProcessing,
  submitLogin,
});
</script>

<template lang="pug">
.root
  form(@submit.prevent="submitLogin")
    input(type="text" v-model="userId" placeholder="ユーザID")
    br
    input(type="password" v-model="password" placeholder="パスワード")
    br
    input(type="submit" value="ログイン" :disabled="(!userId || !password) || isProcessing")
    input(type="button" @click="submitRegister" value="新規登録" :disabled="(!userId || !password) || isProcessing")
</template>

<style lang="sass" scoped>
</style>
