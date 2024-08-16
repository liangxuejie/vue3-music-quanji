<template>
  <m-header></m-header>
  <m-tab></m-tab>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <router-view
    name="user"
    v-slot="{ Component }"
  >
    <transition appear name="slide">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup>
  import mHeader from '@/components/header/m-header.vue'
  import mTab from '@/components/tab/m-tab.vue'
</script>
