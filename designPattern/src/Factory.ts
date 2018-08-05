// 简单工厂模式

// 接口
interface Sender {
    send(): void;
}

// 实例类
class MailSender implements Sender {

    //@Override
    send(): void {
        console.log("this is mail sender");
    }

}

class SmsSender implements Sender {

    //@Override
    send(): void {
        console.log("this is sms sender");
    }

}

// 单方法工厂类
class SingleMethodFac {

    public produce(type: string): Sender { // 注意 ts里简单类型如string、number、boolean等都是小写

        switch (type) {
            case "mail":
                return new MailSender();

            case "sms":
                return new SmsSender();

            default:
                console.warn("请输入正确的类型");
                return null;
        }

    }
}

// 多方法工厂模式
class MultiMethodsFac {

    public produceMail(): MailSender {
        return new MailSender();
    }

    public produceSms(): SmsSender {
        return new SmsSender();
    }

}

// 多静态方法工厂模式
class StaticMultiMethodsFac {

    public static produceMail(): MailSender {
        return new MailSender();
    }

    public static produceSms(): SmsSender {
        return new SmsSender();
    }

}

// 测试类
class FactoryTest {

    public static runSingleMethodTest(): void {

        const senderFac: SingleMethodFac = new SingleMethodFac();
        const mailSender: MailSender = senderFac.produce("mail");
        const smsSender: SmsSender = senderFac.produce("sms");
        // const otherSender: SmsSender = senderFac.produce("other");

        mailSender.send();
        smsSender.send();
        // otherSender.send();

    }

    public static runMultiMethodsTest(): void {

        const senderFac: MultiMethodsFac = new MultiMethodsFac();
        const mailSender: MailSender = senderFac.produceMail();
        const smsSender: MailSender = senderFac.produceSms();

        mailSender.send();
        smsSender.send();

    }

    public static runStaticMultiMethodsTest(): void {

        const mailSender: MailSender = StaticMultiMethodsFac.produceMail();
        const smsSender: MailSender = StaticMultiMethodsFac.produceSms();

        mailSender.send();
        smsSender.send();

    }

}

// 执行测试
FactoryTest.runSingleMethodTest(); // 如果传递的字符串出错，则不能正确创建对象

FactoryTest.runMultiMethodsTest(); // 每次需要创建Fac实例

FactoryTest.runStaticMultiMethodsTest(); // 常用方式，每次不必创建Fac实例，同时不要担心传入字符串不正确导致错误发生

// 工厂方法模式
// 简单工厂模式违背了开闭原则，类的创建依赖于工厂类，要扩展新的代码，必须对现有工厂进行修改
// 工厂方法模式创建一个工厂接口和多个工厂实现类，一旦需要增加新的功能，只需要增加新的工厂类就可以了，不需要修改以前的代码

// 接口 
interface Sender {
    send(): void;
}

interface Factory {
    produce(): Sender;
}

// 实例类
class MailSender1 implements Sender {

    // @Override
    send(): void {
        console.log("this is mail sender");
    }

}

class SmsSender1 implements Sender {

    // @Override
    send(): void {
        console.log("this is sms sender");
    }
    
}

// 工厂类
class MailFactory implements Factory {

    //@Override
    produce(): MailSender1 {
        return new MailSender1();
    }

}

class SmsFactory implements Factory {

    //@Override
    produce(): SmsSender1 {
        return new SmsSender1();
    }

}

// 测试类
class FactoryTest1{

    public static runTest():void{

        const mailFac = new MailFactory();
        const smsFac = new SmsFactory;
        const mailSender = mailFac.produce();
        const smsSender = smsFac.produce();
        
        mailSender.send();
        smsSender.send();

    }

}

// 执行测试
FactoryTest1.runTest();