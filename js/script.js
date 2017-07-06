;(function(){
  
  //$.fn.extend=({
  
    $.fn.slider=function(opt){
     var config=$.extend({

         },opt),
       //获取元素：
      els={
        box:$('#box'),
        banner:$('#banner'),
        img:$('li>img')
      };
     //声明一些需要的初始变量：
      var ind=0,
          timer=null,
          width=els.box.width(),
          length=els.img.length;
     //设置页面的样式：
      els.box.width(width);
      els.banner.width(width*(length+1));

    //自动轮播：
    function auto(){
      clearInterval(timer);
     timer=setInterval(function(){
      ind++;
      if(ind>length-1){
       var copy=els.img.eq(0).clone();
          els.banner.append(copy);
       els.banner.stop().animate({'marginLeft':-ind*width},600,function(){
        els.banner.css('marginLeft',0);
         copy.remove();
       });
        ind=0;
      }else{
        els.banner.stop().animate({'marginLeft':-ind*width},600);
      }
    $('ol>li').removeClass('bg').eq(ind).addClass("bg");
     },1000);
    }
    auto();

    //当鼠标滑过box时，定时器停止，鼠标离开，定时器继续：
    els.box.hover(function(){
      clearInterval(timer);
    },function(){auto()}).trigger("mouseleave");

     //右按钮绑定事件:(判断按钮是否存在：)
     if(config.arrowBtn){
        els.left=$('#left')[0];
        els.right=$('#right').get(0);
      bindEvent(els.right,config.type,function(){
         ind++;
         if(ind>length-1){
          //将第一张图片克隆，添加到box中，在上部动画完成后，将克隆的删除，给box设置marginLeft=0;
          var last=els.img.first().clone();
              last.appendTo(els.banner);
              els.banner.stop().animate({'marginLeft':-width*ind},600,function(){
                
                els.banner.css({'marginLeft':0});$('ul>li:last').remove();
              });
          ind=0;
         }else{
          els.banner.stop().animate({'marginLeft':-width*ind},600);
         }
        $('ol>li').removeClass('bg').eq(ind).addClass("bg");
     })
    //左按钮绑定事件：
     bindEvent(els.left,config.type,function(){
         ind--;
         if(ind<0){
          //将第一张图片克隆，添加到box中，在上部动画完成后，将克隆的删除，给box设置marginLeft=0;
          var first=els.img.last().clone();
              first.appendTo(els.banner);
              els.banner.css('marginLeft',-width);
              els.banner.stop().animate({'marginLeft':0},600,function(){
                 first.remove();//重新获取下li:
                els.banner.css({'marginLeft':-width*(length-1)});
              });
            ind=length-1;
         }else{
          els.banner.stop().animate({'marginLeft':-width*ind},600);
         }

        $('ol>li').removeClass('bg').eq(ind).addClass("bg");
        
     })
     }

    //判断小图标是否存在：
    if(config.numBtn){
      els.buttons=$("ol>li");
     //做鼠标滑过123456
     els.buttons.each(function(i,n){
        bindEvent(n,config.type,function(){
          ind=i;
         els.banner.stop().animate({'marginLeft':-width*ind},600);
         els.buttons.removeClass('bg').eq(ind).addClass("bg");
        })
     })
    }
    }
  //封装一个绑定事件：
  function bindEvent(target,events,Callback){
    if(target.addEventListener){
      target.addEventListener(events,Callback,false);
    }else if(target.attachEvent){
      target.attachEvent('on'+events,Callback);
    }else{
      target['on'+events]=Callback;
    }
  }
 

  //}) 

})(jQuery)