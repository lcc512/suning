$(function() {
    // 入口函数
    // 轮播图
    // 1，无缝滚动
    // 2，点对应改变
    // 3，手势切换



    // 获取需要操作的元素
    // 大容器
    var $banner = $('.sn-banner');
    var width = $banner.width();
    var $image = $banner.find('ul:first');
    var $point = $banner.find('ul:last');
    // 所有的圆点
    var $points = $point.find('li');

    // 动画的集中方法
    var animateFuc=function(){
    	$image.animate({
                'transform': 'translateX(' + (-index * width) + 'px)'
            },
            200,
            'linear',
            function() {

                // 判断是否滚动到最后一张图片， 然后瞬间转到第一个图片

                if (index >= 9) {
                    index = 1;
             
                    $image.css('translateX(' + (-index * width) + 'px)');
                } else if (index <= 0) {
                    index = 8;
                    $image.css('translateX(' + (-index * width) + 'px)');
                }

                // index 正常取值 1-8
                // 圆点对应 0-7

                $points.removeClass('now').eq(index - 1).addClass('now');


            });
    }

    // 1，无缝滚动
    // 想一下为什么是1不是0
    var index = 1;
    var timer = setInterval(function() {
        index++;
        // 动画的转起来
        // 4个参数 需要改变动画的属性（对象）
        // 动画执行的时间
        // 动画执行的速度
        // 动画执行完成回调
        animateFuc();

    }, 5000);

    $image.on('swipeRight',function(){

    	index--;
    	// 动画的切换
    	animateFuc();

    });
    $image.on('swipeLeft',function(){

    	index++;
    	animateFuc();
    });


});