<script setup>
import HeroSection from './components/HeroSection.vue'
import ServicesGrid from './components/ServicesGrid.vue'
import Founders from './components/Founders.vue'
import SystemScroll from './components/SystemScroll.vue'
import WhyCool from './components/WhyCool.vue'
import SkillsStats from './components/SkillsStats.vue'
import PricingTable from './components/PricingTable.vue'
import SuperTeam from '@/components/SuperTeam.vue'
import CtaSection from '@/components/CtaSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <ServicesGrid />
    <Founders />
<!--    <div style="height: 50vh;"></div> &lt;!&ndash; Отступ из твоего кода &ndash;&gt;-->
    <SystemScroll />
<!--    <div style="height: 20vh;"></div>-->
    <WhyCool />
<!--    <div style="height: 50vh;"></div>-->
    <SkillsStats />
    <PricingTable />
    <SuperTeam/>
    <CtaSection/>
    <FooterSection/>
  </main>
</template>

<style>
@import './assets/main.css';
</style>
