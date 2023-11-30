<template>
  <div class="hero min-h-screen bg-white">
    <div class="hero-content flex-col lg:flex-row">
      <div v-show="currentTab === 'Ultra'">
        <img v-show="deviceColor === 'black'" src="/s23ultra-black.webp" />
        <img v-show="deviceColor === 'green'" src="/s23ultra-green.webp" />
        <img v-show="deviceColor === 'lavanda'" src="/s23ultra-lavanda.webp" />
        <img v-show="deviceColor === 'beige'" src="/s23ultra-beige.webp" />
      </div>
      <div v-show="currentTab === 'S23'">
        <img v-show="deviceColor === 'black'" src="/s23-black.webp" />
        <img v-show="deviceColor === 'green'" src="/s23-green.webp" />
        <img v-show="deviceColor === 'lavanda'" src="/s23-lavanda.webp" />
        <img v-show="deviceColor === 'beige'" src="/s23-beige.webp" />
      </div>

      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Выберите свою модель</h1>
        <div role="tablist" class="tabs tabs-boxed my-6">
          <a
            role="tab"
            @click="changeTab('Ultra')"
            :class="['tab', { 'tab-active': currentTab === 'Ultra' }]"
            >Galaxy S23 Ultra</a
          >
          <a
            role="tab"
            @click="changeTab('S23')"
            :class="['tab', { 'tab-active': currentTab === 'S23' }]"
            >Galaxy S23/S23+</a
          >
        </div>
        <div class="flex justify-center lg:justify-start space-x-4">
          <div
            @click="changeDeviceColor('black')"
            :class="[
              'w-8 h-8 bg-device-black rounded-full border-primary border-solid cursor-pointer',
              { 'border-4': deviceColor === 'black' },
            ]"
          ></div>
          <div
            @click="changeDeviceColor('green')"
            :class="[
              'w-8 h-8 bg-device-green rounded-full border-primary border-solid cursor-pointer',
              { 'border-4': deviceColor === 'green' },
            ]"
          ></div>
          <div
            @click="changeDeviceColor('lavanda')"
            :class="[
              'w-8 h-8 bg-device-lavanda rounded-full border-primary border-solid cursor-pointer',
              { 'border-4': deviceColor === 'lavanda' },
            ]"
          ></div>
          <div
            @click="changeDeviceColor('beige')"
            :class="[
              'w-8 h-8 bg-device-beige rounded-full border-primary border-solid cursor-pointer',
              { 'border-4': deviceColor === 'beige' },
            ]"
          ></div>
        </div>
        <ul class="py-6">
          <li class="font-bold">Дисплей</li>
          <li>{{ devices[currentTab].diagonal }}</li>
          <li>{{ devices[currentTab].displayResolution }}</li>
          <li class="font-bold">Селфи-камера</li>
          <li>{{ devices[currentTab].selfieCamera }}</li>
          <li class="font-bold">Сверхширокоугольная камера</li>
          <li>{{ devices[currentTab].ultraWideCamera }}</li>
          <li class="font-bold">Широкоугольная камера</li>
          <li>{{ devices[currentTab].wideCamera }}</li>
          <li class="font-bold">Аккумулятор</li>
          <li>{{ devices[currentTab].battery }}</li>
          <li class="font-bold">S Pen</li>
          <li>{{ devices[currentTab].SPen }}</li>
        </ul>

        <button class="btn btn-primary my-6">Оформить предзаказ</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentTab = ref("Ultra");
const changeTab = (tab) => {
  currentTab.value = tab;
};

const devices = ref({
  Ultra: {
    diagonal: "6,8 дюймов*",
    displayResolution: "3088 x 1440 (Edge Quad HD+)",
    selfieCamera: "12,0 МП",
    ultraWideCamera: "12,0 МП",
    wideCamera: "200,0 МП",
    battery: "5000 мА-ч",
    SPen: "Есть",
  },
  S23: {
    diagonal: "6,1 / 6,6 дюймов*",
    displayResolution: "2340 x 1080 (Flat FHD+)",
    selfieCamera: "12,0 МП",
    ultraWideCamera: "12,0 МП",
    wideCamera: "50,0 МП",
    battery: "3900 мА-ч",
    SPen: "Нет",
  },
});

const deviceColor = ref("black");
const changeDeviceColor = (color) => {
  deviceColor.value = color;
};
</script>
