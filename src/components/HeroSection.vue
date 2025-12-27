<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const elements = document.querySelectorAll('.headline span');
  elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `all 0.6s ease ${index * 0.2}s`;

    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  });
});
</script>

<template>
  <section class="hero-section">
    <!-- Шапка -->
    <header class="header">
      <div class="logo">LOGO  </div>
      <div class="header-right">


      </div>
    </header>

    <div class="main-content">
      <h2 class="sub-title">медицинское обеспечени<br>промышленных предприятий</h2>
      <div class="headline">
        <span class="text-left">скорость.</span>
        <span class="text-center">экспертиза.</span>
        <span class="text-right">вовлечённость.</span>
      </div>
      <div class="hero-image-container">
        <img src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?q=80&w=1000&auto=format&fit=crop" alt="Мужчина">
      </div>
    </div>

    <div class="footer-bar">
      <a href="#" class="cta-button">связаться</a>
      <div class="features-grid">
        <!-- Можно оставить статикой или вынести в v-for -->
        <div class="feature-item"><span class="arrow"></span> более 100 сотрудников</div>
        <div class="feature-item"><span class="arrow"></span> опытная команда</div>
        <div class="feature-item"><span class="arrow"></span> вовремя сдаём отчётность</div>
        <div class="feature-item"><span class="arrow"></span> ориентируемся на заказчика</div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Вставляем сюда CSS, относящийся ТОЛЬКО к Hero секции.
   Я скопирую основные части для примера */

.main-content{

}

.hero-section {
  background-color: #222023;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  overflow: hidden;
  color: #fff;
}

/* ... Остальные стили из твоего блока <style> для hero ... */
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
.logo { font-weight: 700; font-size: 1.2rem; display: flex; align-items: center; gap: 5px; }
.logo span { background: #fff; color: #000; border-radius: 50%; width: 20px; height: 20px; display: flex; justify-content: center; align-items: center; font-size: 12px; }
.header-right { display: flex; gap: 20px; align-items: center; }
.social-btn { border: 1px solid #fff; border-radius: 50%; width: 35px; height: 35px; display: flex; justify-content: center; align-items: center; transition: 0.3s; }
.social-btn:hover { background: #fff; color: #000; }
.headline { z-index: 5; font-size: clamp(3rem, 9vw, 8rem); font-weight: 500; line-height: 1; display: flex; flex-direction: column; width: 100%; }
.headline span { display: block; }
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.sub-title { color: #2b6eff; font-size: clamp(1.5rem, 3vw, 2.5rem); margin-bottom: 20px; }
.hero-image-container { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1; width: 60vh; max-width: 500px; pointer-events: none; }
.hero-image-container img { width: 100%; filter: contrast(1.1) brightness(0.9); }
.footer-bar { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 40px; z-index: 10; }
.cta-button { background-color: #2b6eff; color: #fff; padding: 15px 40px; border-radius: 30px; font-size: 1.2rem; transition: background 0.3s; }
.cta-button:hover { background-color: #1a4ebd; }
.features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px 40px; }
.feature-item { display: flex; align-items: center; gap: 10px; }
.arrow { display: inline-block; width: 15px; height: 15px; border-top: 2px solid #fff; border-right: 2px solid #fff; transform: rotate(45deg); margin-right: 5px; }
.new-tag { color: #2b6eff; font-weight: 700; margin-right: 5px; }

@media (max-width: 768px) {
  .hero-section { padding: 20px; }
  .header { flex-direction: column; gap: 15px; align-items: flex-start; }
  .hero-image-container { position: relative; top: 0; left: 0; transform: none; width: 100%; order: 2; margin: 20px 0; }
  .main-content { justify-content: flex-start; }
  .headline { font-size: 3rem; order: 1; }
  .headline span { text-align: left; }
  .footer-bar { flex-direction: column; align-items: stretch; gap: 30px; order: 4; }
  .features-grid { grid-template-columns: 1fr; }
}
</style>
