<template>
  <main>
    <div class="container">
      <div class="row">       
          <div v-for="item in pets" :key="item" class="col-sm">
            <Pet :breed="item.breed" :image="item.url"/>
          </div>
      </div>
    </div>    
  </main>
</template>

<script>

import api from '@/api';
import Pet from '@/components/Pet';

export default {
  name: 'App',
  components: {
    Pet
  },
  data() {
    return { 
      pets: []
    }
  },
  created() {
    api.getBreeds().then(res => {
      for(let item in res){
        api.getImagePet(item).then(url => {
          var info = {
            breed: item,
            url: url
          }
          this.pets.push(info)
        })        
      }
    })
  }

}
</script>

<style>

#app {
  font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
