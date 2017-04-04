// Ajax requests interceptor, adds token to Authorization header
$.ajaxSetup({
    beforeSend: function (xhr) {
        var token = localStorage.getItem('token');

        if (token) {
          xhr.setRequestHeader('Authorization', token);
        }
    }
});

function checkToken(){
    console.log('Checkin token: ', window.location.pathname);
    $.ajax({
      url : getConstants('API_URL') + '/checkToken',
      type: 'POST',
      success: function(data, textStatus, jqXHR)
      {
        console.log('Success on checking token: ' + window.location.pathname);

        var patt = new RegExp("login.html");
        if (patt.test(window.location.pathname)) {
          $('body').mask('Loading...');
          window.location.href = 'index.html';
        }
        else {

          // It doesnt redirect to any other page
          return;
        }
      },
      error: function (jqXHR, textStatus, errorThrown)
      {
        console.log('Error on checking token: ' + window.location.pathname);

        var patt = new RegExp("login.html");
        if (!patt.test(window.location.pathname)) {
          $('body').mask('Loading...');
          window.location.href = 'login.html';
        }
        else {

          // User is already at login page
          return;
        }
      }
    });
}