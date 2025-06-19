<script setup>
import { onMounted, ref, computed } from "vue";

const props = defineProps({
  isTamil: Boolean,
});

const images = [
  new URL("/src/assets/fresh_vegies.jpg", import.meta.url).href,
  new URL("/src/assets/atta.jpg", import.meta.url).href,
  new URL("/src/assets/rice.jpg", import.meta.url).href,
  new URL("/src/assets/veg01.jpg", import.meta.url).href,
  new URL("/src/assets/veg02.jpg", import.meta.url).href,
  new URL("/src/assets/ricee.jpg", import.meta.url).href,
  new URL("/src/assets/egg.jpg", import.meta.url).href,
];

const currentIndex = ref(0);
const sliderRef = ref(null);

onMounted(() => {
  let index = 0;
  setInterval(() => {
    const slider = sliderRef.value;
    if (slider) {
      index = (index + 1) % images.length;
      currentIndex.value = index;
      const itemWidth = slider.children[0].offsetWidth;
      slider.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  }, 4000);
});

const headingText = computed(() =>
  props.isTamil ? "எங்கள் கடையில் உள்ள பொருட்கள்" : "Products on our shop"
);
</script>

<template>
  <section id="products" class="overflow-hidden py-10 px-4 bg-white">
    <h2
      class="text-3xl sm:text-4xl font-extrabold text-green-600 mb-6 text-center"
    >
      {{ headingText }}
    </h2>

    <div
      ref="sliderRef"
      class="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
    >
      <div
        v-for="(img, i) in images"
        :key="i"
        class="min-w-full sm:min-w-1/2 md:min-w-1/3 snap-start px-2"
      >
        <img
          :src="img"
          alt="Product"
          class="w-full h-64 object-cover rounded-2xl shadow-md transition-transform duration-300"
        />
      </div>
    </div>

    <!-- Swipe Indicators -->
    <div class="flex justify-center mt-4 space-x-2">
      <span
        v-for="(img, i) in images"
        :key="i"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentIndex === i ? 'bg-green-600 scale-110' : 'bg-gray-300'"
      ></span>
    </div>
  </section>
</template>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
