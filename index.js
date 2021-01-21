function myLoader(){

    setTimeout(showPage , 1000)
}


// loading anim
function showPage(){
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('content').style.display = 'block'
}

// let skills = document.getElementById('skills').children;

//     setInterval(() => {
    
//         let random =Math.floor( Math.random() * skills.length )

//         Array.from(skills).forEach(skill => {
//             if(skill.classList.contains('skill')){
//                 skill.classList.remove('skill')
//             }
//         });
//         if(!skills[random].classList.contains('skill')){
//             skills[random].classList.add('skill')
//         }

//     }, 2000);


    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        loop: 0,
        typeSpeed: 200 ,
        showCursor: false,
        smartBackspace: true,
        backSpeed: 75,
        backDelay: 2000,
  
      });

        
    var typed = new Typed('#projects', {
        stringsElement: '#projects-strings',
        loop: 0,
        typeSpeed: 200 ,
        showCursor: false,
        smartBackspace: true,
        backSpeed: 75,
        backDelay: 2000,
  
      });

        