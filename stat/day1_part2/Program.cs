using System;
using System.Collections.Generic;

namespace day1_part2
{
    class Program
    {
        static void Main(string[] args)
        {
            
            int n = Convert.ToInt32(Console.ReadLine());
            string[] numbers = Console.ReadLine().Split();
            string[] weights = Console.ReadLine().Split();

            
            List<int> numberList = new List<int>();
            List<int> weightList = new List<int>();
            if(n == numbers.Length && n == weights.Length){
                for(int i=0; i < n ; i++){
                    numberList.Add(int.Parse(numbers[i]));
                    weightList.Add(int.Parse(weights[i]));
                }

                findMean(numberList,weightList, n);
                
            }
            else{
                Console.WriteLine("Input Error");
            }
            
        }

        static void findMean(List<int> numberList, List<int> weightList, int n)
        {
            int weightedSum = 0;
            int sum = 0;

            for(int i=0; i < n; i++)
            {
                weightedSum += numberList[i] * weightList[i];
                sum += weightList[i];
            }
            Console.WriteLine("{0:0.0}", Convert.ToDouble(weightedSum) / Convert.ToDouble(sum));
        }


    }
}
