<template>
  <div class="hello">
    <p>{{displayMessage}}</p>
    <p>
      <input type="text" v-model="inputNum" />
    </p>
    <p>
      <button @click="addNumber">1加算</button>
    </p>
    <p>合計値は:{{calcTotalNum}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      inputNum: 0
    };
  },
  props: {
    msg: String
  },
  methods: {
    addNumber() {
      this.$store.dispatch("addNumber");
    }
  },
  computed: {
    displayMessage() {
      return this.$store.getters.displayMessage;
    },
    calcTotalNum() {
      return this.$store.getters.totalNum;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
