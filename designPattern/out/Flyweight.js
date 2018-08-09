// 享元模式
// 享元模式可以避免大量非常相似类的开销
// 在js中，享元模式有两种应用方式，第一种是应用在数据层上，主要是应用在内存里大量相似的对象上；第二种是应用在DOM层上，享元可以用在中央事件管理器上用来避免给父容器里的每个子元素都附加事件句柄
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Flyweight;
(function (Flyweight) {
    var Book = /** @class */ (function () {
        function Book(bookInfo) {
            this.title = bookInfo.title;
            this.author = bookInfo.author;
            this.genre = bookInfo.genre;
            this.pageCount = bookInfo.pageCount;
            this.publisherId = bookInfo.publisherId;
            this.ISBN = bookInfo.ISBN;
        }
        return Book;
    }());
    Flyweight.Book = Book;
    var BookFac = /** @class */ (function () {
        function BookFac() {
            this.existingBooks = {};
        }
        BookFac.prototype.createBook = function (bookInfo) {
            var existingBook = this.existingBooks[bookInfo.ISBN];
            if (existingBook) {
                return this.existingBooks[bookInfo.ISBN];
            }
            else {
                var book = new Book(bookInfo);
                this.existingBooks[bookInfo.ISBN] = existingBook;
                return book;
            }
        };
        return BookFac;
    }());
    Flyweight.BookFac = BookFac;
    var BookRecordManager = /** @class */ (function () {
        function BookRecordManager() {
            this.bookRecordDatabase = {};
        }
        BookRecordManager.prototype.addBookRecord = function (id, bookInfo, checkoutInfo) {
            var bookFac = new BookFac();
            var book = bookFac.createBook(bookInfo);
            this.bookRecordDatabase[id] = __assign({}, book, checkoutInfo);
        };
        BookRecordManager.prototype.updateCheckoutStatus = function (id, newCheckoutInfo) {
            this.bookRecordDatabase[id] = __assign({}, this.bookRecordDatabase[id], newCheckoutInfo);
        };
        BookRecordManager.prototype.extendCheckoutPeriod = function (id, newReturnDate) {
            this.bookRecordDatabase[id].dueReturnDate = newReturnDate;
        };
        BookRecordManager.prototype.isPastDue = function (id) {
            var currentDate = new Date();
            return currentDate.getTime() > this.bookRecordDatabase[id].dueReturnDate;
        };
        return BookRecordManager;
    }());
    Flyweight.BookRecordManager = BookRecordManager;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var bookRecordManager = new BookRecordManager();
            console.log("创建:", bookRecordManager);
            bookRecordManager.addBookRecord(10, { title: "杨蛟龙的第一本书", author: "杨蛟龙", genre: "科学", pageCount: 666, publisherId: 67, ISBN: "1029374737472" }, { checkoutDate: new Date().getTime(), checkoutMember: "一个傻逼", dueReturnDate: new Date().getTime() + 6000000 });
            console.log("新增借阅:", bookRecordManager);
            bookRecordManager.updateCheckoutStatus(10, { checkoutDate: new Date().getTime(), checkoutMember: "第二个傻逼", dueReturnDate: new Date().getTime() + 7200000 });
            console.log("更新借阅状态:", bookRecordManager);
            bookRecordManager.extendCheckoutPeriod(10, new Date().getTime() + 180000000);
            console.log("延期:", bookRecordManager);
            var isPastDue = bookRecordManager.isPastDue(10);
            console.log("是否逾期:", isPastDue);
        };
        return Test;
    }());
    Flyweight.Test = Test;
})(Flyweight || (Flyweight = {}));
// 执行测试
Flyweight.Test.runTest();
//# sourceMappingURL=Flyweight.js.map