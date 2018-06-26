$(document).ready(function (){
});

let input;
$('#submitButton').click(function() {
    input = $("#searchTerms").val();
    console.log(input);
    searchRepositories(input);
})


