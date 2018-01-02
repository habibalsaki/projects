using System;
using System.Collections.Generic;
using System.Linq;

namespace day1
{
    class Program
    {
        static void Main(string[] args)
        {
            
            int n = Convert.ToInt32(Console.ReadLine());
            string[] numbers = Console.ReadLine().Split();
            List<int> numberList = new List<int>();
            if(n == numbers.Length){
                for(int i=0; i < n ; i++){
                    numberList.Add(int.Parse(numbers[i]));
                }

                findMean(numberList,n);
                findMedian(numberList,n);
                findMode(numberList, n);
            }
            else{
                Console.WriteLine("Input Error");
            }
            
        }

        static void findMean(List<int> list, int n)
        {
            int sum = 0;
            for(int i=0; i < n; i++)
            {
                sum += list[i];
            }
            Console.WriteLine(Convert.ToDouble(sum) / Convert.ToDouble(n));
        }

        static void findMedian(List<int> list, int n)
        {
            
            list.Sort();

            if(n % 2 != 0){
                Console.WriteLine(Convert.ToDouble(list[(n-1)/2]));
            }else{
                var median = Convert.ToDouble(list[(n-1)/2] + list[(n-1)/2 + 1]) / 2.0;
                Console.WriteLine(median);
            }
        }

        static void findMode(List<int> list, int n)
        {
            list.Sort();
            var mode = list.GroupBy(x => x)
                        .OrderByDescending(g => g.Count()).First().Key;
            Console.WriteLine(mode);
        }
    }
}
