/* #6 start the #external #action and say hello */
console.log("App is alive");


/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */

var currentChannel

function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    currentChannel = channelName;
    console.log("currentChannel", currentChannel);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = '#' + channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/ ' + channelName.createdBy + '" target="_blank"> <strong> '+ channelName.createdBy + '</strong> </a>';

    /* #6 #liking channels on #click */
    var star1 = (currentChannel.starred)? 'fas fa-star' : 'far fa-star';
    $('#channel-star').attr('class', star1);
   
    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');
}
  
/* #6 #liking a channel on #click */
function star() {
    currentChannel.starred = !currentChannel.starred;
    var star2 = (currentChannel.starred)? 'fas fa-star' : 'far fa-star';
    $('#channel-star').attr('class',star2);
    var star3 = (currentChannel.starred) ? 'fas fa-star' : 'far fa-star';
    $('#' + currentChannel.name).attr('class', star3);
}




/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

var currentLocation = {
    longtitude:121.400227,
    latitude: 31.245930,
    what3words:'circling.rollers.wiring'
}

function Message(text) {
    this.createdBy = currentLocation.what3words;
    this.latitude = currentLocation.latitude;
    this.longtitude = currentLocation.longtitude;
    this.createdOn = new Date(Date.now());
    this.expiresOn = new Date((new Date()).getTime() + 15);
    this.text = text;
    this.own = true;

}

function createMessageElement(messageObject) {
    $('<div>').html('<h3><a href="http://w3w.co/' + currentLocation.what3words + '" target="_blank"><strong>' + currentLocation.what3words + '</strong></a>' + messageObject.createdOn + '<em>' + expiresIn + ' min. left</em></h3><p>' + messageObject.text + '</p><button>+5 min.</button>').addClass('message').appendTo('#messages');
    var expiresIn = Math.round(messageObject.expiresOn - messageObject.createdOn);
}

function sendMessage() {
    var myMessage = new Message($('#chat-bar input').val());
    createMessageElement(myMessage);
    $("#chat-bar input").val('');
    $("#messages").scrollTop(messages.scrollHeight);
}