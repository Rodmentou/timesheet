var app = angular.module('timeSheet', ['ngRoute']);


app.controller('mainController', function ($scope) {



  $scope.users = [

  {name: 'Rodrigo Nascimento de Souza', dpt: 'IT', role: 'Intern'},
  {name: 'Bill Gates', dpt: 'IT', role: 'Philanthropist'},
  {name: 'Calvin Harris', dpt: 'MUSIC', role: 'Employee'},
  {name: 'Ness M.', dpt: 'LAKE', role: 'Monster'},
  {name: 'Tony Stark', dpt: 'IT', role: 'Tony Stark'},
  {name: 'Plankton', dpt: 'LAKE', role: 'Employee'},
  {name: 'David Guetta', dpt: 'MUSIC', rol: 'Employee'},
    {name: 'Rodrigo Nascimento de Souza', dpt: 'IT', role: 'Intern'},
  {name: 'Bill Gates', dpt: 'IT', role: 'Philanthropist'},
  {name: 'Calvin Harris', dpt: 'MUSIC', role: 'Employee'},
  {name: 'Ness M.', dpt: 'LAKE', role: 'Monster'},
  {name: 'Tony Stark', dpt: 'IT', role: 'Tony Stark'},
  {name: 'Plankton', dpt: 'LAKE', role: 'Employee'},
  {name: 'David Guetta', dpt: 'MUSIC', rol: 'Employee'},
    {name: 'Rodrigo Nascimento de Souza', dpt: 'IT', role: 'Intern'},
  {name: 'Bill Gates', dpt: 'IT', role: 'Philanthropist'},
  {name: 'Calvin Harris', dpt: 'MUSIC', role: 'Employee'},
  {name: 'Ness M.', dpt: 'LAKE', role: 'Monster'},
  {name: 'Tony Stark', dpt: 'IT', role: 'Tony Stark'},
  {name: 'Plankton', dpt: 'LAKE', role: 'Employee'},
  {name: 'David Guetta', dpt: 'MUSIC', rol: 'Employee'},
    {name: 'Rodrigo Nascimento de Souza', dpt: 'IT', role: 'Intern'},
  {name: 'Bill Gates', dpt: 'IT', role: 'Philanthropist'},
  {name: 'Calvin Harris', dpt: 'MUSIC', role: 'Employee'},
  {name: 'Ness M.', dpt: 'LAKE', role: 'Monster'},
  {name: 'Tony Stark', dpt: 'IT', role: 'Tony Stark'},
  {name: 'Plankton', dpt: 'LAKE', role: 'Employee'},
  {name: 'David Guetta', dpt: 'MUSIC', rol: 'Employee'},
    {name: 'Rodrigo Nascimento de Souza', dpt: 'IT', role: 'Intern'},
  {name: 'Bill Gates', dpt: 'IT', role: 'Philanthropist'},
  {name: 'Calvin Harris', dpt: 'MUSIC', role: 'Employee'},
  {name: 'Ness M.', dpt: 'LAKE', role: 'Monster'},
  {name: 'Tony Stark', dpt: 'IT', role: 'Tony Stark'},
  {name: 'Plankton', dpt: 'LAKE', role: 'Employee'},
  {name: 'David Guetta', dpt: 'MUSIC', rol: 'Employee'},
    {name: 'Rodrigo Nascimento de Souza', dpt: 'IT', role: 'Intern'},
  {name: 'Bill Gates', dpt: 'IT', role: 'Philanthropist'},
  {name: 'Calvin Harris', dpt: 'MUSIC', role: 'Employee'},
  {name: 'Ness M.', dpt: 'LAKE', role: 'Monster'},
  {name: 'Tony Stark', dpt: 'IT', role: 'Tony Stark'},
  {name: 'Plankton', dpt: 'LAKE', role: 'Employee'},
  {name: 'David Guetta', dpt: 'MUSIC', rol: 'Employee'},
    {name: 'Rodrigo Nascimento de Souza', dpt: 'IT', role: 'Intern'},
  {name: 'Bill Gates', dpt: 'IT', role: 'Philanthropist'},
  {name: 'Calvin Harris', dpt: 'MUSIC', role: 'Employee'},
  {name: 'Ness M.', dpt: 'LAKE', role: 'Monster'},
  {name: 'Tony Stark', dpt: 'IT', role: 'Tony Stark'},
  {name: 'Plankton', dpt: 'LAKE', role: 'Employee'},
  {name: 'David Guetta', dpt: 'MUSIC', rol: 'Employee'},
    {name: 'Rodrigo Nascimento de Souza', dpt: 'IT', role: 'Intern'},
  {name: 'Bill Gates', dpt: 'IT', role: 'Philanthropist'},
  {name: 'Calvin Harris', dpt: 'MUSIC', role: 'Employee'},
  {name: 'Ness M.', dpt: 'LAKE', role: 'Monster'},
  {name: 'Tony Stark', dpt: 'IT', role: 'Tony Stark'},
  {name: 'Plankton', dpt: 'LAKE', role: 'Employee'},
  {name: 'David Guetta', dpt: 'MUSIC', rol: 'Employee'},
    {name: 'Rodrigo Nascimento de Souza', dpt: 'IT', role: 'Intern'},
  {name: 'Bill Gates', dpt: 'IT', role: 'Philanthropist'},
  {name: 'Calvin Harris', dpt: 'MUSIC', role: 'Employee'},
  {name: 'Ness M.', dpt: 'LAKE', role: 'Monster'},
  {name: 'Tony Stark', dpt: 'IT', role: 'Tony Stark'},
  {name: 'Plankton', dpt: 'LAKE', role: 'Employee'},
  {name: 'David Guetta', dpt: 'MUSIC', rol: 'Employee'},



  ];























  $scope.setHoliday = function(holiday) {
    if ($scope.days) {
      $scope.days[holiday.day-1].message = holiday.message;
      $scope.days[holiday.day-1].valid = false;
      $scope.holiday = null;
    }
  };

  $scope.setCalendar = function(calendar) {
    var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    $scope.year = calendar.year;
    $scope.month = months[calendar.monthNumber-1];
    $scope.days = [];
    $scope.calendarCreated = true;
    var valid, message;
    for (var i = 0; i < calendar.numDays; i++) {
      $scope.days[i] = { number: i + 1, valid: true };
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
