using System;

namespace hello
{
    class Program
    {
        static void Main(string[] args)
        {
            HelloDelegate hello = new HelloDelegate();
            hello.showNumber(callbackFunc);

            Money m = new Money(123.45,"Bangladesh");
            double tk = m;
            Console.WriteLine(tk);
            Console.WriteLine((Money)tk);
        }

        static void callbackFunc(int i)
        {
            Console.WriteLine(i);
        }

        
    }

    public class HelloDelegate{
        public delegate void Callback(int i);

        public void showNumber(Callback obj)
        {
            for(int i = 1; i <= 1000; i++)
            {
                obj(i);
            }
        }
    }

    public class Money{
        public double amount;
        string country;

        public Money(double amount, string country)
        {
            this.amount = amount;
            this.country = country;
        }

        public static implicit operator double(Money m)
        {
            return m.amount;
        }

        public static explicit operator Money(double d)
        {
            return new Money(d,"Pakistan");
        }
    }
    
}
