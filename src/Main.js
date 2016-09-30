/**
 * @author anlun214 QQ:58529016
 */
/**
 * 程序入口
 */
(function onAppRun(){
    Flash2x.designWidth=640;
    Flash2x.designHeight=1136;
    if(LGlobal.ios){
        F2xInit(33, "flash2xDiv", window.innerWidth,  window.innerHeight, main);
    }else{
        F2xInit(33, "flash2xDiv", 640, 640*(window.innerHeight/window.innerWidth), main);
    }
})();
function main(){
    //使用h5声音标签
    LGlobal.webAudio=false;
    //将F2x导出的矢量缓存为位图
    Flash2x.isCacheAsBitmap=true;
    LGlobal.stageScale = LStageScaleMode.NO_BORDER;
    LGlobal.align = LStageAlign.MIDDLE;
    Flash2x.initViewSize();
    /*
     LMouseEventContainer是一个鼠标事件监听器的容器，一般的鼠标事件监听需要遍历所有的可视对象，
     对程序消耗是比较大的，使用LMouseEventContainer后，鼠标监听对象变为只监听加载了鼠标事件的对象，
     可以大幅度提升鼠标事件监听的效率，但是，缺点是无法使用显示对象对鼠标事件进行遮挡。
     */
    LMouseEventContainer.set(LMouseEvent.MOUSE_MOVE,true);
    Flash2x.loadScene("test",function(per){
        //加载进度
        console.log("加载进度:"+per+"%");
    },function(){
        //加载完成
        Flash2x.stage.addChild(new test.Test());
        //Flash2x.stage.getChildAt(0).mc.img.pic_mc.rotate=30

        var tempMatrix = new LMatrix();
        tempMatrix.rotate(30)
        Flash2x.stage.getChildAt(0).mc.img.pic_mc.transform.matrix = tempMatrix;

        //Flash2x.stage.getChildAt(0).mc.img.pic_mc._update()

       console.log(Flash2x.stage.getChildAt(0).mc.img.getDataURL("image/jpeg",.5))

        // var bitmapdata = new LBitmapData(null,0,0,93,118);
        //
        // bitmapdata.draw(Flash2x.stage.getChildAt(0).mc.img)
        //
        // var bitmap = new LBitmap(bitmapdata);
        // var ls=new LSprite()
        //
        // ls.addChild(bitmap)
        // ls.x=300
        // ls.y=100
        //
        // var tempMatrix = new LMatrix();
        // tempMatrix.rotate(30)
        // ls.transform.matrix = tempMatrix;
        //
        // Flash2x.stage.addChild(ls)
        //
        // console.log(ls.getDataURL("image/jpeg",.5))

        //Flash2x.stage.getChildAt(0).mc.img.pic_mc.scaleX=2
       // Flash2x.stage.getChildAt(0).mc.img.pic_mc.scaleY=2
        //Flash2x.stage.getChildAt(0).mc.img.pic_mc.x=200
        //Flash2x.stage.getChildAt(0).mc.img.pic_mc.rotate=90


        //console.log(Flash2x.stage.getChildAt(0).mc.img.getWidth()+":"+Flash2x.stage.getChildAt(0).mc.img.getHeight())


        //setTimeout(function(){


        //console.log(Flash2x.stage.getChildAt(0).mc.img.getDataURL())
        //img_data=Flash2x.stage.getChildAt(0).mc.img.getDataURL()

        // var loader = new LLoader();
        // loader.addEventListener(LEvent.COMPLETE, loadBitmapdata);
        // loader.load(img_data, "bitmapData");
        //
        // function loadBitmapdata (event) {
        //     var bitmapdata = new LBitmapData(event.target);
        //     var bitmap = new LBitmap(bitmapdata);
        //
        //
        //     Flash2x.stage.getChildAt(0).mc.load_mc.addChild(bitmap);
        //
        // }







    });
}
