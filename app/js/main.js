
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
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/carousel/arrow-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/carousel/arrow-next.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                dots: true,
                arrows: false
                }
            }
            
        ]
      });
});