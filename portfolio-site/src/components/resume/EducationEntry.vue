<!-- EducationEntry.vue -->
<template>
  <div class="timeline-entry">
    <div class="timeline-dot"></div>
    <div class="timeline-date">
      <span>{{ formattedDate }}</span>
    </div>
    <div class="timeline-content">
      <div class="education-header">
        <h3 class="degree-title">{{ degree }}</h3>
        <h4 class="institution-name">{{ institution }}</h4>
        <div class="gpa">{{ gpa }} GPA</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'EducationEntry',
  props: {
    date: {
      type: String,
      required: true
    },
    degree: {
      type: String,
      required: true
    },
    institution: {
      type: String,
      required: true
    },
    gpa: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const formattedDate = computed(() => {
      return props.date.replace(' ', '<br>');
    });

    return {
      formattedDate
    };
  }
})
</script>

<style scoped>
/* Education entry styles are imported from the main styles */
</style>