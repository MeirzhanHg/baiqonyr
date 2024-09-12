const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows())
    }
}

if (isMobile.any()) {
    document.body.classList.add('_touch')

    let menuArrows = document.querySelectorAll('.menu__arrow')
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index]
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active')
            })
        }
    }

} else {
    document.body.classList.add('_pc')
}


const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')

    })
}

new Swiper('.company__slider', {
    // Optional parameters

    // loop: true,
    slidesPerView: 3,
    spaceBetween: 10,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
  
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10 
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pag',
    },

})


new Swiper('.project__slider', {
    // Optional parameters

    // loop: true,
    slidesPerView: 4,
    spaceBetween: 40,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
  
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1150: {
            slidesPerView: 4,
            spaceBetween: 40 
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.project-next',
        prevEl: '.project-prev',
    },

    // If we need pagination
    pagination: {
        el: '.project-swiper-pag',
    },

})

new Swiper('.partner__slider', {
    // Optional parameters

    // loop: true,
    slidesPerView: 6,
  

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5
        },
  
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        920: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        1150: {
            slidesPerView: 6,
            spaceBetween: 30 
        }
    },

    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.partner-next',
        prevEl: '.partner-prev',
    },

    // If we need pagination
    pagination: {
        el: '.partner-swiper-pag',
    },

})

