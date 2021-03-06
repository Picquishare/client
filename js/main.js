let baseURL = 'http://localhost:3000'

function onSuccess(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  var id_token = googleUser.getAuthResponse().id_token;
  if (!localStorage.getItem('token')) {
    app.loginGoogle(id_token)
  }
}

function onFailure(error) {
  console.log(error);
}

function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 230,
    'height': 50,
    'longtitle': true,
    'theme': 'light',
    'onsuccess': onSuccess,
    'onfailure': onFailure,
    'text': 'helo'
  });
}

function disconnectGoogle(googleUser) {
  console.log('disconnecting..')
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    renderButton()
  });
}

var app = new Vue({
  el: "#app",
  data: {
    loggedIn: false,
    selectedTags: '',
    caption: '',
    image: '',
    allImage: [],
    allTag: []
  },
  created() { },

  methods: {
    changeHome() {
      console.log('masuk ke home main')
      this.getAllImage()
    },
    onSignIn() {

    },
    loginUser() {

    },
    logoutUser() {

      this.loggedIn = false;
      this.allImage = []
      this.allTag = []
      disconnectGoogle()
      localStorage.clear()
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Logout success',
        showConfirmButton: false,
        timer: 1500
      })
    },
    loginGoogle(token) {
      axios
        .post(baseURL + '/google', {
          id_token: token
        })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          this.loggedIn = true
          this.getAllImage()
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Login success',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch((err) => {
          Swal.fire({
            type: 'error',
            title: 'Oops something wrong'
          })
          console.log(err)
        })
    },
    addImage(payload) {
      let data = new FormData()
      data.append('caption', payload.caption)
      data.append('image', payload.image)
      data.append('tags', payload.tags)
      console.log('masuk ke add image')
      console.log(data)
      axios
        .post(baseURL + '/share/upload', data, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(({ data }) => {
          console.log('berhasil upload')
          console.log(data)
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Added image',
            showConfirmButton: false,
            timer: 1500
          })
          this.allImage.unshift(data)
          // this.getAllImage()
        })
        .catch((err) => {
          Swal.fire({
            type: 'error',
            title: 'Oops something wrong'
          })
          console.log(err)
        })
    },
    getAllImage() {
      this.allImage = []
      this.allTag = []
      axios
        .get(baseURL + '/share', {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(({ data }) => {
          console.log(data)
          this.allImage = data.reverse()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    findByTag(payload) {
      console.log('masuk ke main tag')
      this.allImage = []
      this.allTag = []
      axios
        .get(baseURL + `/share/tag?tags=${payload}`)
        .then(({ data }) => {
          console.log(data)
          console.log('berhasil', data)
          this.allTag = data.ShareId.reverse()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true
      this.getAllImage()
    }
    else {
      this.loggedIn = false
      this.allImage = []
      this.allTag = []
    }
  },
});
