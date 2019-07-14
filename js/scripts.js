// Start js
$(document).ready(() => {
    // var myFullpage = new fullpage('#fullpage', {
	// 	sectionsColor: ['#fff', '#f2f2f2']
	// });

    // $('#fullpage').fullpage({
	// 	//options here
	// 	autoScrolling:true,
	// 	scrollHorizontally: true
	// });

	//methods
	//$.fn.fullpage.setAllowScrolling(false);

    $('.c1').click(() => {
        $('.platform-content').fadeIn(200);
        const platform = event.target.id;
        $(`.${platform.split('-')[0]}`).show();
    });

    $('.exit-button').click(() => { 
        $('.platform-content').fadeOut(200);
        $(`.platform-content > .${platform.split('-')[0]}`).css({
            'display': 'none'
        });
    });
});