'use strict'

const planetsModel = new Planets() // eslint-disable-line no-undef

//shopModel.editById(1 , {name:'123'});


function initAddForm () {
  const form = window.document.querySelector('#shop-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const shopData = {}
    let errors = [];
    formData.forEach((value, key) => {
        if(value){
            shopData[key] = value
        } else {
            $("#error").text(`${key} required`);
            errors.push(`${key} required`);
        }

    })

    if(errors.length == 0){
          planetsModel.Create(shopData)
          e.target.reset()
    }
    window.location = window.location

  })

}

function initList () {
  window.jQuery('#shop-list').DataTable({
    data: planetsModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Capacity', data: 'capacity' },
      { title: 'Weight', data: 'weight' },
      {
        data: null,
        className: "center",
        fnCreatedCell: function(nTd, sData, oData, iRow, iCol) {
          $(nTd).html("<a href=\"\" onclick='removeCell(" + oData.id + ")' class=\"editor_edit\">Delete</a> / <a href=\"\" class=\"editor_remove\">Edit</a>");
         }
      }
    ]
  })
}

function initListEvents () {
  document.addEventListener('shopsListDataChanged', function (e) {
    const dataTable = window.jQuery('#shop-list').DataTable()

    dataTable.clear()
    dataTable.rows.add(e.detail)
    dataTable.draw()
  }, false)
}

window.addEventListener('DOMContentLoaded', e => {
  initAddForm()
  initList()
  initListEvents()
})

function removeCell(id){
    planetsModel.removeById(id)
    const dataTable = window.jQuery('#shop-list').DataTable()
}
