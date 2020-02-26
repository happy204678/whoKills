<template>
  <div class="hall">
    <div class="roomlist floatl">
      <!-- <h1>狼人殺</h1> -->
      <h1>---</h1>
      <div class="roomrow" v-if="!inRoom">
        <table>
          <thead>
            <tr>
              <th>房號</th>
              <th>房名</th>
              <th>建立人</th>
              <th>敘述</th>
              <th>人數</th>
            </tr>
          </thead>
          <tbody>
            <tr @click="goRoom(1)">
              <td>100</td>
              <td>進</td>
              <td>kenny</td>
              <td>123</td>
              <td>0</td>
            </tr>
            <tr>
              <td>101</td>
              <td>asfasdf</td>
              <td>kenny2</td>
              <td>OK</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <room v-else v-on:childByValue="childByValue"></room>
      <!-- <button @click="startGame" :disabled="disabled">開始遊戲</button> -->
    </div>
    <div class="memberset floatr">
      <h3>設置</h3>
      <button @click="closePage()">登出</button>
    </div>
    <div class="memberlist floatr">
      <h3>人員列表</h3>
      <div class="memberList">
        <ul v-if="memberList.length > 0">
          <li v-for="(member, index) in memberList" :key="index" :class="{'red': member === loginName}"><span>{{ member }}</span><span v-if="player.indexOf(member) >= 0"> ->準備</span></li>
        </ul>
        <span class="countPoeple">{{ memberList.length }}人</span>
      </div>
    </div>
    <div class="modeselect floatr">
      <h3>模式查看</h3>
      <div>
        <button class="modebutton" @click="changeMode(0)" :class="{'selectMode': pos === 0}">OG</button>
        <button class="modebutton" @click="changeMode(1)" :class="{'selectMode': pos === 1}">騎士狼王局</button>
      </div>
    </div>
    <div class="carddisplay floatl">
      <div class="information">

      </div>
      <div class="card">
        <!-- <img src="../../static/image/whokills/id1.jpg"/>
        <img src="../../static/image/whokills/id2.jpg"/>
        <img src="../../static/image/whokills/id3.jpg"/>
        <img src="../../static/image/whokills/id4.jpg"/>
        <img src="../../static/image/whokills/id5.jpg"/>
        <img src="../../static/image/whokills/id6.jpg"/>
        <img src="../../static/image/whokills/id7.jpg"/> -->
        <img src="../../static/image/whokills/cardBack.jpg"/>
        <img src="../../static/image/whokills/cardBack.jpg"/>
        <img src="../../static/image/whokills/cardBack.jpg"/>
        <img src="../../static/image/whokills/cardBack.jpg"/>
        <img src="../../static/image/whokills/cardBack.jpg"/>
        <img src="../../static/image/whokills/cardBack.jpg"/>
        <img src="../../static/image/whokills/cardBack.jpg"/>
      </div>
    </div>
  </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
import $ from 'jquery'
const room = () => import('../components/whokills/room')

export default {
  data () {
    return {
      loginName: '',
      memberList: [],
      timer: '',
      startKey: Boolean,
      player: [],
      id: [],
      sitvalue: '準備',
      disabled: false,
      pos: 0,
      inRoom: false
    }
  },
  watch: {
  },
  components: {
    room
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted () {
    $('.hall').fadeIn(2000)
    console.log(this.userName)
    // catch login name
    if (this.userName.length === 0) {
      this.$router.push({ path: '/' })
    }
    window.setTimeout(() => {
      this.changeMode(0)
    }, 1000)
  },
  methods: {
    ...mapActions(['setUserName', 'setLogout', 'getData', 'setPlayer', 'setIdentify', 'setPopPlayer', 'setGameStart', 'setSortPlayer']),
    getdata () {

    },
    // 在線人數
    getMember () {

    },
    goRoom (roomId) {
      this.inRoom = true
    },
    childByValue (val) {
      this.inRoom = val
    },
    startGame () {
      // window.setTimeout(function () {
      //   $('.hall').fadeOut(2000, function () {
      //     vm.$router.push({ path: '/game/' + vm.loginName })
      //   })
      // }, 500)
    },
    // shuffle (arr) {
    //   let len = arr.length

    //   while (len) {
    //     let i = (Math.random() * len--) >> 0
    //     // 交换位置
    //     let temp = arr[len]
    //     arr[len] = arr[i]
    //     arr[i] = temp
    //   }
    //   return arr
    // },
    // random () {
    //   return Math.random() > 0.5 ? -1 : 1
    // },
    changeMode (val) {
      this.pos = val
      $('.card').children().css('bottom', '2vh')

      $('.card img:nth-child(1)').css('bottom', '6vh')
      $('.card img:nth-child(2)').css('bottom', '6vh')
      $('.card img:nth-child(3)').css('bottom', '6vh')
      $('.card img:nth-child(4)').css('bottom', '6vh')
      $('.card img:nth-child(6)').css('bottom', '6vh')
      if (val === 0) {
        $('.card img:nth-child(5)').css('bottom', '2vh')
        $('.card img:nth-child(7)').css('bottom', '2vh')
      } else if (val === 1) {
        $('.card img:nth-child(5)').css('bottom', '6vh')
        $('.card img:nth-child(7)').css('bottom', '6vh')
      }
    },
    closePage () {
      this.setUserName('')
      this.$router.push({ path: '/' })
    }
  },
  beforeDestroy () {

  },
  destroyed () {

  }
}
</script>
<style scoped>
</style>
