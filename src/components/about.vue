<script setup lang="ts">

</script>

<template>
  <section class="founders-section">
    <!-- Первый блок -->
    <div class="founder-card light">
      <div class="left" style="    flex: 1 1 30%;">
        <img class="avatar" src="@/assets/dir.jpg" />
        <div class="info">Ильсур Исламов<br/>
          генеральный директор
        </div>
      </div>
      <div class="right">
        <p>

          <span class="link">мы - профессионалы.</span> Наш опыт – организация эффективных медицинских программ для работников и предприятий. Мы быстро и нестандартно мыслим, чтобы сделать медицинскую помощь доступной и качественной

        </p>
      </div>
    </div>

    <!-- Второй блок (добавлен класс reverse) -->
    <div class="founder-card dark reverse">
      <div class="left dark-text" style="flex: 1 1 21%;">
        <img class="photo photopk" src="@/assets/doc.webp" />

        <p class="textmob">
          мы умеем работать как с крупными промышленными предприятиями,так и с небольшими частными компаниями, медицинскими организациями и многими другими сферами
         </br>
          Степанов Роберт
          главный врач
        </p>

        <div class="info mt-4">
        </div>
      </div>
      <div class="right">
        <p class="textpk">

          мы умеем работать как с крупными промышленными предприятиями,так и с небольшими частными компаниями, медицинскими организациями и многими другими сферами
          <br/>
          <span> Степанов Роберт<br/>
            главный врач</span>
        </p>
        <img class="photo photomob" src="@/assets/doc.webp" />

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Просто изображения в assets или URL
</script>

<style scoped>


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
  text-indent: 4%;
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
