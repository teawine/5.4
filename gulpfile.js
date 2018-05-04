var gulp = require("gulp");
var server = require("gulp-webserver");
var data = require("./src/data/data.json");

gulp.task("default", function() {
    gulp.src("src")
        .pipe(server({
            port: 3333,
            livereload: true,
            open: true,
            middleware: function(req, res, next) {
                if (req.url == "/login") {
                    res.end(JSON.stringify(data));
                }
                next();
            }
        }))
})