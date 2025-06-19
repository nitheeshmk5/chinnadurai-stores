<script setup>
import { ref, watch, nextTick } from "vue";

const props = defineProps({
  isTamil: Boolean,
});

const showChat = ref(false);
const messages = ref([
  {
    sender: "bot",
    text: props.isTamil
      ? "வணக்கம்! 👋 சின்னதுரை கடைகளுக்கு வரவேற்கிறோம்!"
      : "Hi! 👋 Welcome to Chinnadurai Stores!",
  },
]);

const scrollRef = ref(null);

function toggleChat() {
  showChat.value = !showChat.value;
}

function scrollToBottom() {
  nextTick(() => {
    const el = scrollRef.value;
    if (el) el.scrollTop = el.scrollHeight;
  });
}

function sendMessage(customMsg) {
  if (!customMsg) return;
  messages.value.push({ sender: "user", text: customMsg });

  const msg = customMsg.toLowerCase();

  if (msg.includes("product") || msg.includes("பொருள்")) {
    messages.value.push({
      sender: "bot",
      text: props.isTamil
        ? "நாங்கள் வழங்கும் பொருட்கள்: அரிசி, முட்டை, பருப்பு, காய்கறிகள், சாக்லேட்டுகள் மற்றும் பல. மேலும் பார்க்க கடைக்கு வாருங்கள்."
        : "We offer Rice, Eggs, Dals, Vegetables, Chocolates and more. Visit our shop for full range!",
    });
  } else if (msg.includes("address") || msg.includes("முகவரி")) {
    messages.value.push({
      sender: "bot",
      text: props.isTamil
        ? "முகவரி: கல்வீரம்பாளையம், கோயம்புத்தூர்."
        : "Address: Kalveerampalayam, Coimbatore.",
    });
  } else if (msg.includes("review") || msg.includes("விமர்சனம்")) {
    messages.value.push({
      sender: "bot",
      text: props.isTamil
        ? "Google பிசினஸ் விமர்சனத்திற்கு: https://g.page/r/CV8pqsGQYaGUEB0/review"
        : "Leave a review: https://g.page/r/CV8pqsGQYaGUEB0/review",
    });
  } else if (msg.includes("developer") || msg.includes("டெவலப்பர்")) {
    messages.value.push({
      sender: "bot",
      text: props.isTamil
        ? "வலைத்தள தேவைகளுக்காக Nitheesh ஐ தொடர்பு கொள்ளுங்கள் - LinkedIn: nitheeshmk5, WhatsApp"
        : "For a website like this, contact Nitheesh - LinkedIn: nitheeshmk5, WhatsApp",
    });
  } else {
    messages.value.push({
      sender: "bot",
      text: props.isTamil
        ? "மேலும் தகவலுக்கு கடைக்கு நேரில் வாருங்கள் 🙂"
        : "Please visit our store for more details 🙂",
    });
  }
  scrollToBottom();
}

watch(
  () => props.isTamil,
  (newVal) => {
    messages.value = [
      {
        sender: "bot",
        text: newVal
          ? "வணக்கம்! 👋 சின்னதுரை கடைகளுக்கு வரவேற்கிறோம்!"
          : "Hi! 👋 Welcome to Chinnadurai Stores!",
      },
    ];
  }
);
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50">
    <div
      v-if="showChat"
      class="w-80 max-w-full bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col relative animate-bounce-in"
    >
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-2 border-b">
        <span class="font-bold text-green-600">Chinna Bot 🤖</span>
        <button
          @click="toggleChat"
          class="text-red-500 hover:text-red-700 font-bold"
        >
          ✕
        </button>
      </div>

      <!-- Messages -->
      <div
        ref="scrollRef"
        class="p-3 space-y-2 overflow-y-auto max-h-60 text-sm"
      >
        <div
          v-for="(msg, i) in messages"
          :key="i"
          :class="msg.sender === 'bot' ? 'text-left' : 'text-right'"
        >
          <div
            :class="[
              'inline-block px-3 py-2 rounded-lg',
              msg.sender === 'bot'
                ? 'bg-gray-100 text-gray-800'
                : 'bg-blue-500 text-white',
            ]"
          >
            {{ msg.text }}
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="grid grid-cols-2 gap-2 p-3 border-t">
        <button
          @click="sendMessage(props.isTamil ? 'பொருள்' : 'product')"
          class="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded"
        >
          {{ props.isTamil ? "பொருள்" : "Products" }}
        </button>
        <button
          @click="sendMessage(props.isTamil ? 'முகவரி' : 'address')"
          class="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded"
        >
          {{ props.isTamil ? "முகவரி" : "Address" }}
        </button>
        <button
          @click="sendMessage(props.isTamil ? 'விமர்சனம்' : 'review')"
          class="bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded col-span-2"
        >
          {{ props.isTamil ? "விமர்சனம் இடுக" : "Add a Review" }}
        </button>
        <button
          @click="sendMessage(props.isTamil ? 'டெவலப்பர்' : 'developer')"
          class="bg-gray-700 hover:bg-gray-800 text-white px-2 py-1 rounded col-span-2"
        >
          {{ props.isTamil ? "டெவலப்பரை தொடர்பு" : "Contact Developer" }}
        </button>
      </div>
    </div>

    <!-- Toggle Button -->
    <button
      @click="toggleChat"
      class="w-12 h-12 rounded-full bg-green-600 text-white flex justify-center items-center shadow-lg animate-bounce"
      aria-label="Toggle Chat"
    >
      💬
    </button>
  </div>
</template>

<style scoped>
@keyframes bounce-in {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-bounce-in {
  animation: bounce-in 0.3s ease-out;
}
</style>
