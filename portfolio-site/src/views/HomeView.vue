<template>
  <main>
    <HelloWorld />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  }
})
</script>

<style scoped>
main {
  width: 100%;
  min-height: 100vh;
}
</style>