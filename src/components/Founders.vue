<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(0);

// Логика расчета Zoom
const dynamicZoom = computed(() => {
  // Защита от SSR (если рендерится на сервере)
  if (windowWidth.value === 0) return {};

  // ГРАНИЦА: На планшетах и мобильных (меньше 1024px) отключаем zoom
  if (windowWidth.value < 1024) {
    return { zoom: 1 };
  }

  // ДЕСКТОП:
  // При ширине 1600px зум будет 1.9.
  // При меньшей ширине (например 1366px) он будет меньше, чтобы все влезало.
  let zoomVal = (windowWidth.value / 1600) * 1.9;

  // Ограничиваем: не меньше 1 и не больше 1.9
  zoomVal = Math.min(Math.max(zoomVal, 1), 1.9);

  return { zoom: zoomVal };
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <!-- Привязываем вычисленный стиль -->
  <section class="founders-section" :style="dynamicZoom">
    <!-- Верхний блок (Сергей) -->
    <div class="top-block">
      <div class="avatar-group">
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Сергей Яшин" class="avatar-img">
        <div>
          <div class="person-name">имя фамилия</div>
          <div class="person-role">генеральный директор </div>
        </div>
      </div>

      <div class="text-content">
        Задача организации — <span class="highlight-blue">в особенности же новая модель</span>. организационной деятельности требует определения и уточнения ключевых компонентов планируемого обновления
      </div>
    </div>

    <!-- Нижний блок (Анна) -->
    <div class="bottom-block">
      <div class="bottom-content-col">
        <div class="banner-text">
          Задача организации, в особенности же новая модель организационной деятельности требует определения и уточнения ключевых компонентов планируемого обновления.
        </div>

        <div class="banner-author">
          <div class="person-name">имя фамилия</div>
          <div class="person-role">генеральный директор</div>
        </div>
      </div>

      <div class="bottom-image-col">
        <img src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-woman-looking-at-camera-png-image_10149646.png" alt="Анна Яшина" class="anna-img">
      </div>
    </div>
  </section>
</template>

<style scoped>
.founders-section {
  width: 100%;
  /* Ставим ограничение по ширине, чтобы при зуме контент не разъезжался слишком сильно */
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;
  color: #000;
  /* Плавность изменения зума */
  transition: zoom 0.1s linear;
}

/* Сергей */
.top-block { display: flex; gap: 40px; margin-bottom: 60px; align-items: flex-start; }
.avatar-group { flex-shrink: 0; width: 150px; text-align: center; }
.avatar-img { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin-bottom: 10px; background-color: #eee; }
.person-name { font-weight: 700; font-size: 0.9rem; text-transform: lowercase; margin-bottom: 2px; }
.person-role { font-size: 0.8rem; color: #666; font-weight: 400; }
.text-content { font-size: clamp(1.2rem, 2.5vw, 1.8rem); font-weight: 400; line-height: 1.3; max-width: 800px; }
.highlight-blue { color: #2b6eff; }

/* Анна */
.bottom-block { background-color: #222023; border-radius: 2px; color: #fff; display: flex; justify-content: space-between; overflow: hidden; position: relative; min-height: 400px; }
.bottom-content-col { padding: 60px; display: flex; flex-direction: column; justify-content: space-between; flex: 1; z-index: 2; }
.banner-text { font-size: clamp(1.5rem, 3vw, 2.2rem); line-height: 1.3; max-width: 650px; }
.banner-author { margin-top: 40px; }
.banner-author .person-name { color: #fff; font-size: 1rem; }
.banner-author .person-role { color: #aaa; }
.bottom-image-col { flex-shrink: 0; display: flex; align-items: flex-end; padding-right: 40px; }
.anna-img { display: block; height: 90%; width: auto; max-height: 400px; object-fit: contain; }

/* Адаптив */
@media (max-width: 1024px) {
  /* Принудительный сброс зума на планшетах и мобильных */
  .founders-section { zoom: 1 !important; max-width: 100%; padding: 40px 20px; }

  .top-block { flex-direction: column; gap: 20px; }
  .avatar-group { display: flex; align-items: center; gap: 15px; width: 100%; text-align: left; }
  .avatar-img { margin-bottom: 0; width: 60px; height: 60px; }
  .bottom-block { flex-direction: column; padding-bottom: 0; }
  .bottom-content-col { padding: 30px 20px; }
  .bottom-image-col { padding-right: 0; justify-content: center; width: 100%; }
  .anna-img { height: auto; width: 80%; max-width: 300px; }
}
</style>
