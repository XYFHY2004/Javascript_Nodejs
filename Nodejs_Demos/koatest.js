var koa = require("koa");
var koaRouter = require("koa-router");

var app = koa();
var router = koaRouter();

app.use(router.routes());


router
    .param('id', function *(id, next){
         this.id = Number(id);
         if(typeof this.id != 'number')
         	return this.status = 404;
         yield next;
    })
    .get('/', function *(next){
	     this.body = "<h1>Wellcome to koa, koa-router </h1>";
    })
    .get('/users/:id', function *(next){
	     this.body = "<h1>get users id: " + this.params.id + "</h1>";
    })
    .post('/users', function *(next){
         this.body = "<h1>post users</h1>";
    })
    .put('/users/:id', function *(next){
         this.body = "<h1>put user id:" + this.params.id + "</h1>";
    })
    .del('/users/:id', function *(next){
         this.body = "<h1>delete user id:" + this.params.id + "</h1>";
    });





// app.use(function *(){
//     var path = this.path;
//     this.body = path;
// });




app.listen(3000);