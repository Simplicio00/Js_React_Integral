using System;
using System.Collections.Generic;
using System.Linq;

namespace logica
{
    public partial class InputInt{
        public static int ReadInt32(string value){
            int val = -1;
            if (!int.TryParse(value,out val)) return -1;

            return val;
        }

    }

    class Program
    {
        
        public static int incr1 {get;set;}
        public static int incr10 {get;set;}
        public static int incr50 {get;set;}
        public static int valorTotal {get;set;}


        static void Main(string[] args)
        {
            Console.WriteLine("Exercício de lógica - Questão 4!");
            Console.WriteLine("informe um valor");

            valorTotal = InputInt.ReadInt32(Console.ReadLine());

            //Filtragem inicial

            if (valorTotal >= 50)
            {
                incr50 = valorTotal / 50;
                valorTotal = valorTotal - incr50 * 50;
            }

            if (valorTotal >= 10)
            {
                incr10 = valorTotal / 10;
                valorTotal = valorTotal - incr10 * 10;
            }

            incr1 = valorTotal / 1;

            if (incr1 == -1 || incr10 == -1 || incr50 == -1)
            {
                System.Console.WriteLine("Não é permitido letras para o cálculo de notas, \n somente números inteiros ");    
            }
            else
            {
                System.Console.WriteLine($"Notas a sacar \n R$1:{incr1}, 10:{incr10}, 50:{incr50}");
            }


        }
    }
}



