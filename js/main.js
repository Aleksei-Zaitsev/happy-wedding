$(document).ready(function () {
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
});