using System;
using System.Collections.Generic;
using back_end.Model;

namespace back_end.Data
{
    public class db
    {
        public db(){}
        public TestArray getValues(){

            TestArray test_arr = new TestArray();

            test_arr.arr.Add(1);
            test_arr.arr.Add(2);
            test_arr.arr.Add(3);
            test_arr.arr.Add(4);
            test_arr.arr.Add(6);
            
            return test_arr;
        }

    }
}