
function myLoader(){

    setTimeout(showPage , 3000)
}

function showPage(){
    document.getElementById('spin').style.display = 'none';
    document.getElementById('content').style.display = 'block'
}

let skills = document.getElementById('skills').children;

    setInterval(() => {
    
        let random =Math.floor( Math.random() * skills.length )

        Array.from(skills).forEach(skill => {
            if(skill.classList.contains('skill')){
                skill.classList.remove('skill')
            }
        });
        if(!skills[random].classList.contains('skill')){
            skills[random].classList.add('skill')
        }

    }, 2000);
