// 简单工厂模式
// 实例类
var MailSender = /** @class */ (function () {
    function MailSender() {
    }
    //@Override
    MailSender.prototype.send = function () {
        console.log("this is mail sender");
    };
    return MailSender;
}());
var SmsSender = /** @class */ (function () {
    function SmsSender() {
    }
    //@Override
    SmsSender.prototype.send = function () {
        console.log("this is sms sender");
    };
    return SmsSender;
}());
// 单方法工厂类
var SingleMethodFac = /** @class */ (function () {
    function SingleMethodFac() {
    }
    SingleMethodFac.prototype.produce = function (type) {
        switch (type) {
            case "mail":
                return new MailSender();
            case "sms":
                return new SmsSender();
            default:
                console.warn("请输入正确的类型");
                return null;
        }
    };
    return SingleMethodFac;
}());
// 多方法工厂模式
var MultiMethodsFac = /** @class */ (function () {
    function MultiMethodsFac() {
    }
    MultiMethodsFac.prototype.produceMail = function () {
        return new MailSender();
    };
    MultiMethodsFac.prototype.produceSms = function () {
        return new SmsSender();
    };
    return MultiMethodsFac;
}());
// 多静态方法工厂模式
var StaticMultiMethodsFac = /** @class */ (function () {
    function StaticMultiMethodsFac() {
    }
    StaticMultiMethodsFac.produceMail = function () {
        return new MailSender();
    };
    StaticMultiMethodsFac.produceSms = function () {
        return new SmsSender();
    };
    return StaticMultiMethodsFac;
}());
// 测试类
var FactoryTest = /** @class */ (function () {
    function FactoryTest() {
    }
    FactoryTest.runSingleMethodTest = function () {
        var senderFac = new SingleMethodFac();
        var mailSender = senderFac.produce("mail");
        var smsSender = senderFac.produce("sms");
        // const otherSender: SmsSender = senderFac.produce("other");
        mailSender.send();
        smsSender.send();
        // otherSender.send();
    };
    FactoryTest.runMultiMethodsTest = function () {
        var senderFac = new MultiMethodsFac();
        var mailSender = senderFac.produceMail();
        var smsSender = senderFac.produceSms();
        mailSender.send();
        smsSender.send();
    };
    FactoryTest.runStaticMultiMethodsTest = function () {
        var mailSender = StaticMultiMethodsFac.produceMail();
        var smsSender = StaticMultiMethodsFac.produceSms();
        mailSender.send();
        smsSender.send();
    };
    return FactoryTest;
}());
// 执行测试
FactoryTest.runSingleMethodTest(); // 如果传递的字符串出错，则不能正确创建对象
FactoryTest.runMultiMethodsTest(); // 每次需要创建Fac实例
FactoryTest.runStaticMultiMethodsTest(); // 常用方式，每次不必创建Fac实例，同时不要担心传入字符串不正确导致错误发生
// 实例类
var MailSender1 = /** @class */ (function () {
    function MailSender1() {
    }
    // @Override
    MailSender1.prototype.send = function () {
        console.log("this is mail sender");
    };
    return MailSender1;
}());
var SmsSender1 = /** @class */ (function () {
    function SmsSender1() {
    }
    // @Override
    SmsSender1.prototype.send = function () {
        console.log("this is sms sender");
    };
    return SmsSender1;
}());
// 工厂类
var MailFactory = /** @class */ (function () {
    function MailFactory() {
    }
    //@Override
    MailFactory.prototype.produce = function () {
        return new MailSender1();
    };
    return MailFactory;
}());
var SmsFactory = /** @class */ (function () {
    function SmsFactory() {
    }
    //@Override
    SmsFactory.prototype.produce = function () {
        return new SmsSender1();
    };
    return SmsFactory;
}());
// 测试类
var FactoryTest1 = /** @class */ (function () {
    function FactoryTest1() {
    }
    FactoryTest1.runTest = function () {
        var mailFac = new MailFactory();
        var smsFac = new SmsFactory;
        var mailSender = mailFac.produce();
        var smsSender = smsFac.produce();
        mailSender.send();
        smsSender.send();
    };
    return FactoryTest1;
}());
// 执行测试
FactoryTest1.runTest();
//# sourceMappingURL=Factory.js.map