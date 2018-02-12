function setEvents() {
    var burger = document.querySelector('#burger');
    if (burger) {
        burger.addEventListener('click', function () {
            var buregerMenu = document.querySelector('#burger');
            if (burgerMenu) {
                burgerMenu.style.display = 'block';
            }
        });
    }

    var burgerMenuClose = document.querySelector('.burger-menu-close');
    if (burgerMenuClose) {
        burgerMenuClose.addEventListener('click', function(){
            var buregerMenu = document.querySelector('#burger');
            if (burgerMenu) {
                burgerMenu.style.display = 'none';
            }            
        });
    }   
    
    var consistBlock = document.querySelector('.consist__block');
    if (consistBlock) {
        consistBlock.addEventListener('onmouseover', function() {
            console.log('over');
            var consist = querySelector('.consist__menu');
            if (consist) {
                console.log('display:block');
                consist.style.display = 'block';
            }
        })
        consistBlock.addEventListener('onmouseout', function() {
            var consist = querySelector('.consist__menu');
            if (consist) consist.style.display = 'none';
        })
    }

}

setEvents();
