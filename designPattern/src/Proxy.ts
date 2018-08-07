module Proxy {

	interface Target {
		method(): void;
	}

	export class Source implements Target {

		// @Override
		method(): void {
			console.log("original method")
		}

	}

	export class Proxy implements Target {

		private source: Source = new Source();

		// @Override
		public method(): void {

			console.log("before proxy");
			this.source.method();
			console.log("end proxy");

		}

	}

	export class Test{

		public static runTest():void{

			const proxy:Proxy = new Proxy();
			proxy.method();

		}

	}

}

// 执行测试
Proxy.Test.runTest();

// export {Proxy}
// export = Proxy;