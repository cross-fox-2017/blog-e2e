$(document).ready(function(){
  getArticle()
  addListener()
})
function addListener(){
  $('#saved').on('click', function(e){createArticle(e)})
  $('#canceled').on('click', function(e){clearform(e)})
}
function createArticle(e){
  e.preventDefault()
  let author = $('input[name=article-author]').val()
  let title = $('input[name=article-title]').val()
  let content = $('textarea[name=article-content]').val()
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/api/articles',
    data: {author: author, title: title, content:content},
  }).done(function(){
    getArticle()
  })
}
function clearform(e){
  e.preventDefault()
  let author = $('input[name=article-author]').val("")
  let title = $('input[name=article-title]').val("")
  let content = $('textarea[name=article-content]').val("")
}
function getArticle() {
  $('tbody#list-of-articles').empty()
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/articles',
    dataType: 'json',
    success: function(data){
      data.forEach(function(item){
        $('tbody#list-of-articles').append(
          `<tr>
            <td class="title" id="title${item._id}">${item.title}</td>
            <td id="content${item._id}">${item.content}</td>
            <td id="author${item._id}">${item.author}</td>
            <td>
              <button class="ui primary basic button" type="button" id="edit${item._id}" onclick="edit('${item._id}')" name="edit">Edit</button>
              <button class="ui negative basic button" type="button" id="destroy${item._id}" onclick="destroy('${item._id}')" name="delete">Delete</button>
            </td>
          </tr>`
        )
      })
    }
  })
}
function edit(id) {
  $('.ui.small.modal#modal-form')
  .modal({
    onShow: function(){
      let toUpdate = $(`td#content${id}`).text()
      $('textarea[name=update-form]').val(`${toUpdate}`)
    },
    onApprove: function(){
      let newContent = $('textarea[name=update-form]').val()
      $.ajax({
        method: 'PUT',
        url: `http://localhost:3000/api/articles/${id}`,
        data: {content: newContent}
      }).done(function(){
        getArticle()
      })
    }
  })
  .modal('show')

}
function destroy(id){
  $('.ui.basic.modal#delete-confirm')
  .modal('setting', {
    onApprove : function() {
      $.ajax({
        method: 'DELETE',
        url: `http://localhost:3000/api/articles/${id}`
      }).done(function(){
        getArticle()
      })
    }
  }).modal('show')
}
