
const slides = document.querySelectorAll(".slide");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const articleSqlList = $(".article-sql");

let autoSlider = true;
let intervalTime = 3000;
let sliderInterval;

$("#my-dropdown").hide();
$("#btn-profile").click(() => {
    $("#my-dropdown").toggle("slow");
});
function resizeMyDropdown() {
    if ($("body").width() < 992) {
        $("#my-dropdown").remove();
        $("#btn-profile").after(` <div id="my-dropdown" class="me-sm-3" style="display:none;">
                                    <div id="dropdown-profile" class="d-flex justify-content-end s-w-dropdown">
                                        <ul class="profile-items profile-grid-2">
                                            <li class="profile-item">
                                                <a class="" href="/">Sign In</a>
                                            </li>
                                            <li class="profile-item">
                                                <a class="" href="/">Sign Up</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>`);

    } else {
        $("#my-dropdown").remove();
        if ($("#my-dropdown") != null) {
            $("nav").after(`<div id="my-dropdown" class="fixed-top me-lg-3 me-sm-3 pe-5 mt-5 pt-2">
            <div id="dropdown-profile"
                class="d-flex justify-content-end">
                <ul class="profile-items">
                    <li class="profile-item">
                        <a class="" href="/">Sign In</a>
                    </li>
                    <li class="profile-item">
                        <a class="" href="/">Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>`);
            $("#my-dropdown").hide();

        }

    }
}
function formBtnProfile() {
    if ($("body").width() < 992) {
        $("#form-btn-profile").addClass("justify-content-start");
        $("#form-btn-profile").removeClass("justify-content-end");
        $("#form-btn-profile").removeClass("ms-2");
        $("#btn-profile").addClass("mt-1");

    } else {
        $("#form-btn-profile").addClass("ms-2");
        $("#form-btn-profile").removeClass("justify-content-start");
        $("#form-btn-profile").addClass("justify-content-end");
        $("#btn-profile").removeClass("mt-1");
    }
}
$(window).resize(function () {
    formBtnProfile();
    resizeMyDropdown();
});

if(btnNext != null){
btnPrev.addEventListener("click", function () {
    prevSlide();
    againInterval();
});
}
if (btnPrev != null) {
btnNext.addEventListener("click", function () {
    nextSlide();
    againInterval();
});
}
if(btnNext != null){
function prevSlide() {
    let activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    //Eğer activeSlide.previousElementSibling null değilse
    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add("active");
    } else {
        slides[slides.length - 1].classList.add("active");
    }
}

function nextSlide() {
    let activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    if (activeSlide.nextElementSibling && activeSlide.nextElementSibling.classList.contains("slide")) {
        activeSlide.nextElementSibling.classList.add("active");
    } else {
        slides[0].classList.add("active");
    }
}
}

function againInterval() {
    if (autoSlider) {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, intervalTime);
    }
}

$("#btn-csharp").click((e) => {
    e.preventDefault();
    $("#btn-csharp").addClass("my-active");
    $("#btn-sql").removeClass("my-active");
    $("#btn-html-css-js").removeClass("my-active");
    $("#btn-all").removeClass("my-active");


    if (!$(".article-sql").hasClass("d-none")){
        $(".article-sql").addClass("d-none");
    }
    if (!$(".article-frontend").hasClass("d-none")){
        $(".article-frontend").addClass("d-none");
    }
    if ($(".article-csharp").hasClass("d-none")){
    $(".article-csharp").removeClass("d-none");
    }
});
$("#btn-sql").click((e) => {
    e.preventDefault();
    $("#btn-sql").addClass("my-active");
    $("#btn-csharp").removeClass("my-active");
    $("#btn-html-css-js").removeClass("my-active");
    $("#btn-all").removeClass("my-active");

    if ($(".article-sql").hasClass("d-none")) {
        $(".article-sql").removeClass("d-none");
    }
    if (!$(".article-frontend").hasClass("d-none")) {
        $(".article-frontend").addClass("d-none");
    }
    if (!$(".article-csharp").hasClass("d-none")) {
        $(".article-csharp").addClass("d-none");
    }
});
$("#btn-html-css-js").click((e) => {
    e.preventDefault();
    $("#btn-html-css-js").addClass("my-active");
    $("#btn-sql").removeClass("my-active");
    $("#btn-csharp").removeClass("my-active");
    $("#btn-all").removeClass("my-active");

    if (!$(".article-sql").hasClass("d-none")) {
        $(".article-sql").addClass("d-none");
    }
    if ($(".article-frontend").hasClass("d-none")) {
        $(".article-frontend").removeClass("d-none");
    }
    if (!$(".article-csharp").hasClass("d-none")) {
        $(".article-csharp").addClass("d-none");
    }
});
$("#btn-all").click((e) => {
    e.preventDefault();
    if(!$("#btn-all").hasClass("my-active")){
        $("#btn-all").addClass("my-active");
    }
    $("#btn-csharp").removeClass("my-active");
    $("#btn-html-css-js").removeClass("my-active");
    $("#btn-sql").removeClass("my-active");

    $(".article-frontend").removeClass("d-none");
    $(".article-sql").removeClass("d-none");
    $(".article-csharp").removeClass("d-none");

});

function openSideNav() {
    document.getElementById("my-Side-nav").style.width = "250px";
}

function closeSideNav() {
    document.getElementById("my-Side-nav").style.width = "0";
}

$("#side-nav-edu-calendar").click(() => {
    if($("#edu-calendar").hasClass("d-none")){
        $("#edu-calendar").removeClass("d-none");
    }
    if (!$("#precondition").hasClass("d-none")) {
        $("#precondition").addClass("d-none");
    }
    if (!$("#certificate").hasClass("d-none")) {
        $("#certificate").addClass("d-none");
    }
    if (!$("#edu-content").hasClass("d-none")) {
        $("#edu-content").addClass("d-none");
    }
});
$("#side-nav-precondition").click(() => {
    if (!$("#edu-calendar").hasClass("d-none")) {
        $("#edu-calendar").addClass("d-none");
    }
    if ($("#precondition").hasClass("d-none")) {
        $("#precondition").removeClass("d-none");
    }
    if (!$("#certificate").hasClass("d-none")) {
        $("#certificate").addClass("d-none");
    }
    if (!$("#edu-content").hasClass("d-none")) {
        $("#edu-content").addClass("d-none");
    }
});
$("#side-nav-certificate").click(() => {
    if (!$("#edu-calendar").hasClass("d-none")) {
        $("#edu-calendar").addClass("d-none");
    }
    if (!$("#precondition").hasClass("d-none")) {
        $("#precondition").addClass("d-none");
    }
    if ($("#certificate").hasClass("d-none")) {
        $("#certificate").removeClass("d-none");
    }
    if (!$("#edu-content").hasClass("d-none")) {
        $("#edu-content").addClass("d-none");
    }
});
$("#side-nav-edu-content").click(() => {
    if (!$("#edu-calendar").hasClass("d-none")) {
        $("#edu-calendar").addClass("d-none");
    }
    if (!$("#precondition").hasClass("d-none")) {
        $("#precondition").addClass("d-none");
    }
    if (!$("#certificate").hasClass("d-none")) {
        $("#certificate").addClass("d-none");
    }
    if ($("#edu-content").hasClass("d-none")) {
        $("#edu-content").removeClass("d-none");
    }
});
// <a id="side-nav-edu-calendar" href="">Eğitim Takvimi</a>
//                 <a id="side-nav-precondition" href="">Ön Koşul</a>
//                 <a id="side-nav-certificate" href="">Sertifika</a>
//                 <a id="side-nav-edu-content" href="">Eğitim İçeriği</a>

againInterval();
