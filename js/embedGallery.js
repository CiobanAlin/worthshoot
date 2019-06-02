function addScript(src, callback) {
    var s = document.createElement('script');
    s.setAttribute('src', src);
    s.onload = callback;
    document.body.appendChild(s);
}

function callback_main() {
    window.setTimeout(function () {
        if (typeof UniteGalleryMain == 'function') {
            $('div[id^="gallery"]').each(function () {
                $(this).unitegallery({
                    gallery_images_preload_type: "minimal",
                    gallery_autoplay: false,
                    slider_control_zoom: true,
                    gallery_play_interval: 10000,
                    slider_scale_mode: "fit",
                    slider_scale_mode_fullscreen: "fit",
                    slider_enable_bullets: false,
                    theme_enable_fullscreen_button: true,
                    theme_enable_play_button: false,
                    theme_enable_hidepanel_button: false,
                    gallery_autoplay: false,
                    gallery_pause_on_mouseover: true,
                    gallery_preserve_ratio: true,
                    slider_transition: 'slide',
                    slider_transition_easing: 'linear',
                    slider_enable_zoom_panel: true,
                    slider_control_zoom: true,
                    tiles_type: "justified",
                    gallery_theme: "tiles"
                });
                $('.ug-canvas-pie').hide();
                $('.ug-strip-panel').css({
                    'background': 'transparent'
                });
                $('.ug-default-button-fullscreen-single, .ug-default-button-play-single, .ug-lightbox-button-close').css({
                    '-webkit-filter': 'invert(100%)'
                });
                $('.ug-lightbox').css({
                    'background': 'rgba(255,255,255,0.55)'
                });
            });
        }
    }, 1000);

}

function callback2_flickrembed_95() {
    $('head').append('<link rel="stylesheet" href="https://flickrembed.com/unitegallery/css/unite-gallery-light.css" type="text/css"/>');
    $('head').append('<link rel="stylesheet" href="https://flickrembed.com/unitegallery/themes/default/ug-theme-default.css" type="text/css" />');
    $('#flickrembed_95').html('<div id="gallery_flickrembed_95" style="display:none; margin: 0 auto;" class="center"><img alt="2019.04.11 alexDona (36)" src="https://live.staticflickr.com/65535/47981206221_880c862387_h.jpg" data-image="https://live.staticflickr.com/65535/47981206221_880c862387_h.jpg" data-description="2019.04.11 alexDona (36)"><img alt="IMG_5750" src="https://live.staticflickr.com/65535/47981185372_06a94702b8_h.jpg" data-image="https://live.staticflickr.com/65535/47981185372_06a94702b8_h.jpg" data-description="IMG_5750"><img alt="IMG_8064 copy" src="https://live.staticflickr.com/65535/47981264071_4ad801fdfa_h.jpg" data-image="https://live.staticflickr.com/65535/47981264071_4ad801fdfa_h.jpg" data-description="IMG_8064 copy"><img alt="IMG_8047 copy" src="https://live.staticflickr.com/65535/47981264686_3fa6a5668b_h.jpg" data-image="https://live.staticflickr.com/65535/47981264686_3fa6a5668b_h.jpg" data-description="IMG_8047 copy"><img alt="IMG_7929 copy" src="https://live.staticflickr.com/65535/47981266801_2bba8ccd80_h.jpg" data-image="https://live.staticflickr.com/65535/47981266801_2bba8ccd80_h.jpg" data-description="IMG_7929 copy"><img alt="IMG_5656" src="https://live.staticflickr.com/65535/47981180203_57e5c6f5fb_h.jpg" data-image="https://live.staticflickr.com/65535/47981180203_57e5c6f5fb_h.jpg" data-description="IMG_5656"><img alt="IMG_5828" src="https://live.staticflickr.com/65535/47981232216_2abe908bd7_h.jpg" data-image="https://live.staticflickr.com/65535/47981232216_2abe908bd7_h.jpg" data-description="IMG_5828"><img alt="IMG_8343 copy" src="https://live.staticflickr.com/65535/47981221527_c3348df695_h.jpg" data-image="https://live.staticflickr.com/65535/47981221527_c3348df695_h.jpg" data-description="IMG_8343 copy"><img alt="2019.04.11 alexDona (69)" src="https://live.staticflickr.com/65535/47981196941_86a7cf8df7_h.jpg" data-image="https://live.staticflickr.com/65535/47981196941_86a7cf8df7_h.jpg" data-description="2019.04.11 alexDona (69)"><img alt="IMG_9756" src="https://live.staticflickr.com/7842/45776221545_9468a78c75_h.jpg" data-image="https://live.staticflickr.com/7842/45776221545_9468a78c75_h.jpg" data-description="IMG_9756"><img alt="2019.04.11 alexDona (72)" src="https://live.staticflickr.com/65535/47981147572_d8161ef48a_h.jpg" data-image="https://live.staticflickr.com/65535/47981147572_d8161ef48a_h.jpg" data-description="2019.04.11 alexDona (72)"><img alt="2019.04.11 alexDona (60)" src="https://live.staticflickr.com/65535/47981200901_abcd887114_h.jpg" data-image="https://live.staticflickr.com/65535/47981200901_abcd887114_h.jpg" data-description="2019.04.11 alexDona (60)"><img alt="2019.04.11 alexDona (57)" src="https://live.staticflickr.com/65535/47981201531_83c45b414a_h.jpg" data-image="https://live.staticflickr.com/65535/47981201531_83c45b414a_h.jpg" data-description="2019.04.11 alexDona (57)"><img alt="2019.04.11 alexDona (59)" src="https://live.staticflickr.com/65535/47981201151_1c40563ff5_h.jpg" data-image="https://live.staticflickr.com/65535/47981201151_1c40563ff5_h.jpg" data-description="2019.04.11 alexDona (59)"><img alt="2019.04.11 alexDona (43)" src="https://live.staticflickr.com/65535/47981154458_b1e5090e54_h.jpg" data-image="https://live.staticflickr.com/65535/47981154458_b1e5090e54_h.jpg" data-description="2019.04.11 alexDona (43)"><img alt="IMG_5698" src="https://live.staticflickr.com/65535/47981234506_2fb0269839_h.jpg" data-image="https://live.staticflickr.com/65535/47981234506_2fb0269839_h.jpg" data-description="IMG_5698"><img alt="IMG_5732" src="https://live.staticflickr.com/65535/47981183623_e81686665d_h.jpg" data-image="https://live.staticflickr.com/65535/47981183623_e81686665d_h.jpg" data-description="IMG_5732"><img alt="IMG_4619" src="https://live.staticflickr.com/65535/47981089507_a65e9dc98c_h.jpg" data-image="https://live.staticflickr.com/65535/47981089507_a65e9dc98c_h.jpg" data-description="IMG_4619"><img alt="(5)" src="https://live.staticflickr.com/65535/47981032042_99765730e5_h.jpg" data-image="https://live.staticflickr.com/65535/47981032042_99765730e5_h.jpg" data-description="(5)"><img alt="_MG_5864" src="https://live.staticflickr.com/7926/46638641002_1b9a8b9c07_h.jpg" data-image="https://live.staticflickr.com/7926/46638641002_1b9a8b9c07_h.jpg" data-description="_MG_5864"></div>');

    addScript('https://flickrembed.com/unitegallery/themes/tiles/ug-theme-tiles.js', callback_main);


}

function callback1_flickrembed_95() {
    $.getScript("https://flickrembed.com/js/remodal.min.js");
    addScript('js/embedGallery-unitegallery.js', callback2_flickrembed_95);
}
addScript('https://code.jquery.com/jquery-1.12.1.min.js', callback1_flickrembed_95);