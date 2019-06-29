// 组合模式，适合处理树型结构
var Composite;
(function (Composite) {
    class TreeNode {
        constructor(name) {
            this.children = new Array();
            this.name = name;
        }
        getName() {
            return this.name;
        }
        setName(name) {
            this.name = name;
        }
        getParent() {
            return this.parent;
        }
        setParent(parent) {
            this.parent = parent;
        }
        add(node) {
            this.children.push(node);
        }
        remove(node) {
            this.children = this.children.filter((child) => (child !== node));
        }
        getChildren() {
            return this.children;
        }
    }
    Composite.TreeNode = TreeNode;
    class Test {
        static runTest() {
            let root = new TreeNode("root");
            let a = new TreeNode("A");
            let b = new TreeNode("B");
            a.add(b);
            root.add(a);
            console.log(root);
        }
    }
    Composite.Test = Test;
})(Composite || (Composite = {}));
// 执行测试
Composite.Test.runTest();
//# sourceMappingURL=Composite.js.map