const searchVal = $('#text-box');

function addGIFs(res){
    let numGIFs = res.data.length;
    if (numGIFs) {
        let gifNum = Math.floor(Math.random() * numGIFs);
        let selected = res.data[gifNum].images.original.url;
        $('#gifs').append($(`<img src="${selected}">`));
        console.log(selected);
        
    }
}

$('#search').on('submit', async function searchGif(event){
    event.preventDefault();

    let termSearched = searchVal.val();
    searchVal.val('');

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", 
    {params: {q: termSearched, api_key: "We7YwnTXpYxJe5igATgB7TndxO2pw5HC"}});
    console.log(res.data);

    addGIFs(res.data);
});

$('#remove').on('click', function(){
    $('#gifs').empty();
})
