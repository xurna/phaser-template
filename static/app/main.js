'use strict'
import Game from './game'

window.onload = () => {
    // 预加载图片
    let preLoad = () => {
        let url = "../images/"
        //上线的图片路径
        if (!__DEV__) {
            url = "./images/"
        }
        let imageArr = [
            "phaser.png",
        ]
        imageArr.map((item) => {
            let image = new Image()
            image.src = url + item
        })
    }
    preLoad()
    //开始“boot”场景
    Game.state.start('boot')
}
