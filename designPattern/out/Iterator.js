// 迭代子模式
var Itetator;
(function (Itetator) {
    var Iterator = /** @class */ (function () {
        function Iterator(collection) {
            this.pos = -1;
            this.collection = collection;
        }
        // @Override
        Iterator.prototype.previous = function () {
            if (this.pos > 0) {
                this.pos--;
            }
            return this.collection.getIterator(this.pos);
        };
        // @Override
        Iterator.prototype.next = function () {
            if (this.pos < this.collection.getSize() - 1) {
                this.pos++;
            }
            return this.collection.getIterator(this.pos);
        };
        // @Override
        Iterator.prototype.hasNext = function () {
            if (this.pos < this.collection.getSize() - 1) {
                return true;
            }
            else {
                return false;
            }
        };
        // @Override
        Iterator.prototype.first = function () {
            this.pos = 0;
            return this.collection.getIterator(this.pos);
        };
        return Iterator;
    }());
    Itetator.Iterator = Iterator;
    var Collection = /** @class */ (function () {
        function Collection() {
            this.stringArr = ["A", "B", "C", "D", "E"];
        }
        // @Override
        Collection.prototype.iterator = function () {
            return new Iterator(this);
        };
        // @Override
        Collection.prototype.getSize = function () {
            return this.stringArr.length;
        };
        // @Override
        Collection.prototype.getIterator = function (i) {
            return this.stringArr[i];
        };
        return Collection;
    }());
    Itetator.Collection = Collection;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var collection = new Collection();
            var iterator = collection.iterator();
            while (iterator.hasNext()) {
                console.log(iterator.next());
            }
        };
        return Test;
    }());
    Itetator.Test = Test;
})(Itetator || (Itetator = {}));
// 执行测试
Itetator.Test.runTest();
//# sourceMappingURL=Iterator.js.map