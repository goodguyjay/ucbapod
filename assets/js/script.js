async function getNerdFactsFromNasa() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=kk8XIrZkoapbPOnaIFiZTMbKW0Fo6OKw2wTbSJbo");
    const data = await response.json();
    const title = data.title;
    const backgroundImg = data.hdurl;
    const text = data.explanation;
    const currentDate = data.date;

    let titleHtmlElement = document.getElementsByClassName("brand-heading");
    let imgHtmlElement = document.getElementsByClassName("masthead");
    let textHtmlElement = document.getElementsByClassName("main-text");
    let dateHtmlElement = document.getElementsByClassName("current-date");

    imgHtmlElement[0].style.backgroundImage = `url(\"${backgroundImg}\")`; // o background
    titleHtmlElement[0].innerHTML = title; // o título
    textHtmlElement[0].innerHTML = text; // a explicação
    dateHtmlElement[0].innerHTML = currentDate; // atualizando a data atual

    //console.log(textHtmlElement[0].innerHTML);
}

getNerdFactsFromNasa();
