<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email name:"
        label-for="input-1"
        description="We'll never share your name with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="email"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" @click.prevent="routerToAdmin">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                name:null,
                password:null
            }
        }
    },
    methods:{
        routerToAdmin:function(){
            this.$router.push({name:"Admin"})
        }
    }
}
</script>