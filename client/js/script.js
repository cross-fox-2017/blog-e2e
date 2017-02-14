$(document).ready(function() {
  getPost();
  $('.modal').modal();
})
function getPost() {
  $.ajax({
    url: "http://localhost:3000/post/all",
    type: "GET",
    dataTyepe: "json",
    success: function(result) {
      $(`#blog-posts`).empty()
      result.forEach(function(data){
        $('#blog-posts').prepend(`
          <div id ="${data._id}" class="col s12 m4">
            <div class="card teal darken-1">
              <div class="card-content white-text">
                <span class="card-title">${data.subject}</span>
                <p>${data.text}</p>
              </div>
              <div class="card-action">
              <a name="modaledit" href="#modal-edit-${data._id}"><i class="material-icons">mode_edit</i></a>
              <a name="delete" href="#" onclick="deletePost('${data._id}')"><i class="material-icons">delete</i></a>
              </div>
            </div>
          </div>
          <div id="modal-edit-${data._id}" class="modal">
            <div class="modal-content">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s6">
                    <i class="material-icons prefix">turned_in_not</i>
                    <input id="edit-subject-${data._id}" type="text" value="${data.subject}">
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">mode_edit</i>
                    <textarea id="edit-article-${data._id}" class="materialize-textarea">${data.text}</textarea>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <a onclick="editPost('${data._id}')" class="modal-action modal-close waves-effect waves-green btn-flat">Send</a>
            </div>
          </div>
          `)
          $('.modal').modal();
      })
    }
  })
}
function newPost() {
  $.ajax({
    url: "http://localhost:3000/post/new",
    type: "POST",
    data: {
      subject: $('#subject').val(),
      text: $('#article').val()
    },
    dataType: "json",
    success: function(result){
      $('#blog-posts').prepend(`
        <div id ="${result._id}" class="col s12 m4">
          <div class="card teal darken-1">
            <div class="card-content white-text">
              <span class="card-title">${result.subject}</span>
              <p>${result.text}</p>
            </div>
            <div class="card-action">
            <a name="modaledit" href="#modal-edit-${result._id}"><i class="material-icons">mode_edit</i></a>
            <a name="delete" href="#" onclick="deletePost('${result._id}')"><i class="material-icons">delete</i></a>
            </div>
          </div>
        </div>
        <div id="modal-edit-${result._id}" class="modal">
          <div class="modal-content">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <i class="material-icons prefix">turned_in_not</i>
                  <input id="edit-subject-${result._id}" type="text" value="${result.subject}">
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">mode_edit</i>
                  <textarea id="edit-article-${result._id}" class="materialize-textarea">${result.text}</textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <a onclick="editPost('${result._id}')" class="modal-action modal-close waves-effect waves-green btn-flat">Send</a>
          </div>
        </div>
      `)
      $('#subject').val("")
      $('#article').val("")
      $('.modal').modal();
    }
  })
}

function editPost(id) {
  $.ajax({
    url: `http://localhost:3000/edit/post/${id}`,
    type: "PUT",
    data: {
      subject: $(`#edit-subject-${id}`).val(),
      text: $(`#edit-article-${id}`).val()
    },
    dataType: "json",
    success: function(result){
      getPost()
    }
  })
}

function deletePost(id) {
  $.ajax({
    url: `http://localhost:3000/delete/post/${id}`,
    type: "DELETE",
    data: {
      subject: $(`#edit-subject-${id}`).val(),
      text: $(`#edit-article-${id}`).val()
    },
    dataType: "json",
    success: function(result){
      getPost()
    }
  })
}
