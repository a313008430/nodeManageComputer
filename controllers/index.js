var cmd = require('node-cmd');
//首页
const index = async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome'
    });
};


//open方法
const open = async (ctx, next) => {
    cmd.get(
        // 'Shutdown.exe -s -t 10',//关闭电脑 
        function (data) {
            console.log("data")
        }
    );
}


module.exports = {
    'GET /': index,
    'GET /open': open
};