// console.log("Hello Nodejs");
// var i = 0;
let i = 0;
function Hello(){
	console.log("Hello Nodejs " + i);
	i++;
}
// 导出公有方法
exports.Hello = Hello;