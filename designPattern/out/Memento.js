// 备忘录模式
// 保存一个对象的某种状态，以便在适当的时候恢复对象
var Memento;
(function (Memento_1) {
    class Memento {
        constructor(value) {
            this.value = value;
        }
        setValue(value) {
            this.value = value;
        }
        getValue() {
            return this.value;
        }
    }
    Memento_1.Memento = Memento;
    class Original {
        constructor(value) {
            this.value = value;
        }
        getValue() {
            return this.value;
        }
        setValue(value) {
            this.value = value;
        }
        createMemento() {
            return new Memento(this.value);
        }
        restoreMemento(memento) {
            this.value = memento.getValue();
        }
    }
    Memento_1.Original = Original;
    class Storage {
        constructor(menubar) {
            this.memento = menubar;
        }
        getMemento() {
            return this.memento;
        }
        setMemento(memento) {
            this.memento = memento;
        }
    }
    Memento_1.Storage = Storage;
    class Test {
        static runTest() {
            const original = new Original("begin");
            const storage = new Storage(original.createMemento());
            console.log("修改前:" + original.getValue());
            original.setValue("changed");
            console.log("修改后:" + original.getValue());
            original.restoreMemento(storage.getMemento());
            console.log("恢复后:" + original.getValue());
        }
    }
    Memento_1.Test = Test;
})(Memento || (Memento = {}));
// 执行测试 
Memento.Test.runTest();
//# sourceMappingURL=Memento.js.map