// 装饰模式就是给一个对象增加一些新的功能，而且是动态的，要求装饰对象和被装饰对象实现同一个接口，装饰对象持有被装饰对象的实例

module Decorator {

	// 都要实现的接口
	interface Target {
		method(): void
	}

	export class Source implements Target {

		// @Override
		public method() {
			console.log("original method");
		}

	}

	export class Decorator implements Target {

		private source: Source;

		public constructor(source: Source) {
			this.source = source;
		}

		//@Override
		public method() {

			this.source.method();
			console.log("extend method");

		}

	}

	export class Test {

		public static runTest(): void {

			const source: Source = new Source();
			const decorator: Decorator = new Decorator(source);

			decorator.method();

		}

	}

}

// 执行测试
Decorator.Test.runTest();