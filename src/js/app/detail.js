require(["jquery", "handlebars"], function($, Handlebars) {
    //详情页顶部切换
    $("header p").on("click", "span", function() {
        $(this).addClass("get").siblings().removeClass("get");
    })
    $(".det").on("click", function() {
        $(".one").hide();
    })
    $(".sp").on("click", function() {
        $(".one").show();
    })

    //ajax
    var str = location.search.slice(1);
    console.log(str);
    $.ajax({
        url: "/det?" + str,
        dataType: "json",
        success: function(data) {
            //详情渲染
            console.log(data);
            var source = $("#tpl-detail").html();
            var template = Handlebars.compile(source);
            var html = template(data);
            $(".scroll").html(html);
        }
    })
})