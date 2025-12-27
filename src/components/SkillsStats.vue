<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';

const sectionRef = ref(null);
const windowWidth = ref(0);

// 1. Логика динамического Zoom
const dynamicZoom = computed(() => {
  if (windowWidth.value === 0) return {};

  // ПЛАНШЕТЫ И МОБИЛЬНЫЕ (< 1024px): Zoom 1
  if (windowWidth.value < 1024) {
    return { zoom: 1 };
  }

  // ДЕСКТОП: Рассчитываем zoom, стремясь к 1.9 при ширине 1600px
  let zoomVal = (windowWidth.value / 1600) * 1.9;

  // Ограничиваем: минимум 1, максимум 1.9
  zoomVal = Math.min(Math.max(zoomVal, 1), 1.9);

  return { zoom: zoomVal };
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  // Инициализация размеров
  handleResize();
  window.addEventListener('resize', handleResize);

  // 2. Логика анимации появления (IntersectionObserver)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (sectionRef.value) observer.observe(sectionRef.value);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const skills = [
  { num: 1, text: 'Понимаем специфику вашего предприятия. Оперативно оказываем услуги и вовремя оформляем итоговую документацию' },
  { num: 2, text: 'Работаем в вашей графике. Мы подстраиваемся под удобный для ваших сотрудников режим и географию работы' },
  { num: 3, text: 'Рассчитываем наиболее выгодные условия и оказываем только действительно необходимые услуги' },
  { num: 4, text: 'Разрабатываем и внедряем уникальные программы по требованиям заказчика' },
  { num: 5, text: 'Бережно обрабатываем и строго охраняем персональные данные всех наших клиентов' },
  { num: 6, text: 'Предупреждаем о рисках: подскажем как не попасть под проверку и не нарушить закон. Безопасность – превыше всего' },
]
</script>

<template>
  <!-- Привязываем :style -->
  <section class="skills-section" ref="sectionRef" :style="dynamicZoom">
    <h2 class="section-title">что мы умеем</h2>
    <div class="skills-grid">
      <div class="skill-item" v-for="skill in skills" :key="skill.num">
        <div class="skill-number">{{ skill.num }}</div>
        <div class="skill-text">{{ skill.text }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Стили из .skills-section */
.skills-section {
  background-color: #f9f9f9;
  padding: 80px 40px;

  color: #000;

  /* Добавлено для корректного отображения Zoom */
  max-width: 1400px;
  margin: 0 auto;
  transition: zoom 0.1s linear;
}

.section-title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 400; margin-bottom: 60px; }
.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); row-gap: 60px; }
.skill-item { padding: 0 40px; border-right: 1px solid #d0d0d0; display: flex; flex-direction: column; }
.skill-item:nth-child(3n) { border-right: none; }
.skill-item:nth-child(3n+1) { padding-left: 0; }
.skill-number { font-size: clamp(3rem, 6vw, 5rem); font-weight: 300; margin-bottom: 30px; opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
.skill-text { font-size: 1.1rem; line-height: 1.4; opacity: 0; transform: translateY(20px); transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1); }

/* Анимация через класс .animate на родителе */
.skills-section.animate .skill-number,
.skills-section.animate .skill-text { opacity: 1; transform: translateY(0); }

/* Задержки */
.skills-section.animate .skill-item:nth-child(1) .skill-number { transition-delay: 0.1s; }
.skills-section.animate .skill-item:nth-child(1) .skill-text { transition-delay: 0.2s; }

.skills-section.animate .skill-item:nth-child(2) .skill-number { transition-delay: 0.2s; }
.skills-section.animate .skill-item:nth-child(2) .skill-text { transition-delay: 0.3s; }

.skills-section.animate .skill-item:nth-child(3) .skill-number { transition-delay: 0.3s; }
.skills-section.animate .skill-item:nth-child(3) .skill-text { transition-delay: 0.4s; }

.skills-section.animate .skill-item:nth-child(4) .skill-number { transition-delay: 0.4s; }
.skills-section.animate .skill-item:nth-child(4) .skill-text { transition-delay: 0.5s; }

.skills-section.animate .skill-item:nth-child(5) .skill-number { transition-delay: 0.5s; }
.skills-section.animate .skill-item:nth-child(5) .skill-text { transition-delay: 0.6s; }

.skills-section.animate .skill-item:nth-child(6) .skill-number { transition-delay: 0.6s; }
.skills-section.animate .skill-item:nth-child(6) .skill-text { transition-delay: 0.7s; }

/* Адаптив: до 1024px отключаем зум и меняем сетку */
@media (max-width: 1024px) {
  .skills-section { zoom: 1 !important; max-width: 100%; }

  .skills-grid { grid-template-columns: repeat(2, 1fr); }
  /* Сброс и переназначение границ для 2 колонок */
  .skill-item { border-right: 1px solid #d0d0d0; padding-left: 20px; padding-right: 20px; }
  .skill-item:nth-child(3n) { border-right: 1px solid #d0d0d0; }
  .skill-item:nth-child(3n+1) { padding-left: 20px; }

  .skill-item:nth-child(2n) { border-right: none; }
  .skill-item:nth-child(2n+1) { padding-left: 0; }
}

@media (max-width: 600px) {
  .skills-section { padding: 40px 15px; }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr); /* Оставляем 2 колонки */
    row-gap: 40px;
  }

  .skill-item {
    /* Убираем нижнюю границу, которая была в старой версии */
    border-bottom: none;
    /* Возвращаем правую границу */
    border-right: 1px solid #d0d0d0;
    /* Уменьшаем отступы, так как экран узкий */
    padding: 0 10px;
  }

  /* ЛОГИКА ГРАНИЦ ДЛЯ МОБИЛЬНЫХ (2 колонки) */
  /* Четные (правые) - без границы справа */
  .skill-item:nth-child(2n) { border-right: none; padding-right: 0; }

  /* Нечетные (левые) - без отступа слева */
  .skill-item:nth-child(2n+1) { padding-left: 0; }

  /* Уменьшаем шрифты, чтобы влезло */
  .skill-number { font-size: 2.5rem; margin-bottom: 10px; }
  .skill-text { font-size: 0.85rem; }
}
</style>
