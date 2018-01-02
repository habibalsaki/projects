using System;
using static MathOperation;
using Calculator;

class Program
{
    static void Main()
    {
        // string operationString = Console.ReadLine();
        // MathOperation selectedOperation;


        // if(!Enum.TryParse<MathOperation>(operationString, out selectedOperation))
        // {
        //     selectedOperation = MathOperation.Add;
        // }

        // switch(selectedOperation)
        // {
        //     case MathOperation.Add:
        //         Console.WriteLine($"You have selected {nameof(Add)}");
        //         break;
        //     case MathOperation.Substract:
        //         Console.WriteLine($"You have selected {nameof(Substract)}");
        //         break;
        //     case MathOperation.Multiply:
        //         Console.WriteLine($"You have selected {nameof(Multiply)}");
        //         break;
        //     case MathOperation.Divide:
        //         Console.WriteLine($"You have selected {nameof(Divide)}");
        //         break;
        // }
        // Console.ReadKey();

        Calculator.Calculator sciCalc = new ScientificCalculator();
        double sciCalcResult = sciCalc.add(2,5);
        Console.WriteLine(sciCalc);



    }
}