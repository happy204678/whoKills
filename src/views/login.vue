<template>
  <div class="loginBody">
    <div class="op"></div>
    <div class="title">
      <!-- <h1>狼人殺</h1> -->
      <h1>---</h1>
    </div>
    <div class="login">
      <span>輸入您的大名</span><br>
      <input type="text" v-model="name" placeholder="完整姓名唷！">
      <button @click="doLogin()">Start</button>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import $ from 'jquery'
import axios from 'axios'

export default {
  data () {
    return {
      name: ''
      // permissionList: ['陳宥丞', '123', '葉佳霖', '黃均維', '毛君安', '何中淼', '蔡湘霖', '楊景光', '林禹任', '邱俊斌', 'A夢', '陳怡安', '陳宥亘', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'Kenny'], // 人名登入
      // online: 0,
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted () {
    // console.log('username:', this.userName)
    $('.title').fadeIn(1000, () => {
      $('.login').fadeIn(1000)
    })
  },
  methods: {
    ...mapActions(['setUserName']),
    doLogin () {
      let param = {
        params: {
          AccountName: this.name
        }
      }
      axios.get('http://127.0.0.1:5050/', param)
        .then((res) => {
          // 登入成功
          console.log(res)
          if (res.data.length > 0) {
            // this.setUserName(this.name)
            // this.goWhoKills()
          } else {
            this.loginFail()
          }
        }).catch((err) => {
          console.log('get error', err)
        })

      // axios.post('http://127.0.0.1:5050/', param,)
      //   .then((res) => {
      //     console.log(res.data)
      //   }).catch((err) => {
      //     console.log('get error', err)
      //   })
    },
    loginFail () {
      this.name = ''
      window.alert('no~no~')
    },
    goWhoKills () {
      var vm = this
      window.setTimeout(function () {
        $('.loginBody').fadeOut(2000, function () {
          vm.$router.push({ path: '/whokills' })
        })
      }, 500)
    }
  }
}
</script>
