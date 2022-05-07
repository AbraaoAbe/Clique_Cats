const CAT_URL = 'https://thatcopy.pw/catapi/rest/';
const cat_bttm = document.getElementById('change-cat');
const cat_img = document.getElementById('cat');

const DOG_URL = 'https://api.thedogapi.com/v1/images/search/'
const dog_bttm = document.getElementById('change-dog');


//puxa a imagem da url
const getCats = async() => {
    try {
        const data = await fetch(CAT_URL);
        const json = await data.json();

        return json.webpurl;
    } catch (e) {
        console.log(e.message)
    }

}

//puxa a imagem da url
const getDogs = async() => {
    try {
        const data = await fetch(DOG_URL);
        const json = await data.json();


        return json[0].url;
    } catch (e) {
        console.log(e.message)
    }

}

//carrega a imagem e coloca no html
const loadImg = async() => {
    cat_img.src = await getCats();
}

//carrega a imagem e coloca no html
const loadDogImg = async() => {
    cat_img.src = await getDogs();
}

//ouve o click do botao e chama a funcao load img

cat_bttm.addEventListener('click', loadImg);

dog_bttm.addEventListener('click', loadDogImg)

loadImg();