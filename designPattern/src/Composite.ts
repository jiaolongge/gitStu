// 组合模式，适合处理树型结构

module Composite {

	export class TreeNode {

		private name: string;
		private parent: TreeNode;
		private children: Array<TreeNode> = new Array<TreeNode>();

		public constructor(name: string) {
			this.name = name;

		}

		public getName(): string {
			return this.name;
		}

		public setName(name: string): void {
			this.name = name;
		}

		public getParent(): TreeNode {
			return this.parent;
		}

		public setParent(parent: TreeNode): void {
			this.parent = parent;
		}

		public add(node: TreeNode): void {
			this.children.push(node);
		}

		public remove(node: TreeNode): void {
			this.children = this.children.filter((child) => (child !== node));
		}

		public getChildren(): Array<TreeNode> {
			return this.children;
		}

	}

	export class Test {

		public static runTest(): void {
		
			let root: TreeNode = new TreeNode("root");
			let a: TreeNode = new TreeNode("A");
			let b: TreeNode = new TreeNode("B");

			a.add(b);
			root.add(a);
			console.log(root);

		}

	}

}

// 执行测试
Composite.Test.runTest();