function init(){
    let submit_bttn = document.querySelector('#submit_bttn');
    submit_bttn.addEventListener('click',()=>{
        alert('Form Submitted');
    })
}

window.addEventListener('load', init());