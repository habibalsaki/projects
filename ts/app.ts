import {Circle} from './math/Circle';
import {Rect} from  './math/Rect';
import "jQuery";

var shape = new Circle();
console.log(shape.calculateArea(10));

class MyMap<T>{

    private map: {[key: string] : T} = {};

    setItem(key: string, value: T){
        this.map[key] = value;
    }

    getItem(key: string): T{
        return this.map[key];
    }

    clear(){
        this.map = {};
    }

    printAll(){
        for(let i in this.map){
            console.log(this.map[i]);
        }
    }
}

let numberMap = new MyMap<number>();
numberMap.setItem("apples",10);
numberMap.setItem("oranges",2);
numberMap.printAll();

$("#hello").css({
    "background-color": "green"
});







