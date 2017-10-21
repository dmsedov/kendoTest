$(document).ready(function() {
  $('#grid').kendoGrid({
    dataSource: {
      transport: {
        read: 'http://localhost:8060/users',
        type: 'GET',
        dataType: 'json',
      },
      schema: {
        model: {
          id: 'users',
          fields: {
            user_id: { type: 'number' },
            nickname: { type: 'string' },
            age: { type: 'number' },
            country: { type: 'string' },
            company: { type: 'string' },
          },
        },
      },
      pageSize: 10,
    },
    height: 350,
    navigatable: true,
    toolbar: ['create', 'save', 'cancel'],
    filterable: true,
    sortable: true,
    pageable: true,
    editable: true,
    columns: [{
      field: 'user_id',
      title: 'userId',
      filterable: false,
    },
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
    ],
  });
});
