$(document).ready(function() {
    var spinner = $('#loader');

    $('#record_data_tabel').DataTable({
    lengthMenu: [
        [2, 10, 50, -1],
        [2, 10, 50, 200 , 'All'],
    ],
});

oTable = $('#record_data_tabel').DataTable();  
$('#custom_datatable_search_field').keyup(function(){
      oTable.search($(this).val()).draw() ;
});



     jQuery(function ($) {
     var $question = $(".single-sidebar-menu-list");
     var $answer = $(".single-menu-data-box");
     $question.click(function () {

       // Hide all answers
       $answer.slideUp();
       // Check if this answer is already open
       if ($(this).hasClass("open")) {

         // If already open, remove 'open' class and hide answer
         $(this).removeClass("open").next($answer).slideUp();
        // If it is not open...
      } else {
        // Remove 'open' class from all other questions
        $question.removeClass("open");
        // Open this answer and add 'open' class
        $(this).addClass("open").next($answer).slideDown();
       }
     });
 });

  $(".hamburger_img").click(function () {
    $(".dashboard-sidebar").toggleClass("active");
    $(".content-section").toggleClass("active");
  });


    function selectDate(date) {
$('#calendar-wrapper').updateCalendarOptions({
date: date
});

console.log(calendar.getSelectedDate());
}

var defaultConfig = {
weekDayLength: 1,
date: '08/05/2021',
onClickDate: selectDate,
showYearDropdown: true,
startOnMonday: false,
};

var calendar = $('#calendar-wrapper').calendar(defaultConfig);
console.log(calendar.getSelectedDate());


// update calender

function selectDate(date) {

  $('#calendar-wrapper-update').updateCalendarOptions({
    date: date
    });
  console.log(updatecalendar.getSelectedDate());
  }
  
  var defaultConfigupdate = {
  weekDayLength: 1,
  date: '08/05/2021',
  onClickDate: selectDate,
  showYearDropdown: true,
  startOnMonday: false,
  };

  var updatecalendar = $('#calendar-wrapper-update').calendar(defaultConfigupdate);
  console.log(updatecalendar.getSelectedDate());


});


