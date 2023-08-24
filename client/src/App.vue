<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

