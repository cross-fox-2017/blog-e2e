function ready () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/artikel',
    success: function (data) {
      let booklist = data
      let table = ''
      for (var i = 0; i < booklist.length; i++) {
        let item = booklist[i]
        table += `<div class="row" id="item-id-${item._id}">
         <div class="col s6 m6">
           <div class="card blue-grey darken-1">
             <div class="card-content white-text">
               <span class="card-title">${item.judul}</span>
               <p>${item.isi}</p>
             </div>
             <div class="card-action">
               <a href="#">${item.penulis}</a>
               <div class="row">
                 <a class="waves-effect waves-light btn red lighten-2" onclick="hapusArtikel('${item._id}')">Delete</a>
                 <a class="update waves-effect waves-light btn green lighten-2" href="#modal${item._id}">Update</a>
               </div>
             </div>
           </div>
         </div>
        </div>


        <div id="modal${item._id}" class="modal" style="width:30%">
          <div class="modal-content">
            <div class="row">
              <div class="input-field col s12">
                <input id="judul${item._id}" type="text" class="validate" value="${item.judul}">
                <label>Judul</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea id="isi${item._id}" class="materialize-textarea">${item.isi}</textarea>
                <label>Resensi</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="penulis${item._id}" type="text" class="validate" value="${item.penulis}">
                <label>Penulis</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn waves-effect modal-close waves-light" type="submit" onclick="updateArtikel('${item._id}')">Submit</button>
          </div>
        </div>



        `
      }
      $('#wrapper').html(table)
        $('.modal').modal(); //deklarasikan modal disini agar terbaca
    },
    error: function (err) {
      console.log(err)
    }
  })
}

function buatArtikel () {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/artikel',
    data: {
      judul : $('#judul').val(),
      isi : $('#isi').val(),
      penulis : $('#penulis').val()
    },
    success: function (data) {
      $('#judul').val(""),
      $('#isi').val(""),
      $('#penulis').val(""),
      ready()
    },
    error: function (err) {
      console.log(err)
    }
  })
}

function updateArtikel (xxx) {
  $.ajax({
    type: 'PUT',
    url: 'http://localhost:3000/artikel/'+xxx,
    data: {
      judul : $('#judul'+xxx).val(),
      isi : $('#isi'+xxx).val(),
      penulis : $('#penulis'+xxx).val()
    },
    success: function (data) {
      ready()
    },
    error: function (err) {
      alert(err)
      console.log(err)
    }
  })
}

function hapusArtikel (ccc) {
  $.ajax({
    type: 'DELETE',
    url: 'http://localhost:3000/artikel/'+ccc,
    success: function (data) {
      alert('Data berhasil dihapus')
      $(`#item-id-${ccc}`).remove()
    },
    error: function (err) {
      console.log(err)
    }
  })
}

$(document).ready(function () {
  ready();
})
