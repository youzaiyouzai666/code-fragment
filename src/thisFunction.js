/**
 * Created by Administrator on 2016/11/19.
 * http://blog.csdn.net/caoyihome/article/details/53229115
 */
!(function(){
    var age = 3;
    var cat1 = new function() {
        this.name = 'Tom';
        this.age = 2;
        this.weight = function(age) {
            var age = age * 2;
            var _age = this.age * 2; // 2   this指代的为window 难点
            return 'weight by age:' + age + '; weight by this.age:' + _age;
        }(this.age); // 1  这是一个匿名自执行函数 这个this表示cat1 this在cat1作用域里 难点
        this.eye = new function() {
            this.size = '1.5cm';
            this.color = 'red'; // 3
        };
        this.catching = function(mouse) {
            return this.name + ' is catching ' + mouse; // 4
        };
    };
    console.log(cat1.weight);//weight by age:4; weight by this.age:6
    console.log(cat1.eye.color);//red
    console.log(cat1.catching('Jerry'));//Tom is catching Jerry
}).call(window);

