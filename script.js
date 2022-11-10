let pages = document.querySelectorAll('article[data-page]')
let menu = document.querySelector('menu')
let main = document.querySelector('main')
let aside = document.querySelector('aside')
let styleAside = getComputedStyle(aside)
console.log(styleAside.width);
let link_of_page = document.querySelectorAll('li[data-page]')


//let wh = parseInt(styleAside.height)

main.style.paddingLeft = styleAside.width

window.onresize = (e) => {
    styleAside = getComputedStyle(aside)
    main.style.paddingLeft = styleAside.width
}


menu.addEventListener('click', e => {
    let item = e.target.parentElement
    if (item.hasAttribute("data-page")) {
        link_of_page.forEach(i => i.setAttribute("cheked", "false"))
        item.setAttribute("cheked", "true")

        pages.forEach(i => {
            if (item.dataset.page == i.dataset.page) {
                i.setAttribute("cheked", "true")
                i.style.zIndex = 2
            } 
            else {
                i.style.zIndex = 0
                setTimeout(() => {i.setAttribute("cheked", "false")}, 300);
            }
        })
       

        //main.style.marginTop = `-${+e.target.dataset.page}00vh`
        main.style.marginLeft = "0px"

    }
})