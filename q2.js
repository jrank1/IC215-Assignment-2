function removePreview(e) {
    // remove preview div and gray class
    // $(this).removeClass("gray");
    $("figure img").attr("class", "normal");
    $("#preview").remove();
};

function movePreview(e) {
    // preview based on mouse coordinates
    $("#preview").offset({
        left: e.pageX,
        top: e.pageY + 20
        
    });
};

$(document).ready(function() {

    $('figure img').on('mouseover', function(e) {

        // var and change image from small to large
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var updatesrc = src.replace("small", "large");

        // make div preview and add it to html
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + updatesrc + '">');
        var figcaption = $('<p>' + alt + '</p>');
        preview.append(image);
        preview.append(figcaption);
        $('body').append(preview);

        // turn image gray
        // $(this).addClass("gray");
        $(this).attr("class", "gray");
        // fade preview in
        $("#preview").fadeIn(1000);
    });

    $('figure img').on('mouseleave', function(e) {
        removePreview(e);
    });

    $('figure img').on('mousemove', function(e) {
        movePreview(e);
    });
});