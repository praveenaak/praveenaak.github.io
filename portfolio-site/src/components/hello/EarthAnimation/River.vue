<template>
    <div class="river-container">
      <div class="river-segments">
        <div v-for="i in 10" :key="i" class="river-segment" :class="`segment-${i}`">
          <img src="/textures/CarsonREM-3.png" alt="River" class="river-image" />
        </div>
        <button 
          @click="$emit('toggleInfo')" 
          class="info-button"
          aria-label="Show information">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'River',
    emits: ['toggleInfo']
  });
  </script>
  
  <style scoped>
  .river-container {
    width: 100%;
    position: relative;
    margin-top: -8rem; 
  }
  
  .river-segments {
    position: relative;
    width: 100%;
    min-height: 200px;
  }
  
  .river-segment {
    position: absolute;
    width: 100%;
    height: auto;
    opacity: 0;
  }
  
  .river-image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  
  .info-button {
    position: fixed;
    right: 2rem;
    top: 30%;
    transform: translateY(-50%);
    background: white;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
    cursor: pointer;
    padding: 0.5rem;
    color: #dc1a1a;
    opacity: 0.9;
    transition: all 0.2s ease;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .info-button:hover {
    opacity: 1;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
  
  .segment-1 { clip-path: inset(0 1080px 0 0); animation: fadeInSegment 0.2s ease forwards; }
  .segment-2 { clip-path: inset(0 960px 0 120px); animation: fadeInSegment 0.2s ease forwards 0.1s; }
  .segment-3 { clip-path: inset(0 840px 0 240px); animation: fadeInSegment 0.2s ease forwards 0.2s; }
  .segment-4 { clip-path: inset(0 720px 0 360px); animation: fadeInSegment 0.2s ease forwards 0.3s; }
  .segment-5 { clip-path: inset(0 600px 0 480px); animation: fadeInSegment 0.2s ease forwards 0.4s; }
  .segment-6 { clip-path: inset(0 480px 0 600px); animation: fadeInSegment 0.2s ease forwards 0.5s; }
  .segment-7 { clip-path: inset(0 360px 0 720px); animation: fadeInSegment 0.2s ease forwards 0.6s; }
  .segment-8 { clip-path: inset(0 240px 0 840px); animation: fadeInSegment 0.2s ease forwards 0.7s; }
  .segment-9 { clip-path: inset(0 120px 0 960px); animation: fadeInSegment 0.2s ease forwards 0.8s; }
  .segment-10 { clip-path: inset(0 0 0 1080px); animation: fadeInSegment 0.2s ease forwards 0.9s; }
  
  @keyframes fadeInSegment {
    0% {
      opacity: 0;
      transform: scaleY(0.9);
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
  }
  </style>