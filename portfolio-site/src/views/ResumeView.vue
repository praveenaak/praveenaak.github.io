// ResumeView.vue
<template>
  <div class="resume-page">
    <TitleBar :show="true" />
    <div class="content">
      <h1 class="wip-text">WORK IN PROGRESS</h1>
      <router-link to="/" class="back-link">BACK HOME</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleBar from '../components/hello/EarthAnimation/TitleBar.vue';

export default defineComponent({
  name: 'ResumeView',
  components: {
    TitleBar
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.resume-page {
  min-height: 100vh;
  font-family: 'VT323', monospace;
}

.content {
  padding-top: 100px;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wip-text {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.back-link {
  font-size: 1.5rem;
  color: #000;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 2px solid #000;
  transition: all 0.2s ease;
}

.back-link:hover {
  background-color: #000;
  color: #fff;
}
</style>