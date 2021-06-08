﻿// function login(){
//     var username = $('#username').val();
// 	var password = $('#password').val();
//     $.ajax({
//         url:'/login',
//         type:'POST',
//         data:{ "username": username,
// 		"password":password, },
//         success: function(data){
// 			if(data.data==1){
// 				window.location.href="/index"
// 			}else{
// 				window.location.href="/error"
// 			}
// 		}
//     });
// }        

function loginback(){
    var AccountBack = $('#username').val();
	var passwordBack = $('#password').val();
    var databack = { "AccountBack": AccountBack,
	             "passwordBack":passwordBack};
    $.ajax({
        url:'/loginback.html',
        type:'POST',
        data:databack,
        success: function(data){
			if(data.data == 1){
				window.location = "/article-list.html"
			}else{
				window.location="/error"
			}
		},
        
    });
}    

// 表单验证
$(document).ready(function(){
	//登陆表单验证
	$("#loginForm").validate({
		rules:{
			username:{
				required:true,//必填
				minlength:3, //最少6个字符
				maxlength:32,//最多20个字符
			},
			password:{
				required:true,
				minlength:3, 
				maxlength:32,
			},
		},
		//错误信息提示
		messages:{
			username:{
				required:"必须填写用户名",
				minlength:"用户名至少为3个字符",
				maxlength:"用户名至多为32个字符",
				remote: "用户名已存在",
			},
			password:{
				required:"必须填写密码",
				minlength:"密码至少为3个字符",
				maxlength:"密码至多为32个字符",
			},
		},

	});
	//注册表单验证
	$("#registerForm").validate({
		rules:{
			username:{
				required:true,//必填
				minlength:3, //最少6个字符
				maxlength:32,//最多20个字符
				
			
			},
			password:{
				required:true,
				minlength:3, 
				maxlength:16,
			},
			email:{
				required:true,
				email:true,
			},
			confirm_password:{
				required:true,
				minlength:3,
				equalTo:'.password'
			},
			phone_number:{
				required:true,
				phone_number:true,//自定义的规则
				digits:true,//整数
			}
		},
		//错误信息提示
		messages:{
			username:{
				required:"必须填写用户名",
				minlength:"用户名至少为3个字符",
				maxlength:"用户名至多为16个字符",
				remote: "用户名已存在",
				
			},
			password:{
				required:"必须填写密码",
				minlength:"密码至少为3个字符",
				maxlength:"密码至多为16个字符",
			},
			email:{
				required:"请输入邮箱地址",
				email: "请输入正确的email地址"
			},
			confirm_password:{
				required: "请再次输入密码",
				minlength: "确认密码不能少于3个字符",
				equalTo: "两次输入密码不一致",//与另一个元素相同
			},
			phone_number:{
				required:"请输入手机号码",
				digits:"请输入正确的手机号码",
			},
		
		},
	});
	//添加自定义验证规则
	jQuery.validator.addMethod("phone_number", function(value, element) { 
		var length = value.length; 
		var phone_number = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-7]{1}))+\d{8})$/ 
		return this.optional(element) || (length == 11 && phone_number.test(value)); 
	}, "手机号码格式错误"); 
});
