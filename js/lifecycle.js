const app = new Vue({
  el: "#app",
  data: {
    greeting: "I'm lifecycle of Vue",
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  //Most Used
  created() {
    //When creating the methods, observers and events, but it still doesn't access the 'DOM'.
    //Still can´t acess 'el'
    console.log("created");
  },
  beforeMount() {
    //It's runs before inserting the 'DOM'
    console.log("beforeMount");
  },
  //Most Used
  mounted() {
    //It's runs to the 'DOM' insert
    console.log("mounted");
  },
  beforeUpdate() {
    //It's runs when detecting a change
    console.log("beforeUpdate");
  },
  updated() {
    //It's runs wheren making the changes
    console.log("updated");
  },
  beforeDestroy() {
    //It's executed before ddestroying the instance
    console.log("beforeDestroy");
  },
  destroyed() {
    //When executing It's destroyed the entire instance
    console.log("destroyed");
  },
  methods: {
    destroy() {
      this.$destroy();
    },
  },
});
