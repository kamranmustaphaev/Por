(function(g){var window=this;'use strict';var grb=function(a){g.U.call(this,{I:"div",S:"ytp-inline-preview-ui"});this.gg=!1;this.player=a;this.T(a,"onStateChange",this.MR);this.T(a,"videodatachange",this.vx);this.T(a,"onInlinePreviewModeChange",this.m7);this.Yg=new g.Cu(this.EE,null,this);g.J(this,this.Yg)},H6=function(a){g.RV.call(this,a);
this.j=new grb(this.player);g.J(this,this.j);this.j.hide();g.GU(this.player,this.j.element,4);a.isInline()&&(this.load(),a=a.getRootNode(),g.Nu(a,["ytp-inline-preview-mode","ytp-no-contextmenu"]))};
g.w(grb,g.U);g.k=grb.prototype;
g.k.FO=function(){this.tooltip=new g.cY(this.player,this);g.J(this,this.tooltip);g.GU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Rd=new g.uW(this.player);g.J(this,this.Rd);this.yk=new g.U({I:"div",Ma:["ytp-inline-preview-scrim"]});g.J(this,this.yk);this.yk.Ja(this.element);this.T(this.yk.element,"click",this.zJ);this.zo=new g.WX(this.player,this,300);g.J(this,this.zo);this.zo.Ja(this.yk.element);this.controls=new g.U({I:"div",S:"ytp-inline-preview-controls"});g.J(this,this.controls);
this.controls.Ja(this.element);var a=new g.oX(this.player,this,!1);g.J(this,a);a.Ja(this.controls.element);a=new g.UX(this.player,this);g.J(this,a);a.Ja(this.controls.element);this.progressBar=new g.vX(this.player,this);g.J(this,this.progressBar);g.GU(this.player,this.progressBar.element,4);this.T(this.player,"appresize",this.Zb);this.T(this.player,"fullscreentoggled",this.Zb);this.Zb()};
g.k.show=function(){g.Du(this.Yg);this.gg||(this.FO(),this.gg=!0);0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.progressBar.show();this.player.ib("onInlinePreviewUiReady")};
g.k.hide=function(){this.Yg.stop();g.U.prototype.hide.call(this);this.player.isInline()||this.gg&&this.progressBar.hide()};
g.k.xa=function(){g.U.prototype.xa.call(this)};
g.k.zJ=function(a){a.target===this.yk.element&&this.player.ib("onExpandInlinePreview",a)};
g.k.m7=function(){g.Qu(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.If=function(){this.progressBar.Kc();this.zo.Kc()};
g.k.EE=function(){this.If();g.Du(this.Yg)};
g.k.Zb=function(){g.c_a(this.progressBar,0,this.player.qb().getPlayerSize().width,!1);g.wX(this.progressBar)};
g.k.MR=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.vx=function(a,b){if(this.player.isInline()){g.Qu(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.nC);var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.Qu(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
g.k.Le=function(){return this.tooltip};
g.k.Og=function(){return!1};
g.k.Vf=function(){return!1};
g.k.bk=function(){return!1};
g.k.GF=function(){};
g.k.Hs=function(){};
g.k.Bv=function(){};
g.k.xn=function(){return null};
g.k.NH=function(){return null};
g.k.UN=function(){return new g.ne(0,0)};
g.k.Qk=function(){return new g.Vr(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Tt=function(a,b,c,d,e){var f=d=0,h=0,l=g.is(a);if(b){c=g.Lu(b,"ytp-mute-button");var m=g.Lu(b,"ytp-subtitles-button"),n=g.gs(b,this.element);b=g.is(b);d=n.y+40;if(m||c)h=n.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.qb().getPlayerSize().width;h=g.ie(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};
g.k.showControls=function(){};
g.k.hq=function(){};
g.k.fn=function(){return!1};
g.k.fu=function(){};
g.k.du=function(){};
g.k.uo=function(){};
g.k.qo=function(){};
g.k.qs=function(){};
g.k.Eq=function(){};
g.k.Yw=function(){};
g.k.PN=function(){return null};g.w(H6,g.RV);H6.prototype.yl=function(){return!1};
H6.prototype.load=function(){this.player.hideControls();this.j.show()};
H6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.QV("inline_preview",H6);})(_yt_player);
