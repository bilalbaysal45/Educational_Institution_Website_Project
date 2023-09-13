


$("#my-dropdown").hide();
$("#btn-profile").click(() => {
    $("#my-dropdown").toggle("slow");
});
function resizeMyDropdown() {
    if ($("body").width() < 992) {
        $("#my-dropdown").remove();
        $("#btn-profile").after(` <div id="my-dropdown" class="me-sm-3">
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
