// 中介者模式
// 中介者模式也是用来降低类类之间的耦合的，因为如果类类之间有依赖关系的话，不利于功能的拓展和维护，因为只要修改一个对象，其它关联的对象都得进行修改。
// 如果使用中介者模式，只需关心和Mediator类的关系，具体类类之间的关系及调度交给Mediator就行

module Mediator {

	interface IMediator {
		createMediator(): void;
		workAll(): void;
	}

	export abstract class User {

		private mediator: Mediator;

		public constructor(mediator: Mediator) {
			this.mediator = mediator;
		}

		public getMediator(): Mediator {
			return this.mediator;
		}

		public abstract work(): void

	}

	export class User1 extends User {


		public constructor(mediator: Mediator) {
			super(mediator);
		}

		// @Override
		public work(): void {
			console.log("User1 working...")
		}

	}

	export class User2 extends User {


		public constructor(mediator: Mediator) {
			super(mediator);
		}

		// @Override
		public work(): void {
			console.log("User2 working...")
		}

	}


	export class Mediator implements IMediator {

		private user1: User1;
		private user2: User2;

		// @Override
		public createMediator(): void {
			this.user1 = new User1(this);
			this.user2 = new User2(this);
		};

		// @Override
		public workAll(): void {
			this.user1.work();
			this.user2.work();
		};

	}

	export class Test {

		public static runTest(): void {

			const mediator: Mediator = new Mediator()

			mediator.createMediator();
			mediator.workAll();

		}

	}

}

// 执行测试
Mediator.Test.runTest();