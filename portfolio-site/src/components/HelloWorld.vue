<template>
  <div class="hello-world">
    <TypingAnimation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TypingAnimation from './hello/EarthAnimation/TypingAnimation.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    TypingAnimation,
  },
})
</script>

<style scoped>
.hello-world {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start; /* Changed from center to flex-start */
  padding-top: 50px; /* Add some padding from the top */
  margin: 0;
  padding: 0;
}
</style>
