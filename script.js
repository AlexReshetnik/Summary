let pages = document.querySelectorAll('article[data-page]')
let menu = document.querySelector('menu')
let main = document.querySelector('main')
let aside = document.querySelector('aside')
let styleAside = getComputedStyle(aside)
let link_of_page = document.querySelectorAll('li[data-page]')


//let wh = parseInt(styleAside.height)

main.style.paddingLeft = styleAside.width

window.onresize = (e) => {
    main.style.paddingLeft = styleAside.width
}


menu.addEventListener('click', e => {
    if (e.target.hasAttribute("data-page")) {
        link_of_page.forEach(i => i.setAttribute("cheked", "false"))
        e.target.setAttribute("cheked", "true")

        pages.forEach(i => {
            if (e.target.dataset.page == i.dataset.page) {
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