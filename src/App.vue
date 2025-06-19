<script setup>
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import WhyUs from "./components/WhyUs.vue";
import ProductList from "./components/ProductList.vue";
import Reviews from "./components/Reviews.vue";
import StoreMap from "./components/StoreMap.vue";
import ChatBot from "./components/ChatBot.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";
const isTamil = ref(true);
</script>

<template>
  <div class="font-sans bg-white text-gray-800">
    <Navbar :isTamil="isTamil" @toggle-lang="isTamil = !isTamil" />
    <HeroSection :isTamil="isTamil" />
    <WhyUs :isTamil="isTamil" />
    <ProductList :isTamil="isTamil" />
    <Reviews :isTamil="isTamil" />
    <StoreMap :isTamil="isTamil" />
    <ChatBot :isTamil="isTamil" />
    <Footer :isTamil="isTamil" />
  </div>
</template>

<style>
@import "tailwindcss";
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out both;
}
</style>
