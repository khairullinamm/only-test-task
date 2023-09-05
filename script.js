const btns = document.querySelectorAll('.element');
const mainImg = document.querySelector('.img-bg');


document.onclick = function (e) { 

    if (e.target.classList[0] === 'element') {
        let item = e.target;
        if (!item.lastChild.classList.toggle('hide'))
            item.firstChild.setAttribute("src", "./img/close.svg");
        else
            item.firstChild.setAttribute("src", "./img/add.svg");
        item.classList.toggle('on-flex');
    }
    
    else if (e.target.className === 'element__img') {
        let item  = e.target.parentElement;
        if (!item.lastChild.classList.toggle('hide'))
            item.firstChild.setAttribute("src", "./img/close.svg");
        else
            item.firstChild.setAttribute("src", "./img/add.svg");
        item.classList.toggle('on-flex');
    }

    else if (e.target.className === 'img-bg') {
        btns.forEach(item => {
            if (item.classList.contains('on-flex')) {
                item.classList.toggle('on-flex');
                item.firstChild.setAttribute("src", "./img/add.svg");
                item.lastChild.classList.toggle('hide');
            }
        })

    }
}
