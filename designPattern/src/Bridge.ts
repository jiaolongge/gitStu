// 桥接模式

module Bridge {

	interface Target {
		method(): void;
	}

	export class Source1 implements Target {

		//@Override
		method(): void {
			console.log("this is the first sub")
		}

	}

	export class Source2 implements Target {

		//@Override
		method(): void {
			console.log("this is the second sub")
		}

	}

	export abstract class Bridge {

		private source: Target;

		public method() {
			this.source.method();
		}

		public getSource(): Target {
			return this.source;
		}

		public setSource(source: Target): void {
			this.source = source;
		}

	}

	export class MyBridge extends Bridge{

		//@Override
		public method() {
			this.getSource().method();
		}

	}

	export class Test{

		public static runTest():void{

			const source1 = new Source1();
			const source2 = new Source2();
			const bridge = new MyBridge()

			bridge.setSource(source1);
			bridge.method();
			bridge.setSource(source2);
			bridge.method();

		}

	}

}

// 执行测试
Bridge.Test.runTest();