<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand to="/">NavBar</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav v-for="item in navList">
                    <template v-if="item.children">
                        <b-nav-item-dropdown 
                            :href="item.url" 
                            :title="item.name"
                            :text="item.name"
                        >
                            <b-dropdown-item 
                                v-for="{ url, name, index, target } in item.children" 
                                :key="index"
                                :to="url"
                                :title="name" 
                                :target="target"
                            >
                                {{ name }}
                            </b-dropdown-item>
                            
                        </b-nav-item-dropdown>
                    </template>
                    <template v-else>
                        <b-nav-item 
                            :to="item.url"
                            :title="item.name"
                        >
                            {{ item.name }}
                        </b-nav-item>
                    </template>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  mounted() {
    const api ='json/menu.json';
    axios.get(api)
    .then(result =>{
      this.navList = result.data.data;
    }, result => {
      console.log("error");
    })
  },
  data() {
    return{
      navList:null,
    }
  }
}
</script>