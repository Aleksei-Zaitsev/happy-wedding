$(document).ready(function () {

    //карусели
    $('#blog-container').slick({
        variableWidth: true,
        centerMode: true,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('#review-container').slick({
        variableWidth: true,
        centerMode: true,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //попап обратного звонка
    let callBackBtn = $('.call-back-btn button');
    let callBackBlock = $('#call-back-block');

    callBackBtn.click(function () {
        callBackBlock.css('display', 'flex');
    });
    $('#call-back-close-cancel, #call-back-block').click((e) => {
        if (e.target.id === 'call-back-close-cancel' || e.target.id === 'call-back-block') {
            callBackBlock.css('display', 'none');
        }
    });

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
    let date = $('#client-date');

    let arr
});