//signup form validation
$(function(){
    
      $('#errorname').hide();
      $('#errorusername').hide();
      $('#erroremail').hide();
      $('#errorpass').hide();
      $('#errorconpass').hide();
    
      var error_name = false;
      var error_username = false;
      var error_email = false;
      var error_pass = false;
      var error_conpass = false;
    
      $('#form_name').focusout(function(){
        checkName();
      });
      $('#form_username').focusout(function(){
        checkUserName();
      });
      $('#form_email').focusout(function(){
        checkEmail();
      });
      $('#form_pwd').focusout(function(){
        checkPass();
      });
      $('#form_conpwd').focusout(function(){
        checkConPass();
      });
    
      // check name
      function checkName(){
        var name = $('#form_name').val();
        var pattern = new RegExp(/^[a-zA-Z ]{5,30}$/);
        if (!pattern.test(name)) {
          $('#errorname').html('Should be between 5-30 contains only space');
          $('#errorname').show(300);
          error_name = true;
        }
        else {
            $('#errorname').hide(400);
        }
      }
      // check username
      function checkUserName(){
        var username = $('#form_username').val();
        var pattern = new RegExp(/^[a-zA-Z0-9._]{6,20}$/);
        if (!pattern.test(username)) {
          $('#errorusername').html('Should be between 6-20 contains only alphabets numbers . _');
          $('#errorusername').show(300);
          error_username = true;
        }
        else {
            $('#errorusername').hide(400);
        }
      }
    
      //check email
      function checkEmail(){
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        if (pattern.test($("#form_email").val())) {
          $('#erroremail').hide(400);
        }
        else {
            $('#erroremail').html('Invalid email address');
            $('#erroremail').show(300);
            error_email = true;
        }
      }
    
      // check password
      function checkPass(){
        var password = $('#form_pwd').val();
        var pattern = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    
        if (!pattern.test(password)) {
          $('#errorpass').html('Should be at least a uppercase,lowercase,number,special characters and minimum length 8');
          $('#errorpass').show(300);
          error_pass = true;
        }
        else {
            $('#errorpass').hide(400);
        }
      }
    
      // check confirm password
      function checkConPass(){
        var password = $('#form_pwd').val();
        var con_pass = $('#form_conpwd').val();
        if (password != con_pass) {
          $('#errorconpass').html('Password not match');
          $('#errorconpass').show(300);
          error_conpass = true;
        }
        else {
            $('#errorconpass').hide(400);
        }
      }
    
      //form submit
      $('#reg_form').submit(function(){
        error_name = false;
        error_username = false;
        error_email = false;
        error_pass = false;
        error_conpass = false;
        checkName();
        checkUserName();
        checkEmail();
        checkPass();
        checkConPass();
    
        if (error_name == false && error_username == false && error_email==false && error_pass == false && error_conpass == false) {
          return true;
        }
        else {
          return false;
        }
      });
    
    });



    
        // This is html form
    
        //  <form id="reg_form" action="" method="">
        //    <div class="form-group">
        //      <span class="signup-error" id="errorname">Name length must be 5! No special chars allowed</span>
        //      <input type="text" class="form-control" id="form_name" placeholder="Full Name" name="name">
        //    </div>
        //    <div class="form-group">
        //       <span class="signup-error" id="errorusername">username al least 5 chars</span>
        //      <input type="text" class="form-control" id="form_username" placeholder="Username" name="username">
        //    </div>
        //    <div class="form-group">
        //       <span class="signup-error" id="erroremail">Invalid email format</span>
        //      <input type="email" class="form-control" id="form_email" placeholder="Email" name="email">
        //    </div>
        //    <div class="form-group">
        //       <span class="signup-error" id="errorpass">Pasword must 6 chars</span>
        //      <input type="password" class="form-control" id="form_pwd" placeholder="Password" name="pass">
        //    </div>
        //    <div class="form-group">
        //       <span class="signup-error" id="errorconpass">Password not match</span>
        //      <input type="password" class="form-control" id="form_conpwd" placeholder="Confirm password">
        //    </div>
        //    <button type="submit" class="btn btn-default" name="submit">Signup</button>
        //  </form>