  // validate 

  function validate_login_Form(event) {
    event.preventDefault();

    $("#add_task_form").validate({
        rules: {

          title: {
                required: true,
            },  
            category: {
              required: true,
          },  
          remind: {
            required: true,
        },  
        note: {
          required: true,
      },  
      subtask: {
        required: true,
    },   
            
                        
        }

    });

     if ($('#add_task_form').valid()) {
       
        $(document).ready(function () {
            var spinner = $('#loader');
          
              $("#loader").css("display", "flex");
              var user_name= $('#user_name').val();
              var email = $( '#email').val();
              var password = $('#password').val();
              var LoginForm = $('#LoginForm').val();
               $.ajax
                ({
                  type: "POST",
                  url: "/sitting_plan/php_files/login.php",
                  data: { "user_name": user_name,"email": email,"password": password,"LoginForm":LoginForm},
                  success:function (data) {
                   spinner.hide();
                   
                   if (data == 1) {
                    $('.responce_popup p').text("login successfull redirection to dashboard...");
                    $('.responce_popup').addClass('alert-success');
                    setTimeout(function() { 
                       $('.responce_popup').removeClass('alert-success');
                    }, 9000);
                     setTimeout(function() { 
                        window.location = "index.php";
                     }, 9000);
        
                  } 
                  else if(data == 2){
                    $('.responce_popup p').text("email not exists");
                    $('.responce_popup').addClass('alert-warning');
                    setTimeout(function() { 
                       $('.responce_popup').removeClass('alert-warning');
                    }, 9000);
                  }
                  else if(data == 3){
                    $('.responce_popup p').text("already login");
                    $('.responce_popup').addClass('alert-warning');
                    setTimeout(function() { 
                       $('.responce_popup').removeClass('alert-warning');
                    }, 9000);
                  }
                  else {
                    $('.responce_popup p').text("credentils not match");
                    $('.responce_popup').addClass('alert-warning');
                    setTimeout(function() { 
                       $('.responce_popup').removeClass('alert-warning');
                    }, 9000);
                  
                  }
                   // $('#reset_register').reset();
                  } 
                }); 
            
          }); 


     }

}

function onload_add_task() {

    var element = document.getElementById('AddTaskForm');
    element.onclick = validate_login_Form;

}

     // validate and submit login form with ajax end

      // validate and submit Add task



     // validate and submit Add task end
  
