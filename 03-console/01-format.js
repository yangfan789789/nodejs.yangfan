#!/usr/bin/node

const user ={


  name:'王硕',
  age:41,
  QQ:'408542507'
};
const log =console.log;

//三种占位符
log('name: %s',user.name);
log('age: %d',user.age);
log('JSON: %j',user);

//输出方式一：占位符输出
log('QQ: %s',user.QQ);
//输出方式二：逗号间隔，多变量输出
log('QQ:',user.qq);
//输出方式三：拼接字符串输出
log('QQ:',user.QQ);
//输出方式四：模板字符串输出
log('QQ: ${user.QQ}');
//console.log('name:%s\t age:%d',user.name.user.age);
console.error('Error!');
