// 简单工厂模式
// 实例类
class MailSender {
    //@Override
    send() {
        console.log("this is mail sender");
    }
}
class SmsSender {
    //@Override
    send() {
        console.log("this is sms sender");
    }
}
// 单方法工厂类
class SingleMethodFac {
    produce(type) {
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
    produceMail() {
        return new MailSender();
    }
    produceSms() {
        return new SmsSender();
    }
}
// 多静态方法工厂模式
class StaticMultiMethodsFac {
    static produceMail() {
        return new MailSender();
    }
    static produceSms() {
        return new SmsSender();
    }
}
// 测试类
class FactoryTest {
    static runSingleMethodTest() {
        const senderFac = new SingleMethodFac();
        const mailSender = senderFac.produce("mail");
        const smsSender = senderFac.produce("sms");
        // const otherSender: SmsSender = senderFac.produce("other");
        mailSender.send();
        smsSender.send();
        // otherSender.send();
    }
    static runMultiMethodsTest() {
        const senderFac = new MultiMethodsFac();
        const mailSender = senderFac.produceMail();
        const smsSender = senderFac.produceSms();
        mailSender.send();
        smsSender.send();
    }
    static runStaticMultiMethodsTest() {
        const mailSender = StaticMultiMethodsFac.produceMail();
        const smsSender = StaticMultiMethodsFac.produceSms();
        mailSender.send();
        smsSender.send();
    }
}
// 执行测试
FactoryTest.runSingleMethodTest(); // 如果传递的字符串出错，则不能正确创建对象
FactoryTest.runMultiMethodsTest(); // 每次需要创建Fac实例
FactoryTest.runStaticMultiMethodsTest(); // 常用方式，每次不必创建Fac实例，同时不要担心传入字符串不正确导致错误发生
// 实例类
class MailSender1 {
    // @Override
    send() {
        console.log("this is mail sender");
    }
}
class SmsSender1 {
    // @Override
    send() {
        console.log("this is sms sender");
    }
}
// 工厂类
class MailFactory {
    //@Override
    produce() {
        return new MailSender1();
    }
}
class SmsFactory {
    //@Override
    produce() {
        return new SmsSender1();
    }
}
// 测试类
class FactoryTest1 {
    static runTest() {
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
//# sourceMappingURL=Factory.js.map