<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  isTamil: Boolean,
});

const reviewsData = {
  en: [
    {
      text: "Best shop in the area! Very friendly and convenient.",
      rating: 5,
      name: "Ramesh K.",
    },
    {
      text: "Great variety of fresh vegetables at reasonable prices.",
      rating: 4,
      name: "Priya S.",
    },
    {
      text: "Fast delivery and excellent customer service. Highly recommend!",
      rating: 5,
      name: "Suresh M.",
    },
  ],
  ta: [
    {
      text: "இந்த பகுதியில் சிறந்த கடை! மிகவும் நட்பானதும் வசதியானதும்.",
      rating: 5,
      name: "ரமேஷ் கே.",
    },
    {
      text: "சமரசமான விலையில் புதிய காய்கறிகளின் பரந்த வகை.",
      rating: 4,
      name: "பிரியா எஸ்.",
    },
    {
      text: "வேகமான விநியோகம் மற்றும் சிறந்த வாடிக்கையாளர் சேவை. மிக பரிந்துரைக்கப்படுகிறது!",
      rating: 5,
      name: "சுரேஷ் எம்.",
    },
  ],
};

const currentSlide = ref(0);

const reviews = computed(() =>
  props.isTamil ? reviewsData.ta : reviewsData.en
);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % reviews.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + reviews.value.length) % reviews.value.length;
};
</script>

<template>
  <section
    id="reviews"
    class="py-16 bg-purple-50 text-center animate-fade-in-up"
  >
    <h2 class="text-3xl font-bold text-purple-600 mb-8">
      {{ props.isTamil ? "வாடிக்கையாளர் விமர்சனங்கள்" : "Customer Reviews" }}
    </h2>
    <div class="relative max-w-2xl mx-auto px-4">
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(review, index) in reviews"
            :key="index"
            class="flex-shrink-0 w-full p-6 mx-2 bg-white rounded-xl shadow-md text-center"
          >
            <p
              class="text-gray-700 mb-4 italic text-base sm:text-lg leading-relaxed"
            >
              "{{ review.text }}"
            </p>
            <div class="flex items-center justify-center mb-2">
              <span
                v-for="star in 5"
                :key="star"
                class="text-yellow-400 text-lg"
                :class="{ 'text-gray-300': star > review.rating }"
              >
                ★
              </span>
            </div>
            <p
              class="text-purple-700 font-semibold text-sm sm:text-base tracking-wide mt-2"
            >
              — {{ review.name }}
            </p>
          </div>
        </div>
      </div>
      <button
        @click="prevSlide"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-800 text-white p-2 rounded-full hover:bg-purple-700"
        aria-label="Previous Review"
      >
        ←
      </button>
      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-800 text-white p-2 rounded-full hover:bg-purple-700"
        aria-label="Next Review"
      >
        →
      </button>
    </div>
    <div class="mt-4">
      <button
        @click="currentSlide = i"
        v-for="(item, i) in reviews"
        :key="i"
        class="w-3 h-3 mx-1 rounded-full bg-gray-400"
        :class="{ 'bg-purple-600': currentSlide === i }"
        :aria-label="`Go to review ${i + 1}`"
      ></button>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 640px) {
  .p-6 {
    padding: 1rem;
  }
  p {
    font-size: 0.9rem;
  }
  .text-3xl {
    font-size: 1.875rem;
  }
}
</style>
