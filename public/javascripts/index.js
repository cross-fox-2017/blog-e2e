function login () {
  let usernameVal = $('input[name=username]').val()
  let passwordVal = $('input[name=password]').val()
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/auth/login',
    data: {username: usernameVal, password: passwordVal},
    success: function (resp) {
      if (resp.token) {
        window.location.assign('http://localhost:3000/home')
      }else {
        window.location.assign('http://localhost:3000/')
      }
    },
    error: function (err) {
      console.log('LOGIN request error')
      window.location.assign('http://localhost:3000/')
    }
  // return false sama kyk prevent default
  })
}
