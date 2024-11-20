$(document).ready(function() {
    $(".showmore").click(function() {
        let card = $("profile-card");
        let about = $("about");
        let picture = $("picture");
        let button = $(this);

        if (card.height() === 400) {
            card.animate({height: "auto"});
            about.animate({height: "auto"});
            picture.css("filter", "blur(5px)");
            button.text("Show Less");
        } else {
            card.animate({height: "400px"});
            about.animate({height: "40"});
            picture.css("filter", "none");
            button.text("Show More");
        }
    })
})