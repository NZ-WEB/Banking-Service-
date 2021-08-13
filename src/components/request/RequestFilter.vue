<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" v-model="name" placeholder="Начните писать имя...">
    </div>
    <div class="form-control">
      <select v-model="status">
        <option value="done">Завершён</option>
        <option value="cancelled">Отменён</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>
    <button v-if="isActive" class="btn warning" @click="reset">Очистить</button>
  </div>
</template>

<script>
import {ref, watch, computed} from 'vue'

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(_, {emit}) {
    const name = ref()
    const status = ref()

    watch([name, status], values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      })
    })

    const isActive = computed(() => name.value || status.value)

    return {
      name,
      status,
      isActive,
      reset: () => {
        name.value = ''
        status.value = null
      }
    }
  }
}
</script>

<style scoped>

</style>
