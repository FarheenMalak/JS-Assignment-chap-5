//chapter 5
//Q # 1
var numsum = 10 + 5; 
document.write( " <h3> The Sum of 5 and 10 is " + numsum + "<h3>" );

//Q # 2
var minusnum = 10 - 5; 
document.write( " <h3> The Subtracted Answer of 5 and 10 is " + minusnum + "<h3>" );

var numproduct = 10 * 5; 
document.write( " <h3> The Multiplied Answer of 5 and 10 is " + numproduct + "<h3>" );

var numdivision = 10 /5; 
document.write( " <h3> The Divided Anwser of 5 and 10 is " + numdivision + "<h3>" );

var modnum = 10 % 5; 
document.write( " <h3> The Modulus Answer of 5 and 10 is " + modnum + "<h3>" );

//Q # 3
var mynum =   
document.write( " <h3> Value after variable declaration is " + mynum + "<h3>" );

mynum = 2;
document.write( " <h3> Initial Value : " + mynum + "<h3>" );

mynum ++;
document.write( " <h3> Value after increment : " + mynum + "<h3>" );

var newnum = mynum + 7;
document.write( " <h3> Value after addition : " + newnum + "<h3>" );

newnum--;
document.write( " <h3> Value after decrement : " + newnum + "<h3>" );

var anothernum = newnum % 3;
document.write( " <h3> Output : " + anothernum + "<h3>" );

//Q # 4
var ticketprice = 600 ;
var totaltickets = ticketprice * 5;
document.write( " <h3>Total Cost to buy 5 tickets to a movie is " + totaltickets + "<h3>" );

//Q # 5
document.write( " <h2> Table Of 5: <h2>" );
var tablenum = 5*1;
document.write( "<h3> 5 x 1 = " + tablenum + "</h3>" );
tablenum = 5*2;
document.write( "<h3> 5 x 2 = " + tablenum + "</h3>"  );
var tablenum = 5*3;
document.write( "<h3> 5 x 3 = " + tablenum + "</h3>" );
var tablenum = 5*4;
document.write( "<h3> 5 x 4 = " + tablenum + "</h3>" );
var tablenum = 5*5;
document.write( "<h3> 5 x 5 = " + tablenum + "</h3>" );
var tablenum = 5*6;
document.write( "<h3> 5 x 6 = " + tablenum + "</h3>" );
var tablenum = 5*7;
document.write( "<h3> 5 x 7 = " + tablenum + "</h3>" );
var tablenum = 5*8;
document.write( "<h3> 5 x 8 = " + tablenum + "</h3>" );
var tablenum = 5*9;
document.write( "<h3> 5 x 9 = " + tablenum + "</h3>" );
var tablenum = 5*10;
document.write( "<h3> 5 x 10 = " + tablenum + "</h3>" );

//Q # 6
document.write( " <h2> Temperature Converter: <h2>" );
var celsiustemp = 30;
var convertedtempF = (celsiustemp * 9/5)+32
document.write("<h3>30°C is " + convertedtempF +"°F" + "</h3>" );

var fehrenheittemp = 15;
var convertedtempC = (fehrenheittemp - 32)*5/9
document.write("<h3>15°F is " + convertedtempC +"°C" + "</h3>" );

//Q # 7
document.write( " <h2> Shopping Cart: <h2>" );
var price1 = 650;
document.write("<h3>Price of item 1 is "+price1 + "</h3>" );

var quantity1 = 3;
document.write("<h3> Quantity Of Item 1 is " + quantity1 + "</h3>" );

var price2 = 100;
document.write("<h3> Price of item 2 is " + price2 + "</h3>" );

var quantity2 = 7;
document.write("<h3>Quantity Of item 2 is  " + quantity2 + "</h3>" );

var charges = 100 ;
document.write("<h3>Shipping charges : "+ charges + "</h3>" );

var toatlcost = (price1 *3) + (price2 * 7) +charges;
document.write("<h3>Total cost of your order is " + toatlcost + "</h3>" );

//Q # 8
document.write( " <h2> Marksheet: <h2>" );
var toatlmarks = 700 ;
document.write("<h3>Total Marks : "+ toatlmarks + "</h3>" );

var marksobt = 523;
document.write("<h3>Marks Obtain : "+ marksobt + "</h3>" );

var percentage = (marksobt/toatlmarks) * 100;
document.write("<h3>Percentage :"+ percentage + "%" + "</h3>" );

//Q # 9
document.write( " <h2> Currency in PKR : <h2>" );
var pkrcurrency=(10 * 104.80 )+( 25*28)
document.write("<h3>Total Currency In PKR :"+ pkrcurrency + "</h3>" );

//Q # 10
var numQ10 = 6;
var answer = numQ10 + 5 *10 /2;
document.write("<h3>Answer after added by 5 multiplied by 10 and divided by 2 is "+ answer +"</h3>" );

//Q # 11
document.write( " <h2> Age Calculator: <h2>" );
var currentyear = 2023;
document.write("<h3>Current year : "+ currentyear +"</h3>" );

var birthyear = 1992;
document.write("<h3>Birthyear : "+ birthyear +"</h3>" );

var age = currentyear-birthyear;
var age2 = age++; 
document.write("<h3>Their age is either "+age + "or "+age2 +"</h3>" );

//Q # 12
document.write( " <h2> The Geometritzer: <h2>" );
var radius = 20;
document.write("<h3>Radius of circle is : "+ radius +"</h3>" );

var circumference = 2*3.142*20;
document.write("<h3>Circumference of circle is: "+ circumference +"</h3>" );

var area = 3.142* 20 * 20; 
document.write("<h3>Area of the circle is "+area +"</h3>" );

//Q # 13
document.write( " <h2> The life time Supply Calculator: <h2>" );

var favsnacks ="lays" ;
document.write("<h3>Favourite Snack : "+ favsnacks +"</h3>" );

var currentage = 17;
document.write("<h3>Current Age : "+ currentage +"</h3>" );

var maxage = 55;
document.write("<h3>Estimated Maximum Age : "+ maxage +"</h3>" );

var perday = 2;
document.write("<h3>Amount of Snacks per day : "+ perday +"</h3>" );

var lifetime = (maxage-currentage) * 2;
document.write("<h3>You will need " + lifetime + " lays to last you until the ripe old age of 55 </h3>" );





