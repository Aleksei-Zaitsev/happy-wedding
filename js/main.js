$(document).ready(function () {
    let portImgCont = $('#portfolio-container');
    //карусели
    portImgCont.slick({
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    variableWidth: true,
                    centralMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    variableWidth: false,
                    centralMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('#blog-container').slick({
        infinite: false,
        speed: 300,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            // {
            //     breakpoint: 1201,
            //     settings: {
            //         variableWidth: true,
            //
            //         centerPadding: "0px",
            //         slidesToShow: 2,
            //         slidesToScroll: 1,
            //         arrows: true,
            //     }
            // },
            // {
            //     breakpoint: 851,
            //     settings: {
            //         variableWidth: true,
            //
            //         centerPadding: "0px",
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         arrows: true,
            //     }
            // },
            {
                breakpoint: 1199,
                settings: {
                    infinite: false,
                    variableWidth: true,
                    speed: 300,
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    variableWidth: true,
                    centralMode: true,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.blog-container').slick({
        infinite: false,
        variableWidth: true,
        speed: 300,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    variableWidth: true,
                    centralMode: true,
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('#review-container').slick({
        variableWidth: true,
        centerMode: true,
        infinite: false,
        arrows: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    arrows: false,
                }
            }
    ]
    });
    let portGalSlick = $('.portfolio-gallery');
    portGalSlick.slick({
        infinite: false,
        speed: 300,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    variableWidth: true,
                    centralMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centralMode: true,
                    variableWidth: true,
                    centerPadding: "0px",
                    slidesToShow: 1,

                }
            }
        ]
    });



    //Галлерея портфолио

    let portImg = $('.portfolio-item');
    let portCont = $('.portfolio-gallery-container');
    let portBtnBack = $('#portfolio-btn-back button');
    let natSerPort = $('#nat-ser-port');
    let darIvaPort = $('#dar-iva-port');
    let kamBogPort = $('#kam-bog-port');
    let natSerGal = $('#natalia-sergei');
    let darIvaGal = $('#daria-ivan');
    let kamBogGal = $('#kamilla-bogdat');

    natSerPort.click(() => {
       portImg.hide();
       natSerGal.show()
        portBtnBack.show();
        portImgCont.hide();
        portGalSlick.slick('refresh');
    });
    darIvaPort.click(() => {
       portImg.hide();
        darIvaGal.show()
        portBtnBack.show();
        portImgCont.hide();
        portGalSlick.slick('refresh');
    });
    kamBogPort.click(() => {
       portImg.hide();
        portImgCont.hide();
        kamBogGal.show()
        portBtnBack.show();
        portImgCont.hide();
        portGalSlick.slick('refresh');
    });

    portBtnBack.click(() => {
        portCont.hide();
        portImg.show();
        portBtnBack.hide();
        portImgCont.show();
        portImgCont.slick('refresh');
        $('html, body').animate({
            scrollTop: $("#portfolio-block").offset().top
        }, 0);
    });

    let callBackBtn = $('.call-back-btn button');
    let callBackBlock = $('#call-back-block');
    //бургер меню

    let adaptivBlock = $('.adaptive-menu-block');
    let burger = $('.burger');
    burger.click(function () {
        adaptivBlock.css('display', 'flex');
    });
    $('.menu-items a').click(function () {
        adaptivBlock.css('display', 'none');
    });
    $('#adaptive-menu-close-cancel, #adaptive-block').click((e) => {
        if (e.target.id === 'adaptive-menu-close-cancel' || e.target.id === 'adaptive-block') {
            adaptivBlock.css('display', 'none');
        }
    });
    // Маска для Инпутов


    $("#client-phone").mask("+7 (999) 999-99-99");
    $(".call-back-phone").mask("+7 (999) 999-99-99");
    $("#client-marry-date").mask("99.99.9999");


    $("#client-phone-popup").mask("+7 (999) 999-99-99");
    $("#client-marry-date-popup").mask("99.99.9999");
    // Попап спасибо

    let thanksBlock = $('#thanks-block');

    $('#thanks-close-cancel, #thanks-block').click((e) => {
        if (e.target.id === 'thanks-close-cancel' || e.target.id === 'thanks-block') {
            thanksBlock.css('display', 'none');
        }
    });


    // Попап заявка
    let orderPopapBlock = $('#order-popup-block')
    let orderPopupBtn = $('.order-popup-btn');
    orderPopupBtn.click(function () {
        orderPopapBlock.css('display', 'flex');
    });
    $('#order-popup-close-cancel, #order-popup-block').click((e) => {
        if (e.target.id === 'order-popup-close-cancel' || e.target.id === 'order-popup-block') {
            orderPopapBlock.css('display', 'none');
        }
    });
    let namePop = $('#client-name-popup');
    let surnamePop = $('#client-surname-popup');
    let fathersNamePop = $('#client-fathers-name-popup');
    let phonePop = $('#client-phone-popup');
    let eMailPop = $('#client-e-mail-popup');
    let marryDatePop = $('#client-marry-date-popup');

    var arrInputsPop = [namePop, surnamePop, fathersNamePop, phonePop, eMailPop, marryDatePop];

    $('.order-main-btn-popup').click(function () {


        if (namePop.val() && surnamePop.val() && fathersNamePop.val() && phonePop.val() && eMailPop.val() && marryDatePop.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'namePop=' + namePop.val() + '&surnamePop=' + surnamePop.val()
                    + '&fathersNamePop=' + fathersNamePop.val() + '&phonePop=' + phonePop.val()
                    + '&eMailPop=' + eMailPop.val() + '&marryDatePop=' + marryDatePop.val(),
                success: () => {
                    alert('заявка отправлена')
                    // ТЕCТ
                    thanksBlock.css('display', 'flex');
                    orderPopapBlock.css('display', 'none');
                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                    // ТЕCТ
                    thanksBlock.css('display', 'flex');
                }
            })
            for (let i = 0; i < 6; i++) {
                arrInputsPop[i].css('borderColor', '#C29892');
                arrInputsPop[i].next().css('color','none');
            }

        } else {
            for (let i = 0; i < 6; i++) {
                if (!arrInputsPop[i].val()) {
                    arrInputsPop[i].css('borderColor', '#E5467E');
                    arrInputsPop[i].next().css('color','#E5467E');
                }
                if (arrInputsPop[i].val()) {
                    arrInputsPop[i].css('borderColor', '#C29892');
                    arrInputsPop[i].next().css('color','transparent');
                }
            }
        }

    });
    for ( let x = 0; x < 6; x++) {
        arrInputsPop[x].blur(function () {
                arrInputsPop[x].css('borderColor', '#C29892');
                arrInputsPop[x].next().css('color','transparent');
        })
        arrInputsPop[x].focus( function () {
            arrInputsPop[x].css('borderColor', '#EFDFD8');
            arrInputsPop[x].next().css('color','transparent');
        })
    };
    //попап обратного звонка


    callBackBtn.click(function () {
        adaptivBlock.css('display', 'none');
        callBackBlock.css('display', 'flex');
    });
    $('#call-back-close-cancel, #call-back-block').click((e) => {
        if (e.target.id === 'call-back-close-cancel' || e.target.id === 'call-back-block') {
            callBackBlock.css('display', 'none');
        }
    });
    let nameCall = $('.call-back-name');
    let phoneCall = $('.call-back-phone');

    var arrInputsCall = [nameCall, phoneCall];

    $('.call-back-main-btn').click(function () {


        if (nameCall.val() && phoneCall.val()) {
            $.ajax({
                type: 'post',
                url: 'mail-call-back.php',
                data: 'nameCall=' + nameCall.val() + '&phoneCall=' + phoneCall.val(),
                success: () => {
                    alert('заявка отправлена')
                    // ТЕCТ
                    thanksBlock.css('display', 'flex');
                    callBackBlock.css('display', 'none');
                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                    // ТЕCТ
                    thanksBlock.css('display', 'flex');
                }
            })
            for (let i = 0; i < 2; i++) {
                arrInputsCall[i].css('borderColor', '#C29892');
                arrInputsCall[i].next().css('display','none');
            }

        } else {
            for (let i = 0; i < 2; i++) {
                if (!arrInputsCall[i].val()) {
                    arrInputsCall[i].css('borderColor', '#E5467E');
                    arrInputsCall[i].next().css('color','#E5467E');
                }
                if (arrInputsCall[i].val()) {
                    arrInputsCall[i].css('borderColor', '#C29892');
                    arrInputsCall[i].next().css('color','transparent');
                }
            }
        }

    });
    for ( let x = 0; x < 2; x++) {
        arrInputsCall[x].blur(function () {
                arrInputsCall[x].css('borderColor', '#C29892');
                arrInputsCall[x].next().css('color','transparent');
        })
        arrInputsCall[x].focus( function () {
            arrInputsCall[x].css('borderColor', '#EFDFD8');
            arrInputsCall[x].next().css('color','transparent');
        })
    };


        //Вопросы
    let accordions = document.getElementsByClassName("accordion");

    for (let i = 0; i < accordions.length; i++) {
        accordions[i].onclick = function () {
            this.classList.toggle("is-open")
            let content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    }
    // Валидация заявки

    let name = $('#client-name');
    let surname = $('#client-surname');
    let fathersName = $('#client-fathers-name');
    let phone = $('#client-phone');
    let eMail = $('#client-e-mail');
    let marryDate = $('#client-marry-date');

    var arrInputs = [name, surname, fathersName, phone, eMail, marryDate];

    $('.order-main-btn').click(function () {


        if (name.val() && surname.val() && fathersName.val() && phone.val() && eMail.val() && marryDate.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&surname=' + surname.val()
                    + '&fathersName=' + fathersName.val() + '&phone=' + phone.val()
                    + '&eMail=' + eMail.val() + '&date=' + marryDate.val(),
                success: () => {
                    alert('заявка отправлена')
                    // ТЕCТ
                    thanksBlock.css('display', 'flex');
                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                    // ТЕCТ
                    thanksBlock.css('display', 'flex');
                }
            })
            for (let i = 0; i < 6; i++) {
                arrInputs[i].css('borderColor', '#C29892');
                arrInputs[i].next().css('color','none');
            }

        } else {
            for (let i = 0; i < 6; i++) {
                if (!arrInputs[i].val()) {
                    arrInputs[i].css('borderColor', '#E5467E');
                    arrInputs[i].next().css('color','#E5467E');
                }
                if (arrInputs[i].val()) {
                    arrInputs[i].css('borderColor', '#C29892');
                    arrInputs[i].next().css('color','transparent');
                }
            }
        }

    });
    for ( let x = 0; x < 6; x++) {
        arrInputs[x].blur(function () {
                arrInputs[x].css('borderColor', '#C29892');
                arrInputs[x].next().css('color','transparent');
        })
        arrInputs[x].focus( function () {
            arrInputs[x].css('borderColor', '#EFDFD8');
            arrInputs[x].next().css('color','transparent');
        })
    };
    // КЛИК ПО КНОПКЕ "ОРГАНИЗОВАТЬ СВАДЬБУ"

    $('#main-action button').click(function () {
        $('html, body').animate({
            scrollTop: $(".order-block").offset().top
        }, 0);
    });
    let scrollTopBtnSvg =$('.scroll-top svg');


    scrollTopBtnSvg.click(function () {
        $('html, body').animate({
            scrollTop: $(".header").offset().top
        }, 0);
    });
    // Скролл наверх

    let scrollTopBtn = document.querySelector(".scroll-top");

  window.addEventListener("scroll", () => {
      if (window.pageYOffset >2300) {
          scrollTopBtn.classList.add("active");
      } else  {
          scrollTopBtn.classList.remove("active");
      }
  })

});