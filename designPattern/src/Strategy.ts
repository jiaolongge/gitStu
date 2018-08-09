
// 策略模式
// 定义一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的替换不会影响到使用算法的用户。
// 需要设计一个接口，为一系列实现类提供统一的方法，多个实现类实现该接口，设计一个抽象类（可有可无，属于辅助类），提供辅助函数

module Strategy {

	interface ICaiculator {
		calculate(exp: string): number
	}

	export abstract class AbsCalcalator {

		public split(exp: string, opt: string): Array<number> {

			let splitedStr: Array<string> = exp.split(opt);
			let numArr: Array<number> = new Array(2);

			numArr[0] = parseInt(splitedStr[0]);
			numArr[1] = parseInt(splitedStr[1]);

			return numArr;

		}

	}

	export class Plus extends AbsCalcalator implements ICaiculator {

		//@Override
		public calculate(exp: string): number {

			let numberArr: Array<number> = this.split(exp, "+");
			return numberArr[0] + numberArr[1];

		}

	}

	export class Minus extends AbsCalcalator implements ICaiculator {

		//@Override
		public calculate(exp: string): number {

			let numberArr: Array<number> = this.split(exp, "-");
			return numberArr[0] - numberArr[1];

		}

	}

	export class Multiply extends AbsCalcalator implements ICaiculator {

		//@Override
		public calculate(exp: string): number {

			let numberArr: Array<number> = this.split(exp, "*");
			return numberArr[0] * numberArr[1];

		}

	}

	export class Test {

		public static runTest(): void {

			let expPlu: string = "8+2";
			let expMinus: string = "8-2";
			let expMultiply: string = "8*2";
			let resPlu = new Plus().calculate(expPlu);
			let resMinus = new Minus().calculate(expMinus);
			let resMultiply = new Multiply().calculate(expMultiply);

			console.log(resPlu, resMinus, resMultiply);

		}

	}

}

// 执行测试
Strategy.Test.runTest();