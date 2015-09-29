/**
 * Created by Baptiste on 28/09/2015.
 */

//fast click init
$(function() {
    FastClick.attach(document.body);
});


//hash template management
$(window).on('hashchange', route);
function route() {
    //hide menu
    $(".mdl-layout__drawer").removeClass("is-visible");
    var hash = window.location.hash;
    if(hash == "#" || hash == "#index" || hash == "")
    {
        $.get('./templates/index.html', function(template) {
            var rendered = Mustache.render(template, {});
            $('#content').html(rendered);
        });
    }
    else
    {
        $.get('./templates/'+hash.substring(1)+'.html', function(template) {
            var rendered = Mustache.render(template, {});
            $('#content').html(rendered);
        });
    }

}
route();
