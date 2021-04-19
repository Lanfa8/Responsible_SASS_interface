document.getElementById('mobile-menu-dropdown').style.display = 'none'
function mostraMenu() {
    var menu = document.getElementById('mobile-menu-dropdown');
    var display = menu.style.display == 'none';
    if(display){
        menu.style.display = 'flex'
    }else{
        menu.style.display = 'none'
    }
}