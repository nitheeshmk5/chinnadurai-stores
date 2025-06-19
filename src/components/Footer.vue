<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  isTamil: Boolean,
});

const email = ref("");
const currentYear = new Date().getFullYear();

const subscribe = () => {
  if (email.value) {
    alert(
      props.isTamil
        ? `உங்கள் ${email.value} மின்னஞ்சலுடன் சந்தா அளித்ததற்கு நன்றி!`
        : `Thank you for subscribing with ${email.value}!`
    );
    email.value = "";
  }
};

const texts = computed(() =>
  props.isTamil
    ? {
        aboutTitle: "சின்னதுரை கடைகள்",
        aboutDesc:
          "கல்வீரம்பாளையம், கோயம்புத்தூரில் உங்கள் நம்பகமான கிராசரி கடை. 2025 முதல் புதிய தயாரிப்புகள் மற்றும் சிறந்த சேவை.",
        contactTitle: "எங்களை தொடர்பு கொள்ளவும்",
        contactAddress: "கல்வீரம்பாளையம், கோயம்புத்தூர், தமிழ்நாடு",
        buildNote:
          "இப்படியான ஒரு வலைத்தளத்தை விரும்புகிறீர்களா? Nitheesh ஐ தொடர்புகொள்ளுங்கள்:",
        copyright: `© ${currentYear} சின்னதுரை கடைகள் · அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை`,
      }
    : {
        aboutTitle: "Chinnadurai Stores",
        aboutDesc:
          "Your trusted grocery shop in Kalveerampalayam, Coimbatore. Offering fresh products and excellent service since 2025.",
        contactTitle: "Contact Us",
        contactAddress: "Kalveerampalayam, Coimbatore, Tamil Nadu",
        buildNote: "Need a website like this? Contact Nitheesh:",
        copyright: `© ${currentYear} Chinnadurai Stores · All rights reserved`,
      }
);
</script>

<template>
  <footer class="bg-gray-900 text-white py-10 mt-10">
    <div
      class="max-w-5xl mx-auto px-4 flex flex-col gap-8 text-center sm:text-left sm:flex-row sm:justify-between"
    >
      <!-- About -->
      <div class="space-y-2">
        <h3 class="text-xl font-bold text-green-400">
          {{ texts.aboutTitle }}
        </h3>
        <p class="text-gray-300 text-sm">{{ texts.aboutDesc }}</p>
      </div>

      <!-- Contact -->
      <div class="space-y-2">
        <h3 class="text-xl font-bold text-green-400">
          {{ texts.contactTitle }}
        </h3>
        <p class="text-gray-300 text-sm">{{ texts.contactAddress }}</p>
      </div>
    </div>

    <!-- Builder Note (Highlighted) -->
    <div
      class="max-w-5xl mx-auto mt-8 p-5 border-2 border-green-400 rounded-xl bg-gray-800 shadow-lg text-center text-sm text-green-300"
    >
      <p class="mb-3 font-semibold">{{ texts.buildNote }}</p>
      <div class="flex justify-center items-center gap-6">
        <a
          href="https://www.linkedin.com/in/nitheeshmk5"
          target="_blank"
          class="hover:underline text-blue-400 font-xl border-b-2 border-r-2 pr-1 rounded border-blue-400 pb-1"
        >
          LinkedIn
        </a>
        <a
          href="https://wa.me/919944725360?text=Hello%20Nitheesh,%20I%20need%20a%20website!"
          target="_blank"
          class="hover:underline text-green-400 font-xl border-b-2 border-r-2 pr-1 rounded border-green-400 pb-1"
        >
          WhatsApp
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center text-gray-400 text-xs mt-6">
      {{ texts.copyright }}
    </div>
  </footer>
</template>
