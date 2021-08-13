<template>
  <div class="sidebar" v-if="sidebar">
    <span class="sidebar-close" @click="close">&times;</span>

    <div class="sidebar-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur corporis debitis dolores eaque eius esse recusandae ullam vel. Accusantium adipisci aliquam aliquid architecto aut, consectetur consequatur cupiditate dolorum eveniet excepturi molestiae non omnis, perspiciatis qui reiciendis sapiente tenetur voluptate?</p>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup() {
    const store = useStore()

    const sidebar = computed(() => store.state.sidebar)

    return {
      sidebar,
      close: () => store.commit('closeSidebar')
    }
  }

}
</script>

<style scoped>

</style>
