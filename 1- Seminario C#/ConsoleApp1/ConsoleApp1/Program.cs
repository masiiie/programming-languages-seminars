using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Action x = CreateDelegateInstance();
            x();
            x();
        }
        static Action CreateDelegateInstance()
        {
            int counter = 5;
            Action ret = delegate
            {
                Console.WriteLine(counter);
                counter++;
            };

            counter = 2;
            ret();
            return ret;
        }





        static void Seminario()
        {
            var actions = new Action[10];
            for (int x = 0; x < actions.Length; x++)
            {
                int y = x;
                actions[x] = () =>
                {
                    int z = x;
                    Console.WriteLine("{0}, {1}, {2}\n", x, y, z);
                };
            }

            foreach (var item in actions)
            {
                item.Invoke();
            }
        }
        static void Test()
        {
            var a = new Random();
            var b = a.Next(3, 15);
            var c = new List<int>();
            while (b-- > 0)
            {
                c.Add(a.Next(50));
            }
            Print(c);

            var d = FindAllYoungerThan(c, 30);
            Print(d);
        }


        static void EnclosingMethod()
        {
            int outerVariable = 5;
            string captured = "before x is created";

            Action x = delegate
            {
                Console.WriteLine(captured);
                captured = "changed by x";
            };

            captured = "directly before x is invoked";
            x();
            Console.WriteLine(captured);
            captured = "before second invocation";
            x();
        }




        static void Print<T>(List<T> a)
        {
            foreach (var item in a) Console.Write(item + " ");
            Console.WriteLine();
        }
        static List<int> FindAllYoungerThan(List<int> people, int limit)
        {
            return people.FindAll(delegate (int person)
            { return person < limit; }
            );
        }
    }
}