// 外观模式
// 降低类之间的耦合度，解决类之间的依赖关系
var Facade;
(function (Facade) {
    var CPU = /** @class */ (function () {
        function CPU() {
        }
        CPU.prototype.startup = function () {
            console.log("CPU startup");
        };
        CPU.prototype.shutdown = function () {
            console.log("CPU shutdown");
        };
        return CPU;
    }());
    Facade.CPU = CPU;
    var Memory = /** @class */ (function () {
        function Memory() {
        }
        Memory.prototype.startup = function () {
            console.log("Memory startup");
        };
        Memory.prototype.shutdown = function () {
            console.log("Memory shutdown");
        };
        return Memory;
    }());
    Facade.Memory = Memory;
    var Disk = /** @class */ (function () {
        function Disk() {
        }
        Disk.prototype.startup = function () {
            console.log("Disk  startup");
        };
        Disk.prototype.shutdown = function () {
            console.log("Disk  shutdown");
        };
        return Disk;
    }());
    Facade.Disk = Disk;
    var Computer = /** @class */ (function () {
        function Computer() {
            this.cpu = new CPU();
            this.memory = new Memory();
            this.disk = new Disk();
        }
        Computer.prototype.startup = function () {
            this.cpu.startup();
            this.memory.startup();
            this.disk.startup();
        };
        Computer.prototype.shutdown = function () {
            this.cpu.shutdown();
            this.memory.shutdown();
            this.disk.shutdown();
        };
        return Computer;
    }());
    Facade.Computer = Computer;
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.runTest = function () {
            var computer = new Computer();
            computer.startup();
            computer.shutdown();
        };
        return Test;
    }());
    Facade.Test = Test;
})(Facade || (Facade = {}));
// export {Facade}
// export = Facade
// 执行测试
Facade.Test.runTest();
//# sourceMappingURL=Facade.js.map