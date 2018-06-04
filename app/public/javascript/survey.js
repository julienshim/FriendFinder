var form = {

    postInput: function(currentURL, currentUserInput){
        $.post(currentURL + "/api/friends", currentUserInput, function(data) {
            console.log(data);
            $("#matchName").text(data.name);
            $("#matchPic").attr("src", data.photo);
            $('#newFriendModal').modal();
        });
    },

    isFormValid: function(formClass){
        var isValid = true;
        $(formClass).each(function(){
            if($(this).val()===''){
                isValid = false;
            }
        });
        return isValid;
    }

}

$("#form-submit").on("click", function() {
    event.preventDefault();
    console.log(form.isFormValid('.form-select'));
    if(form.isFormValid('.form-select') === true){
        var currentURL = window.location.origin;
        var currentUserInput = {
            name: $('#nameInput').val().trim(),
            photo: $('#photoInput').val().trim(),
            scores: [
                $('#q1Select').val(),
                $('#q2Select').val(),
                $('#q3Select').val(),
                $('#q4Select').val(),
                $('#q5Select').val(),
                $('#q6Select').val(),
                $('#q7Select').val(),
                $('#q8Select').val(),
                $('#q9Select').val(),
                $('#q10Select').val(),
                
            ]
        };
        form.postInput(currentURL, currentUserInput);
        $('#nameInput').val('');
        $('#photoInput').val('');
        $('#q1Select').val('');
        $('#q2Select').val('');
        $('#q3Select').val('');
        $('#q4Select').val('');
        $('#q5Select').val('');
        $('#q6Select').val('');
        $('#q7Select').val('');
        $('#q8Select').val('');
        $('#q9Select').val('');
        $('#q10Select').val('');
        
    } else {
       alert("Incomplete!");
       return false;
    }
});