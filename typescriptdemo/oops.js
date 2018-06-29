var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Company = /** @class */ (function () {
    function Company() {
        console.log("I am Company super class");
    }
    Company.prototype.Cname = function () {
        console.log("Company : Murthy Infotek");
    };
    return Company;
}());
var Emp = /** @class */ (function (_super) {
    __extends(Emp, _super);
    function Emp(ename, salary) {
        var _this = _super.call(this) || this;
        _this.ename = ename;
        _this.salary = salary;
        _this.ename = ename;
        _this.salary = salary;
        return _this;
    }
    Emp.prototype.show = function () {
        console.log("I am Murthy");
    };
    Emp.prototype.showDetails = function () {
        _super.prototype.Cname.call(this);
        console.log("Name : " + this.ename + " , Salary : " + this.salary);
        this.show();
    };
    return Emp;
}(Company));
var e1 = new Emp("Murthy", 4500);
e1.showDetails();
//e1.show();  // error
