function ready () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/artikel',
    success: function (data) {
      // console.log(data)
      // console.log(JSON.parse(data))
      let booklist = data
      for (var i = 0; i < booklist.length; i++) {
        let item = booklist[i]
        let table = `<div class="row">
         <div class="col s12 m6">
           <div class="card blue-grey darken-1">
             <div class="card-content white-text">
               <span class="card-title">${item.judul}</span>
               <p>${item.isi}</p>
               <p>${item.penulis}</p>
             </div>
             <div class="card-action">
               <a href="#">${item.penulis}</a>
               <div class="row">
                 <a class="waves-effect waves-light btn red lighten-2">Delete</a>
                 <a class="waves-effect waves-light btn green lighten-2">Update</a>
               </div>
             </div>
           </div>
         </div>
        </div>`
        $('#wrapper').append(table)
      }
    },
    error: function (err) {
      console.log(err)
    }
  })
}

$(document).ready(function () {
  ready()
})
