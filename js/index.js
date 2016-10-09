$(function(){

    /*banner img自动适应屏幕大小*/
    headerimg();
    function headerimg(){
        var height=$(window).height();
        var width=$(window).width();
        var tops=$(".banner-img img").offset().top;
        $(".banner-img").height(height).width(width);
        var imgwidth=$(".banner-img img").width();
        $(".banner-img img").css("marginLeft",((width/2)-imgwidth/2)+"px");
        $(window).resize(function(){
            var height=$(window).height();
            var width=$(window).width();
            $(".banner-img").height(height).width(width);
            var imgwidth=$(".banner-img img").width();
            $(".banner-img img").css("marginLeft",((width/2)-imgwidth/2)+"px");
        })
        $(window).scroll(function(){
            var top=$(window).scrollTop();
            $(".banner-img img").offset({top:top/3+tops});
        });
    }

    /*learn me事件*/
    leadLink();
    function leadLink(){
        $('.lead-link').click(function(e){
            var ev=e||window.event;
            var height=$(window).height();
            $("body,html").animate({scrollTop:height-50},'slow');
            if (ev.preventDefault )
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        });
    }

    /*鼠标滚动的导航事件*/
    nav();
    function nav(){
        $(window).scroll(function(){
            var top=$(window).scrollTop();
            if(top>10){
                $(".nava").css({
                    "position":"fixed",
                    "-webkit-animation":"navChange1 1s ease 0s",
                    "-moz-animation":"navChange1 1s ease 0s",
                    "animation":"navChange1 1s ease 0s",
                    "background-color":"#000",
                    "line-height":"50px"
                })
                $(".nava a").css("color","#fff");
                $(".nava .co-o a").css("color","#F4D03F");
            }
            if(top==0){
                $(".nava").css({
                    "position":"",
                    "background-color":"",
                    "line-height":""
                })
                $(".nava a").css("color","")
            }
        })
    }

    /*navb事件*/
    navB();
    function navB(){
        $(".menu-img").click(function(){
            $(".menu").css("display","block")
        })
        $(window).resize(function(){
            var rWidth=$(window).width();
            if(rWidth>768){
                $(".menu").css({
                    "display":"none"
                })
            }
        })
        flag=true;
        $(".menu-img").click(function(){
            if(flag){
                $(".menu").css("display","block");
                flag=false;
            }else{
                $(".menu").css("display","none");
                flag=true;
            }
        })
    }

    /*Some Stats自加运动*/
    startsAdd();
    function startsAdd(){
        var i=0;
        $(window).scroll(function(){
            var top=$(window).scrollTop();
            if(top>=2450){
                var t=setInterval(num1,20);
                var t1=setInterval(num2,0.02);
                var t2=setInterval(num3,0.5);
                var t3=setInterval(num4,1);
            }
            function num1() {
                i++;
                var k=120;
                if (i > k) {
                    return false;
                }
                $(".count:eq(0)").html(i);
            }
            function num2() {
                i++;
                var j=7600;
                if (i > j) {
                    return false;
                }
                $(".count:eq(1)").html(i);
            }
            function num3() {
                i++;
                var m=4100;
                if (i > m) {
                    return false;
                }
                $(".count:eq(2)").html(i);
            }
            function num4() {
                i++;
                var n=3600;
                if (i > n) {
                    return false;
                }
                $(".count:eq(3)").html(i);
            }
        })
    }

    /*skills画布事件*/
    skills1();
    function skills1(){
        var flag=true;
        $(window).scroll(function(){
            var top=$(window).scrollTop();
            if(top>=1000){
                if(!flag){
                    return;
                }
                if(flag){
                    var canvas1=$(".canvas1")[0];
                    var cobj=canvas1.getContext("2d");
                    function canvas(){
                        var a=0;     //起始弧度
                        var speed=4;   //弧度的变化值
                        cobj.lineWidth="10";   //线条的宽度
                        function circle1(){
                            a+=speed;
                            cobj.clearRect(0,0,300,300);  //清除画布
                            cobj.beginPath();
                            cobj.arc(80,80,50,0,a*Math.PI/180);  //x,y起始点 半径 弧度起始 弧度
                            cobj.strokeStyle="green";
                            cobj.fillStyle="#fff";
                            cobj.stroke();
                            cobj.closePath();
                            var num=(a/360*100).toFixed(0);  //旋转的弧度
                            cobj.font="30px songti";
                            cobj.fillText(num+"%",80-cobj.measureText(num+"%").width/2,90);
                            var t=requestAnimationFrame(circle1);
                            if (num>=95){
                                cancelAnimationFrame(t);  //取消动画
                            }
                        }
                        circle1();
                    }
                    canvas();
                }
             flag=false;
            }
        })
    }
    skills2();
    function skills2(){
        var flag=true;
        $(window).scroll(function(){
            var top=$(window).scrollTop();
            if(top>=1000){
                if(!flag){
                    return;
                }
                if(flag){
                var canvas2=$(".canvas2")[0];
                var cobj=canvas2.getContext("2d");
                function canvas(){
                    var a=0;     //起始弧度
                    var speed=4;   //弧度的变化值
                    cobj.lineWidth="10";   //线条的宽度
                    function circle1(){
                        a+=speed;
                        cobj.clearRect(0,0,300,300);  //清除画布
                        cobj.beginPath();
                        cobj.arc(80,80,50,0,a*Math.PI/180);
                        cobj.strokeStyle="green";
                        cobj.fillStyle="#fff";
                        cobj.stroke();
                        cobj.closePath();
                        var num=(a/360*100).toFixed(0);  //旋转的弧度
                        cobj.font="30px songti";
                        cobj.fillText(num+"%",80-cobj.measureText(num+"%").width/2,90);
                        var t=requestAnimationFrame(circle1);
                        if (num>=90){
                            cancelAnimationFrame(t);  //取消动画
                        }
                    }
                    circle1();
                }
                canvas();
            }
                flag=false;
            }
        })
    }
    skills3();
    function skills3(){
        var flag=true;
        $(window).scroll(function(){
            var top=$(window).scrollTop();
            if(top>=1000){
                if(!flag){
                    return;
                }
                if(flag){
                var canvas3=$(".canvas3")[0];
                var cobj=canvas3.getContext("2d");
                function canvas(){
                    var a=0;     //起始弧度
                    var speed=4;   //弧度的变化值
                    cobj.lineWidth="10";   //线条的宽度
                    function circle1(){
                        a+=speed;
                        cobj.clearRect(0,0,300,300);  //清除画布
                        cobj.beginPath();
                        cobj.arc(80,80,50,0,a*Math.PI/180);
                        cobj.strokeStyle="green";
                        cobj.fillStyle="#fff";
                        cobj.stroke();
                        cobj.closePath();
                        var num=(a/360*100).toFixed(0);  //旋转的弧度
                        cobj.font="30px songti";
                        cobj.fillText(num+"%",80-cobj.measureText(num+"%").width/2,90);
                        var t=requestAnimationFrame(circle1);
                        if (num>=85){
                            cancelAnimationFrame(t);  //取消动画
                        }
                    }
                    circle1();
                }
                canvas();
            }
                flag=false;
            }
        })
    }
    skills4();
    function skills4(){
        var flag=true;
        $(window).scroll(function(){
            var top=$(window).scrollTop();
            if(top>=1000){
                if(!flag){
                    return;
                }
                if(flag){
                var canvas4=$(".canvas4")[0];
                var cobj=canvas4.getContext("2d");
                function canvas(){
                    var a=0;     //起始弧度
                    var speed=4;   //弧度的变化值
                    cobj.lineWidth="10";   //线条的宽度
                    function circle1(){
                        a+=speed;
                        cobj.clearRect(0,0,300,300);  //清除画布
                        cobj.beginPath();
                        cobj.arc(80,80,50,0,a*Math.PI/180);
                        cobj.strokeStyle="green";
                        cobj.fillStyle="#fff";
                        cobj.stroke();
                        cobj.closePath();
                        var num=(a/360*100).toFixed(0);  //旋转的弧度
                        cobj.font="30px songti";
                        cobj.fillText(num+"%",80-cobj.measureText(num+"%").width/2,90);
                        var t=requestAnimationFrame(circle1);
                        if (num>=80){
                            cancelAnimationFrame(t);  //取消动画
                        }
                    }
                    circle1();
                }
                canvas();
            }
                flag=false;
            }
        })
    }
    skills5();
    function skills5(){
        var flag=true;
        $(window).scroll(function(){
            var top=$(window).scrollTop();
            if(top>=1000){
                if(!flag){
                    return;
                }
                if(flag){
                var canvas5=$(".canvas5")[0];
                var cobj=canvas5.getContext("2d");
                function canvas(){
                    var a=0;     //起始弧度
                    var speed=4;   //弧度的变化值
                    cobj.lineWidth="10";   //线条的宽度
                    function circle1(){
                        a+=speed;
                        cobj.clearRect(0,0,300,300);  //清除画布
                        cobj.beginPath();
                        cobj.arc(80,80,50,0,a*Math.PI/180);
                        cobj.strokeStyle="green";
                        cobj.fillStyle="#fff";
                        cobj.stroke();
                        cobj.closePath();
                        var num=(a/360*100).toFixed(0);  //旋转的弧度
                        cobj.font="30px songti";
                        cobj.fillText(num+"%",80-cobj.measureText(num+"%").width/2,90);
                        var t=requestAnimationFrame(circle1);
                        if (num>=75){
                            cancelAnimationFrame(t);  //取消动画
                        }
                    }
                    circle1();
                }
                canvas();
                }
                flag=false;
            }
        })
    }
    skills6();
    function skills6(){
        var flag=true;
        $(window).scroll(function(){
            var top=$(window).scrollTop();
            if(top>=1000){
                if(!flag){
                    return;
                }
                if(flag){
                var canvas6=$(".canvas6")[0];
                var cobj=canvas6.getContext("2d");
                function canvas(){
                    var a=0;     //起始弧度
                    var speed=4;   //弧度的变化值
                    cobj.lineWidth="10";   //线条的宽度
                    function circle1(){
                        a+=speed;
                        cobj.clearRect(0,0,300,300);  //清除画布
                        cobj.beginPath();
                        cobj.arc(80,80,50,0,a*Math.PI/180);
                        cobj.strokeStyle="green";
                        cobj.fillStyle="#fff";
                        cobj.stroke();
                        cobj.closePath();
                        var num=(a/360*100).toFixed(0);  //旋转的弧度
                        cobj.font="30px songti";
                        cobj.fillText(num+"%",80-cobj.measureText(num+"%").width/2,90);
                        var t=requestAnimationFrame(circle1);
                        if (num>=70){
                            cancelAnimationFrame(t);  //取消动画
                        }
                    }
                    circle1();
                }
                canvas();
                }
                flag=false;
            }
        })
    }

    /*Experience事件*/
    experience();
    function experience(){
        $(window).scroll(function(){
            var top=$(window).scrollTop();
            if(top>=1700){
                $(".timeline .left-animation").css({
                    "opacity": "1",
                    "-webkit-animation": "leftTranslate 1s ease",
                    "-moz-animation": "leftTranslate 1s ease",
                    "animation": "leftTranslate 1s ease"
                })
                $(".timeline-img:eq(0)").css({
                    background:"#000",
                    opacity:0.5
                })
            }
            if(top>=2100){
                $(".timeline-img:eq(0)").css({
                    background:"",
                    opacity:""
                })
                $(".timeline .right-animation").css({
                    "opacity": "1",
                    "-webkit-animation": "rightTranslate 1s ease",
                    "-moz-animation": "rightTranslate 1s ease",
                    "animation": "rightTranslate 1s ease"
                })
                $(".timeline-img:eq(1)").css({
                    background:"#000",
                    opacity:0.5
                })
            }
            if(top>=2400){
                $(".timeline-img:eq(1)").css({
                    background:"",
                    opacity:""
                })
            }
        })
    }

    /*nava导航跳转事件*/
    navaH();
    function navaH(){
        $(".banner .text p .btn").click(function(e){
            var ev=e||window.event;
            $("body,html").animate({scrollTop:3230},300);
            clear();
        })
        $(".page-scroll:eq(1)").click(function(e){
            var ev=e||window.event;
            var height=$(window).height();
            $("body,html").animate({scrollTop:height-50},300);
            if (ev.preventDefault)
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        })
        $(".page-scroll:eq(2)").click(function(e){
            var ev=e||window.event;
            $("body,html").animate({scrollTop:1210},300);
            if (ev.preventDefault )
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        })
        $(".page-scroll:eq(3)").click(function(e){
            var ev=e||window.event;
            $("body,html").animate({scrollTop:2000},600);
            if (ev.preventDefault )
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        })
        $(".page-scroll:eq(4)").click(function(e){
            var ev=e||window.event;
            $("body,html").animate({scrollTop:3200},800);
            if (ev.preventDefault )
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        })
        $(".page-scroll:eq(5)").click(function(e){
            var ev=e||window.event;
            $("body,html").animate({scrollTop:4100},1000);
            if (ev.preventDefault )
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        })
        $(".footer a").click(function(e){
            var ev=e||window.event;
            $("body,html").animate({scrollTop:0},1000);
            if (ev.preventDefault )
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        })
        $(".page-scroll:eq(0)").click(function(e){
            var ev=e||window.event;
            $("body,html").animate({scrollTop:0},1000);
            if (ev.preventDefault )
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        })
    }

    /*navb导航跳转事件*/
    navbH();
    function navbH(){
        $(".menu-o a").click(function(e){
            var ev=e||window.event;
            $("body,html").animate({scrollTop:0},1000);
            if (ev.preventDefault )
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        })
        $(".menu a:eq(0)").click(function(e){
            var ev=e||window.event;
            $("body,html").animate({scrollTop:620},300);
            if (ev.preventDefault )
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        })
        $(".menu a:eq(1)").click(function(e){
            var ev=e||window.event;
            $("body,html").animate({scrollTop:1160},300);
            if (ev.preventDefault )
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        })
        $(".menu a:eq(2)").click(function(e){
            var ev=e||window.event;
            $("body,html").animate({scrollTop:2910},500);
            if (ev.preventDefault )
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        })
        $(".menu a:eq(3)").click(function(e){
            var ev=e||window.event;
            $("body,html").animate({scrollTop:4450},600);
            if (ev.preventDefault )
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        })
        $(".menu a:eq(4)").click(function(e){
            var ev=e||window.event;
            $("body,html").animate({scrollTop:7050},800);
            if (ev.preventDefault )
                ev.preventDefault();
            else {
                ev.returnValue = false;
            }
        })
    }
})