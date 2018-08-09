// 享元模式
// 享元模式可以避免大量非常相似类的开销
// 在js中，享元模式有两种应用方式，第一种是应用在数据层上，主要是应用在内存里大量相似的对象上；第二种是应用在DOM层上，享元可以用在中央事件管理器上用来避免给父容器里的每个子元素都附加事件句柄

module Flyweight {

	// 图书馆经典案例
	interface BookInter {
		title: string;
		author: string;
		genre: string; // 种类
		pageCount: number;
		publisherId: number;
		ISBN: string;
		// [propName: string]: any; // 允许增加任意新类型 这里为啥不起作用？
	}

	interface CheckoutInter {
		checkoutDate: number;
		checkoutMember: string;
		dueReturnDate: number;
		availability?: boolean;
	}

	interface BookFacInter {
		existingBooks: {};
		createBook(bookInfo): BookInter
	}

	export class Book implements BookInter {

		public title: string; // 实现接口属性必须用public?
		public author: string;
		public genre: string;
		public pageCount: number;
		public publisherId: number;
		public ISBN: string;

		public constructor(bookInfo: BookInter) {

			this.title = bookInfo.title;
			this.author = bookInfo.author;
			this.genre = bookInfo.genre;
			this.pageCount = bookInfo.pageCount;
			this.publisherId = bookInfo.publisherId;
			this.ISBN = bookInfo.ISBN;

		}

	}

	export class BookFac implements BookFacInter {

		public existingBooks: {} = {};

		public createBook(bookInfo: BookInter): BookInter {

			const existingBook = this.existingBooks[bookInfo.ISBN];

			if (existingBook) {
				return this.existingBooks[bookInfo.ISBN];
			} else {
				let book = new Book(bookInfo);
				this.existingBooks[bookInfo.ISBN] = existingBook;
				return book;
			}

		}

	}

	export class BookRecordManager {

		public bookRecordDatabase = {};

		public addBookRecord(id: number, bookInfo: BookInter, checkoutInfo: CheckoutInter): void { // 此处有一个超级大坑 注意ts 中对象解构赋值的重命名和数据类型指定

			const bookFac = new BookFac();
			let book = bookFac.createBook(bookInfo);

			this.bookRecordDatabase[id] = {
				...book,
				...checkoutInfo
			}

		}

		public updateCheckoutStatus(id: number, newCheckoutInfo: CheckoutInter): void {

			this.bookRecordDatabase[id] = {
				...this.bookRecordDatabase[id],
				...newCheckoutInfo
			}

		}

		public extendCheckoutPeriod(id: number, newReturnDate: number) {
			this.bookRecordDatabase[id].dueReturnDate = newReturnDate;
		}

		public isPastDue(id) {

			var currentDate = new Date();
			return currentDate.getTime() > this.bookRecordDatabase[id].dueReturnDate;

		}

	}

	export class Test {

		public static runTest() {

			let bookRecordManager = new BookRecordManager();
			console.log("创建:", bookRecordManager);
			bookRecordManager.addBookRecord(10, { title: "杨蛟龙的第一本书", author: "杨蛟龙", genre: "科学", pageCount: 666, publisherId: 67, ISBN: "1029374737472" }, { checkoutDate: new Date().getTime(), checkoutMember: "一个傻逼", dueReturnDate: new Date().getTime() + 6000000 })
			console.log("新增借阅:", bookRecordManager);
			bookRecordManager.updateCheckoutStatus(10, { checkoutDate: new Date().getTime(), checkoutMember: "第二个傻逼", dueReturnDate: new Date().getTime() + 7200000 })
			console.log("更新借阅状态:", bookRecordManager);
			bookRecordManager.extendCheckoutPeriod(10, new Date().getTime() + 180000000);
			console.log("延期:", bookRecordManager);
			let isPastDue = bookRecordManager.isPastDue(10);
			console.log("是否逾期:", isPastDue);

		}

	}

}

// 执行测试
Flyweight.Test.runTest();