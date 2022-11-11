let pages = document.querySelectorAll('article[data-page_id]')
let animation_li = document.querySelectorAll('li[data-animation]')
let menu = document.querySelector('menu')
let main = document.querySelector('main')
let aside = document.querySelector('aside')
let styleAside = getComputedStyle(aside)
let link_of_page = document.querySelectorAll('li[data-page_id]')




main.style.marginLeft = styleAside.width
window.onresize = (e) => {
    styleAside = getComputedStyle(aside)
    main.style.marginLeft = styleAside.width
}
rum_anim()
function rum_anim() {
    pages.forEach(target_page => {
        animation_li.forEach(item_anim => {
            if (item_anim.closest('article[data-page_id]') == target_page) {
                setTimeout(() => {
                    item_anim.setAttribute("data-animation", "end")
                }, (65 * item_anim.dataset.sequence) + 50)
            }
        })
    })
}

menu.addEventListener('click', e => {

    let item = e.target.closest('li[data-page_id]')
    if (!item) return
    //виключаю всі елементи меню
    link_of_page.forEach(i => i.setAttribute("cheked", "false"))
    //включаю поточну сторінку
    item.setAttribute("cheked", "true")

    pages.forEach(target_page => {
        if (item.dataset.page_id == target_page.dataset.page_id) {
            target_page.setAttribute("cheked", "true")
            target_page.style.zIndex = 2
            animation_li.forEach(item_anim => {
                if (item_anim.closest('article[data-page_id]') == target_page) {
                    setTimeout(() => {
                        item_anim.setAttribute("data-animation", "end")
                    }, (65 * item_anim.dataset.sequence) + 50)
                }
            })
        }
        else {
            target_page.style.zIndex = 0
            setTimeout(() => { target_page.setAttribute("cheked", "false") }, 300);
            animation_li.forEach(l => l.setAttribute("data-animation", "start"))
        }
    })

})
