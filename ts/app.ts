// custom type creation in typescript

type complex = {money: number, deposit: (value: number) => void};

let bankAccount:  complex= {
    money: 2000,
    deposit(value: number) : void {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: complex, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);


// namespace

namespace Math{
  const PI = 3.14;

  export function calculateRadius(diameter: number){
    return PI * diameter;
  }

  export function calculateArea(width: number, length: number){
    return width * length;
  }
}

console.log(Math.calculateArea(4,6));
