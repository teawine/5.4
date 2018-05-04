require(["jquery", "handlebars", "swiper"], function($, Handlebars, Swiper) {


    //ajax
    $.ajax({
        url: "/login",
        dataType: "json",
        success: function(data) {
            console.log(data);
            auto(data);
        }
    })

    function auto(data) {
        //列表渲染
        var source = $("#tpl-list").html();
        var template = Handlebars.compile(source);
        var html = template(data);
        $(".list").html(html);

        //tab切换
        var myswiper = new Swiper(".box", {
            onSlideChangeStart: function(swiper) {
                $(".nav span").eq(swiper.activeIndex).addClass("active").siblings().removeClass("active");
            }
        })

        $(".nav span").on("click", function() {
            $(this).addClass("active").siblings().removeClass("active");
            myswiper.slideTo($(this).index())
        });
    }
})