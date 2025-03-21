// ContactInfo.vue
<template>
  <div class="contact-section" :class="{ 'fade-in': show }">
    <div class="contact-container">
      <div class="links-container">
        <a
          href="https://linkedin.com/in/praveenaa-kulandhaivel"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link"
        >
          <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span>LINKEDIN</span>
        </a>

        <a
          href="https://github.com/praveenaak"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link"
        >
          <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            />
          </svg>
          <span>GITHUB</span>
        </a>

        <div class="contact-link email-link">
          <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span>praveenaa2408@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactInfo',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped>

.links-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: fit-content;
  max-width: 100%;
  overflow: hidden; /* Prevent overflow */
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.contact-link span {
  white-space: normal; /* Allow text to wrap */
  word-break: break-word;
  display: inline-block;
}

.email-link span {
  font-size: 0.9rem; /* Slightly smaller for email address */
}

@media (max-width: 360px) {
  .contact-link {
    padding: 0.4rem 0.7rem;
  }
  
  .icon {
    min-width: 20px;
    height: 20px;
  }
  
  .contact-link span {
    font-size: 1rem;
  }
  
  .email-link span {
    font-size: 0.85rem;
  }
}

/* Add bottom margin to ensure contact section isn't cut off */
.contact-section {
  margin-bottom: 3rem;
}
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

.contact-section {
  width: 100%;
  padding: 1rem;
  margin-top: 5rem;
  opacity: 0;
}

@media (min-width: 768px) {
  .contact-section {
    padding: 2rem;
    margin-top: 18rem;
  }
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-title {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #000;
}

@media (min-width: 768px) {
  .contact-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
}

.links-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .links-container {
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
  }
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #000;
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  word-break: break-word;
}

.email-link {
  max-width: 100%;
}

@media (min-width: 768px) {
  .contact-link {
    font-size: 1.25rem;
  }
}

.contact-link:hover {
  border-color: #000;
}

.icon {
  min-width: 24px;
  height: 24px;
}

.fade-in {
  animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>