<template>
  <div id="app">
    <el-container>
      <el-row type="flex" justify="center" align="middle">
        <Cards/>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import Cards from './components/Cards.vue'
// import store from './store.js';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Cards
  },
  mounted() {
    axios.get('http://localhost:8080/api/v1/card').then(function(response) {
      console.log(response.data);
    })
  } 
}

// TODO: v-for based on api call and the 'type' parameter
</script>

<style lang="scss" scoped>
</style>
