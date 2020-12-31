
function myLoader(){

    setTimeout(showPage , 3000)
}

function showPage(){
    document.getElementById('spin').style.display = 'none';
    document.getElementById('content').style.display = 'block'
}