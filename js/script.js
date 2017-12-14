$("#firstName").keyup(function(){
    var firstNameValue = $('#firstName').val();
    $('#firstName2').val(firstNameValue);
});

$("#lastName").keyup(function(){
    var lastNameValue = $('#lastName').val();
    $('#lastName2').val(lastNameValue);
});


$('#lastName').blur (function (){
    var firstNameValue = $('#firstName').val();
    var lastNameValue = $('#lastName').val();
    var fullName = firstNameValue +' '+lastNameValue;
    $('#fullName').val(fullName);

});



//