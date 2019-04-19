    
class Channel {
    constructor(audio_uri) {
        this.ready = false;
        this.audio_uri = audio_uri;
        this.resource = new Audio(audio_uri);
    }
    play() {
        // Try refreshing the resource altogether
        this.resource.play();
    }
}


class Switcher {
    constructor(audio_uri, num) {
        this.channels = [];
        this.num = num;
        this.index = 0;
        for (var i = 0; i < num; i++) {
            this.channels.push(new Channel(audio_uri));
        }
    }
    play() {
        this.channels[this.index++].play();
        this.index = this.index < this.num ? this.index : 0;
    }
}