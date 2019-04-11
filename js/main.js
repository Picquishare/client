var app = new Vue({
  el: "#app",
  data: {
    loggedIn: false
  },

  computed: {},

  watch: {},

  created() {},

  methods: {
    loginUser() {
      this.loggedIn = true;
    },

    logoutUser() {
      this.loggedIn = false;
    }
  }
});
