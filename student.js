var prompt=require('prompt')
var bus=require('./bus.js')
var fs=require('fs')

var busInfo= new bus();
prompt.start();
prompt.get(['name','gender','detentions','gpa','sleep','catchPhrase'],function(err,result){
	var stduent=new Student(result.name,result.detentions,result.gpa,result.sleep,result.catchPhrasefun)
});
function Student(name,gender,GPA,dententions,sleepingInClass,catchPhrase){
	this.name=name;
	this.gender=gender;
	this.gpa=GPA;
	this.dententions=dententions;
	this.sleeping=sleepingInClass;
	this.catch=catchPhrase;
	this.canStudentHaveFun=function(){
		if((this.detentions<10)&&(this.GPA>2)){
			console.log("You can have fun! ")
		}
		else{
			console.log("You Can't Have Fun!")
		}		
	};
};
module.exports=Student; 