<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(0);

// --- ЛОГИКА ZOOM ---
const dynamicZoom = computed(() => {
  if (windowWidth.value === 0) return {};
  if (windowWidth.value < 1024) return { zoom: 1 }; // На мобильных zoom отключен

  let zoomVal = (windowWidth.value / 1600) * 1.9;
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

// --- ДАННЫЕ ---
// Добавляем поле isOpen: false для управления открытием на мобильных
const features = ref([
  {
    id: 1,
    isOpen: false,
    blueText: 'мы предлагаем слаженную команду и готовую инфраструктуру, а не просто знания отдельных людей. Это позволяет решать задачи комплексно, быстро и без потерь на стыках между специалистами',
    comparisons: [
      { title: 'Поликлиники и районные больницы', type: 'cross', text: 'Текст...' },
      { title: 'Другие частные клиники', type: 'neutral', text: 'Текст...' }
    ]
  },
  {
    id: 2,
    isOpen: false,
    blueText: 'отвечаем на запросы за 5 минут, не пропадаем и не срываем сроки. Не болеем, не уходим в отпуск, не отпрашиваемся пораньше в пятницу.',
    comparisons: [
      { title: 'Поликлиники и районные больницы', type: 'cross', text: 'Текст...' },
      { title: 'Другие частные клиники', type: 'neutral', text: 'Текст...' }
    ]
  },
  { id: 3, isOpen: false, blueText: 'активная позиция: мы не ждём, когда всё само как-то произойдёт, а действуем на опережение, советуем и подсказываем.', comparisons: [{ title: '...', type: 'cross', text: '...' }, { title: '...', type: 'neutral', text: '...' }] },
  { id: 4, isOpen: false, blueText: 'постоянно учимся и повышаем квалификацию.', comparisons: [{ title: '...', type: 'cross', text: '...' }, { title: '...', type: 'neutral', text: '...' }] },
  { id: 5, isOpen: false, blueText: 'сервис по ремонту авто, аграрный комплекс или промышленный гигант – наша команда справляется с медицинским обеспечением в самых разных сферах.', comparisons: [{ title: '...', type: 'cross', text: '...' }, { title: '...', type: 'neutral', text: '...' }] },
  { id: 6, isOpen: false, blueText: 'строгое соблюдение врачебной тайны + защищённая IT-часть.', comparisons: [{ title: '...', type: 'cross', text: '...' }, { title: '...', type: 'neutral', text: '...' }] }
]);

// Функция переключения
const toggleBlock = (block) => {
  block.isOpen = !block.isOpen;
};
</script>

<template>
  <section class="why-cool-section" :style="dynamicZoom">

    <!-- Заголовок -->
    <div class="sticky-title-wrapper">
      <h2 class="main-title">почему мы крутые</h2>
    </div>

    <!-- Единый цикл для всех блоков -->
    <div class="content-row" v-for="(block, index) in features" :key="block.id">

      <!--
        ЛЕВАЯ КОЛОНКА
        :class="{'no-sticky-desktop': ...}" отключает прилипание последнего элемента на ДЕСКТОПЕ
      -->
      <div class="left-col" :class="{ 'no-sticky-desktop': index === features.length - 1 }">
        <span class="number-badge">({{ block.id }})</span>
        <div class="blue-text">{{ block.blueText }}</div>
      </div>

      <!-- ПРАВАЯ КОЛОНКА -->
      <div class="right-col">

        <!-- КНОПКА (видна только на мобильных, если блок закрыт) -->
        <button
          class="mobile-toggle-btn"
          @click="toggleBlock(block)"
          v-if="!block.isOpen"
        >
          <span class="btn-text">А как у других?</span>
          <!-- Иконка стрелочки вниз -->

        </button>

        <!-- КОНТЕНТ (виден всегда на десктопе ИЛИ если открыт на мобильном) -->
        <div class="comparisons-wrapper" :class="{ 'mobile-hidden': !block.isOpen }">
          <div class="comparison-item" v-for="(item, idx) in block.comparisons" :key="idx">
            <div class="comp-header">
              <svg v-if="item.type === 'cross'" class="icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="5" y1="19" x2="19" y2="5"/></svg>
              <svg v-if="item.type === 'neutral'" class="icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><circle cx="9" cy="9" r="0.5" fill="black"/><circle cx="15" cy="9" r="0.5" fill="black"/></svg>
              {{ item.title }}
            </div>
            <div class="comp-text"><p>{{ item.text }}</p></div>
          </div>

          <!-- Кнопка "Свернуть" на мобильном -->
          <button class="mobile-close-btn" @click="toggleBlock(block)">Свернуть</button>
        </div>
      </div>

    </div>

  </section>
</template>

<style scoped>
.why-cool-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;
  position: relative;
  color: #000;
  transition: zoom 0.1s linear;
}

/* Липкий заголовок только на десктопе */
.sticky-title-wrapper {
  position: sticky; top: 20px; z-index: 10;
  background: rgba(255,255,255,0.9); backdrop-filter: blur(5px);
  padding-bottom: 20px; width: 100%;
}
.main-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 500; margin: 0; }

.content-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 120px; position: relative; }
.content-row:last-child { margin-bottom: 0; }

/* Левая колонка - sticky только на десктопе */
.left-col { width: 45%; position: sticky; top: 140px; padding-right: 40px; }

/* Отключаем sticky для последнего элемента на десктопе */
.left-col.no-sticky-desktop { position: static; }

.right-col { width: 50%; display: flex; flex-direction: column; gap: 60px; }

.blue-text { color: #2b6eff; font-size: clamp(1.2rem, 2vw, 1.6rem); line-height: 1.4; font-weight: 400; }
.number-badge { font-size: 0.8rem; color: #000; font-weight: 700; margin-bottom: 10px; display: block; }

.comparison-item { margin-bottom: 20px; }
.comp-header { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; font-weight: 700; font-size: 1.2rem; }
.icon-svg { width: 30px; height: 30px; stroke-width: 1.5; stroke: #000; fill: none; flex-shrink: 0; }
.comp-text { font-size: 1rem; color: #111; line-height: 1.6; }
.comp-text p { margin-bottom: 15px; }

/* Кнопки по умолчанию скрыты (для десктопа) */
.mobile-toggle-btn, .mobile-close-btn { display: none; }

/* --- МОБИЛЬНАЯ ВЕРСИЯ --- */
@media (max-width: 1024px) {
  .why-cool-section { zoom: 1 !important; max-width: 100%; }

  /* Отключаем sticky для заголовка и колонки */
  .sticky-title-wrapper { position: relative; top: 0; margin-bottom: 40px; }
  .left-col { position: static; width: 100%; padding-right: 0; margin-bottom: 20px; }

  .content-row { flex-direction: column; margin-bottom: 60px; border-bottom: 1px solid #eee; padding-bottom: 40px; }
  .content-row:last-child { border-bottom: none; }

  .right-col { width: 100%; gap: 0; }

  /* Кнопка "Сравнить" */
  .mobile-toggle-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px 20px;
    background-color: #ffffff;

    /* --- Настройки подчеркивания --- */
    text-decoration: underline dotted; /* Тип линии */
    text-underline-offset: 4px;        /* Отступ линии вниз (меняйте значение по вкусу) */
    text-decoration-thickness: 1px;    /* (Опционально) Толщина точек */
    /* ------------------------------ */

    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.3s;
  }
  .mobile-toggle-btn:hover { background-color: #e0e0e0; }
  .btn-icon { width: 20px; height: 20px; }

  /* Скрытие контента */
  .comparisons-wrapper.mobile-hidden {
    display: none;
  }

  /* Анимация появления */
  .comparisons-wrapper {
    margin-top: 20px;
    animation: fadeIn 0.3s ease;
  }

  .mobile-close-btn {
    display: block;
    margin-top: 20px;
    background: none;
    border: none;
    color: #2b6eff;
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
    padding: 10px;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
