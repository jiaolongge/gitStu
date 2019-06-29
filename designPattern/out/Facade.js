// 外观模式
// 降低类之间的耦合度，解决类之间的依赖关系
var Facade;
(function (Facade) {
    class CPU {
        startup() {
            console.log("CPU startup");
        }
        shutdown() {
            console.log("CPU shutdown");
        }
    }
    Facade.CPU = CPU;
    class Memory {
        startup() {
            console.log("Memory startup");
        }
        shutdown() {
            console.log("Memory shutdown");
        }
    }
    Facade.Memory = Memory;
    class Disk {
        startup() {
            console.log("Disk  startup");
        }
        shutdown() {
            console.log("Disk  shutdown");
        }
    }
    Facade.Disk = Disk;
    class Computer {
        constructor() {
            this.cpu = new CPU();
            this.memory = new Memory();
            this.disk = new Disk();
        }
        startup() {
            this.cpu.startup();
            this.memory.startup();
            this.disk.startup();
        }
        shutdown() {
            this.cpu.shutdown();
            this.memory.shutdown();
            this.disk.shutdown();
        }
    }
    Facade.Computer = Computer;
    class Test {
        static runTest() {
            const computer = new Computer();
            computer.startup();
            computer.shutdown();
        }
    }
    Facade.Test = Test;
})(Facade || (Facade = {}));
// export {Facade}
// export = Facade
// 执行测试
Facade.Test.runTest();
//# sourceMappingURL=Facade.js.map