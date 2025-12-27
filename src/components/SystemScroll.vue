<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';

const itemsRef = ref([]);
const windowWidth = ref(0);

const setItemRef = (el) => {
  if (el) itemsRef.value.push(el);
};

// 1. Логика динамического Zoom
const dynamicZoom = computed(() => {
  if (windowWidth.value === 0) return {};
  if (windowWidth.value < 1024) {
    return { zoom: 1 };
  }
  let zoomVal = (windowWidth.value / 1600) * 1.9;
  zoomVal = Math.min(Math.max(zoomVal, 1), 1.9);
  return { zoom: zoomVal };
});

// 2. Observer
let observer = null;

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // Чуть уменьшил порог для мобилок, чтобы раньше срабатывало
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, options);

  itemsRef.value.forEach(item => {
    observer.observe(item);
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  if (observer) observer.disconnect();
});

const systems = [
  'медицинская инфраструктура',
  'внутренний контроль качества',
  'квалифицированный медицинский персонал',
  'автоматизация и защищённый документооборот',
  // Пятый элемент встанет по центру или слева, в зависимости от настроек
  'партнёрство с сетью медицинских центров'
];
</script>

<template>
  <section class="system-section" :style="dynamicZoom">
    <div class="left-col">
      <h2 class="main-title">целая система,<br>а не просто<br>хороший бухгалтер</h2>
      <!-- Кнопку можно скрыть на мобильном, если её нет на макете, или оставить -->
      <a href="#" class="cta-btn">уже хочу</a>
    </div>

    <div class="right-col">
      <div class="scroll-item" v-for="(text, i) in systems" :key="i" :ref="setItemRef">
        <span class="item-text">{{ text }}</span>
        <svg class="circle-bg" viewBox="0 0 320 320">
          <circle class="circle-path" cx="160" cy="160" r="159" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- ОБЩИЕ СТИЛИ (ДЕСКТОП) --- */
.system-section {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  color: #000;
  transition: zoom 0.1s linear;
}

.left-col {
  width: 45%;
  position: sticky;
  top: 15vh;
  height: fit-content;
}

.main-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
  font-weight: 500;
  margin-bottom: 40px;
}

.cta-btn {
  background-color: #2b6eff;
  color: #fff;
  padding: 15px 35px;
  border-radius: 30px;
  font-size: 1.1rem;
  display: inline-block;
  transition: background 0.3s;
}

.cta-btn:hover { background-color: #1a4ebd; }

.right-col {
  width: 45%;
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
}

.scroll-item {
  position: relative;
  height: 300px; /* Высота для десктопного скролла */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.3;
  color: #000;
}

.item-text {
  position: relative;
  z-index: 2;
  max-width: 200px;
}

.circle-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 320px;
  z-index: 1;
  pointer-events: none;
}

.circle-path {
  fill: none;
  stroke: #d0d0d0; /* Серый цвет круга */
  stroke-width: 1;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: stroke-dashoffset 1.5s ease-out; /* Чуть медленнее анимация */
}

.scroll-item.active .circle-path {
  stroke-dashoffset: 0;
}

/* --- МОБИЛЬНАЯ ВЕРСИЯ (СЕТКА 2 КОЛОНКИ) --- */
@media (max-width: 1024px) {
  .system-section {
    flex-direction: column;
    zoom: 1 !important;
  }
  .cta-btn{
    display: none;
  }

  .left-col {
    width: 100%;
    position: static;
    margin-bottom: 40px;
  }

  .main-title {
    font-size: 2.2rem; /* Размер шрифта как на картинке */
    margin-bottom: 20px;
  }

  /* Скрываем кнопку на мобильном, если нужно как на картинке */
  /* .cta-btn { display: none; } */

  .right-col {
    width: 100%;
    padding-top: 0;

    /* ВКЛЮЧАЕМ СЕТКУ */
    display: grid;
    grid-template-columns: 1fr 1fr; /* 2 равные колонки */
    gap: 15px; /* Отступ между кругами */
  }

  .scroll-item {
    height: auto; /* Сбрасываем фиксированную высоту */
    aspect-ratio: 1 / 1; /* Делаем элемент квадратным */
    font-size: 1rem; /* Уменьшаем шрифт текста */
  }

  .item-text {
    max-width: 90%; /* Текст может занимать почти всю ширину круга */
    font-size: 0.9rem;
    line-height: 1.2;
  }

  .circle-bg {
    /* Растягиваем SVG на весь квадрат */
    width: 100%;
    height: 100%;
  }

  /* Если элементов нечетное количество, последний можно растянуть или центрировать */
  /* .scroll-item:last-child { grid-column: span 2; width: 50%; margin: 0 auto; } */
}
</style>
