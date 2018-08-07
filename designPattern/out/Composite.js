// 组合模式，适合处理树型结构
var Composite;
(function (Composite) {
    var TreeNode = /** @class */ (function () {
        function TreeNode(name) {
            this.children = new Array();
            this.name = name;
        }
        TreeNode.prototype.getName = function () {
            return this.name;
        };
        TreeNode.prototype.setName = function (name) {
            this.name = name;
        };
        TreeNode.prototype.getParent = function () {
            return this.parent;
        };
        TreeNode.prototype.setParent = function (parent) {
            this.parent = parent;
        };
        TreeNode.prototype.add = function (node) {
            this.children.push(node);
        };
        TreeNode.prototype.remove = function (node) {
            this.children = this.children.filter(function (child) { return (child !== node); });
        };
        TreeNode.prototype.getChildren = function () {
            return this.children;
        };
        return TreeNode;
    }());
    Composite.TreeNode = TreeNode;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var root = new TreeNode("root");
            var a = new TreeNode("A");
            var b = new TreeNode("B");
            a.add(b);
            root.add(a);
            console.log(root);
        };
        return Test;
    }());
    Composite.Test = Test;
})(Composite || (Composite = {}));
// 执行测试
Composite.Test.runTest();
//# sourceMappingURL=Composite.js.map