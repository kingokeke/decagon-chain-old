$(document).ready(() => {

  $('#add').on({
    mouseenter: function () {
      $(this).css("background-color", "yellow");
    }
    , mouseleave: function () {
      $(this).css("background-color", "lightgrey");
    },
    click: function (e) {
      e.preventDefault();

      var fname = $('#fname').val();
      var lname = $('#lname').val();
      var uname = $('#uname').val();
      var gender = $('#gender').val();
      var pwd = $('#pwd').val();
      var repeatpwd = $('#re-pwd').val();

      var data = {};

      if (fname && lname && uname && pwd && repeatpwd) {
        if (pwd === repeatpwd) {
          data = { "first name": fname, "last name": lname, "gender": gender, "user name": uname, "password": pwd };

          $.ajax({
            url: "http://localhost:3000/users",
            type: "POST",
            data: data,
            success: function (e) {
              //TODO make a link to the login page for successful signup
              swal("Successful!", "Your account was created, Please login!", "success");

            }
          });
        } else {
          swal("ooops!", "Password do not match!", "warning");
        }
      } else {
        swal("oops!", "Please all felds are requird!", "warning");
      }
    }
  });
});
