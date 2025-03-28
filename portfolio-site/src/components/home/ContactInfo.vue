<!-- ContactInfo.vue -->
<template>
  <div class="contact-section" :class="{ 'fade-in': show }">
    <h2 class="contact-title">CONTACT</h2>
    <div class="links-container">
      <a href="https://github.com/praveenaak" target="_blank" class="contact-link github-link">
        <div class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.838 21.44C9.338 21.533 9.5 21.222 9.5 20.953C9.5 20.711 9.492 20.001 9.488 19.175C6.728 19.758 6.142 17.933 6.142 17.933C5.684 16.88 5.022 16.57 5.022 16.57C4.121 15.988 5.093 16 5.093 16C6.092 16.07 6.63 16.994 6.63 16.994C7.523 18.465 9.012 17.98 9.518 17.722C9.61 17.091 9.872 16.662 10.158 16.419C7.974 16.172 5.65 15.369 5.65 11.674C5.65 10.598 6.046 9.72 6.649 9.034C6.545 8.779 6.198 7.811 6.747 6.563C6.747 6.563 7.586 6.291 9.477 7.388C10.294 7.166 11.164 7.055 12.03 7.052C12.896 7.055 13.766 7.166 14.583 7.388C16.473 6.291 17.312 6.563 17.312 6.563C17.861 7.811 17.514 8.779 17.41 9.034C18.014 9.72 18.409 10.598 18.409 11.674C18.409 15.379 16.082 16.169 13.892 16.413C14.248 16.715 14.578 17.323 14.578 18.252C14.578 19.569 14.567 20.618 14.567 20.953C14.567 21.225 14.726 21.538 15.235 21.44C19.205 20.164 22.068 16.418 22.068 12C22.068 6.477 17.591 2 12.068 2H12Z" fill="currentColor"/>
          </svg>
        </div>
        <span>github.com/praveenaak</span>
      </a>
      
      <a href="https://www.linkedin.com/in/praveenaak/" target="_blank" class="contact-link linkedin-link">
        <div class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19ZM18.5 18.5V13.2C18.5 11.4 17.9 10 15.9 10C14.9 10 14.3 10.5 14 11V10.2H12V18.5H14V13.6C14 12.7 14.8 12 15.6 12C16.4 12 16.5 12.8 16.5 13.7V18.5H18.5ZM6.9 8.6C7.8 8.6 8.5 7.8 8.5 6.9C8.5 6 7.8 5.3 6.9 5.3C6 5.3 5.3 6 5.3 6.9C5.3 7.8 6 8.6 6.9 8.6ZM8 18.5V10.2H6V18.5H8Z" fill="currentColor"/>
          </svg>
        </div>
        <span>linkedin.com/in/praveenaak</span>
      </a>
      
      <a href="mailto:pkulandhaivel@gmail.com" class="contact-link email-link">
        <div class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
          </svg>
        </div>
        <span>pkulandhaivel@gmail.com</span>
      </a>
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
      default: false
    }
  }
})
</script>

<style scoped>
.contact-section {
  margin-top: calc(var(--spacing-xl) * 2);
  margin-bottom: var(--spacing-xl);
  opacity: 0;
}

.contact-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: var(--spacing-xl);
  color: var(--primary-green);
}

.links-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  align-items: center;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  width: fit-content;
  max-width: 100%;
  overflow: hidden;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-sm);
  background-color: white;
  box-shadow: var(--shadow-sm);
  color: var(--text-primary);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.contact-link:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.contact-link span {
  white-space: normal;
  word-break: break-word;
  display: inline-block;
}

.icon {
  min-width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Social media specific colors */
.github-link .icon {
  color: #333;
}

.linkedin-link .icon {
  color: #0077B5;
}

.email-link .icon {
  color: var(--primary-green);
}

.email-link span {
  font-size: 0.9rem;
}

@media (min-width: 768px) {
  .contact-section {
    margin-top: calc(var(--spacing-xl) * 3);
  }
  
  .links-container {
    flex-direction: row;
    gap: var(--spacing-xl);
    justify-content: center;
  }
  
  .email-link span {
    font-size: 1rem;
  }
}

@media (max-width: 360px) {
  .contact-link {
    padding: var(--spacing-xs) var(--spacing-sm);
  }
  
  .icon {
    min-width: 20px;
    height: 20px;
  }
  
  .contact-link span {
    font-size: 0.9rem;
  }
  
  .email-link span {
    font-size: 0.85rem;
  }
}
</style>