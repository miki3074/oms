<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import 'swiper/swiper-bundle.css'


import Uslugy from '@/components/Uslugi.vue'
import Menu from '@/components/Menu.vue'
import About from '@/components/about.vue'
import Prime from '@/components/prime.vue'
import HowWorks from '@/components/HowWorks.vue'
import CTA from '@/components/CTA.vue'
import Map from '@/components/map.vue'
import Menuv from '@/components/Menuv.vue'
import Howtop from '@/components/Howtop.vue'

import Footer from '@/components/Footer.vue'
</script>

<template>

  <div class="common-layout">
    <el-container>
<!--      <Menu/>-->

      <Menuv/>
      <el-main>



        <Uslugy/>

        <About/>
        <Prime/>
        <HowWorks/>
        <Howtop/>
        <CTA/>

      </el-main>

      <el-footer style="padding: 0">
        <Footer/>
      </el-footer>

    </el-container>
  </div>
</template>


<style scoped>
.el-main{
  padding: 0;
}
</style>
