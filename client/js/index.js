$(document).ready(function(){
  // we call the function
  ready();
});


function ready () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/artikel',
    dataType: "json",
    success: function (data) {
      $(`#thumbnail`).empty()
      let artikellist = data
      for (var i = 0; i < artikellist.length; i++) {
        let detil = artikellist[i];
        let result = `
          <div class="col s12 m6" id="data-${detil._id}">
            <div class="card blue darken-1">
              <div class="card-content white-text">
                <span class="card-title">${detil.title}</span>
                <p>${detil.text}</p>
              </div>
              <div class="card-action">
                <a href="#modal${detil._id}" name="modal-edit">Update</a>
                <a href="#" onclick="deleteArtikel('${detil._id}')" name="delete">Delete</a>
              </div>
            </div>
          </div>

         <!-- Modal Structure -->
         <div id="modal${detil._id}" class="modal modal-fixed-footer">
           <div class="modal-content">
             <h4>Update Form</h4>
             <p>Update</p>
             <form class="col s12" method="POST">
               <div class="row center">
                 <div class="input-field col s6">
                   <input id="title${detil._id}" type="text" data-length="10" value="${detil.title}">
                   <label for="title">Title</label>
                 </div>
               </div>
               <div class="row center">
                 <div class="input-field col s10">
                   <textarea id="text${detil._id}" class="materialize-textarea" data-length="120" value="${detil.text}"></textarea>
                   <label for="text">Story</label>
                 </div>
               </div>
             </form>
           </div>
           <div class="modal-footer">
             <a href="#!" class="modal-action modal-close waves-effect waves-green btn">Close</a>
             <button type="button" class="waves-effect modal-close waves-light btn" onclick="updateArtikel('${detil._id}')">Update</button>
           </div>
          </div>
        `
        $('#thumbnail').append(result)
        $('.modal').modal()
      }
    },
    error: function (err) {
      console.log(err)
    }
  })
}

function createArtikel () {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/artikel',
    data: {
      title: $('#title').val(),
      text: $('#text').val()
    },
    dataType: "json",
    success: function (data) {
      $('#title').val("")
      $('#text').val("")
      ready()
    },
    error: function (err) {
      console.log(err)
    }
  })
}

function deleteArtikel (id) {
  $.ajax({
    type: 'DELETE',
    url: 'http://localhost:3000/artikel/'+id,
    dataType: "json",
    success: function (hasil) {
      $(`#data-${id}`).remove()
    },
    error: function (err) {
      console.log(err)
    }
  })
}

function updateArtikel (id) {
  $.ajax({
    type: 'PUT',
    url: `http://localhost:3000/artikel/${id}`,
    data: {
      title: $(`#title${id}`).val(),
      text: $(`#text${id}`).val()
    },
    dataType: "json",
    success: function (data) {
      ready()
    },
    error: function (err) {
      console.log(err)
    }
  })
}
