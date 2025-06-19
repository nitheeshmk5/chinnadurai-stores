<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

defineProps({
  isTamil: Boolean,
});
defineEmits(["toggle-lang"]);

const open = ref(false);
const isScrolled = ref(false);

function handleNavClick() {
  open.value = false;
}

function onScroll() {
  isScrolled.value = window.scrollY > 10;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <nav
    :class="[
      'px-5 py-4 flex justify-between border items-center sticky top-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-gray-900/60 backdrop-blur-md shadow-md' : 'bg-gray-900',
    ]"
  >
    <h1 class="text-lg font-extrabold text-white">
      {{ isTamil ? "சின்னதுரை ஸ்டோஸ்" : "Chinnadurai Stores" }}
    </h1>

    <button
      @click="$emit('toggle-lang')"
      class="text-sm text-white border border-white px-3 py-1 rounded-md hover:bg-white hover:text-gray-900 transition"
    >
      {{ isTamil ? "English" : "தமிழ்" }}
    </button>

    <!-- Hamburger -->
    <button
      @click="open = !open"
      class="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
      aria-label="Toggle Menu"
    >
      <span
        :class="[
          'block absolute h-0.5 w-6 bg-white rounded transition-transform duration-300',
          open ? 'rotate-45 top-3' : 'top-2',
        ]"
      ></span>
      <span
        :class="[
          'block absolute h-0.5 w-6 bg-white rounded transition-opacity duration-300',
          open ? 'opacity-0' : 'top-4',
        ]"
      ></span>
      <span
        :class="[
          'block absolute h-0.5 w-6 bg-white rounded transition-transform duration-300',
          open ? '-rotate-45 top-3' : 'top-6',
        ]"
      ></span>
    </button>

    <!-- Navigation Links -->
    <ul
      :class="[
        'md:flex md:items-center md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto shadow-md md:shadow-none text-white text-base font-medium transition-transform duration-300 ease-in-out',
        open
          ? 'translate-y-0 opacity-100 bg-gray-900/70 backdrop-blur-md'
          : '-translate-y-10 opacity-0 pointer-events-none md:pointer-events-auto md:bg-transparent',
      ]"
      class="md:opacity-100 md:translate-y-0 md:flex-row flex flex-col"
    >
      <li class="border-b md:border-none border-gray-700 md:py-0 py-3 px-5">
        <a href="#why" @click="handleNavClick" class="block hover:text-white">
          {{ isTamil ? "ஏன் நம்மை தேர்வு?" : "Why Us?" }}
        </a>
      </li>
      <li class="border-b md:border-none border-gray-700 md:py-0 py-3 px-5">
        <a
          href="#products"
          @click="handleNavClick"
          class="block hover:text-white"
        >
          {{ isTamil ? "தயாரிப்புகள்" : "Products" }}
        </a>
      </li>
      <li class="border-b md:border-none border-gray-700 md:py-0 py-3 px-5">
        <a
          href="#reviews"
          @click="handleNavClick"
          class="block hover:text-white"
        >
          {{ isTamil ? "விமர்சனங்கள்" : "Reviews" }}
        </a>
      </li>
      <li class="md:py-0 py-3 px-5">
        <a href="#map" @click="handleNavClick" class="block hover:text-white">
          {{ isTamil ? "வரைபடம்" : "Map" }}
        </a>
      </li>
    </ul>
  </nav>
</template>
