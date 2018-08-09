// 备忘录模式
// 保存一个对象的某种状态，以便在适当的时候恢复对象
var Memento;
(function (Memento_1) {
    var Memento = /** @class */ (function () {
        function Memento(value) {
            this.value = value;
        }
        Memento.prototype.setValue = function (value) {
            this.value = value;
        };
        Memento.prototype.getValue = function () {
            return this.value;
        };
        return Memento;
    }());
    Memento_1.Memento = Memento;
    var Original = /** @class */ (function () {
        function Original(value) {
            this.value = value;
        }
        Original.prototype.getValue = function () {
            return this.value;
        };
        Original.prototype.setValue = function (value) {
            this.value = value;
        };
        Original.prototype.createMemento = function () {
            return new Memento(this.value);
        };
        Original.prototype.restoreMemento = function (memento) {
            this.value = memento.getValue();
        };
        return Original;
    }());
    Memento_1.Original = Original;
    var Storage = /** @class */ (function () {
        function Storage(menubar) {
            this.memento = menubar;
        }
        Storage.prototype.getMemento = function () {
            return this.memento;
        };
        Storage.prototype.setMemento = function (memento) {
            this.memento = memento;
        };
        return Storage;
    }());
    Memento_1.Storage = Storage;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var original = new Original("begin");
            var storage = new Storage(original.createMemento());
            console.log("修改前:" + original.getValue());
            original.setValue("changed");
            console.log("修改后:" + original.getValue());
            original.restoreMemento(storage.getMemento());
            console.log("恢复后:" + original.getValue());
        };
        return Test;
    }());
    Memento_1.Test = Test;
})(Memento || (Memento = {}));
// 执行测试 
Memento.Test.runTest();
//# sourceMappingURL=Memento.js.map