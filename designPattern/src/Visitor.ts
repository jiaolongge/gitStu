// 访问者模式
// 访问者模式把数据结构和作用于结构上的操作解耦合，使得操作集合可相对自由地演化。访问者模式适用于数据结构相对稳定算法又易变化的系统。
// 因为访问者模式使得算法操作增加变得容易。若系统数据结构对象易于变化，经常有新的数据对象增加进来，则不适合使用访问者模式。访问者模式的优点是增加操作很容易，因为增加操作意味着增加新的访问者。
// 访问者模式将有关行为集中到一个访问者对象中，其改变不影响系统数据结构。其缺点就是增加新的数据结构很困难。

module Visitor {

	interface IVisitor {
		visit(subject: Subject): void;
	}

	interface ISubject {
		accept(visitor: Visitor): void;
		getSubject(): string;
	}

	export class Visitor implements IVisitor {

		// @Override
		visit(subject: Subject) {
			console.log("处理subject数据:" + subject.getSubject());
		}

	}

	export class Subject implements ISubject {

		// @Override
		public accept(visitor: Visitor):void {
			visitor.visit(this);
		}

		// @Override
		public getSubject(): string {
			return "这是subject数据";
		}

	}

	export class Test {

		public static runTest(): void {

			const subject: Subject = new Subject();
			const visitor: Visitor = new Visitor();

			subject.accept(visitor);

		}

	}
}

// 执行测试
Visitor.Test.runTest();