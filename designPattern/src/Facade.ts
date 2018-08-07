// 外观模式
// 降低类之间的耦合度，解决类之间的依赖关系

module Facade {

	export class CPU {

		public startup(): void {
			console.log("CPU startup")
		}

		public shutdown(): void {
			console.log("CPU shutdown")
		}

	}

	export class Memory {

		public startup(): void {
			console.log("Memory startup")
		}

		public shutdown(): void {
			console.log("Memory shutdown")
		}

	}

	export class Disk  {

		public startup(): void {
			console.log("Disk  startup")
		}

		public shutdown(): void {
			console.log("Disk  shutdown")
		}

	}

	export class Computer  {

		private cpu:CPU;
		private memory:Memory;
		private disk:Disk;

		public constructor(){

			this.cpu = new CPU();
			this.memory = new Memory();
			this.disk = new Disk();

		}

		public startup():void{

			this.cpu.startup();
			this.memory.startup();
			this.disk.startup();

		}

		public shutdown():void{

			this.cpu.shutdown();
			this.memory.shutdown();
			this.disk.shutdown();

		}

	}

	export class Test{

		public static runTest():void{

			const computer:Computer = new Computer();
			
			computer.startup();
			computer.shutdown();

		}

	}

}

// export {Facade}
// export = Facade

// 执行测试
Facade.Test.runTest();