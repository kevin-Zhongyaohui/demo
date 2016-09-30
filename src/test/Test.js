var test=test||{};
test.Test=function(){
	var s = this;
	LExtends(s, LSprite, []);
	s.initUI();
}
test.Test.prototype.initUI=function(){
	var s = this;
	//f2x_auto_created_init_start
	var _d1=new test.f2x_auto_class0();
	_d1.name="mc";
	s.mc=_d1;
	s.addChild(_d1);
	
	//f2x_auto_created_init_end
	
}
