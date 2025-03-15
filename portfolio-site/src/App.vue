// App.vue
<template>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  touch-action: manipulation;
}

body {
  margin: 0;
  padding: 0;
  overflow-y: auto;
  position: relative;
  font-family: 'VT323', monospace;
}

/* Improve form element usability on mobile */
input, 
button, 
textarea, 
select {
  font-size: 16px; /* Prevents iOS zoom on focus */
}

#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  position: relative;
}

/* Add these scrollbar styles for better mobile experience */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Override the main.css and base.css */
@media (min-width: 1024px) {
  body {
    display: block;
  }

  #app {
    display: block;
    max-width: none;
    padding: 0;
  }
}
</style>