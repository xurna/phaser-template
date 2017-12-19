'use strict'

let play = function () {

    this.init = () => {
        let {game} = this
        console.log('场景3:动画页面')
    }

    this.preload = () => {
    }

    let createState = (that)=>{
        let {game} = that

        let phaser = game.add.image(game.width/2,game.height/2,'phaser')
        phaser.anchor.set(0.5)

    }

    this.create = () => {
        let {game} = this

        //创建游戏界面
        createState(this)

    }

     this.update = () => {
    }

}
export default play
