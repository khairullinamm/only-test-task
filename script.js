const btns = document.querySelectorAll('.element');


btns.forEach(item => {
    item.addEventListener("click", () => {
        if (!item.lastChild.classList.toggle('hide'))
            item.firstChild.setAttribute("src", "./img/close.svg");
        else
            item.firstChild.setAttribute("src", "./img/add.svg");
        item.classList.toggle('on-flex');
    })
})