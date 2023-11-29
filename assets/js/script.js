async function getNerdFactsFromNasa() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=kk8XIrZkoapbPOnaIFiZTMbKW0Fo6OKw2wTbSJbo");
    const data = await response.json();
    const title = data.title;
    const backgroundImg = data.hdurl;
    const text = data.explanation;
    const currentDate = data.date;

    //titulo traduzido
    const translatedTitle = await translateText(title);
    const translatedText = await translateText(text);

    let titleHtmlElement = document.getElementsByClassName("brand-heading");
    let imgHtmlElement = document.getElementsByClassName("masthead");
    let textHtmlElement = document.getElementsByClassName("main-text");
    let dateHtmlElement = document.getElementsByClassName("current-date");

    imgHtmlElement[0].style.backgroundImage = `url(\"${backgroundImg}\")`; // o background
    titleHtmlElement[0].innerHTML = translatedTitle; // o título
    textHtmlElement[0].innerHTML = translatedText; // a explicação
    dateHtmlElement[0].innerHTML = currentDate; // atualizando a data atual
}

//essa função é pra mandar a requisição de tradução do texto pro meu servidor
async function translateText(text) {
    // manda o texto pro python em texto
    // esse fetch é de um servidor python remoto que montei em outro link
    const response = await fetch("https://goodguyjay.pythonanywhere.com/translate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
    });

    // checar pra ver se não deu nenhum erro na conexão com o servidor
    if (response.status !== 200) {
        throw new Error("Error translating text: " + response.status);
    }

    // receber o texto traduzido da resposta do webserver
    const translatedText = await response.json();
    return translatedText.translated_text;
}


getNerdFactsFromNasa();
