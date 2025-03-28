<!-- HomeView.vue -->
<template>
  <main>
    <HomeTypingAnimation />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeTypingAnimation from '@/components/home/HomeTypingAnimation.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeTypingAnimation
  }
})
</script>