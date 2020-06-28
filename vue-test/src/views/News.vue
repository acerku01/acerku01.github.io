<template>
  <div class="News">
    <NewsList v-for="news in news_list">
        <h3 @click="routerToPage(news.id)">{{news.title}}</h3>
    </NewsList>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    mounted(){
        const api = "https://us-central1-expressapi-8c039.cloudfunctions.net/app/article"
        axios.get(api)
        .then(result =>{
            this.news_list = result.data.data
            console.log(result.data.data)
        },
        result=>{
            console.log('error')
        }
        )
    },
    data(){
        return{
            news_list:null
        }
    },
    methods:{
        routerToPage:function(id){
            this.$router.push({name:"NewsPage",params:{id:id}})
        }
    }
}
</script>
