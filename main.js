var prompt = require('prompt');
var Student = require('./student.js');
var Bus = require('./bus.js');
var fs=require ('fs');

var anotherBus= new Bus();

anotherBus.Onbus(function(){
	prompt.start();
	prompt.get(['name','gender','detentions','gpa','sleep','catchPhrase'],function(err,result){
		if(result.name){var stduent=new Student(result.name,result.detentions,result.gpa,result.sleep,result.catchPhrasefun);

			Student.canStudentHaveFun();
			anotherBus.EnterBus(result.name,result.detentions,result.gpa,result.sleep,result.catchPhrasefun);


		}
	}

})