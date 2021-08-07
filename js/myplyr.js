// single = const player = new Plyr('audio', {});
// const players = Plyr.setup('.plyr-player');
const players = Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p));