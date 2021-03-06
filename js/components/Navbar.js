Vue.component("navbar", {
  props: ["loggedIn"],
  data: function() {
    return {};
  },

  methods: {
    loginUser() {
      this.$emit("navbar-login");
    },

    logoutUser() {
      this.$emit("navbar-logout");
    },
    toHome() {
      console.log('masuk ke home')
      this.$emit('tohome')
    }
  },

  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="" v-on:click.prevent="toHome">Picquishare</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!-- <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> -->
        </ul>
        <div v-if="loggedIn">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Add Image</button>
        </div>
        <div v-if="loggedIn">
          <a class="nav-link" href="#" v-on:click="logoutUser" style="color:white">
            <i class="fas fa-sign-out-alt"></i> SignOut
          </a>
        </div>
        <div v-if="!loggedIn">
          <div id="my-signin2"></div>
        </div>

        
      </div>
    </nav>
  `
});

