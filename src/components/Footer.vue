<template>
  <footer class="footer">
    <el-container>

      <el-row :gutter="40" class="footer-content">
        <el-col :xs="24" :md="12" class="footer-section">
          <h3 class="footer-title">ООО НПО «ОМС»</h3>
          <p>Общество с ограниченной ответственностью Научно-производственное объединение «Объединенные медицинские системы»</p>
        </el-col>


        <el-col :xs="24" :md="12" class="footer-section">
          <h4>Контактные адреса</h4>
          <ul class="footer-list">
            <li><strong>Юридический адрес:</strong> 423831, Республика Татарстан, г. Набережные Челны, ул. Шамиля Усманова, д. 63, офис 208в.</li>
            <li><strong>Центральный офис:</strong> 420111, Республика Татарстан, г. Казань, ул. Пушкина, д. 12, офис 404.</li>
            <li><strong>Почтовый адрес:</strong> 420132, Республика Татарстан, г. Казань, а/я 42.</li>
          </ul>
        </el-col>
      </el-row>

      <!-- Разделительная линия -->
      <hr class="footer-divider" >

      <!-- ОГРН, ИНН, КПП -->
      <div class="footer-meta">
        <p><strong>ОГРН:</strong> 1201600094190</p>
        <p><strong>ИНН:</strong> 1650397806</p>
        <p><strong>КПП:</strong> 165001001</p>
      </div>


      </hr>
    </el-container>
  </footer>
</template>

<script setup lang="ts">
// Никакой логики не требуется пока
</script>

<style scoped>

.el-divider__text.is-center{
  margin-top: 70px;

}

.el-divider__text{
  background: #0D72b9 !important;
}

.footer {
  background-color: #0D72b9;
  color: white;
  padding: 40px 117px;
  font-size: 14px;
  line-height: 1.6;
}

.footer-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer-section h4 {
  font-size: 16px;
  margin-bottom: 8px;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 6px;
}

.footer-divider {
  //margin: 30px 0 20px;
  margin-left: 10px;
  margin-right: 10px;
  border-color: rgba(255, 255, 255, 0.2);
}

.footer-meta {

  font-size: 13px;
  color: white;
  margin-bottom: 10px;
}

.footer-meta p {
  margin: 4px 0;
}

.footer-bottom {
  text-align: center;
  font-size: 13px;
  color: #bbb;
  margin-top: 10px;
}
</style>
