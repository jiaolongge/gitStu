// 迭代子模式
var Itetator;
(function (Itetator) {
    class Iterator {
        constructor(collection) {
            this.pos = -1;
            this.collection = collection;
        }
        // @Override
        previous() {
            if (this.pos > 0) {
                this.pos--;
            }
            return this.collection.getIterator(this.pos);
        }
        // @Override
        next() {
            if (this.pos < this.collection.getSize() - 1) {
                this.pos++;
            }
            return this.collection.getIterator(this.pos);
        }
        // @Override
        hasNext() {
            if (this.pos < this.collection.getSize() - 1) {
                return true;
            }
            else {
                return false;
            }
        }
        // @Override
        first() {
            this.pos = 0;
            return this.collection.getIterator(this.pos);
        }
    }
    Itetator.Iterator = Iterator;
    class Collection {
        constructor() {
            this.stringArr = ["A", "B", "C", "D", "E"];
        }
        // @Override
        iterator() {
            return new Iterator(this);
        }
        // @Override
        getSize() {
            return this.stringArr.length;
        }
        // @Override
        getIterator(i) {
            return this.stringArr[i];
        }
    }
    Itetator.Collection = Collection;
    class Test {
        static runTest() {
            const collection = new Collection();
            const iterator = collection.iterator();
            while (iterator.hasNext()) {
                console.log(iterator.next());
            }
        }
    }
    Itetator.Test = Test;
})(Itetator || (Itetator = {}));
// 执行测试
Itetator.Test.runTest();
//# sourceMappingURL=Iterator.js.map