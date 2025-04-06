(function(){
    const valorChecked = document.querySelector("#accept");
    const buttonSubmit = document.querySelector("#submit")
    valorChecked.addEventListener("change",enableOrDisableButton);

    function enableOrDisableButton(){
        let checked = valorChecked.checked;
        if(checked){
            buttonSubmit.disabled = false;
        }else{
            buttonSubmit.disabled = true;
        }
    }
})()