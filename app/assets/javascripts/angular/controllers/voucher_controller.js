Lrn.controller('VoucherController', ['$scope',
  function($scope) {
    var docDefinition = {
   content: [
     {
       text: 'Fruits and Calories'
     },
     {
       style: 'demoTable',
       table: {
         widths: ['*', '*', '*'],
         body: [
           [{text: 'Fruit', style: 'header'}, {text: 'Quantity', style: 'header'},
             {text: 'Calories', style: 'header'}
           ],
           ['Apple', '100 grams', '52'],
           ['Bananas', '100 grams', '89'],
           ['Guava', '100 grams', '68'],
           ['Lemon', '100 grams', '29'],
           ['Mangos', '100 grams', '60'],
           ['Orange', '100 grams', '47'],
           ['Strawberries', '100 grams', '33']
         ]
       }
     }
   ],
   styles: {
     header: {
       bold: true,
       color: '#000',
       fontSize: 11
     },
     demoTable: {
       color: '#666',
       fontSize: 10
     }
   }
 };
}])
