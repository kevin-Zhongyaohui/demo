var test=test||{};
test.f2x_auto_class0=function(){
	var s = this;
	LExtends(s, LSprite, []);
	s.initUI();
}
test.f2x_auto_class0.prototype.initUI=function(){
	var s = this;
	var _d3=new test.f2x_auto_class3();
	_d3.name="img";
	s.img=_d3;
	var _d2=new test.f2x_auto_class2();
	Flash2x.setDisplayInfo(_d2,130,504.15);
	_d2.name="load_mc";
	s.load_mc=_d2;
	var _d1=new test.f2x_auto_class1();
	_d1.name="_d1";
	s.addChild(_d1);
	s.addChild(_d2);
	s.addChild(_d3);
}
test.f2x_auto_class5=function(isMask){
	var s = this;
	LExtends(s, LShape, []);
	s.initUI(isMask);
}
test.f2x_auto_class5.prototype.initUI=function(isMask){
	var s = this;
	if(!isMask){
	s.graphics.beginFill("#000000");
	}
	s.graphics.decodePath("Egx/BYvMAAAixeMBj+AAAMAAACxeg");
	if(!isMask){
	s.graphics.fill();
	}
	if(!isMask&&Flash2x.isCacheAsBitmap){
		s.cacheAsBitmap(true);
	}
}
test.f2x_auto_class1=function(){
	var s = this;
	LExtends(s, LSprite, []);
	s.initUI();
}
test.f2x_auto_class1.prototype.initUI=function(){
	var s = this;
	var _d1=new test.f2x_auto_class5();
	Flash2x.setDisplayInfo(_d1,320,568);
	_d1.name="_d1";
	s.addChild(_d1);
}
test.f2x_auto_class6=function(isMask){
	var s = this;
	LExtends(s, LShape, []);
	s.initUI(isMask);
}
test.f2x_auto_class6.prototype.initUI=function(isMask){
	var s = this;
	if(!isMask){
	s.graphics.beginFill("#FFFFFF");
	}
	s.graphics.decodePath("A/jfkMAAAg/HMA/HAAAMAAAA/Hg");
	if(!isMask){
	s.graphics.fill();
	}
	if(!isMask&&Flash2x.isCacheAsBitmap){
		s.cacheAsBitmap(true);
	}
}
test.f2x_auto_class2=function(){
	var s = this;
	LExtends(s, LSprite, []);
	s.initUI();
}
test.f2x_auto_class2.prototype.initUI=function(){
	var s = this;
	var _d1=new test.f2x_auto_class6();
	Flash2x.setDisplayInfo(_d1,202.1,202.1);
	_d1.name="_d1";
	s.addChild(_d1);
}
test.f2x_auto_class7=function(isMask){
	var s = this;
	LExtends(s, LShape, []);
	s.initUI(isMask);
}
test.f2x_auto_class7.prototype.initUI=function(isMask){
	var s = this;
	if(!isMask){
	s.graphics.beginFill("#000000");
	}
	s.graphics.decodePath("AlFGhQiIitAAj0QAAj0CIitQCHitC+AAQC/AACHCtQCICtAAD0QAAD0iICtQiHCui/AAQi+AAiHiug");
	if(!isMask){
	s.graphics.fill();
	}
	if(!isMask&&Flash2x.isCacheAsBitmap){
		s.cacheAsBitmap(true);
	}
}
test.f2x_auto_class3=function(){
	var s = this;
	LExtends(s, LSprite, []);
	s.initUI();
}
test.f2x_auto_class3.prototype.initUI=function(){
	var s = this;
	var _d2=new test.f2x_auto_class7(true);
	Flash2x.setDisplayInfo(_d2,46.23,59.12);
	_d2.name="_d2";
	var _d1=new test.f2x_auto_class4();
	Flash2x.setDisplayInfo(_d1,46,59.65);
	_d1.mask=_d2;
	_d1.name="pic_mc";
	s.pic_mc=_d1;
	s.addChild(_d1);
	s.addChild(_d2);
}
test.f2x_auto_img0=function(){
	var s = this;
	LExtends(s, F2xBitmap, ["test","f2x_auto_img0"]);
}
test.f2x_auto_class4=function(){
	var s = this;
	LExtends(s, LSprite, []);
	s.initUI();
}
test.f2x_auto_class4.prototype.initUI=function(){
	var s = this;
	var _d1=new test.f2x_auto_img0();
	Flash2x.setDisplayInfo(_d1,-60,-60);
	_d1.name="_d1";
	s.addChild(_d1);
}
