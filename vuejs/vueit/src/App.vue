<template>
  <div id="app">
    <message name="name 1">Hello All</message>
  </div>
</template>

<script>

import Message from './component/Message.vue';

export default {
  name: 'app',
  components: {Message},
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
