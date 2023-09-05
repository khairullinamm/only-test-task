const btns = document.querySelectorAll('.element');
const mainImg = document.querySelector('.img-bg');


document.addEventListener("click",function (e) { 

    if (e.target.classList[0] === 'element') {
        let item = e.target;
        closeOrShowElement(item);
    }
    
    else if (e.target.className === 'element__img') {
        let item  = e.target.parentElement;
        closeOrShowElement(item);
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

    function closeOrShowElement(item) {
        if (!item.lastChild.classList.toggle('hide')) 
            item.firstChild.setAttribute("src", "./img/close.svg");
        else
            item.firstChild.setAttribute("src", "./img/add.svg");
        item.classList.toggle('on-flex');
    }
}
) 

const cursor = document.querySelector('.cursor'); 
document.addEventListener('mousemove', (e) => {
    
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

}); 