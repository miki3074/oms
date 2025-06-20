<script setup lang="ts">
import { ref, onMounted } from 'vue'

const backgroundLayer = ref<HTMLElement | null>(null)

function handleMouseMove(event: MouseEvent) {
  const { clientX, clientY } = event
  const x = (clientX / window.innerWidth - 0.5) * 30
  const y = (clientY / window.innerHeight - 0.5) * 30

  if (backgroundLayer.value) {
    backgroundLayer.value.style.transform = `translate(${x}px, ${y}px)`
  }
}
</script>

<template>
  <section class="promo-banner" @mousemove="handleMouseMove">
    <div class="background-layer" ref="backgroundLayer"></div>
    <div class="promo-content">
      <div class="promo-left">
        <div class="logo">Logo <span>&</span> Logo</div>
        <div class="subtitle">медицинские<br />осмотры</div>
        <h1 class="headline cs">
          скорость.</h1>
          <h1 class="headline cs1">   экспертиза.</h1>
          <h1 class="headline cs2">   вовлечённость.</h1>
        <a href="#contact" class="cta-button">связаться</a>

        <ul class="features">
          <li>➤ более 70 сотрудников</li>
          <li>➤ опытная команда</li>
          <li>➤ вовремя сдаём отчётность</li>
          <li>➤ ориентируемся на заказчика</li>
        </ul>
      </div>

      <div class="promo-right">


        <div class="promo-contacts">
          <p>+7 (919) 697-27-77</p>
          <div class="social-buttons">
            <button>info@rcpprt.ru.</button>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>


.headline,
.logo,
.subtitle,
.features li,
.promo-contacts p {
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6); /* чёрная тень */
}

.promo-content {
  mix-blend-mode: difference;
  z-index: 1;
}

.promo-banner {
  position: relative;
  overflow: hidden;
}

.background-layer {
  position: absolute;
  top: 0;
  left: -20%;
  width: 120%;
  height: 120%;
  background-image: url('../assets/qweqwe.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;
  transition: transform 0.1s ease;
  pointer-events: none;
}

.promo-content {
  position: relative;
  z-index: 1; /* чтобы был над фоном */
}


.promo-banner {
  background-color: #1d1b1f;
  color: white;
  padding: 40px 20px;
  font-family: sans-serif;
}

.promo-content {
  max-width: 1400px;
  padding: 10px 4%;
  display: flex;

  justify-content: space-between;
  align-items: flex-start;
}

.promo-left {
  flex: 1 1 55%;
  padding: 20px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  text-transform: lowercase;
}

.logo span {
  font-weight: normal;
}

.subtitle {
  font-size: 53px;
  color: #0050ff;
  margin: 10px 0 30px;
  line-height: 1.2;
}

.headline {
  font-size: 142px;
  font-weight: 100;
  line-height: 1.1;
  margin: 0;
}
.cs1{
  position: relative;
  left: 51%;
}
.cs2{
  position: relative;
  left: 116%;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(90deg, #0050ff, #4a90ff);
  color: white;
  font-size: 54px;
  padding: 12px 36px;
  border-radius: 40px;
  text-decoration: none;
  margin-bottom: 30px;
  position: relative;

  bottom: -119px;
}

.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* две равные колонки */
  gap: 8px 20px; /* вертикальный и горизонтальный отступ между элементами */
  list-style: none;
  padding: 0;
  margin: 24px 0;
  position: relative;
  left: 68%;
}

.features li {
  font-size: 31px;
  color: white;
  line-height: 1.5;
}

.features .highlight {
  color: #007bff; /* или другой цвет выделения */
  font-weight: bold;
}

.promo-right {
  flex: 1 1 40%;
  position: relative;
  text-align: right;
  padding: 20px;
  left: 70%;
}

.promo-image {
  max-height: 400px;
  width: auto;
  object-fit: contain;
}

.promo-badge {
  position: absolute;
  top: 20px;
  right: 0;
  color: white;
  text-align: left;
  font-size: 18px;
  line-height: 1.3;
}

.promo-badge img {
  width: 80px;
  margin-bottom: 10px;
}

.promo-contacts {
  display: grid;
  grid-template-columns: auto auto; /* две колонки: телефон и соц. кнопки */
  align-items: center; /* выравнивание по вертикали */
  gap: 16px; /* расстояние между колонками */
}

.promo-contacts p {
  margin: 0;
  font-size: 20px;
  color: white;
  font-weight: 600;
}

.social-buttons {
  display: flex;
  gap: 8px; /* расстояние между кнопками */
}

.social-buttons button {
  background: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 21px;

  cursor: pointer;
  padding: 10px;
}

</style>
