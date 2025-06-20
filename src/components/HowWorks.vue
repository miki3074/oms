<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stepsSection = ref(null)
const stepRefs = []

const steps = [
  { title: 'медицинская инфраструктура \n', desc: '' },
  { title: 'внутренний контроль качества\n', desc: '' },
  { title: 'квалифицированный медицинский персонал\n', desc: '' },
  { title: 'автоматизация и защищенный документооборот\n', desc: '' },
  { title: 'партнерство с сетью медицинских центров\n', desc: '' },
]

const connectorRefs = []

onMounted(() => {
  gsap.from('.steps-title', {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
      trigger: stepsSection.value,
      start: 'top center',
    },
  });

  stepRefs.forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.2,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });

  connectorRefs.forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      scaleY: 0.2,
      transformOrigin: 'top',
      duration: 0.6,
      delay: i * 0.2 + 0.2, // немного позже шага
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });

  if (window.innerWidth > 768) {
    ScrollTrigger.create({
      trigger: stepsSection.value,
      start: 'top top',
      end: '+=1200',
      scrub: true,
      pin: '.steps-left',
      pinSpacing: false
    });
  }

});
</script>

<template>
  <section class="steps-section" ref="stepsSection">
    <div class="steps-wrapper">
      <!-- Левая часть -->
      <div class="steps-left">
        <h2 class="steps-title">Как мы работаем</h2>
        <p class="edo-note">
          целая система, а не просто медицинский осмотр
          <a href="#contact" class="cta-button">связаться</a>
        </p>

      </div>

      <!-- Правая часть -->
      <div class="steps-right">
        <template v-for="(step, i) in steps" :key="i">
          <div
            class="step"
            :ref="el => stepRefs[i] = el"
          >
            <div class="step-number">{{ step.title }}</div>
            <div class="step-desc">{{ step.desc }}</div>
          </div>

          <!-- Добавляем ref для connector -->
          <div
            v-if="i < steps.length - 1"
            class="step-connector"
            :ref="el => connectorRefs[i] = el"
            :key="'line-' + i"
          />
        </template>
      </div>
    </div>
  </section>




</template>


<style scoped>

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

.steps-section {
  padding: 80px 20px;
  font-family: sans-serif;
  background: #fff;
}

.steps-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
  position: relative;
}

/* Левая часть */
.steps-left {
  position: sticky;
  top: 100px;
  z-index: 2;
  padding-left: 5%;
  text-align: right;
}

.steps-title {
  font-size: 50px;
  font-weight: bold;
  color: #222;
  margin-bottom: 20px;
}

/* Правая часть */
.steps-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Один шаг */
.step {
  width: 264px;
  height: 266px;
  background: white;
  padding: 20px;
  margin: 10px 0;
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid #0D72b9;
}

.step-number {
  font-size: 20px;
  font-weight: 600;
  color: #000;
}

.step-desc {
  font-size: 16px;
  color: #333;
}

.step-connector {
  width: 2px;
  height: 40px;
  background-color: #e72d50;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.edo-note{
  font-size: 40px;
}

@media (max-width: 768px) {
  .steps-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .steps-left {
    position: sticky;     /* оставить sticky */
    top: 20px;            /* прижать ближе к верху экрана */
    text-align: center;
    padding-left: 0;
    z-index: 10;          /* убедиться, что над step-ами */
  }

  .steps-title {
    font-size: 32px;
  }

  .step {
    width: 220px;
    height: 220px;
  }
}
</style>
