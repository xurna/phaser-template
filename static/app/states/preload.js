'use strict'

let preload = function () {
    this.init = () => {
        console.log("场景2:预加载")
    }
    this.preload = () => {
        let {game} = this

        /*预加载并且监听事件*/
        this.loadAll()

        this.load.onLoadStart.add(this.loadStart, this)
        this.load.onFileComplete.add(this.fileComplete, this)
        this.load.onLoadComplete.add(this.loadComplete, this)
    }

    this.loadAll = () => {
        let url = "../"
        if (!__DEV__) {
            url = "./"
        }
        //预加载素材
        this.load.image('phaser', url + 'images/phaser.png')
    }

    this.loadStart = () => {
        let {game} = this
        var style = {font: "36px Arial", fill: "#ffe32b", align: "center"};
        this.text = game.add.text(game.width / 2, game.height / 2 + 35 * 2, '0%', style);
        this.text.anchor.set(0.5, 0.5);
        this.text.scale.set(1);

        //进度条
        this.maxLength =  game.width*2/3;
        var bmd = game.add.bitmapData(this.maxLength,15);
        bmd.rect(0,0,this.maxLength,15,'#ff6600')
        this.preloadSprite = game.add.sprite(game.width/6 , game.height/2 +20, bmd);
        this.preloadSprite.width = 0;
        this.preloadSprite.height = 15;
        this.preloadSprite.anchor.set(0,0.5);

    }

    this.fileComplete = (progress, cacheKey, success, totalLoaded, totalFiles) => {
        let {game} = this
        this.text.text = progress + '%';
        //loading动画的加载
        this.preloadSprite.width = this.maxLength * progress/100;

    }

    this.loadComplete = () => {
        this.state.start('play')
    }

    this.create = () => {
    }
}

export default preload
