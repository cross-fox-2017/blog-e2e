$(document).ready(function () {
  getArticles()
})

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

function getArticles () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/articles',
    success: function (resp) {
      for (var i = 0; i < resp.length; i++) {
        let article = resp[i]
        $('#add-card').append(
          `<div class="col s4 m4">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title" id="title-${i + 1}">${article.title}</span>
                <p id="content-${i + 1}">${article.content}</p>
              </div>
              <div class="card-action">
                <a onclick="">Update</a>
                <a onclick="deleteArticle('${article._id}')">Delete</a>
              </div>
            </div>
          </div>`
        )
      }
    },
    error: function () {
      console.log('GET Response Error')
    }
  })
}

function deleteArticle (id) {
  if (confirmDelete()) {
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3000/api/articles/${id}`,
      success: function (resp) {
        $('#add-card').empty()
        for (let i = 0; i < resp.length; i++) {
          let article = resp[i]
          `<div class="col s4 m4">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title" id="title-${i + 1}">${article.title}</span>
                <p id="content-${i + 1}">${article.content}</p>
              </div>
              <div class="card-action">
                <a onclick="">Update</a>
                <a onclick="deleteArticle('${article._id}')">Delete</a>
              </div>
            </div>
          </div>`
        }
      },
      error: function () {
        console.log('DELETE Response Error')
      }
    })
  }
}

function confirmDelete () {
  return confirm('Are you sure?')
}
