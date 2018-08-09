// 模板方法模式
// 通过调用抽象类调用子类方法 

module TemplateMethod {

	//父类咖啡
	export class Beverage {
		
		private name: string;

		constructor(name) {
			this.name = name;
			console.log('构造函数的' + name)
		};

		//共用boilWater，子类不会修改它
		boilWater() {
			console.log('把水煮沸');
		};

		brew() {
			throw new Error('子类必须重写 brew 方法');
		};

		pourInCup() {
			throw new Error('子类必须重写 pourInCup 方法');
		};

		addCondiments() {
			throw new Error('子类必须重写 addCondiments 方法');
		};

		customerWantsCondiments() {
			return true; // 默认需要调料
		};

		init() {

			this.boilWater();
			this.brew();
			this.pourInCup();
			if (this.customerWantsCondiments()) { // 如果挂钩返回 true，则需要调料
				this.addCondiments();
			}
		};

	}

	//子类咖啡，继承父类饮料
	export class CoffeeWithHook extends Beverage {

		constructor(name) {
			//调用父类的构造函数,演示一下super怎么用，下面传了‘名字’字符串
			super(name);
		}

		brew() {
			console.log('用沸水冲泡咖啡');
		};

		pourInCup() {
			console.log('把咖啡倒进杯子');
		};

		addCondiments() {
			console.log('加糖和牛奶');
		};

		customerWantsCondiments() {
			// return window.confirm('请问需要调料吗？');
			return true;
		};

	};

	export class Test {

		public static runTest(): void {

			let coffeeWithHook = new CoffeeWithHook('名字');

			coffeeWithHook.init();

		}

	}

}

// 执行测试
TemplateMethod.Test.runTest();