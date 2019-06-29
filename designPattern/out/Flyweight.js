// 享元模式
// 享元模式可以避免大量非常相似类的开销
// 在js中，享元模式有两种应用方式，第一种是应用在数据层上，主要是应用在内存里大量相似的对象上；第二种是应用在DOM层上，享元可以用在中央事件管理器上用来避免给父容器里的每个子元素都附加事件句柄
var Flyweight;
(function (Flyweight) {
    class Book {
        constructor(bookInfo) {
            this.title = bookInfo.title;
            this.author = bookInfo.author;
            this.genre = bookInfo.genre;
            this.pageCount = bookInfo.pageCount;
            this.publisherId = bookInfo.publisherId;
            this.ISBN = bookInfo.ISBN;
        }
    }
    Flyweight.Book = Book;
    class BookFac {
        constructor() {
            this.existingBooks = {};
        }
        createBook(bookInfo) {
            const existingBook = this.existingBooks[bookInfo.ISBN];
            if (existingBook) {
                return this.existingBooks[bookInfo.ISBN];
            }
            else {
                let book = new Book(bookInfo);
                this.existingBooks[bookInfo.ISBN] = existingBook;
                return book;
            }
        }
    }
    Flyweight.BookFac = BookFac;
    class BookRecordManager {
        constructor() {
            this.bookRecordDatabase = {};
        }
        addBookRecord(id, bookInfo, checkoutInfo) {
            const bookFac = new BookFac();
            let book = bookFac.createBook(bookInfo);
            this.bookRecordDatabase[id] = Object.assign({}, book, checkoutInfo);
        }
        updateCheckoutStatus(id, newCheckoutInfo) {
            this.bookRecordDatabase[id] = Object.assign({}, this.bookRecordDatabase[id], newCheckoutInfo);
        }
        extendCheckoutPeriod(id, newReturnDate) {
            this.bookRecordDatabase[id].dueReturnDate = newReturnDate;
        }
        isPastDue(id) {
            var currentDate = new Date();
            return currentDate.getTime() > this.bookRecordDatabase[id].dueReturnDate;
        }
    }
    Flyweight.BookRecordManager = BookRecordManager;
    class Test {
        static runTest() {
            let bookRecordManager = new BookRecordManager();
            console.log("创建:", bookRecordManager);
            bookRecordManager.addBookRecord(10, { title: "杨蛟龙的第一本书", author: "杨蛟龙", genre: "科学", pageCount: 666, publisherId: 67, ISBN: "1029374737472" }, { checkoutDate: new Date().getTime(), checkoutMember: "一个傻逼", dueReturnDate: new Date().getTime() + 6000000 });
            console.log("新增借阅:", bookRecordManager);
            bookRecordManager.updateCheckoutStatus(10, { checkoutDate: new Date().getTime(), checkoutMember: "第二个傻逼", dueReturnDate: new Date().getTime() + 7200000 });
            console.log("更新借阅状态:", bookRecordManager);
            bookRecordManager.extendCheckoutPeriod(10, new Date().getTime() + 180000000);
            console.log("延期:", bookRecordManager);
            let isPastDue = bookRecordManager.isPastDue(10);
            console.log("是否逾期:", isPastDue);
        }
    }
    Flyweight.Test = Test;
})(Flyweight || (Flyweight = {}));
// 执行测试
Flyweight.Test.runTest();
//# sourceMappingURL=Flyweight.js.map