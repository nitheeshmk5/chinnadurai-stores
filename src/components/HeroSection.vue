<script setup>
const props = defineProps({
  isTamil: Boolean,
});

const getText = (key) => {
  const translations = {
    en: {
      welcome: "Welcome to Chinnadurai Stores",
      slogan: "Your favorite grocery shop in Kalveerampalayam, Coimbatore",
      explore: "Explore Products",
      order: "Contact Us",
    },
    ta: {
      welcome: "சின்னதுரை ஸ்டோஸ்க்கு வரவேற்கிறோம்",
      slogan: "கல்வீரம்பாளையம், கோயம்புத்தூரில் உங்களுக்கு பிடித்த மல்லிகை கடை",
      explore: "பொருட்களை ஆராயுங்கள்",
      order: "தொடர்பு கொள்ளுங்கள்",
    },
  };
  return translations[props.isTamil ? "ta" : "en"][key];
};
</script>

<template>
  <section class="bg-gray-900 text-white py-12 px-4 sm:px-6 md:px-12">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      <!-- Text Left -->
      <div class="space-y-5 text-left">
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
          {{ getText("welcome") }}
        </h2>
        <p class="text-base sm:text-lg leading-relaxed">
          {{ getText("slogan") }}
        </p>
        <div class="flex flex-wrap sm:flex-row gap-3 sm:gap-4">
          <a
            href="#products"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow text-center transition-all"
          >
            {{ getText("explore") }}
          </a>
          <a
            href="#map"
            class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow text-center transition-all"
          >
            {{ getText("order") }}
          </a>
        </div>
      </div>

      <!-- Image Right -->
      <div>
        <img
          src="/src/assets/Home.jpg"
          alt="Store Front"
          class="rounded-xl shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
h2,
p {
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  line-height: 1.6;
  font-family: "Noto Sans Tamil", "Segoe UI", "Roboto", "Helvetica Neue",
    sans-serif;
}

a {
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  font-size: 0.9rem;
  padding: 0.6rem 1.2rem;
}
a:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}
a:active {
  transform: scale(0.96);
}

@media (max-width: 640px) {
  a {
    font-size: 0.8rem;
    padding: 0.4rem 0.9rem;
  }

  h2 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>
