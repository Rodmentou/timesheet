var app = angular.module('timeSheet', ['ngRoute']);


app.controller('mainController', function ($scope) {
  $scope.users = [ {name: 'Rodrigo', department: 'GETIC', role: 'Estagiário'},
                    {name: 'Rejane', department: 'TESOU', role: 'Funcionário'},
                    {name: 'Hiarley', department: 'GETIC', role: 'Estagiário'}];


  $scope.setHoliday = function(holiday) {
    if ($scope.days) {
      $scope.days[holiday.day+1].message = holiday.message;
      $scope.days[holiday.day+1].valid = false;

    }
  };

  $scope.setCalendar = function(calendar) {
    var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
                  console.log(months[calendar.monthNumber]);

    $scope.year = calendar.year;
    $scope.month = months[calendar.monthNumber-1];
    $scope.days = [];
    var valid, message;
    for (var i = 0; i < calendar.numDays; i++) {
      $scope.days[i] = { number: i + 1 };
    };

    for (var i = calendar.firstSunday-1; i < calendar.numDays; i+=7 ) {
      $scope.days[i].valid = false;
      $scope.days[i].message = 'Domingo';
      if (i > 1) {
        $scope.days[i-1].message = 'Sábado';
      }


    };
  };



});
