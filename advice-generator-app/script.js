const randomize = async () => {
    const quote_id = document.querySelector('#quote_id');
    const quote_text = document.querySelector('#quote_text')

    const data = await fetch('https://api.adviceslip.com/advice');
    const json = await data.json();

    quote_id.textContent = json.slip.id
    quote_text.textContent = json.slip.advice
}

window.onload = () => {
    randomize();
}