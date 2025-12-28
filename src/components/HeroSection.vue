<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Анимация появления строк заголовка
  const elements = document.querySelectorAll('.headline span');
  elements.forEach((el, index) => {
    // Начальные стили для JS-анимации
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = `all 0.8s cubic-bezier(0.25, 1, 0.5, 1) ${index * 0.15}s`;

    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  });
});
</script>

<template>
  <section class="hero-section">
    <!-- Фоновый шум для текстуры (опционально, добавляет "дороговизны") -->
    <div class="noise-overlay"></div>

    <!-- Шапка -->
    <header class="header">
      <div class="logo">
        <div class="logo-icon"></div>
        <span>НПО «ОМС»</span>
      </div>
      <div class="header-right">
        <!-- Можно добавить телефон или соцсети -->
      </div>
    </header>

    <div class="main-content">
      <!-- Подзаголовок -->
      <h2 class="sub-title">
        медицинское обеспечение<br>
        <span class="highlight">промышленных предприятий</span>
      </h2>

      <!-- Главный заголовок -->
      <div class="headline">
        <span class="text-left">скорость.</span>
        <span class="text-center">экспертиза.</span>
        <span class="text-right">вовлечённость.</span>
      </div>

      <!-- Изображение -->
      <div class="hero-image-container">
        <!-- Используем более подходящее фото (инженер/медик) -->
        <img
         src="../assets/qweqwe.jpg"
        >
        <!-- Градиент поверх фото, чтобы скрыть переход -->
        <div class="image-gradient"></div>
      </div>
    </div>

    <!-- Футер секции -->
    <div class="footer-bar">
      <a href="#" class="cta-button">
        <span>связаться </span>

      </a>

      <div class="features-grid">
        <div class="feature-item">
          <img style="filter: invert(1);" class="tn-atom__img t-img loaded" data-original="https://static.tildacdn.com/tild3238-6339-4631-a339-386566373031/arrow.svg" src="https://static.tildacdn.com/tild3238-6339-4631-a339-386566373031/arrow.svg" alt="" imgfield="tn_img_1638954839732">

          более 100 сотрудников
        </div>
        <div class="feature-item">
          <img style="filter: invert(1);" class="tn-atom__img t-img loaded" data-original="https://static.tildacdn.com/tild3238-6339-4631-a339-386566373031/arrow.svg" src="https://static.tildacdn.com/tild3238-6339-4631-a339-386566373031/arrow.svg" alt="" imgfield="tn_img_1638954839732">

          опытная команда
        </div>
        <div class="feature-item">
          <img style="filter: invert(1);" class="tn-atom__img t-img loaded" data-original="https://static.tildacdn.com/tild3238-6339-4631-a339-386566373031/arrow.svg" src="https://static.tildacdn.com/tild3238-6339-4631-a339-386566373031/arrow.svg" alt="" imgfield="tn_img_1638954839732">

          вовремя сдаём отчётность
        </div>
        <div class="feature-item">
          <img style="filter: invert(1);" class="tn-atom__img t-img loaded" data-original="https://static.tildacdn.com/tild3238-6339-4631-a339-386566373031/arrow.svg" src="https://static.tildacdn.com/tild3238-6339-4631-a339-386566373031/arrow.svg" alt="" imgfield="tn_img_1638954839732">

          ориентируемся на заказчика
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Подключаем современный шрифт (если еще не подключен глобально) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');

/* --- Основной контейнер --- */
.hero-section {
  background-color: #1a1a1c; /* Более глубокий темный оттенок */
  background-image: radial-gradient(circle at 50% 0%, #2a2a2e 0%, #1a1a1c 60%); /* Легкий свет сверху */
  position: relative;
  min-height: 81vh;
  display: flex;
  flex-direction: column;
  padding: 30px 60px;
  overflow: hidden;
  color: #fff;
  font-family: 'Inter', sans-serif;
}

/* Эффект шума (Grain) */
.noise-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  opacity: 0.03;
  pointer-events: none;

}

/* --- Шапка --- */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  margin-bottom: 20px;
}

.logo {
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
}

.logo-icon {
  width: 12px;
  height: 12px;
  background-color: #2b6eff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(43, 110, 255, 0.6);
}

/* --- Центральная часть --- */
.main-content {
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
}

/* Подзаголовок */
.sub-title {
  color: #fff;
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  line-height: 1.3;
  margin-bottom: 30px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  z-index: 5;
}

.highlight {
  color: #2b6eff;
  font-weight: 600;
}

/* Заголовки (Лесенка) */
.headline {
  position: relative;
  z-index: 5;
  font-size: clamp(4rem, 11vw, 9rem); /* Увеличил шрифт для масштаба */
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.03em;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* mix-blend-mode: overlay;  Можно включить для интересного наложения на фото, но снижает читаемость */
}

.headline span {
  display: block;
  /* Тень для лучшей читаемости поверх фото */
  text-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

/* --- Фотография --- */
.hero-image-container {
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  height: 90vh; /* Высота фото */
  width: auto;
  min-width: 600px;
  pointer-events: none;
}

.hero-image-container img {
  height: 100%;
  width: auto;
  object-fit: cover;
  /* Фильтры: контраст и затемнение для белого текста */
  filter: grayscale(40%) contrast(1.1) brightness(0.6);
  /* Маска для плавного исчезновения снизу */
  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
}

/* --- Футер секции --- */
.footer-bar {
  display: flex;
  margin: 0 auto;
  align-items: flex-end;
  z-index: 10;
  margin-top: 40px;
  padding-bottom: 10px;
  margin: 0 11%;
  position: relative;
  top: -57px;
}

/* Кнопка */
.cta-button {
  background-color: #2b6eff;
  color: #fff;
  padding: 18px 45px;
  border-radius: 100px;
  font-size: 3.1rem;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(43, 110, 255, 0.25);
  //position: relative;
  //left: -16%;
  //top: -93px;
}

.cta-button:hover {
  background-color: #fff;
  color: #000;
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(255, 255, 255, 0.2);
}

.btn-arrow {
  width: 20px;
  height: 20px;
  transition: transform 0.3s;
}

.cta-button:hover .btn-arrow {
  transform: translateX(5px);
}

/* Сетка преимуществ */
.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 40px;
  font-size: 0.95rem;
  font-weight: 300;
  color: #e0e0e0;
  margin-left: 21%;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 2rem;
  //position: relative;
  //top: -97px;
  //left: 25%;
}

.check-icon {
  width: 18px;
  height: 18px;
  color: #2b6eff;
}

/* --- Адаптивность --- */
@media (max-width: 1024px) {
  .hero-section { padding: 20px; }

  .headline { font-size: 3.5rem; }

  .hero-image-container {
    width: 100%;
    height: 60vh;
    top: 40%;
  }

  .footer-bar { flex-direction: column; align-items: flex-start; gap: 30px; }
  .features-grid { grid-template-columns: 1fr; gap: 10px; width: 100%; }

  .cta-button { width: 100%; justify-content: center; }
}

@media (max-width: 600px) {
  .cta-button {
    display: none;
  }
  .footer-bar{
    top: 0;
    margin: 0;
  }
  .hero-image-container{
    display: none;
  }
  .main-content{
    flex-grow: 0.5;
  }
  .feature-item{

    font-size: 1rem;
  }
  .features-grid{

    gap: 25px;
  }
  .headline span { text-align: left; } /* На телефоне выравниваем всё влево */
  .sub-title { font-size: 1.2rem; }
  .headline { font-size: 2.8rem; line-height: 1.1; }

  .hero-image-container {
    position: relative;
    top: 0; left: 0; transform: none;
    width: 100%; height: 300px;
    margin: 20px 0;
    order: 2;
  }

  .main-content { justify-content: flex-start; }
}
</style>
