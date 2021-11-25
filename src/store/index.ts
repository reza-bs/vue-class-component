import { reactive, readonly } from 'vue';

const state = reactive({
  songs: [{
    title: 'Radioactive',
    artist: 'Imagine Dragons'
  }]
})

const methods= {
  showSongIndex(payload:any){
    console.log("SOngs from store", state.songs[0]);
    console.log("SOngs from payload",payload)

    console.log("Equal: ", state.songs[0].title === payload.title)

    const songIndex = state.songs.map(function(song,index){
      if(song.title === payload.title){
        return index
      }
    });
    return [...songIndex];
  }
}

export default {state: readonly(state), methods}