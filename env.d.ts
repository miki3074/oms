/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 2. Исправляет ошибку с v-video-embed
declare module 'v-video-embed';
