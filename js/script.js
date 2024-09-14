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

const companySlider = document.querySelector('.company__slider')
const projectSlider = document.querySelector('.project__slider')
const partnerSlider = document.querySelector('.partner__slider')
const teamSlider = document.querySelector('.team__slider')
const storySlider = document.querySelector('.story__slider')
const licensesSlider = document.querySelector('.licenses__slider')

if(companySlider) {
    new Swiper(companySlider, {
        // Optional parameters

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
}

if(projectSlider) {
    new Swiper(projectSlider, {

        slidesPerView: 4,
        spaceBetween: 40,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 5
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
}

if(partnerSlider) {
    new Swiper(partnerSlider, {
        // Optional parameters

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
}

// TEAM

if(teamSlider) {
    new Swiper(teamSlider, {
        // Optional parameters

        slidesPerView: 4,
        spaceBetween: 30,

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
            920: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1150: {
                slidesPerView: 4,
                spaceBetween: 30 
            }
        },

        // If we need pagination
        pagination: {
            el: '.team-swiper-pag',
        },
    })
}

// STORY
if(storySlider) {
    new Swiper(storySlider, {
        // Optional parameters

        slidesPerView: 2.2,

        breakpoints: {
            320: {
                slidesPerView: 1,
            },

            // when window width is >= 640px
            640: {
                slidesPerView: 1.5,
            },
            920: {
                slidesPerView: 2,
            },
            1150: {
                slidesPerView: 2.2,

            }
        },
        // Navigation arrows
        navigation: {
            nextEl: '.story-next',
            prevEl: '.story-prev',
        },

        // If we need pagination
        pagination: {
            el: '.story-swiper-pag',
        },
    })
}

// LICENSES
if(licensesSlider) {
    new Swiper(licensesSlider, {
        // Optional parameters

        // loop: true,
        slidesPerView: 4,
        spaceBetween: 30,

        breakpoints: {
            320: {
                slidesPerView: 1,
                
            },

            480: {
                slidesPerView: 2,
            },
            
            // when window width is >= 640px
            650: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            920: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1150: {
                slidesPerView: 4,

                spaceBetween: 30 
            }
        },
        // Navigation arrows
        navigation: {
            nextEl: '.licenses-next',
            prevEl: '.licenses-prev',
        },

        // If we need pagination
        pagination: {
            el: '.licenses-swiper-pag',
        },
    })
}
