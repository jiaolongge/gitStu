// 备忘录模式
// 保存一个对象的某种状态，以便在适当的时候恢复对象

module Memento {

	export class Memento {

		private value: string;

		public constructor(value: string) {
			this.value = value;
		}

		public setValue(value: string): void {
			this.value = value;
		}

		public getValue(): string {
			return this.value;
		}

	}

	export class Original {

		private value: string;

		public constructor(value: string) {
			this.value = value;
		}

		public getValue() {
			return this.value;
		}

		public setValue(value: string): void {
			this.value = value;
		}

		public createMemento(): Memento {
			return new Memento(this.value)
		}

		public restoreMemento(memento: Memento): void {
			this.value = memento.getValue();
		}

	}

	export class Storage {

		private memento: Memento;

		public constructor(menubar: Memento) {
			this.memento = menubar;
		}

		public getMemento(): Memento {
			return this.memento;
		}

		public setMemento(memento: Memento): void {
			this.memento = memento;
		}

	}

	export class Test {

		public static runTest(): void {

			const original: Original = new Original("begin");
			const storage: Storage = new Storage(original.createMemento());

			console.log("修改前:" + original.getValue());
			original.setValue("changed");
			console.log("修改后:" + original.getValue());
			original.restoreMemento(storage.getMemento());
			console.log("恢复后:" + original.getValue())

		}

	}

}

// 执行测试 
Memento.Test.runTest();