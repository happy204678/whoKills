<template>

  <div class="room">
    <div class="restep">
      <button @click="reStep()">退出</button>
    </div>
    <table>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div class="readystart">
      <button v-if="!manager" @click="ready()">準備</button>
      <button v-else @click="start()">準備</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      manager: false
    }
  },
  mounted () {

  },
  methods: {
    reStep () {
      this.$emit('childByValue', false)
    },
    ready () {
      this.$router.push({ path: '/game' })
    },
    start () {
      this.$router.push({ path: '/game' })
    }
  }
}
</script>
<style scoped>
.restep {
  position: absolute;
  right: 2vw;
  top: 10vh;
}
table {
  margin-top: 2vh;
  border-collapse: separate;
  border:1px solid black;
}
tr {
  margin-bottom:1vw
}
td {
  height: 12vh;
  background-color: rgb(39, 39, 39);
  border-radius: 2vw;
  border:10px solid rgba(19, 19, 19, 0.9);
}
div.readystart {
  position: absolute !important;
  left: 31.5vw;
  bottom: 1vh;
}
div.readystart button {
  width: 11vw;
  height: 5vh;
  font-size: 2.5vw;
  background-color: rgb(51, 51, 51);
}
</style>
