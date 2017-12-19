//1.设计稿的大小 & HTML 大小
let DesignSize = {
  width: 987,
  height: 1280,
}
let DomSize = {
  width:document.body.clientWidth,
  height:document.body.clientHeight,
}
//2.因为要求一个屏幕显示完，所以高度是固定的。但是不同浏览器的高度是不同的，因此需要计算当前浏览器的高度 和设计稿高度的比例
let scale = DomSize.height / DesignSize.height
/*
    3.固定了高度之后，宽度就需要按照比例缩放，
    为了避免两边留白，因此设计稿的宽度有：背景最大宽度 和 主体内容宽度
    背景最大宽度 比 手机的都宽，因此需要计算一个margin-left的值来让canvas只显示最中间的主体内容宽度
*/
let left = (DomSize.width - DesignSize.width * scale) / 2;
let scaleLeft = left/scale >= 0?0:-(left/scale)

let config = {
  DesignSize: DesignSize,
  DomSize:DomSize,
  scale: scale,
  left:left,
  scaleLeft:scaleLeft,
  ratio:(DomSize.width - scaleLeft*2) / DomSize.width
}
console.log(config)
export default config
