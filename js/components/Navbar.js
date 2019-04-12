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
        <div v-if="loggedIn">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>
        </div>
        <div v-if="loggedIn">
          
        </div>
        <div v-if="!loggedIn">
          <div id="my-signin2"></div>
        </div>

        
      </div>
    </nav>
  `
});

