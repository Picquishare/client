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
    }
  },

  template: `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Picquishare</a>
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

            <button v-if="!loggedIn" v-on:click="loginUser" class="btn btn-outline-primary my-2 my-sm-0 mr-2" type="submit"><i class="fas fa-sign-in-alt"></i> Log In</button>
            <button v-if="!loggedIn" class="btn btn-primary my-2 my-sm-0" type="submit"><i class="fas fa-user"></i> Sign Up</button>
            <button v-if="loggedIn" class="btn btn-primary my-2 my-sm-0 mr-2" type="submit"><i class="fas fa-plus"></i> Upload</button>
            <div v-if="loggedIn">
              <b-dropdown id="user-dropdown" right text="User" variant="outline-success">
                <b-dropdown-item><i class="fas fa-user"></i> Profile</b-dropdown-item>
                <b-dropdown-item><i class="fas fa-users"></i> Friends</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item><i class="fas fa-cog"></i> Settings</b-dropdown-item>
                <b-dropdown-item v-on:click="logoutUser"><i class="fas fa-sign-out-alt"></i> Log Out</b-dropdown-item>
              </b-dropdown>
            </div>



            



            
          </div>
        </nav>
  `
});

