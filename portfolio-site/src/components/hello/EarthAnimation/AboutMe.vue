<template>
    <div class="about-section fade-in">
      <div class="about-content">
        <h2 class="about-title">ABOUT ME</h2>
        <p class="about-text">
            Hello! I’m Praveenaa, a geospatial software developer with 3+ years of experience transforming, analyzing, and visualizing complex spatial datasets to build dynamic tools 
            and applications that truly bring maps to life. 
            My greatest passion lies in working with climate data, turning environmental information into interactive platforms that deepen our understanding of our changing planet. 
            And if there’s one thing I love most, it’s looking at maps all day!
        </p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AboutMe'
  });
  </script>
  
  <style scoped>
  .about-section {
    margin: 0rem 0;
    padding: 0 2rem;
    opacity: 0;
  }
  
  .about-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .about-title {
    font-family: 'VT323', monospace;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #000;
  }
  
  .about-text {
    font-family: 'VT323', monospace;
    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: 1rem;
    color: #000;
  }
  
  .fade-in {
    animation: fadeIn 1s ease forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>