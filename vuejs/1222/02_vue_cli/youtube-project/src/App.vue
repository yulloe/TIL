<template>
  <div id="app">
    <h1>My first Youtube Project</h1>
    <header>
      <the-search-bar @input-change="onInputChange"></the-search-bar>
    </header>
    <section>
      <video-detail :video="selectedVideo"></video-detail>
      <video-list :videos="videos" @select-video="onVideoSelect"></video-list>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import TheSearchBar from '@/components/TheSearchBar'
import VideoList from '@/components/VideoList.vue'
import VideoDetail from '@/components/VideoDetail'

const API_KEY = 'AIzaSyAD5IVkdRMFP0Iqo8xxmBbNM4Z1S2F8GzU'
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'App',
  components: {
    TheSearchBar,
    VideoList,
    VideoDetail,
  },
  data: function () {
    return {
      inputValue: null,
      videos: [],
      selectedVideo: null,
    }
  },
  methods: {
    onInputChange: function (inputValue) {
      // console.log(inputValue)
      this.inputValue = inputValue 

      // 선택적 매개변수 params
      const params = {
        key: API_KEY,
        part: 'snippet',
        q: this.inputValue,  //검색어
        type: 'video' 
      }

      axios({
        method: 'get',
        url: API_URL,
        params,
      })
        .then(res => {
          console.log(res)
          this.videos = res.data.items
        })
        .catch(err => {
          console.log(err)
        })
    },
    onVideoSelect: function (video) {
      this.selectedVideo = video
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
