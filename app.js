

async function getGif(tag) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/random', {
        params: {
            api_key: 'IYZ7BEpURTl8R1TcU8qFz26foTzSeXPs',
            tag: tag,
        }
    });
    console.log('get gif');
    return res.data.data.images.original.url;
};

async function appendGif(tag) {
    const url = await getGif(tag);
    const div = document.querySelector('#container');
    const img = document.createElement('IMG');
    img.src = url;
    div.appendChild(img);
    console.log('append');
};

const form = document.querySelector('#form');
form.addEventListener('submit', async function (e) {
    console.log('form submit');
    e.preventDefault();
    const search = document.querySelector('#search');
    tag = search.value;
    await appendGif(tag);
    search.value = '';
});

const remove = document.querySelector('#remove')
remove.addEventListener('click', function () {
    const div = document.querySelector('#container');
    div.innerHTML = '';
});

