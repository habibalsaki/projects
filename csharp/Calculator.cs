using System;

namespace Calculator
{
    public class Calculator
    {
        public virtual double add(double num1, double num2)
        {
            Console.WriteLine("Calculator add called");
            return num1 + num2;
        }
    }

    public class ProgrammerCalculator : Calculator
    {
        public override double add(double num1, double num2)
        {
            Console.WriteLine("ProgrammerCalculator Add Called");
            return num1 + num2;
        }
    }

    public class ScientificCalculator : Calculator
    {
        public override double add(double num1, double num2)
        {
            Console.WriteLine("Scientific Calculator Add Called");
            return base.add(num1 , num2);
        }
    }

}