<template>
    <div class="signin">
        <h1> Sign In</h1>
        <form @submit="onSubmit">
            <div> 用户名  
            <input v-model="form.username" placeholder=" username">
            </div>
            <div> 密码
            <input v-model="form.password" placeholder=" password">
            </div>
            <button type="submit">
            登录    
            </button>
        </form>
    </div>
</template>

<script>

import {signIn} from '../api-vue.js'



export default {
    name: 'signin',
    data () {
        return {
        form: {
            username: '',
            password: ''
        },
        errorMessage: '',
        showErrorAlert: false,
        dismissSecs: 3,
        dismissCountDown: 0
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            let me = this
            signIn({
                username: me.form.username,
                password: me.form.password
            }).then(function (response) {
                console.log(response.data)
            }).catch(function (err) {
                console.log(err)
            })
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
