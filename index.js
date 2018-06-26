$(document).ready(function (){
});

let input;
$('#submitButton').click(function() {
    input = $("#searchTerms").val();
    console.log(input);
    searchRepositories(input);
})

function searchRepositories(input) {
    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search',//change
        dataType: 'json',
        data: {
            api_key: '2Wmv9FWaICCS6j3Bm0KwdzFh6jiksrhg', //change
            q: input,
        },
        success: resp => {
            name = resp.data["0"].embed_url
            $('#results').html(`<iframe src=${name}>`)
            desc = resp.data["0"].embed_url
            $('#results').html(`<iframe src=${desc}>`)
            url = resp.data["0"].embed_url
            $('#results').html(`<iframe src=${url}>`)
            ownerLogin = 
            ownerAvatar =
            profileLink =
        }
    })
}



