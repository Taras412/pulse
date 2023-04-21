
// let answer = confirm('Do you have 18 years old ?');
// if (answer==true) {
//     console.log('Com on')
// } else {
//     console.log('Stop')
// }


// for (i=1; i<8; i++) {
//     console.log(i)
// }


// function logging (a, b) {
//     console.log(a + b)
// }
// logging(3, 6);





$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/carousel/arrow-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/carousel/arrow-next.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                dots: false,
                arrows: false
                }
            }
            
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })
    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })

    // MODAL

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    /* $('#consultation-form').validate();  ( error jqerry validate )
    $('#consultation form').validate();
    $('#order form').validate(); */

    /* $('input[name=phone]').mask("+7 (099) 999-99-99");      ( error tel mask )                         */     
});



// VALIDATION FORM JS (test)

function validation(form) {

    function createError(input, text) {
        const parent = input.parentNode;
        console.log(parent);
    }

    let result = true;

    const allInputs = form.querySelectorAll('input');
    
    for (const input of allInputs) {
        if(input.value == "") {
            console.log('Error !');
            result = false
        }
    }
    return result
}


document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault()
    
    if(validation(this) == true) {
        alert('form checked successful !')
    }
})