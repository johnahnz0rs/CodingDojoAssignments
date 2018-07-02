let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: Array<number> = [
    1,
    2,
    3,
    4
];


let myObj: { [key: string]: (string | number) }= {
    name:'Bill'
};

let anythingVariable: any = "Hey";
anythingVariable = 25;

let arrayOne: boolean[] = [
    true,
    false,
    true,
    true
];

let arrayTwo: Array<number | string | boolean> = [
    1,
    'abc',
    true,
    2
];

myObj = {
    x: 5,
    y: 10
};


// object constructor
class MyNode {
    private _priv: number;
    public val: number;

    constructor(val: number) {
        this.val = val;
    }

    doSomething(): void {
        this._priv = 10;
    }
}

let myNodeInstance = new MyNode(1);
myNodeInstance.doSomething();

console.log(myNodeInstance.val);


function myFunction(): void {
    console.log("Hello World");
    return;
}
function sendingErrors(): never {
    throw new Error ('Error message');
}
