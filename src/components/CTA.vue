<script setup lang="ts">

</script>

<template>
  <section class="founders-section">
    <!-- Первый блок -->
    <div class="founder-card light">

      <div class="right">
        <p>

          <span class="link">Остались вопросы?</span><br/>
          Наш специалист проконсультирует вас:<br/>
          ▸ По перечню необходимых осмотров<br/>
          ▸ Требованиям к опасным производствам<br/>
          ▸ Стоимости для вашей численности<br/>

        </p>
      </div>
      <div class="left" style="    flex: 1 1 30%;">
        <a href="#contact" class="cta-buttons">info@rcpprt.ru.</a>
        <a href="#contact" class="cta-button">связаться</a>

      </div>


    </div>




  </section>
</template>

<script setup lang="ts">
// Просто изображения в assets или URL
</script>

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

}

.cta-buttons{
  display: inline-block;
border: 1px solid;
  color: black;
  font-size: 54px;
  padding: 12px 36px;
  border-radius: 40px;
  text-decoration: none;
  margin-bottom: 30px;
}

.founder-card.reverse {
  flex-direction: row-reverse;
}

/* Мобильная версия — всегда вертикально, без реверса */
@media (max-width: 768px) {
  .founder-card {
    flex-direction: column !important;
    text-align: center;
  }
}

.founders-section {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 60px 20px;
  font-family: sans-serif;
}

.founder-card {
  display: flex;
  justify-content: space-between;

  align-items: center;
  gap: 20px;
}

.founder-card.light {
  background: #fff;
  color: #000;
  height: 40vh;
}

.founder-card.dark {
  background: #1e1e1e;
  color: #fff;
  padding: 40px 67px;

  height: 40vh;
}

.founder-card .left,
.founder-card .right {
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left {
  flex-direction: column;
  text-align: center;
}

.right p,
.left p {
  font-size: 40px;
  line-height: 1.6;
  max-width: 100%;

}

.avatar {


  object-fit: cover;
  margin-bottom: 10px;
  zoom: 0.294;
}

.photo {
  max-width: 300px;
  border-radius: 10px;
}

.name {
  font-weight: bold;
  text-transform: lowercase;
}

.title {
  font-size: 14px;
  color: #888;
}

.link {
  color: #0070f3;
  font-weight: 600;
  text-decoration: none;
}

.textmob{
  display: none;
}

.photomob{
  display: none;
}

/* Адаптация под мобилки */
@media (max-width: 768px) {
  .founder-card {
    flex-direction: column;
    text-align: left;
  }

  .right, .left {
    flex: 1 1 100%;
  }

  .right p, .left p {
    font-size: 18px;
  }

  .photo {
    max-width: 200px;
  }

  .founders-section{
    padding: 0 20px;
  }
  .avatar{
    height: 14vh;
    zoom: 1.294;
  }
  .right p,
  .left p{
    text-indent: 0;
  }

  .founder-card.dark{
    padding: 5%;
  }

  .founder-card.light{
    margin-bottom: 10%;
  }


  .textmob{
    display: block;
    text-align: left;
    text-indent: 4% !important;
  }
  .photomob{
    display: block;
  }
  .textpk{
    display: none;
  }
  .photopk{
    display: none;
  }
}
</style>
