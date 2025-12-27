<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// --- 1. ЛОГИКА ZOOM (Как в других блоках) ---
const windowWidth = ref(0);

const dynamicZoom = computed(() => {
  if (windowWidth.value === 0) return {};
  if (windowWidth.value < 1024) return { zoom: 1 };

  let zoomVal = (windowWidth.value / 1600) * 1.9;
  zoomVal = Math.min(Math.max(zoomVal, 1), 1.9);

  return { zoom: zoomVal };
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

// --- 2. ДАННЫЕ И АНИМАЦИЯ ---
// Генерируем 56 пустых элементов
const items = Array.from({ length: 56 }, (_, i) => ({ id: i }));

const sectionRef = ref(null);
const isVisible = ref(false);

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);

  // Наблюдатель для запуска анимации при скролле
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <section class="team-section" ref="sectionRef" :style="dynamicZoom">

    <!-- Шапка (Текст) -->
    <div class="team-header">
      <div class="header-left">
        <h2 class="section-title">суперкоманда</h2>
        <div class="arrow-container">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <div class="header-right">
        <p class="description">
          Задача организации, в особенности же новая модель.
          <a href="#" class="blue-link">организационной деятельности требует определения </a>,
          и уточнения ключевых компонентов планируемого обновления. Задача организации, в особенности же социально-экономическое развитие напрямую зависит от системы обучения кадров
        </p>
      </div>
    </div>

    <!-- Сетка блоков -->
    <div class="photo-grid" :class="{ 'active': isVisible }">

      <div
        class="photo-block"
        v-for="(item, index) in items"
        :key="item.id"
        :style="{ transitionDelay: `${(index % 14) * 0.05}s` }"
      >
        <!-- Текст внутри блока -->
        <span class="placeholder-text">фото</span>
      </div>

    </div>

  </section>
</template>

<style scoped>
/* --- Контейнер --- */
.team-section {
  padding: 80px 0 0 0;
  background-color: #fff;
  color: #000;

  /* Zoom settings */
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  transition: zoom 0.1s linear;
  overflow: hidden; /* Чтобы анимация не вызывала скролл */
}

/* --- Шапка --- */
.team-header {
  display: flex;

  align-items: flex-start;
  margin-bottom: 60px;
  padding: 0 40px;
}

.header-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 500;
  margin: 0;
  line-height: 1;
}

.arrow-container { margin-top: 40%; }

.header-right { max-width: 600px;     margin-top: 9%;}

.description {
  font-size: 1.25rem;
  line-height: 1.5;
}

.blue-link { color: #0c5bfa; text-decoration: none; }

/* --- Сетка (Grid) --- */
.photo-grid {
  display: grid;
  /* 14 колонок равной ширины */
  grid-template-columns: repeat(14, 1fr);
  /* 4 строки */
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
}

/* --- Блок фото (Заглушка) --- */
.photo-block {
  aspect-ratio: 3 / 4; /* Пропорции фото */
  background-color: #e0e0e0; /* Серый фон */
  border: 1px solid #fff; /* Белая сетка между блоками */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Начальное состояние для анимации */
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.placeholder-text {
  color: #888;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* --- Состояние Active (когда доскроллили) --- */
.photo-grid.active .photo-block {
  opacity: 1;
  transform: translateY(0);
}

/* --- Адаптив --- */
@media (max-width: 1024px) {
  /* Сброс зума */
  .team-section { zoom: 1 !important; max-width: 100%; }

  .team-header { flex-direction: column; gap: 30px; }
  .header-left { min-height: auto; }
  .arrow-container { display: none; }

  /* На планшетах 14 колонок слишком мелко, уменьшаем до 7 */
  .photo-grid {
    grid-template-columns: repeat(7, 1fr);
  }
}

@media (max-width: 600px) {
  /* На мобильных 4 колонки */
  .photo-grid {
    grid-template-columns: repeat(8, 1fr);
  }
  .section-title { font-size: 2.5rem; }
  .description { font-size: 1rem; }
}
</style>
