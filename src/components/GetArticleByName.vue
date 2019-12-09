<template>
    <div class="getarticlebyname">
        <h1> Get Article By Name</h1>
        <form @submit="onSubmit">
            <div> 文章名  
            <input v-model="form.articleName" placeholder=" article">
            </div>
            <div> 页码
            <input v-model="form.pageNumber" placeholder=" pageNumber">
            </div>
            <div> 页大小
            <input v-model="form.pageSize" placeholder=" pageSize">
            </div>
            <button type="submit">
            查询    
            </button>
        </form>
    </div>
</template>

<script>

import {GetArticlesByName} from '../api-vue.js'



export default {
    name: 'getarticlebyname',
    data () {
        return {
        form: {
            articleName: '',
            pageNumber: '',
            pageSize: ''
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
            GetArticlesByName({
                articleName: me.form.articleName,
                pageNumber: me.form.pageNumber,
                pageSize: me.form.pageSize
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
