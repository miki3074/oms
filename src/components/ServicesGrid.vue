<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// --- ЛОГИКА ZOOM ---
const windowWidth = ref(0);

const dynamicZoom = computed(() => {
  if (windowWidth.value === 0) return {};

  // ПЛАНШЕТЫ И МОБИЛЬНЫЕ (< 1024px): Zoom 1
  if (windowWidth.value < 1024) {
    return { zoom: 1 };
  }

  // ДЕСКТОП: Zoom до 1.9
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

// --- ЛОГИКА МОДАЛЬНОГО ОКНА ---
const isModalOpen = ref(false);
const currentService = ref(null);

const openModal = (item) => {
  currentService.value = item;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = ''; // Разблокируем скролл
};

// --- ДАННЫЕ ---
const services = [
  {
    title: 'Предварительные и периодические медосмотры',
    description: 'Организуем проведение обязательных медицинских осмотров для сотрудников в соответствии с законодательством РФ. Быстро, качественно, без очередей.'
  },
  {
    title: 'Предрейсовые и предсменные медосмотры',
    description: 'Обеспечим контроль состояния здоровья водителей и сотрудников опасных производств перед началом смены. Работаем 24/7.'
  },
  {
    title: 'Медицинские освидетельствования',
    description: 'Проведение освидетельствований на состояние опьянения, а также для получения справок на оружие и водительское удостоверение.'
  },
  {
    title: 'Единое окно',
    description: 'Полный комплекс медицинских услуг в одном месте. Вам не придется заключать договоры с разными клиниками.'
  },
  {
    title: 'Психофизиологическое обследование',
    description: 'Диагностика психофизиологических качеств сотрудников для допуска к работам повышенной опасности.'
  },
  {
    title: 'Телемедицинские консультации',
    description: 'Удаленные консультации с врачами-экспертами. Дистанционные предрейсовые осмотры с использованием терминалов.'
  },
  {
    title: 'Электронный документооборот',
    description: 'Переведем всю медицинскую документацию в цифру. Быстрый доступ к заключениям и актам через личный кабинет.'
  },
  {
    title: 'Комплексное медицинское обеспечение',
    description: 'Аутсорсинг здравпунктов на предприятиях, дежурство скорой помощи на мероприятиях и вакцинация сотрудников.'
  }
]
</script>

<template>
  <!-- Основная секция -->
  <section class="services-section" :style="dynamicZoom">
    <h2 class="section-title">что мы предлагаем</h2>
    <div class="services-grid">
      <div
        class="service-card"
        v-for="(item, index) in services"
        :key="index"
        @click="openModal(item)"
      >
        <div class="card-top">
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-linecap="square" stroke-linejoin="miter"/>
          </svg>
        </div>
        <div class="card-title">{{ item.title }}</div>
      </div>
    </div>
  </section>

  <!-- МОДАЛЬНОЕ ОКНО -->
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isModalOpen" class="modal-backdrop" @click.self="closeModal">

        <!-- Контент модалки с зумом -->
        <div class="modal-content" :style="dynamicZoom">
          <button class="close-btn" @click="closeModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- Обертка для скролла внутри модалки, если текста много -->
          <div class="modal-scroll-area">
            <h3 class="modal-title">{{ currentService?.title }}</h3>
            <p class="modal-desc">
              {{ currentService?.description }}
            </p>
          </div>

          <button class="modal-cta-btn">оставить заявку</button>
        </div>

      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* --- ОСНОВНЫЕ СТИЛИ --- */
.services-section {
  background-color: #f2f2f2;
  padding: 60px 40px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  color: #000;
  transition: zoom 0.1s linear;
  /* Важно: разрешаем секции растягиваться по высоте */
  height: auto;

}

.section-title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 500;
  margin-bottom: 40px;
  line-height: 1.1;
}

/* Сетка */
.services-grid {
  display: grid;
  /* minmax(0, 1fr) предотвращает вылезание длинных слов за пределы сетки */
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

/* Карточка */
.service-card {
  background-color: #ffffff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #000;
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: 200px;

  /* ВАЖНО: Перенос длинных слов (Психофизиологическое...) */
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
}

.card-top { display: flex; justify-content: flex-end; }
.arrow-icon { width: 40px; height: 40px; transition: transform 0.3s ease; }
.arrow-icon path { stroke: #000; transition: stroke 0.3s ease; stroke-width: 1.5px; }

.card-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  max-width: 100%; /* Разрешаем занимать всю ширину */
  margin-top: 20px;
}

.service-card:hover { background-color: #2b6eff; color: #fff; transform: translateY(-5px); }
.service-card:hover .arrow-icon path { stroke: #fff; }
.service-card:hover .arrow-icon { transform: translate(5px, -5px); }

/* --- АДАПТИВ --- */
@media (max-width: 1200px) {
  .services-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 1024px) {
  .services-section { zoom: 1 !important; max-width: 100%; padding: 40px 20px; }
}

@media (max-width: 900px) {
  .services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 600px) {
  .services-section { padding: 40px 15px; } /* Меньше отступы по бокам */
  .services-grid { grid-template-columns: 1fr; } /* Одна колонка */
  .service-card { min-height: 0px; padding: 5px; } /* Чуть компактнее карточки */
  .card-title {max-width: 80%;        position: relative;
    top: -24px;
    left: 13px;}
  .card-top{
    position: relative;
    left: -16px;
    top: 29px;
  }
  .section-title { font-size: 2.2rem; margin-bottom: 30px; }
}
</style>

<style>
/* --- СТИЛИ МОДАЛКИ (Глобальные) --- */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px; /* Отступ от краев экрана */

  /* Разрешаем скролл, если модалка выше экрана */
  overflow-y: auto;
}

.modal-content {
  background-color: #fff;
  padding: 40px;
  width: 100%;
  max-width: 600px;
  position: relative;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: zoom 0.1s linear;

  /* Ограничиваем высоту модалки, чтобы она влезала на мобильные */
  max-height: 90vh;
}

/* Область скролла внутри модалки */
.modal-scroll-area {
  overflow-y: auto;
  max-height: 60vh; /* Оставляем место под кнопку */
  padding-right: 5px; /* Чтобы скроллбар не наезжал */
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 2;
}

.modal-title {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.2;
  color: #000;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-right: 30px;
}

.modal-desc {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}

.modal-cta-btn {
  background-color: #2b6eff;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  align-self: flex-start;
  transition: background 0.3s;
  margin-top: auto; /* Прижимаем к низу */
}

.modal-cta-btn:hover { background-color: #1a4ebd; }

/* Анимация */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 600px) {
  .modal-content { padding: 30px 20px; }
  .modal-title { font-size: 1.4rem; }
  .modal-cta-btn { width: 100%; text-align: center; }
}
</style>
