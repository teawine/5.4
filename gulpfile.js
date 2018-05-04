var gulp = require("gulp");
var server = require("gulp-webserver");
var data = require("./src/data/data.json");
var url = require("url");

gulp.task("default", function() {
    gulp.src("src")
        .pipe(server({
            port: 3333,
            livereload: true,
            open: true,
            middleware: function(req, res, next) {
                var reqobj = url.parse(req.url, true).query;
                if (req.url == "/login") {
                    res.end(JSON.stringify(data));
                } else if (/\/det/g.test(req.url)) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].id == reqobj.id) {
                            for (var j = 0; j < data[i].list.length; j++) {
                                if (data[i].list[j].num == reqobj.num) {
                                    console.log(data[i].list[j]);
                                    res.end(JSON.stringify(data[i].list[j]));
                                }
                            }
                        }
                    }
                }
                next();
            }
        }))
})