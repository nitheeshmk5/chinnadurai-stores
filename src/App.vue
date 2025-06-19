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
import { useHead } from "@vueuse/head";

useHead({
  title: "Chinnadurai Stores - Grocery in Kalveerampalayam",
  meta: [
    {
      name: "description",
      content:
        "Best grocery store in Kalveerampalayam, Coimbatore. Fresh vegetables, rice, dal, and essentials.",
    },
    {
      name: "keywords",
      content:
        "grocery store coimbatore, rice, dal, vegetables, chinnadurai store, tamil nadu, fresh groceries, online grocery, kalveerampalayam",
    },
    { name: "author", content: "nitheeshmk5" },
    { property: "og:title", content: "Chinnadurai Stores" },
    {
      property: "og:description",
      content:
        "Buy fresh groceries and home essentials in Kalveerampalayam, Coimbatore.",
    },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/Home.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  link: [{ rel: "canonical", href: "https://chinnadurai-stores.netlify.app/" }],
});

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
