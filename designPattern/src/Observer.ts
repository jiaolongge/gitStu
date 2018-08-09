// 观察者模式

module Observer {

	interface IObserver {
		name: string;
		update(): void;
	}

	interface ISubject {
		add(observer: IObserver): void;
		del(observer: IObserver): void;
		notifiyObservers(): void;
		operation(): void;
	}

	export class Observer1 implements IObserver {

		public name: string;

		public constructor(name: string) {
			this.name = name;
		}

		// @Override
		update(): void {
			console.log("Observer1 has received");
		}

	}

	export class Observer2 implements IObserver {

		public name: string;

		public constructor(name: string) {
			this.name = name;
		}

		// @Override
		update(): void {
			console.log("Observer2 has received");
		}

	}

	export abstract class Subject implements ISubject {

		private ObserverArr: Array<IObserver> = new Array<IObserver>();

		public add(observer: IObserver): void {
			this.ObserverArr.push(observer);
		}

		public del(observer: IObserver): void {
			this.ObserverArr = this.ObserverArr.filter((obs) => (obs.name !== observer.name))
		};

		public notifiyObservers(): void {
			this.ObserverArr.forEach((obs) => { obs.update() })
		};

		public operation(): void { }

	}

	export class MySubject extends Subject {

		// @Override
		public operation(): void {
			console.log("update itself");
			this.notifiyObservers();
		};

	}

	export class Test {

		public static runTest(): void {

			const mySubject: MySubject = new MySubject();
			const observer1 = new Observer1("observe1");
			const observer2 = new Observer2("observe2");

			mySubject.add(observer1);
			mySubject.add(observer2);
			mySubject.del(observer1);

			mySubject.operation();

		}

	}

}

// 执行测试
Observer.Test.runTest();
