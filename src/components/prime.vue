<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Map from '@/components/map.vue'
gsap.registerPlugin(ScrollTrigger)

const numberRefs: HTMLElement[] = []

onMounted(() => {
  numberRefs.forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: i * 0.2,
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    })
  })
})
</script>

<template>
  <section class="skills">

      <h2 class="skills-title">Наши преимущества</h2>



    <div class="skills-grid">
      <div class="skill">
        <div class="number" :ref="el => numberRefs[0] = el">1</div>
        <p>
         <span style="color:#e72d50; font-weight: bold; ">География медицинских площадок:</span>  <br />
          Казань, Набережные Челны, Нижнекамск, Елабуга, Альметьевск, Лениногорск
        </p>
      </div>
      <div class="skill">
        <div class="number" :ref="el => numberRefs[1] = el">2</div>
        <p>
         <span style="color:#e72d50; font-weight: bold; ">Медицинские специалисты</span>  <br/> с опытом работы на промышленных предприятиях
        </p>
      </div>
      <div class="skill">
        <div class="number" :ref="el => numberRefs[2] = el">3</div>
        <p>

       <span style="color:#e72d50; font-weight: bold; "> Гибкая ценовая политика</span>
        </p>
      </div>
    </div>

    <Map/>

    <div class="skills-grid" style="margin-top: 15px">
      <div class="skill">
        <div class="number" :ref="el => numberRefs[3] = el">4</div>
        <p>

         <span style="color:#e72d50; font-weight: bold; "> Юридическая гарантия</span>  <br />
          Все заключения соответствуют требованиям Роспотребнадзора и трудового законодательства.
        </p>
      </div>
      <div class="skill">
        <div class="number" :ref="el => numberRefs[4] = el">5</div>
        <p>

         <span style="color:#e72d50; font-weight: bold; ">Сроки "под ключ" </span> <br/>
          От составления списка работников до сдачи отчетности в контролирующие органы.
        </p>
      </div>
      <div class="skill">
        <div class="number" :ref="el => numberRefs[5] = el">6</div>
        <p>

         <span style="color:#e72d50; font-weight: bold; "> Индивидуальный подход</span> <br/>
          Учет специфики вашего производства и особенностей закупочных процедур.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 60px 20px;
  font-family: sans-serif;

  text-align: center;
}

.skills-title {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 40px;
  text-align: left;
  padding-left: 5%;
}

.skills-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  border-top: 1px solid transparent;
}

.skill {
  flex: 1 1 300px;
  max-width: 550px;
  border-left: 1px solid #000;
  padding: 0 20px;
}

.skill:first-child {
  border-left: none;
}

.number {
  font-size: 64px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: left;
  color: #0D72b9;
}

.skill p {
  font-size: 27px;
  line-height: 1.5;
  text-align: left;
}

@media (max-width: 768px) {
  .skills-grid {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }

  .skill {
    border-left: none;
    border-top: 1px solid #000;
    padding-top: 20px;
  }

  .skill:first-child {
    border-top: none;
  }
}
</style>
