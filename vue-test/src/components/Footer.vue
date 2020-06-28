<template>
    <footer>
        <div>
            <ul>
                <li v-for="footer in footer_list">
                    <a :href="footer.url">{{ footer.name }}</a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
import axios from 'axios'
export default {
  mounted(){
      const api ='/json/footer.json'
      axios.get(api)
      .then(result =>{
          this.footer_list = result.data.data
      },
        result =>{
          console.log('error')
        }
      )
  },
  data(){
      return{
         footer_list:null 
      }
  }
}
</script>

<style lang="scss" scoped>
    footer{
        background: #343a40;
        padding: 40px 0;
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin: 0px;
            padding: 0;
            li {
                text-align: center;
                padding: 0 30px;
                margin: 20px 0;
                position: relative;
            }
        }
        a{
            color: #fff;
        }
    }
</style>