var cmd = require('node-cmd');



// 导入WebSocket模块:
const WebSocket = require('ws');

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
    port: 3333
});


// wss.on('connection', function (ws) {
//     console.log(`[SERVER] connection()`);
//     ws.on('message', function (message) {
//         console.log(`[SERVER] Received: ${message}`);
//         setTimeout(() => {
//             ws.send(`What's your name?`, (err) => {
//                 if (err) {
//                     console.log(`[SERVER] error: ${err}`);
//                 }
//             });
//         }, 1000);
//     })
// });

wss.on('connection', function (ws) {
    console.log(111)
       ws.on('message', function (message) {

        
           cmd.get( 
               // 'Shutdown.exe -s -t 10',//关闭电脑 
               message,//关闭电脑
               function (err, data, stderr) {
                //    console.log(data)
                   // console.log(stderr)
                //    ctx.response.body = data;
                   ws.send(data, (err) => {
                       if (err) {
                           console.log(`[SERVER] error: ${err}`);
                       }
                   });
               }
           );

           
       
    });
})


let ws = new WebSocket('ws://localhost:3333/ws/chat');


ws.on('open', function () {
    
});

// ws.on('message', function (message) {
//     console.log(1111111)
//     // ws.send(message.Received);
// });



//首页
const index = async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome'
    });
};


//关机---粗暴写法
// const open = async (ctx, next) => {
//     // console.log(ctx.request.body.data)
//     cmd.get(
//         // 'Shutdown.exe -s -t 10',//关闭电脑 
//         ctx.request.body.data,//关闭电脑
//         function (err, data, stderr) {
//             console.log(data)
//             // console.log(stderr)
//             ctx.response.body = data;
//             console.log(2)
//         }
//     );
//     // ctx.response.body = ctx.request.body.data;
// }


module.exports = {
    'GET /': index
    // 'POST /open': open
};