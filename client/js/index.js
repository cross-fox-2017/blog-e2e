$(document).ready(function() {
    $.ajax({
        url: "http://localhost:3000/artikel/show",
        type: "GET",
        success: function(result) {
            var tampung = "";
            for (var i = 0; i < result.length; i++) {
                tampung +=
                    `<tr id="trID${result[i]._id}">
                              <td>${result[i].title}</td>
                              <td>${result[i].isi}</td>
                              <td>${result[i].author}</td>
                              <td class="collapsing">
                                  <div class="ui fitted checkbox">
                                      <input id="${result[i]._id}" value="${result[i]._id}" type="checkbox"><label></label>
                                  </div>
                              </td>
                          </tr>`

            }
            $("#listtodo").append(tampung)
        }
    });
})

function postArtikel() {
    $.ajax({
        url: "http://localhost:3000/artikel/add",
        type: "POST",
        data: {
            title: $("#title").val(),
            isi: $("#isi").val(),
            author: $("#author").val()
        },
        success: function(result) {
            tampung =
                `<tr id="trID${result._id}">
                            <td>${result.title}</td>
                            <td>${result.isi}</td>
                            <td>${result.author}</td>
                            <td class="collapsing">
                                <div class="ui checkbox">
                                    <input id="${result._id}" value="${result._id}" type="checkbox"><label></label>
                                </div>
                              </td>
                        </tr>`
            $("#listtodo").prepend(tampung)
            $("#title").val(''),
                $("#isi").val(''),
                $("#author").val('')
        }
    });
}

function checkAction(input) {
    // console.log($("#cekStatus").val())
    // $("#cekStatus").is(':checked')
    // console.log($("#listtodo tr td.collapsing div input").first().attr("id"));
    // $("#listtodo tr td.collapsing div input").each(function(index, data) {
    //   console.log($(data).attr("id"))
    // })
    var arrId = []
    var list = $("#listtodo tr td.collapsing div")
    var listId = $("#listtodo tr td.collapsing div input")
    for (var i = 0; i < list.length; i++) {
        var id = $(listId[i]).attr("id")
        if ($(`#${id}`).is(':checked')) {
            if (input == "update") {
                arrId.push(id)
                break;
            }
            if (confirm("Are you sure you want to delete ?")) {
              document.getElementById(`trID${id}`).innerHTML = ""
              arrId.push(id)
            } else {
                return false;
                break;
            }


        }
    }
    if (input == "update") {
        updateArtikel(arrId[0])
    } else {
        deleteArtikel(arrId)
    }
}

function deleteArtikel(input) {
    // alert(input)
    $.ajax({
        url: "http://localhost:3000/artikel/delete",
        type: "DELETE",
        data: {
            arrId: JSON.stringify(input)
        },
        success: function(result) {
            alert(result.status)
        }
    });
}

function updateArtikel(input) {

}
