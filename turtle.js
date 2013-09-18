function blockAndDisplay() {
    var feed = $('[id^=topnews_main_stream]');
    var message = $('#distracted');

    if (feed.length == 0) {
        message.remove();
    } else if (message.length == 0) {
        feed.hide();
        message = $('<h1>')
            .attr('id', 'distracted')
            .text("Don't get distracted by Facebook!")
            .css('font-size', '32px')
            .css('font-family', "'Helvetica Neue', Helvetica, Arial, 'lucida grande', tahoma, verdana, arial, sans-serif")
            .css('position', 'relative')
            .css('top', '100px');
        $('[data-location=maincolumn]').append(message);
    }
}

blockAndDisplay();
setInterval(blockAndDisplay, 200);