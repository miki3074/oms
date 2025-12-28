<script setup lang="ts">
// import { ref, onMounted } from 'vue'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
//
// gsap.registerPlugin(ScrollTrigger)
//
// const sectionRef = ref(null)
//
// onMounted(() => {
//   gsap.from(".why-title", {
//     opacity: 0,
//     x: -40,
//     duration: 1,
//     scrollTrigger: {
//       trigger: sectionRef.value,
//       start: "top 80%",
//     }
//   })
//
//   gsap.utils.toArray(".why-item").forEach((el: Element, i: number) => {
//     gsap.from(el, {
//       opacity: 0,
//       y: 50,
//       duration: 0.6,
//       delay: i * 0.2,
//       scrollTrigger: {
//         trigger: el,
//         start: "top 85%",
//       }
//     })
//   })
// })
//


</script>

<template>
<!--  <section class="why-section" ref="sectionRef">-->
<!--    <div class="why-wrapper">-->

<!--      &lt;!&ndash; Левая колонка &ndash;&gt;-->
<!--      <div class="why-left">-->
<!--        <h2 class="why-title">почему мы крутые</h2>-->
<!--        <p class="why-text">-->
<!--          мы предлагаем коллективный разум,<br/>-->
<!--          экспертность и целую систему, <br/>-->
<!--          работающую как слаженный оркестр,<br/>-->
<!--          а не просто знания отдельных специалистов.<br/>-->

<!--        </p>-->
<!--      </div>-->

<!--      &lt;!&ndash; Правая колонка &ndash;&gt;-->
<!--      <div class="why-right">-->
<!--        <div class="why-item">-->
<!--          <div class="why-icon">🚫</div>-->
<!--          <div class="why-content">-->
<!--            <h3>Штатные бухгалтеры</h3>-->
<!--            <p>Даже самый лучший в мире бухгалтер не может знать всего. Его знания и умения ограничиваются местами работы и опытом, полученным на них.</p>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="why-item">-->
<!--          <div class="why-icon">🚫</div>-->
<!--          <div class="why-content">-->
<!--            <h3>Другие аутсорсинговые агентства</h3>-->
<!--            <p>Слишком сильно зависят от навыков и знаний нескольких ключевых сотрудников.<br />Если важный сотрудник уходит в отпуск или увольняется, это заметно влияет на качество услуг, так как работает не система, а конкретный человек.</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->
<!--  </section>-->
</template>

<style scoped>
/*.why-section {*/
/*  padding: 80px 40px;*/
/*  background-color: #fff;*/
/*  font-family: sans-serif;*/
/*}*/

/*.why-wrapper {*/
/*  display: grid;*/
/*  grid-template-columns: 1fr 1fr;*/
/*  gap: 60px;*/
/*  align-items: flex-start;*/
/*}*/

/*.why-left {*/
/*  text-align: left;*/
/*  padding-left: 19%;*/
/*}*/

/*.why-title {*/
/*  font-size: 57px;*/
/*  font-weight: bold;*/
/*  margin-bottom: 24px;*/
/*  color: black;*/
/*}*/

/*.why-text {*/
/*  font-size: 44px;*/
/*  color: #0050ff;*/
/*  line-height: 1.6;*/
/*}*/

/*.why-right {*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  gap: 40px;*/
/*  padding-right: 10%;*/
/*  padding-left: 32%;*/

/*}*/

/*.why-item {*/
/*  display: flex;*/
/*  align-items: flex-start;*/
/*  gap: 20px;*/
/*}*/

/*.why-icon {*/
/*  font-size: 24px;*/
/*  margin-top: 6px;*/
/*}*/

/*.why-content h3 {*/
/*  margin: 0 0 10px;*/
/*  font-size: 40px;*/
/*  font-weight: 700;*/
/*  color: #000;*/
/*}*/

/*.why-content p {*/
/*  font-size: 34px;*/
/*  line-height: 1.5;*/
/*  color: #222;*/
/*}*/

/*@media (max-width: 768px) {*/
/*  .why-wrapper {*/
/*    grid-template-columns: 1fr;*/
/*    gap: 40px;*/
/*  }*/

/*  .why-title {*/
/*    font-size: 32px;*/
/*  }*/

/*  .why-text {*/
/*    font-size: 18px;*/
/*  }*/

/*  .why-item {*/
/*    flex-direction: row;*/
/*    gap: 16px;*/
/*  }*/
//}
</style>
