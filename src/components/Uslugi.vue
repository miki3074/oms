<script setup lang="ts">
import { ref } from 'vue'
import { ElDialog } from 'element-plus'
import { BottomLeft } from '@element-plus/icons-vue'
interface Section {
  title: string
  subtitle: string
  points: string[]
}

const sections: Section[] = [
  {
    title: 'Медицинские осмотры\n',
    subtitle: 'При приеме на работу',
    points: [
      'Полное обследование кандидатов',
      'Определение профпригодности',
      'Оформление медицинских заключений'
    ]
  },
  {
    title: 'Медицинские освидетельствования\n',
    subtitle: 'Плановые обследования персонала',
    points: [
      'График, согласованный с предприятием',
      'Выявление профзаболеваний на ранних стадиях',
      'Осмотры стажированного контингента'
    ]
  },
  {
    title: 'Консультации специалистов\n',
    subtitle: 'Для водителей и других специальностей',
    points: [
      'Оперативный вывод на линию',
      'Внедрение современных медицинских комплексов',
      'Формирование электронных путевых листов'
    ]
  },
  {
    title: 'Лабораторные исследования\n',
    subtitle: 'Для ответственных должностей',
    points: [
      'Тестирование скорости реакции',
      'Проверка когнитивных функций',
      'Оценка стрессоустойчивости'
    ]
  },
  {
    title: 'Психофизиологическое обследование\n',
    subtitle: 'Для всех контрагентов',
    points: [
      'Защита персональных данных работников',
      'Безопасный обмен списками',
      'Оперативное получение заключений'
    ]
  },
  {
    title: 'Комплексные программы оздоровления\n',
    subtitle: 'Для всех контрагентов',
    points: [
      'Защита персональных данных работников',
      'Безопасный обмен списками',
      'Оперативное получение заключений'
    ]
  },
  {
    title: 'Телемедицинские консультации\n',
    subtitle: 'Для всех контрагентов',
    points: [
      'Защита персональных данных работников',
      'Безопасный обмен списками',
      'Оперативное получение заключений'
    ]
  },
  {
    title: 'Защищенный электронный документооборот\n',
    subtitle: 'Для всех контрагентов',
    points: [
      'Защита персональных данных работников',
      'Безопасный обмен списками',
      'Оперативное получение заключений'
    ]
  },
]

const dialogVisible = ref(false)
const activeSection = ref<Section | null>(null)

const openModal = (section: Section) => {
  activeSection.value = section
  dialogVisible.value = true
}
</script>



<template>
  <div class="feat bg-gray pt-5 pb-5" style="background: #f5f5f5">
    <el-main>
    <div class="container">
      <div class="section-head col-sm-12">
        <h4><span class="h4h4">что мы предлагаем</span></h4>
      </div>

      <div class="grid-container">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="grid-item"
          @click="openModal(section)"
        >
          <div class="icon-wrapper">
            <el-icon><BottomLeft /></el-icon>
          </div>
          <div class="item-title">{{ section.title }}</div>
        </div>
      </div>

      <el-dialog v-model="dialogVisible" :title="activeSection?.title" >
        <template #default>
          <p><strong class="frfr">{{ activeSection?.subtitle }}</strong></p>
          <ul class="dede">
            <li style="list-style-type: decimal;" v-for="(point, i) in activeSection?.points" :key="i">{{ point }}</li>
          </ul>
        </template>
      </el-dialog>
    </div>
      </el-main>
  </div>
</template>


<style scoped>
.frfr{
  font-size: 39px;
  font-weight: 500;
  color: black;
}
.h4h4{
  vertical-align: middle;
  color: #000000;
  font-size: 64px;
  font-family: 'HelveticaNeue', Arial, sans-serif;
  line-height: 1.2;
  font-weight: 400;
  background-position: center center;
  border-color: transparent;
  border-style: solid;
  transform-origin: center center;
  line-height: 60px;
}

.el-dialog__title{
  font-size: 40px;
  font-weight: 600;

}
.el-dialog{
  padding: 36px;
}
.dede{
  font-size: 34px;
  color: black;
}

.el-dialog__headerbtn .el-dialog__close{
  color: #e72d50 !important;
}

.grid-container {
  display: grid;
  //grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.grid-item {
  position: relative;
  background-color: #ffffff;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  min-height: 192px;
  display: flex
;
  flex-direction: column;
  justify-content: flex-end;
}
.el-main{
  padding: 60px 10% !important;
}

.grid-item:hover {
  background-color: #0D72b9;
  color: white;
  transform: scale(1.03);
}

.item-title {
  font-size: 24px;
  font-weight: 600;
  text-align: left;
}

.icon-wrapper {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 48px;
}
.el-main{
  padding: 60px;
}
/* Адаптация */
@media (max-width: 768px) {
  .grid-container {
    display: contents;
  }
  .grid-item{
    margin-top: 10px;
  }
}
</style>

