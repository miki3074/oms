<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(0);

// --- ЛОГИКА ZOOM (Как везде) ---
const dynamicZoom = computed(() => {
  if (windowWidth.value === 0) return {};
  if (windowWidth.value < 1024) return { zoom: 1 };

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
</script>

<template>
  <footer class="footer-section" :style="dynamicZoom">

    <!-- 1. БЛОК С КАРТОЙ -->
    <div class="map-container">
      <!--
        Используем iframe Яндекс.Карт.
        Класс .map-frame имеет CSS-фильтр для темного стиля.
      -->
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=49.122467%2C55.792137&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzIwODAzNBJQ0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQotCw0YLQsNGA0YHRgtCw0L0sINCa0LDQt9Cw0L3RjSwg0YPQu9C40YbQsCDQn9GD0YjQutC40L3QsCwgMTIiCg1lQlFCFfBXX0I%2C&z=17"
        width="100%"
        height="400"
        frameborder="0"
        allowfullscreen="true"
        class="map-frame"
      ></iframe>

      <!-- Оверлей, чтобы карта не перехватывала скролл сразу -->
      <div class="map-overlay"></div>
    </div>

    <!-- 2. БЛОК С КОНТЕНТОМ -->
    <div class="footer-content">

      <div class="footer-grid">

        <!-- Колонка 1: Название -->
        <div class="footer-col brand-col">
          <div class="company-name">ООО НПО «ОМС»</div>
          <div class="company-desc">
            Общество с ограниченной ответственностью<br>
            Научно-производственное объединение<br>
            «Объединенные медицинские системы»
          </div>
          <div class="copyright">
            © {{ new Date().getFullYear() }} Все права защищены.
          </div>
        </div>

        <!-- Колонка 2: Адреса -->
        <div class="footer-col">
          <h3 class="col-title">Адреса</h3>

          <div class="info-group">
            <span class="label">Центральный офис:</span>
            <p class="value">420111, РТ, г. Казань,<br>ул. Пушкина, д. 12, офис 404</p>
          </div>

          <div class="info-group">
            <span class="label">Юридический адрес:</span>
            <p class="value">423831, РТ, г. Набережные Челны,<br>ул. Шамиля Усманова, д. 63, офис 208в</p>
          </div>

          <div class="info-group">
            <span class="label">Почтовый адрес:</span>
            <p class="value">420132, РТ, г. Казань, а/я 42</p>
          </div>
        </div>

        <!-- Колонка 3: Реквизиты -->
        <div class="footer-col">
          <h3 class="col-title">Реквизиты</h3>

          <ul class="req-list">
            <li>
              <span class="req-label">ОГРН:</span>
              <span class="req-val">1201600094190</span>
            </li>
            <li>
              <span class="req-label">ИНН:</span>
              <span class="req-val">1650397806</span>
            </li>
            <li>
              <span class="req-label">КПП:</span>
              <span class="req-val">165001001</span>
            </li>
          </ul>
        </div>

        <!-- Колонка 4: Контакты / Кнопка -->
        <div class="footer-col contact-col">
          <a href="tel:+74951201236" class="footer-phone">+7 (495) 120-12-36</a>
          <a href="mailto:info@oms-npo.ru" class="footer-email">info@oms-npo.ru</a>

<!--          <div class="socials">-->
<!--            <a href="#" class="soc-link">Telegram</a>-->
<!--            <a href="#" class="soc-link">WhatsApp</a>-->
<!--          </div>-->
        </div>

      </div>
    </div>
  </footer>
</template>

<style scoped>
/* --- ОСНОВНОЙ КОНТЕЙНЕР --- */
.footer-section {
  background-color: #1a1a1c; /* Глубокий темный цвет */
  color: #fff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  /* Zoom Logic */
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  transition: zoom 0.1s linear;
  display: flex;
  flex-direction: column;
}

/* --- 1. КАРТА --- */
.map-container {
  width: 100%;
  height: 350px; /* Высота карты */
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.map-frame {
  width: 100%;
  height: 100%;
  border: none;
  /* МАГИЯ: Делаем карту темной через CSS фильтры */
  filter: grayscale(100%) invert(92%) contrast(83%);
  opacity: 0.8;
  transition: opacity 0.3s;
}

.map-container:hover .map-frame {
  opacity: 1; /* При наведении карта становится чуть ярче */
}

/* --- 2. КОНТЕНТ --- */
.footer-content {
  padding: 60px 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 0.8fr 0.8fr; /* Пропорции колонок */
  gap: 40px;
}

/* Типографика колонок */
.footer-col {
  display: flex;
  flex-direction: column;
}

.col-title {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #666;
  margin-bottom: 30px;
  font-weight: 700;
}

/* Колонка бренда */
.company-name {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #fff;
}

.company-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #aaa;
  margin-bottom: auto; /* Толкает копирайт вниз */
}

.copyright {
  font-size: 0.8rem;
  color: #555;
  margin-top: 30px;
}

/* Колонка адресов */
.info-group {
  margin-bottom: 25px;
}

.label {
  display: block;
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 5px;
}

.value {
  font-size: 1rem;
  line-height: 1.4;
  color: #ddd;
  margin: 0;
}

/* Колонка реквизитов */
.req-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.req-list li {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding: 10px 0;
}

.req-list li:first-child { padding-top: 0; }

.req-label { color: #666; font-size: 0.9rem; }
.req-val { color: #fff; font-family: monospace; font-size: 1rem; letter-spacing: 0.5px; }

/* Колонка контактов */
.contact-col {
  align-items: flex-start;
}

.footer-phone {
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 10px;
  white-space: nowrap;
}

.footer-email {
  font-size: 1rem;
  color: #2b6eff;
  text-decoration: none;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(43, 110, 255, 0.3);
}

.socials {
  display: flex;
  gap: 20px;
}

.soc-link {
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  border: 1px solid rgba(255,255,255,0.3);
  padding: 8px 15px;
  border-radius: 20px;
  transition: all 0.3s;
}

.soc-link:hover {
  background: #fff;
  color: #000;
  border-color: #fff;
}

/* --- АДАПТИВ --- */
@media (max-width: 1024px) {
  .footer-section { zoom: 1 !important; max-width: 100%; }

  .footer-grid {
    grid-template-columns: 1fr 1fr; /* 2 колонки на планшете */
    row-gap: 50px;
  }
}

@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr; /* 1 колонка на телефоне */
    gap: 40px;
  }

  .footer-content { padding: 40px 20px; }
  .map-container { height: 250px; }

  .company-name { font-size: 1.5rem; }
}
</style>
