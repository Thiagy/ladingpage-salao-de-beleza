
document.getElementById('nav-toggle').addEventListener('click', showMenu)
document.getElementById('option-1').addEventListener('click', showMenu)
document.getElementById('option-2').addEventListener('click', showMenu)
document.getElementById('option-3').addEventListener('click', showMenu)
document.getElementById('option-4').addEventListener('click', showMenu)
document.getElementById('option-5').addEventListener('click', showMenu)
document.getElementById('option-6').addEventListener('click', showMenu)

function showMenu(){

    const menu = document.getElementById('nav')

    if(menu.style.right!=='0px'){

        menu.style.right='0px'

    }else{

        menu.style.right=''

    }

}