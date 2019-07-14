// Start js
$(document).ready(() => {
    let platform;
    $('.c1').click(() => {
        // Get id of the element clicked
        platform = event.target.id.split('-')[0];
        $('.platform-content').fadeIn(200);
        $(`.${platform}-projects`).show();
    });

    $('.exit-button').click(() => { 
        $('.platform-content').fadeOut(200);
        console.log(platform);
        $(`.platform-content > .${platform}-projects`).hide();
    });
});