<script setup>
import { ref } from "vue";

const props = defineProps({
  isTamil: Boolean,
});

const mapError = ref(false);

const fallbackAddress = props.isTamil
  ? "சின்னதுரை ஸ்டோஸ், கல்வீரம்பாளையம், கோயம்புத்தூர், தமிழ்நாடு"
  : "Chinnadurai Stores, Kalveerampalayam, Coimbatore, Tamil Nadu";

const mapsLink =
  "https://www.google.com/maps/dir/?api=1&destination=Chinnadurai+Stores,+Kalveerampalayam,+Coimbatore";
</script>

<template>
  <section id="map" class="py-10 bg-gray-50 text-center animate-fade-in-up">
    <h2
      class="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-8 leading-snug"
    >
      {{ props.isTamil ? "தொடர்பு கொள்ள" : "Contact Us" }}
    </h2>

    <div class="px-4 sm:px-6 lg:px-8">
      <div v-if="!mapError">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.7555291293317!2d76.88627300717586!3d11.031989271192923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f31c4bdd153%3A0x3e9ad36f328bed67!2sChinnadurai%20Stores!5e0!3m2!1sen!2sin!4v1750317958315!5m2!1sen!2sin"
          width="100%"
          height="320"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="rounded-xl shadow-md border-4 border-blue-200 max-w-4xl mx-auto"
          @error="mapError = true"
        ></iframe>
      </div>

      <div
        v-else
        class="max-w-xl mx-auto bg-blue-100 text-blue-900 p-6 rounded-xl shadow text-base"
      >
        <p class="font-semibold mb-2">
          {{ props.isTamil ? "எங்கள் முகவரி:" : "Our Store Address:" }}
        </p>
        <p>{{ fallbackAddress }}</p>
      </div>

      <div class="mt-6">
        <a
          :href="mapsLink"
          target="_blank"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
        >
          {{ props.isTamil ? "வழிகாட்டும் நெறி பெறுங்கள்" : "Get Directions" }}
        </a>
      </div>
    </div>
  </section>
</template>
