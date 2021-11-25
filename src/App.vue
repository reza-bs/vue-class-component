<template>
  <div>
    <h1>Hello World</h1>
    <p>{{dataProp}}</p>

    <input type="text" :value="dataProp" @input="updateProperty">
    <HelloWorld message="Hello Vue"/>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Watch } from 'vue-property-decorator';
import HelloWorld from "./components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  dataProp = "Radioactive";

  updateProperty(e: { target: { value: string } }){
    this.dataProp = e.target.value
  }

  
  //watcher
  @Watch('dataProp')
  public watchData(newValue:string, oldValue: string){
    console.log("newValue: ", newValue);
    console.log("oldValue: ", oldValue);
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
