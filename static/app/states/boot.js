'use strict'
import config from '../config/config.js'
import domEle from '../config/element.js'

let boot = function () {
    this.init = () => {
        console.log("场景1:启动");
        //游戏不需要多点触摸
        this.input.maxPointers = 1
        //浏览器失去焦点的时设置游戏不停止，但是如果切换浏览器标签还是会触发RAF回调停止游戏
        this.stage.disableVisibilityChange = true
        //游戏在水平和垂直方向居中
        this.scale.pageAlignHorizontally = true
        this.scale.pageAlignVertically = true
        this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE
        //手动设置场景大小
        this.scale.setUserScale(config.scale, config.scale, 0, 0);
        this.scale.refresh();
    }
    this.preload = () => {
        let {game} = this
    }
    this.create = () => {
        domEle.main.style.display = 'block';
        this.stage.backgroundColor = '#eee';
        this.state.start('preload');
    }
}

export default boot
