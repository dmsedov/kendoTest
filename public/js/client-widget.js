$(document).ready(function() {
  const DataSource = new kendo.data.DataSource({
    transport: {
      read: {
        url: 'http://localhost:8060/users',
        type: 'GET',
        dataType: 'json',
      },
      create: {
        url: 'http://localhost:8060/users/create',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
      },
      update: {
        url: 'http://localhost:8060/users/update',
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
      },
      destroy: {
        url: 'http://localhost:8060/users/delete',
        type: 'DELETE',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
      },
      parameterMap: function(data, type) {
          return kendo.stringify(data.models);
      },
    },
    schema: {
      model: {
        id: 'nickname',
        fields: {
          nickname: { type: 'string' },
          age: { type: 'number' },
          country: { type: 'string' },
          company: { type: 'string' },
        },
      },
    },
    batch: true,
    pageSize: 10,
  });
  $('#grid').kendoGrid({
    dataSource: DataSource,
    height: 350,
    navigatable: true,
    toolbar: ['create', 'save', 'cancel'],
    filterable: true,
    sortable: true,
    pageable: true,
    editable: true,
    columns: [
      {
        field: 'nickname',
        title: 'Nickname',
      }, {
        field: 'age',
        title: 'Age',
      }, {
        field: 'country',
        title: 'Country',
      }, {
        field: 'company',
        title: 'CompanyName',
      },
      { command: [
        {
          name: 'destroy',
          text: 'remove',
          click: function myFunction(e) {
            e.preventDefault();
            alert("deleted pressed!");
            const item = $("#grid").data("kendoGrid").dataItem($(this).closest("tr"));
            console.log(item, 'this is item!');
          },
        },
      ],
      },
    ],
  });
  $("#grid").on("mousedown",".k-grid-cancel-changes", function(e){
    DataSource.read();
  });

});
