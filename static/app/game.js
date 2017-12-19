'use strict'
import Boot from './states/boot'
import Preload from './states/preload'
import Play from './states/play'
import config from './config/config.js'
import domEle from './config/element.js'

// 设置场景的大小
let game = new Phaser.Game(config.DesignSize.width, config.DesignSize.height, Phaser.CANVAS, 'main')
// 设置HTML里面比例
if (config.left < 0) {
    domEle.main.style.left = config.left + "px"
}

game.state.add('boot', Boot)
game.state.add('preload', Preload)
game.state.add('play', Play)

export default game
