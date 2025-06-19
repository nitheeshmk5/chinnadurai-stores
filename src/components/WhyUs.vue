<script setup>
import { computed } from "vue";

const props = defineProps({
  isTamil: Boolean,
});

const texts = {
  en: {
    title: "Why Choose Us?",
    description:
      "We provide high-quality groceries at affordable prices with friendly service. Enjoy free delivery, UPI payments, and a wide range of fresh produce. Our commitment to quality and customer satisfaction sets us apart!",
    cards: [
      {
        title: "🥦 Fresh",
        desc: "Daily delivered fresh fruits and vegetables.",
        linkText: "Explore Fresh Items",
        href: "#products",
        color: "green",
      },
      {
        title: "💸 Affordable",
        desc: "Competitive prices to suit every budget.",
        linkText: "Check Prices",
        href: "#products",
        color: "blue",
      },
      {
        title: "🤝 Trust",
        desc: "Reliable service with years of experience.",
        linkText: "See Reviews",
        href: "#reviews",
        color: "purple",
      },
      {
        title: "⚡ Convenient",
        desc: "Instant UPI payments and support.",
        linkText: "Visit Store",
        href: "#map",
        color: "orange",
      },
    ],
  },
  ta: {
    title: "ஏன் நம்மை தேர்வு செய்ய வேண்டும்?",
    description:
      "நாங்கள் மிக உயர்தரமான கிராசரிகளை மலிவான விலையில் மற்றும் நட்பான சேவையுடன் வழங்குகிறோம். இலவச விநியோகம், யூபிஐ பாக்கியங்கள் மற்றும் பல்வேறு புதுமை பொருட்களை அனுபவிக்கவும். தரமும் வாடிக்கையாளர் திருப்தியும் எங்களை வேறுபடுத்துகிறது!",
    cards: [
      {
        title: "🥦 புதுமை",
        desc: "தினமும் புதிய பழங்கள் மற்றும் காய்கறிகள் விநியோகம் செய்யப்படும்.",
        linkText: "புதிதாய் பொருட்களை ஆராயுங்கள்",
        href: "#products",
        color: "green",
      },
      {
        title: "💸 மலிவு",
        desc: "ஒவ்வொரு பட்ஜெட்டிற்கும் பொருத்தமான விலை.",
        linkText: "விலை சரிபார்க்கவும்",
        href: "#products",
        color: "blue",
      },
      {
        title: "🤝 நம்பிக்கை",
        desc: "ஆண்டுகளாக அனுபவம் கொண்ட நம்பகமான சேவை.",
        linkText: "விமர்சனங்களைப் பார்க்கவும்",
        href: "#reviews",
        color: "purple",
      },
      {
        title: "⚡ வசதி",
        desc: "உடனடி யூபிஐ பணப்பரிவர்த்தனை மற்றும் ஆதரவு.",
        linkText: "இப்போது பார்வையிடுங்கள்",
        href: "#map",
        color: "blue",
      },
    ],
  },
};

const locale = computed(() => (props.isTamil ? texts.ta : texts.en));
</script>

<template>
  <section id="why" class="py-16 px-4 bg-gray-100 text-center">
    <h2 class="text-3xl sm:text-4xl font-extrabold text-pink-600 mb-4">
      {{ locale.title }}
    </h2>
    <p
      class="text-gray-700 max-w-xl mx-auto mb-10 text-base sm:text-lg leading-relaxed"
    >
      {{ locale.description }}
    </p>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
    >
      <div
        v-for="(card, index) in locale.cards"
        :key="index"
        :class="[
          'group p-5 sm:p-6 bg-white rounded-2xl border-red-800 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left',
        ]"
      >
        <h3
          :class="[
            'text-lg sm:text-xl font-bold mb-2 group-hover:underline',
            `text-${card.color}-600`,
          ]"
        >
          {{ card.title }}
        </h3>
        <p class="text-gray-600 text-sm sm:text-base mb-4">
          {{ card.desc }}
        </p>
        <a
          :href="card.href"
          :class="[
            'inline-block rounded-full text-xs sm:text-sm font-medium transition px-4 py-2 text-white',
            `bg-${card.color}-600 hover:bg-${card.color}-700`,
          ]"
        >
          {{ card.linkText }}
        </a>
      </div>
    </div>
  </section>
</template>
