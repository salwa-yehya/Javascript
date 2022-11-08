
// function tellFortune(jobtitle , geographiclocation , partnersname , numberofchildren)
// {
//     let future= 'you will be a '+ jobtitle + 'in' + geographiclocation + ' , and married to'+ partnersname + 'with' + numberofchildren + 'children';
//     console.log(future);
// }
// tellFortune ('doctor' , 'jorden' , 'heba' , 4);
// tellFortune ('developer' , 'aqaba' , 'noor' , 2);

///////////////////////////////

// function calculateDogAge (age)
// {
//     let result = age  * 7 ;
//     console.log( ' your dog age is ' +result);
// }
// calculateDogAge(2)
// calculateDogAge(3)

////////////////////////////////

function calculateSupply (age ,amount)
{
    
   x = 100-age ;
   y= amount * x *365 ;

    console.log('You will need ' + y + ' cups of tea to last you until the ripe old age of 100')
}
calculateSupply (22 ,6)

/////////////////////////

// function hello(name)
// {
//    console.log( 'hello' + name );
// }
// hello(' salwa')
////////////////////

// what is the error:
// function double(cat) {
//   return 2 * x;
// }
//  answer: x insted of cat
//////////
// function double(7) {
//   return 2 * 7;
// }
// answer: parameter shouldnot be a number
//////////
// function double('7') {
//   return 2 * 'x';
// }
// answer: parameter shouldnot be a string

///////////////

// fix these functions:

// function double1(x) {
//   return 2 * x ;
// }

// function double2 (x){
// return 2 * x;
// }

// function  double3 (x){
//   return 2 * x;
// }

/////////////

// function cube(x)
// {
//     let y = x **3 ;
//     console.log(y)
// }
// cube(3)

////////////

//  function multiply(x , y)
//  {
//     let z = x* y ;
//     console.log(z)
//  }
//  multiply(7 , 6)

////////////



// function canIGetADrivingLicense(age)
// {
// if (age >=20)
// {
//     console.log('yes you can')
// }
// else
// {
//     let y=20-age ;
//     console.log('please come back after '+ y + ' years to get one')
// }
// }
// canIGetADrivingLicense(19)
// canIGetADrivingLicense(21)

//////////////

// function sameLength(firstw ,secondw)
// {
//     if (firstw.length == secondw.length)
//     {
//         console.log(true)
//     }
//     else
//     {
//         console.log(false) 
//     }
// }
// sameLength("salwa" ,"mohammad")

//////////////
//13
function  shorterString (st1 , st2 , st3 ,st4 ,st5)
{
  if ((st1.length< st2.length) && (st1.length< st3.length) && (st1.length<st4.length) && (st1.length<st5.length))
 {
  console.log(st1)
 }
 if ((st2.length< st1.length) && (st2.length< st3.length) && (st2.length<st4.length) && (st2.length<st5.length))
 {
  console.log(st2)
 }
 if ((st3.length< st1.length) && (st3.length< st2.length) && (st3.length<st4.length) && (st3.length<st5.length))
 {
  console.log(st3)
 }
 if ((st4.length< st1.length) && (st4.length< st2.length) && (st4.length<st3.length) && (st4.length<st5.length))
 {
  console.log(st4)
 }
 if ((st5.length5< st1.length) && (st5.length< st2.length) && (st5.length<st3.length) && (st5.length<st4.length))
 {
  console.log(st4)
 }
 
}let new_input=prompt("inter any string")
shorterString (new_input, "school", "car" ,"by" ,"github");
 
