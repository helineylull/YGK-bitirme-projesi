const closedFace = document.querySelector('.closed');
//Kapalı yüzü olan emojiyi js de tanımladık
const openFace = document.querySelector('.open');
//Açık yüzü olan emojiyi js de tanımladık

// Add event listener

closedFace.addEventListener('click', ()=>{ //()=> fonksiyon kısa yolu 
    if(openFace.classList.contains('open'))
    {
        openFace.classList.add('active');
        closedFace.classList.remove('active')
    }
}); //kapalı yüze tıklanıldığında açık yüze active classını veriyor


openFace.addEventListener('click', ()=>{
    if(closedFace.classList.contains('closed'))
    {
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
})

