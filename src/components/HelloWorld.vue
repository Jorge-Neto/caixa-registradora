<script setup lang="ts">
import { ref } from 'vue'
import store from '@/store/index';
import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore(store())

const msg = ref<string>("Hi")
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <v-btn type="button" @click="counterStore.increment()">count is {{ counterStore.count }}</v-btn>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
