$(function () {
    $(document).keydown(function (e) {
        $("#btn-reverse").on("click", function (e) {
            $(".flipbox").flippyReverse();
            e.preventDefault();
        });

        if (e.keyCode == 37) {
            $(".flipbox").flippy({
                color_target: "red",
                direction: "left",
                duration: "750",
                verso: "<span>Woohoo ! \\o/</span>"
            });
            e.preventDefault();
        }
        if (e.keyCode == 39) {

            $(".flipbox").flippy({
                color_target: "dodgerblue",
                direction: "right",
                duration: "750",
                verso: "<span>Nice ! </span>"
            });
            e.preventDefault();
        }
        if (e.keyCode == 38) {

            $(".flipbox").flippy({
                color_target: "lightgreen",
                direction: "top",
                duration: "750",
                verso: "<span class=\"big\">Great !</span>"
            });
            e.preventDefault();
        }
        if (e.keyCode == 40) {

            $(".flipbox").flippy({
                color_target: "slategrey",
                direction: "bottom",
                duration: "750",
                verso: "<span class=\"big\">Flip !</span>"
            });
            e.preventDefault();
        }

        SyntaxHighlighter.all();
    });
});