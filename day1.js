let y = 9271
function func1()
{
  console.log("Answer of Q1")
  x = y.toString()
  x = x.split('')
  x = x.reverse()
  x = x.join('')
  console.log("Original number: ",y)
  console.log("Reversed number: ",x)
}




let n = ["Paul", "Sayan", "Rahul", "Basant", "Aman"]
let l = ["Kolkata", "Siliguri", "Delhi", "Patna", "Goa"]
function func2()
{
  console.log("Answer of Q2")
  for(let i=0;i<5;i++)
  {
    console.log(n[i]+" "+l[i]+" "+Math.floor(Math.random()*100))
  }
}




let a = [7,1,2,9,4]
function func3()
{
  let mn = a[0]
  let mx = a[0]
  for(let i=1;i<a.length;i++)
  {
    if(a[i]<mn)
    {
      mn = a[i]
    }
    if(a[i]>mx)
    {
      mx = a[i]
    }
  }
  console.log("Answer of Q3")
  console.log("Array: ",a)
  console.log("Minimum: ",mn)
  console.log("Maximum: ",mx)
}




let s = "JavaScript Tutorial & Assignments"
function func4()
{
  w = s.split(' ')
  o = w[0]
  l = w[0].length
  for(let i=1;i<w.length;i++)
  {
    if(l<w[i].length)
    {
      o = w[i]
    }
  }
  console.log("Answer of Q4")
  console.log("String: ",s)
  console.log("Longest word: ",o)
}




c = 42
function func5()
{
  console.log("Answer of Q5")
  console.log("Given number: ",c)
  if(c<0)
  {
    console.log("Given number is not positive!")
  }
  else if(c%3==0 && c%7==0)
  {
    console.log("Multiple of both 3 and 7")
  }
  else if(c%3==0)
  {
    console.log("Multiple of 3")
  }
  else if(c%7==0)
  {
    console.log("Multiple of 7")
  }
  else
  {
    console.log("Multiple of none")
  }
}