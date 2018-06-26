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
        url: 'https://api.giphy.com/v1/gifs/search',
        dataType: 'json',
        data: {
            api_key: '2Wmv9FWaICCS6j3Bm0KwdzFh6jiksrhg',
            q: input,
            limit: 3,
            rating: 'PG-13'
        },
        success: resp => {
            url = resp.data["0"].embed_url
            $('#firstDiv').html(`<iframe src=${url}>`)
            url = resp.data["1"].embed_url
            $('#secondDiv').html(`<iframe src=${url}>`)
            url = resp.data["2"].embed_url
            $('#thirdDiv').html(`<iframe src=${url}>`)
        }
    })
}



