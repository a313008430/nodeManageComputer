var cmd = require('node-cmd');
//首页
const index = async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome'
    });
};


//关机---粗暴写法
const open = async (ctx, next) => {
    cmd.get(
        'Shutdown.exe -s -t 10',//关闭电脑 
        function (data) {
            ctx.response.body = dd;
        }
    );


   

}


module.exports = {
    'GET /': index,
    'GET /open': open
};