import { reactive, readonly } from 'vue';

const state = reactive({
  teams: ["Real Madrid", "Bayern Munich", "Manchester United"]
})

const methods= {
  showTeamIndex(payload:any){
    const teamIndex = state.teams.indexOf(payload)
    console.log("teamINdex: ", teamIndex)
    return teamIndex;
    // console.log("SOngs from store", state.songs[0]);
    // console.log("SOngs from payload",payload)

    // console.log("Equal: ", state.songs[0].title === payload.title)

    // const songIndex = state.songs.find(function(song,index){
    //   if(song.title === payload.title){
    //     return index
    //   }
    // });

    // console.log("songIndex: ", songIndex)
    // return songIndex;
  }
}

export default {state: readonly(state), methods}