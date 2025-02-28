import { sum } from "../src/Components/sum";
 test("sum calculate sum of 2 numer",()=>{
   
  const  res=sum(5,6);
  //assertion
  expect(res).toBe(9);
 })