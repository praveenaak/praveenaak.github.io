// ResumeView.vue
<template>
  <div class="resume-page">
    <TitleBar :show="true" />
    <div class="content">
      <h1 class="page-title">EXPERIENCE</h1>
      <Timeline />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TitleBar from '../components/hello/EarthAnimation/TitleBar.vue'
import Timeline from '../components/timeline/Timeline.vue'

export default defineComponent({
  name: 'Resume',
  components: {
    TitleBar,
    Timeline,
  },
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.resume-page {
  min-height: 100vh;
  font-family: 'VT323', monospace;
  background-color: #f5f5f5;
}

.content {
  padding-top: 80px;
}

.page-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #000;
}
</style>
