// 适配器模式
// 适配器模式将某个类的接口转换成客户端期望的另一个接口表示，目的是消除由于接口不匹配所造成的类的兼容性问题。
// 主要分为三类：类的适配器模式、对象的适配器模式、接口的适配器模式。

// 类的适配器模式 利用继承
module Adapter_01 {

	//要实现的接口
	interface Target {
		method1(): void;
		method2(): void;
	}

	// Source 类有一个方法待适配
	export class Source {

		public method1() {
			console.log("this is original method");
		}

	}

	export class Adapter extends Source implements Target {

		//@Override
		public method2() {
			console.log("this is target method");
		};

	}

	export class Test {

		public static runTest(): void {

			const adapter: Adapter = new Adapter();

			adapter.method1();
			adapter.method2();

		}

	}

}

// 对象的适配器模式 通过持有Source类的实例实现功能增强
module Adapter_02 {

	//要实现的接口
	interface Target {
		method1(): void;
		method2(): void;
	}

	// Source 类有一个方法待适配
	export class Source {

		public method1() {
			console.log("this is original method");
		}

	}

	export class Adapter implements Target {

		private source: Source;

		public constructor(source: Source) {
			this.source = source;
		}

		//@Override
		public method1() {
			this.source.method1();
		};

		// @Override
		public method2() {
			console.log("this is target method");
		};

	}

	export class Test {

		public static runTest(): void {

			const source: Source = new Source();
			const adapter: Adapter = new Adapter(source);

			adapter.method1();
			adapter.method2();

		}

	}

}

// 接口的适配器模式 借助抽象类这个桥梁，不与直接要实现的接口打交道，避免实现所有方法
module Adapter_03 {

	//要实现的接口
	interface Target {
		method1(): void;
		method2(): void;
		method3(): void;
	}

	export abstract class Adapter implements Target {

		// @Override
		public method1() { };

		// @Override
		public method2() { };

		// @Override
		public method3() { };

	}

	export class SourceSub extends Adapter {

		// @Override
		public method1() {
			console.log("现在我只实现一个方法");
		}

	}

	export class Test {

		public static runTest(): void {

			const sourceSub: SourceSub = new SourceSub();

			sourceSub.method1();

		}

	}

}

// 执行测试
Adapter_01.Test.runTest();

Adapter_02.Test.runTest();

Adapter_03.Test.runTest();
