// single = const player = new Plyr('audio', {});
// const players = Plyr.setup('.plyr-player');
const players = Array.from(document.querySelectorAll('.plyr-player')).map(p => new Plyr(p));