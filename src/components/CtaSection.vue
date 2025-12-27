<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(0);

// --- 1. ЛОГИКА ZOOM (Стандартная для вашего проекта) ---
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

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <section class="cta-section" :style="dynamicZoom">

    <!-- Бегущая строка: Тематика -->
    <div class="marquee-wrapper top">
      <div class="marquee-content">
        <span>МЕДИЦИНСКИЕ ОСМОТРЫ • ПРОМЫШЛЕННАЯ БЕЗОПАСНОСТЬ • ЗДОРОВЬЕ СОТРУДНИКОВ • </span>
        <span>МЕДИЦИНСКИЕ ОСМОТРЫ • ПРОМЫШЛЕННАЯ БЕЗОПАСНОСТЬ • ЗДОРОВЬЕ СОТРУДНИКОВ • </span>
      </div>
    </div>

    <div class="cta-container">
      <div class="cta-left">
        <h2 class="cta-title">
          Остались <span class="highlight">вопросы?</span>
        </h2>

        <p class="cta-intro">
          Наш специалист проконсультирует вас по:
        </p>

        <ul class="consult-list">
          <li>
            <span class="bullet">▸</span> перечню необходимых осмотров
          </li>
          <li>
            <span class="bullet">▸</span> требованиям к опасным производствам
          </li>
          <li>
            <span class="bullet">▸</span> стоимости услуг для вашего предприятия
          </li>
        </ul>
      </div>

      <div class="cta-right">
        <!-- Кнопка -->
        <a href="#contact" class="big-cta-button">
          <div class="btn-content">
            <span class="btn-text">Получить консультацию</span>
            <span class="btn-sub">свяжемся в течение 15 минут</span>
          </div>
          <div class="btn-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
            </svg>
          </div>
        </a>
      </div>
    </div>

    <!-- Бегущая строка: Бренд -->
    <div class="marquee-wrapper bottom">
      <div class="marquee-content reverse">
        <span>ООО НПО «ОМС» • ПРОФЕССИОНАЛИЗМ • ТОЧНОСТЬ • ЗАБОТА • </span>
        <span>ООО НПО «ОМС» • ПРОФЕССИОНАЛИЗМ • ТОЧНОСТЬ • ЗАБОТА • </span>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* --- Секция --- */
.cta-section {
  background-color: #222023; /* Темный фон */
  color: #fff;
  padding: 100px 0;
  position: relative;
  overflow: hidden;

  /* Zoom логика */
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  transition: zoom 0.1s linear;
}

/* --- Контейнер --- */
.cta-container {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Центрирование по вертикали */
  padding: 0 40px;
  position: relative;
  z-index: 2;
}

/* --- Левая часть --- */
.cta-left {
  max-width: 60%;
}

.cta-title {
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1.1;
  font-weight: 500;
  margin-bottom: 30px;
}

.highlight {
  color: #2b6eff;
  font-style: italic;
}

.cta-intro {
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 500;
}

/* Список с треугольниками */
.consult-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.consult-list li {
  font-size: 1.15rem;
  color: #ccc;
  margin-bottom: 12px;
  display: flex;
  align-items: flex-start;
  line-height: 1.4;
}

.bullet {
  color: #2b6eff; /* Синий цвет треугольника */
  font-size: 1.2rem;
  margin-right: 12px;
  line-height: 1.4; /* Выравнивание с текстом */
}

/* --- Правая часть --- */
.cta-right {
  flex-shrink: 0;
}

.big-cta-button {
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: #2b6eff;
  padding: 30px 40px;
  border-radius: 20px;
  text-decoration: none;
  color: #fff;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 10px 30px rgba(43, 110, 255, 0.3);
}

.big-cta-button:hover {
  background-color: #fff;
  color: #000;
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 20px 40px rgba(255, 255, 255, 0.2);
}

.btn-content {
  display: flex;
  flex-direction: column;
}

.btn-text {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 5px;
}

.btn-sub {
  font-size: 0.9rem;
  opacity: 0.8;
  font-weight: 400;
}

.btn-icon {
  width: 60px;
  height: 60px;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}

.big-cta-button:hover .btn-icon {
  border-color: #000;
  background-color: #000;
  color: #fff;
  transform: rotate(45deg);
}

.btn-icon svg { width: 24px; height: 24px; }

/* --- Marquee --- */
.marquee-wrapper {
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0.05;
  pointer-events: none;
  user-select: none;
}

.marquee-wrapper.top { top: 20px; }
.marquee-wrapper.bottom { bottom: 20px; }

.marquee-content { display: inline-block; animation: scroll 50s linear infinite; }
.marquee-content.reverse { animation: scroll-reverse 50s linear infinite; }

.marquee-content span {
  font-size: 4rem; /* Чуть меньше шрифт для длинных фраз */
  font-weight: 900;
  text-transform: uppercase;
  margin-right: 50px;
}

@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes scroll-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }

/* --- Адаптив --- */
@media (max-width: 1024px) {
  .cta-section { zoom: 1 !important; max-width: 100%; padding: 60px 0; }
  .cta-container { flex-direction: column; align-items: flex-start; gap: 40px; }
  .cta-left { max-width: 100%; }
  .big-cta-button { width: 100%; justify-content: space-between; }
  .marquee-wrapper { opacity: 0.03; }
  .marquee-content span { font-size: 2.5rem; }
}

@media (max-width: 600px) {
  .cta-title { font-size: 2.5rem; }
  .big-cta-button { padding: 20px; }
  .btn-text { font-size: 1.3rem; }
  .btn-icon { width: 40px; height: 40px; }
}
</style>
