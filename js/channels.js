var Yummy={
    name: 'Yummy',
    createdOn: new Date("April 01, 2016"),
    createdBy: 'minus.plus.yummy',
    starred: false,
    expiresIn: 100,
    messageCount: 900

}

var SevenContinents = {
    name: 'SevenContinents',
    createdOn: new Date("April 01, 2016"),
    createdBy: 'truck.cotton.zone',
    starred: true,
    expiresIn: 100,
    messageCount: 900

}

var KillerApp = {
    name: 'KillerApp',
    createdOn: new Date("April 01, 2016"),
    createdBy: 'driveway.helper.magazine',
    starred: false,
    expiresIn: 100,
    messageCount: 900

}

var FirstPersonOnMars = {
    name: 'FirstPersonOnMars',
    createdOn: new Date("April 01, 2016"),
    createdBy: 'escapes.pitch.saucepan',
    starred: true,
    expiresIn: 100,
    messageCount: 900

}

var Octoberfest = {
    name: 'Octoberfest',
    createdOn: new Date("April 01, 2016"),
    createdBy: 'meanings.identity.pays',
    starred: false,
    expiresIn: 100,
    messageCount: 900

}

function listChannels() {
    createChannelElement(Yummy).appendTo("#channelsList");
    createChannelElement(SevenContinents).appendTo("#channelsList");
    createChannelElement(KillerApp).appendTo("#channelsList");
    createChannelElement(FirstPersonOnMars).appendTo("#channelsList");
    createChannelElement(Octoberfest).appendTo("#channelsList");
    switchChannel(SevenContinents);
}

function createChannelElement(channelObject) {
    var star4 = (channelObject.starred) ? 'fas fa-star' : 'far fa-star';
    var channelElement;
    channelElement = $('<li onclick="switchChannel(' + channelObject.name + ')">').html('#' + channelObject.name + '<span class="channel-meta"><i id="' + channelObject.name + '" class="' + star4 + '" onclick="star()"></i><i class="fas fa-chevron-right"></i></span>');

    return channelElement;
}