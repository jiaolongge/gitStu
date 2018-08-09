// 迭代子模式

module Itetator {

	interface IIterator<T> {
		previous(): T;
		next(): T;
		first(): T;
		hasNext(): boolean;
	}

	interface ICollection<T> {
		iterator(): T;
		getSize(): number;
		getIterator(i: number): any; // string不能强制转换成Iterator，这里只能写any
	}

	export class Iterator implements IIterator<string> {

		private collection: Collection;
		private pos: number = -1;

		public constructor(collection: Collection) {
			this.collection = collection;
		}

		// @Override
		public previous() {
			if (this.pos > 0) {
				this.pos--;
			}
			return this.collection.getIterator(this.pos);
		}

		// @Override
		public next() {
			if (this.pos < this.collection.getSize() - 1) {
				this.pos++;
			}
			return this.collection.getIterator(this.pos);
		}

		// @Override
		public hasNext(): boolean {
			if (this.pos < this.collection.getSize() - 1) {
				return true;
			} else {
				return false;
			}
		}

		// @Override
		public first() {
			this.pos = 0;
			return this.collection.getIterator(this.pos);
		}

	}

	export class Collection implements ICollection<Iterator> {

		public stringArr: Array<string> = ["A", "B", "C", "D", "E"];
		
		// @Override
		public iterator(): Iterator {
			return new Iterator(this);
		}

		// @Override
		public getSize(): number {
			return this.stringArr.length;
		}

		// @Override
		public getIterator(i: number): any {
			return this.stringArr[i];
		}

	}

	export class Test {

		public static runTest(): void {

			const collection = new Collection();
			const iterator = collection.iterator();

			while (iterator.hasNext()) {
				console.log(iterator.next());
			}

		}

	}

}

// 执行测试
Itetator.Test.runTest();