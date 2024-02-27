$(document).ready(function(){

    $("#hide_text").click(() => $("#dynamic_para").hide())
    $("#show_text").click(() => $("#dynamic_para").show())
    
    $('#button_toggle').click(() => $('#toggle_para').toggle())

    $('#fadeout_button').click(() => $('#fade_para').fadeOut())
    $('#fadein_button').click(() => $('#fade_para').fadeIn())

    $('#fadeout_slow_button').click(() => $('#fade_slow_para').fadeOut('slow'))
    $('#fadein_slow_button').click(() => $('#fade_slow_para').fadeIn('slow'))

    $('#fadeout_seconds_button').click(() => $('#fade_seconds_para').fadeOut(2000))
    $('#fadein_seconds_button').click(() => $('#fade_seconds_para').fadeIn(2000))

    $('#fade_toggle_button').click(() => $('#fade_toggle_para').fadeToggle())

    $('#fade_opacity_button').click(() => $('#fade_opacity_para').fadeTo('slow', 0.5))
})
