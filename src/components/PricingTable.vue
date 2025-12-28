<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(0);

// 1. Логика динамического Zoom
const dynamicZoom = computed(() => {
  if (windowWidth.value === 0) return {};

  // ПЛАНШЕТЫ И МОБИЛЬНЫЕ (< 1024px): Zoom 1
  if (windowWidth.value < 1024) {
    return { zoom: 1 };
  }

  // ДЕСКТОП: Рассчитываем zoom (максимум 1.9 при ширине 1600px)
  let zoomVal = (windowWidth.value / 1600) * 1.9;

  // Ограничиваем диапазоном 1 ... 1.9
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

const plans = [
  {
    icon: 'https://static.tildacdn.com/tild6538-3631-4961-b538-366337356133/icon_tooth.svg',
    title: 'Название\nНазвание',
    employees: '8 сотрудников',
    docs: 'до 100 документов',
    extra: 'Дополнительно\nпомогаем с платежами\nи кадрами',
    price: '~ 100 000 руб.'
  },
  {
    icon: 'https://static.tildacdn.com/tild6631-3932-4433-b764-363931306364/icon_arrow.svg',
    title: 'Название-\nНазвание',
    employees: '8 сотруднико',
    docs: 'до 100 документов',
    extra: 'Дополнительно\nпомогаем с платежами\nи кадрами',
    price: '~ 100 000 руб.'
  },
  {
    icon: 'https://static.tildacdn.com/tild6361-3234-4165-b062-613563356138/icon_paper.svg',
    title: 'Название\nНазвание',
    employees: '8 сотруднико',
    docs: 'до 100 документов',
    extra: 'Дополнительно\nпомогаем с платежами\nи кадрами',
    price: '~ 100 000 руб.'
  }
];
</script>

<template>
  <!-- Привязываем :style -->
  <section class="pricing-container" :style="dynamicZoom">
    <div class="pricing-header">
      <h2 class="section-title">СКОЛЬКО ЭТО СТОИТ</h2>
      <div class="section-desc" style="text-indent: 17px;">
        Задача организации, в особенности же новая модель организационной деятельности <a href="#" class="link-blue">требует определения </a>. Задача организации, в особенности же социально-экономическое развитие напрямую зависит от системы обучения кадров, соответствующей насущным потребностям.
      </div>
    </div>

    <div class="grid-row">
      <!-- Карточки из данных -->
      <div class="card" v-for="(plan, i) in plans" :key="i">
        <img :src="plan.icon" class="card-top-icon" alt="icon">
        <div class="card-title" style="white-space: pre-line">{{ plan.title }}</div>

        <ul class="specs-list">
          <li class="spec-item">
            <svg class="small-icon" viewBox="0 0 20 20" fill="black"><path d="M10 11c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z"/><circle cx="10" cy="6" r="4"/></svg>
            {{ plan.employees }}
          </li>
          <li class="spec-item">
            <svg class="small-icon" viewBox="0 0 24 24" fill="black"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/></svg>
            {{ plan.docs }}
          </li>
          <li class="spec-item">
            <svg class="small-icon" viewBox="0 0 24 24" fill="black"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"/></svg>
            учёт и отчётность
          </li>
          <li class="spec-item">
            <svg class="small-icon" viewBox="0 0 24 24" fill="black"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"/></svg>
            рассчитываем<br>зарплаты
          </li>
        </ul>

        <div class="extra-text" style="white-space: pre-line">{{ plan.extra }}</div>
        <div class="price">{{ plan.price }}</div>
      </div>

      <!-- Синяя карточка -->
      <a href="#contact" class="card blue-card">
        <div class="cta-text">
          Узнать<br>стоимость<br>услуг<br>
        </div>
        <svg class="corner-arrow" viewBox="0 0 24 24">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-linecap="square" stroke-linejoin="miter"/>
        </svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
.pricing-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;
  color: #000;

  /* Плавность зума */
  transition: zoom 0.1s linear;
}

.pricing-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 80px; gap: 60px; }
.section-title { font-size: clamp(2rem, 4vw, 3.5rem); text-transform: uppercase; font-weight: 500; margin: 0; line-height: 1; }
.section-desc { max-width: 650px; font-size: 1.25rem; line-height: 1.5; text-align: left; }
.link-blue { color: #0c5bfa; text-decoration: none; border-bottom: 1px solid rgba(12, 91, 250, 0.3); transition: border-color 0.3s; }
.link-blue:hover { border-bottom-color: #0c5bfa; }

.grid-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

/* Карточка */
.card { background-color: #f7f7f7; padding: 40px 30px; display: flex; flex-direction: column; min-height: 550px; position: relative; transition: transform 0.3s ease; }
.card:hover { transform: translateY(-5px); }
.card-top-icon { align-self: flex-end; width: 50px; height: 50px; margin-bottom: 40px; opacity: 0.8; }
.card-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 30px; min-height: 3em; line-height: 1.3; }
.specs-list { list-style: none; margin-bottom: 30px; padding: 0; }
.spec-item { display: flex; align-items: center; gap: 12px; margin-bottom: 15px; font-size: 1rem; }
.small-icon { width: 16px; height: 16px; flex-shrink: 0; }
.extra-text { font-size: 1rem; margin-top: auto; margin-bottom: 30px; color: #000; line-height: 1.4; }
.price { font-size: 1.6rem; font-weight: 400; letter-spacing: -0.5px; }

/* Синяя карточка */
.card.blue-card { background-color: #0c5bfa; color: #fff; text-decoration: none; justify-content: center; align-items: center; text-align: center; cursor: pointer; }
.blue-card:hover { background-color: #004ad6; }
.cta-text { font-size: 1.8rem; line-height: 1.2; font-weight: 500; }
.corner-arrow { position: absolute; bottom: 30px; right: 30px; width: 40px; height: 40px; fill: none; stroke: #fff; stroke-width: 1.5; }

/* Адаптив */
@media (max-width: 1200px) {
  .grid-row { grid-template-columns: repeat(2, 1fr); }
  .pricing-header { flex-direction: column; gap: 30px; }
  .section-desc { max-width: 100%; }
}

/* Добавляем границу для отключения зума (1024px) */
@media (max-width: 1024px) {
  .pricing-container { zoom: 1 !important; max-width: 100%; padding: 40px 20px; }
}

@media (max-width: 650px) {
  .grid-row { grid-template-columns: 1fr; }
  .card { min-height: auto; }
  .card-top-icon { margin-bottom: 20px; }
   .blue-card{
    display: none;
  }
}
</style>
