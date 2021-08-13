<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>
    <div class="form-control" :class="{invalid: eError}">
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email" @blur="eBlur">
      <small v-if="eError">{{ eError }}</small>
    </div>
    <div class="form-control" :class="{invalid: pError}">
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model="password" @blur="pBlur">
      <small v-if="pError">{{ pError }}</small>
    </div>
    <button type="submit" class="btn primary" :disabled="isSubmitting || isTooManyAttempts">Войти</button>

    <div class="text-danger" v-if="isTooManyAttempts">Вы слишко часто пытаетесь войти в систему. Попробуйте позже!</div>
  </form>
</template>

<script>

import {useLoginForm} from '../use/login-form'
import {useRoute} from 'vue-router'
import {useStore} from "vuex";
import {error} from '../utils/error'

export default {
  setup() {
    // const route = useRoute()
    // const store = useStore()
    // if (route.query.message) {
    //   store.dispatch('setMessage', {
    //     value: error(route.query.message),
    //     type: 'warning'
    //   })
    // }

    return {...useLoginForm(),}
  },
  name: "Auth"
}
</script>

<style scoped>

</style>
