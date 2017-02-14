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
            <td>${item.title}</td>
            <td>${item.content}</td>
            <td>${item.author}</td>
            <td>
              <button class="ui primary basic button" type="button" id="${item._id}" onclick="edit(${item._id})" name="edit">Edit</button>
              <button class="ui negative basic button" type="button" id="${item._id}" onclick="destroy(${item._id})" name="delete">Delete</button>
            </td>
          </tr>`
        )
      })
    }
  })
}
function edit(id) {
  return id
}
function destroy(id){
  return id
}
