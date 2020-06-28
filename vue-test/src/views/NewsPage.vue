<template>
   <section>
        <article v-if="news_list.length">
            <h1>{{ filterById.title }}</h1>
            <i>{{ filterById.date}}</i>
            <span v-html="filterById.content"></span>
        </article>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    mounted(){
        const id = this.$route.params.id
        this.newsId = id
        const api ='https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
        axios.get(api)
        .then(result => {
            this.news_list = result.data.data
        })
    },
    data(){
        return{
            newsId:null,
            news_list:[]
        }
    },
    computed: {
        filterById: function(){
            return this.news_list.filter(news => news.id == this.newsId)[0]
        }
    },
}
</script>