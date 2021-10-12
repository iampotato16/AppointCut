// specify the columns
// const columnDefs = [
// 	{ field: "make", sortable: true },
// 	{ field: "model", sortable: true },
// 	{ field: "price", sortable: true }
// ];

const columnDefs = [
   { field: "ID", sortable: true, width: 100 },
   { field: "Name", sortable: true, width: 150 }
   // {
   //    field: '', width: 50, cellRenderer: function (params) {
   //       return '<a class="i-edit"><i class="bi bi-pencil"></i></a>'
   //    }
   // },
   // {
   //    field: '', width: 50, cellRenderer: function (params) {
   //       return '<a class="i-edit"><i class="bi bi-x"></i></i></a>'
   //    }
   // }
];

// column defs for services
const columnDefsServ = [
   { field: "ID", sortable: true },
   { field: "Category", sortable: true },
   { field: "Name", sortable: true },
   {
      headerName: 'Actions',
      children: [
         {
            field: '', width: 62.5, cellRenderer: function (params) {
               return '<a class="i-edit"><i class="bi bi-pencil"></i></a>'
            }
         },
         {
            field: '', width: 62.5, cellRenderer: function (params) {
               return '<a class="i-edit"><i class="bi bi-pencil"></i></a>'
            }
         }
      ]
   }
];

// face shape, services, citu, specialization, category, barangay, haircuts 
const rowDataFaceShape = [
   { ID: "0001", Name: "Square" },
   { ID: "0002", Name: "Circle" },
   { ID: "0003", Name: "Oval" },
   { ID: "0004", Name: "Oblong" },
   { ID: "0005", Name: "Diamond" },
   { ID: "0006", Name: "Square" }
];

const rowDataCategory = [
   { ID: "0001", Name: "Hair" },
   { ID: "0002", Name: "Nails" },
   { ID: "0003", Name: "Shave" },
   { ID: "0004", Name: "Waxing Services" },
   { ID: "0005", Name: "Others" }
];

const rowDataSpecialization = [
   { ID: "0001", Name: "Hair Stylist" },
   { ID: "0002", Name: "Nail Technician" },
   { ID: "0003", Name: "Ethestician" },
   { ID: "0004", Name: "Masseuse" }
];

const rowDataHaircuts = [
   { ID: "0001", Name: "Buzz Cut" },
   { ID: "0002", Name: "Semi Kalbo" },
   { ID: "0003", Name: "Kalbo" }
];

const rowDataCity = [
   { ID: "0001", Name: "Quezon City" },
   { ID: "0002", Name: "Manila" },
   { ID: "0003", Name: "Makati" },
   { ID: "0002", Name: "Caloocan" }
];

const rowDataBrgy = [
   { ID: "0001", Name: "Brgy 1" },
   { ID: "0002", Name: "Brgy 2" },
   { ID: "0003", Name: "Brgy 3" },
   { ID: "0002", Name: "Brgy 4" },
   { ID: "0001", Name: "Brgy 1" },
   { ID: "0002", Name: "Brgy 2" },
   { ID: "0003", Name: "Brgy 3" },
   { ID: "0002", Name: "Brgy 4" }
];

const rowDataServices = [
   { ID: "0001", Category: "Hair", Name: "Haircut" },
   { ID: "0001", Category: "Nails", Name: "Manicure" },
   { ID: "0001", Category: "Nails", Name: "Pedicure" },
   { ID: "0001", Category: "Hair", Name: "Hair Color" },
   { ID: "0001", Category: "Hair", Name: "Perm" },
   { ID: "0001", Category: "Massage", Name: "Backstroke" }
]
// let the grid know which columns and what data to use
// face shape, services, citu, specialization, category, barangay, haircuts 
const gridOptionsFaceShape = {
   columnDefs: columnDefs,
   rowData: rowDataFaceShape,
   domLayout: 'autoHeight'
};

const gridOptionsServices = {
   columnDefs: columnDefsServ,
   rowData: rowDataServices,
   domLayout: 'autoHeight'
};

const gridOptionsSpecialization = {
   columnDefs: columnDefs,
   rowData: rowDataSpecialization,
   domLayout: 'autoHeight'
};

const gridOptionsCategory = {
   columnDefs: columnDefs,
   rowData: rowDataCategory,
   domLayout: 'autoHeight'
};

const gridOptionsHaircuts = {
   columnDefs: columnDefs,
   rowData: rowDataHaircuts,
   domLayout: 'autoHeight'
};

const gridOptionsCity = {
   columnDefs: columnDefs,
   rowData: rowDataCity,
   domLayout: 'autoHeight'
};

const gridOptionsBrgy = {
   columnDefs: columnDefs,
   rowData: rowDataBrgy,
   domLayout: 'autoHeight'
};


// lookup the container we want the Grid to use
const eGridDiv1 = document.querySelector('#gridBrgy');
const eGridDiv2 = document.querySelector('#gridCity');
const eGridDiv3 = document.querySelector('#gridServices');
const eGridDiv4 = document.querySelector('#gridCategory');
const eGridDiv5 = document.querySelector('#gridHaircuts');
const eGridDiv6 = document.querySelector('#gridSpecialization');
const eGridDiv7 = document.querySelector('#gridFaceShape');

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv1, gridOptionsBrgy);
new agGrid.Grid(eGridDiv2, gridOptionsCity);
new agGrid.Grid(eGridDiv3, gridOptionsServices);
new agGrid.Grid(eGridDiv4, gridOptionsCategory);
new agGrid.Grid(eGridDiv5, gridOptionsHaircuts);
new agGrid.Grid(eGridDiv6, gridOptionsSpecialization);
new agGrid.Grid(eGridDiv7, gridOptionsFaceShape);
