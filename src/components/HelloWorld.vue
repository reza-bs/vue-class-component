<template>
  <div>
    <h1>{{ message }}</h1>
    <h1>{{ reverseMessage }}</h1>
    <h2>{{ getUserData?.data?.length }}</h2>

    <div v-for="(user, id) in getUserData.data" :key="id">
      <h3>{{user.name}}</h3>
    </div>

    <h1>The index of the song is : {{index}}</h1>
  </div>
</template>

<script lang='ts'>
import { Options, Vue, setup } from "vue-class-component";
import getUserData from '../composables/getUserData';
import store from '../store'

@Options({
  props: {
    message: String
  }
})

export default class HelloWorld extends Vue{
  
  message !: string
  index !: any

  // computed
  get reverseMessage() {
    return this.message.split("").reverse().join("");
  }

  //composition api
  getUserData = setup(()=> getUserData());
  
  //lifecycle
  created() {
    this.getUserData.getData()
  }

  // reactive store
  mounted() {
    console.log(store)
    this.index = store.methods.showSongIndex({
      title: 'Radioactive',
      artist: 'Imagine Dragons'
    })
  }
}
</script>


<style>

</style>
