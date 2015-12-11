var app = angular.module('timeSheet', ['ngRoute']);


app.controller('mainController', function ($scope) {



  $scope.users = [

  {nome: 'Rodrigo Nascimento de Souza', departamento: 'GETIC', cargo: 'Handsome intern'},
  {nome: 'Fulano da Silva Sauro', departamento: 'DINO', cargo: 'Derrubador de árvores'},
  {nome: 'Kyocera Mita', departamento: 'GETIC', cargo: 'Impressora barulhenta'},
  {nome: 'Baby', departamento: 'DINO', cargo: 'Não é a mamãe'},
  {nome: 'Bill Gates', departamento: 'GETIC', cargo: 'Filântropo'}




  ];





















  $scope.months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  $scope.setHoliday = function(holiday) {
    if ($scope.days) {
      $scope.days[holiday.day-1].message = holiday.message;
      $scope.days[holiday.day-1].valid = false;
      $scope.holiday = null;
    }
  };

  $scope.setCalendar = function(calendar) {


    var monthNumber = $scope.months.indexOf(calendar.monthName);
    console.log(calendar.monthName);
    console.log(monthNumber);



    $scope.month = $scope.months[monthNumber];
    $scope.year = calendar.year;
    var date = new Date($scope.year, monthNumber, 1, 0, 0, 0, 0);
    calendar.firstSunday = +firstSunday($scope.year, monthNumber);
    calendar.numDays = +getNumDays($scope.year, monthNumber);
    console.log(calendar.firstSunday);

    $scope.days = [];
    $scope.calendarCreated = true;
    var valid, message;
    for (var i = 0; i < calendar.numDays; i++) {
      $scope.days[i] = { number: i + 1, valid: true };
    };

    for (var i = calendar.firstSunday-1; i < calendar.numDays; i+=7 ) {
      $scope.days[i].valid = false;
      $scope.days[i].message = 'Sunday';
      if (i > 1) {
        $scope.days[i-1].message = 'Saturday';
      }
    };


  };


  var firstSunday = function (year, month){
    var d = new Date(year, month, 1, 0, 0, 0, 0);
    var day = 0;
    if (d.getDay() == 0) {
       day = 1;
       d = d.setDate(day);
       d = new Date(d);
    }
    else if (d.getDay() != 1) {
       day = 8-(d.getDay());
       d = d.setDate(day);
       d = new Date(d);
     }
     var a = d.getDate();
     var t = d.getDay();
     var r = a - t;
     return r;
   };

   var getNumDays = function (year, month) {
     var monthStart = new Date(year, month, 1);
     var monthEnd = new Date(year, month + 1, 1);
     var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
     return monthLength;
   };


});
