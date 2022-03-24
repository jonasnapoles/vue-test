const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Mate",
    accountant: 0,
  },
  // Computed Properties
  computed: {
    inverted() {
      return this.message.split("").reverse().join("");
    },
    colour() {
      // this is returning an object
      return {
        "bg-success": this.accountant <= 30,
        "bg-warning": this.accountant > 30 && this.accountant < 60,
        "bg-danger": this.accountant >= 60,
      };
    },
  },
});
