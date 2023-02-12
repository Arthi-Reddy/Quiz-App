//Creating an array of categories
let probability = [
    {
        number:"1",
        question:"There are 15 boys and 10 girls in a class. If three students are selected at random, what is the probability that 1 girl and 2 boys are selected?",
        answer:"21/46",
        options:[
            "1/40",
            "1/2",
            "21/46",
            "7/41"
        ]
    },
    {
        number:"2",
        question:"Two friends Harish and Kalyan appeared for an exam. Let A be the event that Harish is selected and B is the event that Kalyan is selected. The probability of A is 2/5 and that of B is 3/7. Find the probability that both of them are selected.",
        answer:"6/35",
        options:[
            "35/36",
            "5/35",
            "5/12",
            "6/35"
        ]
    },
    {
        number:"3",
        question:"A card is drawn from a well shuffled pack of 52 cards. What is the probability of getting queen or club card?",
        answer:"4/13",
        options:[
            "17/52",
            "15/52",
            "4/13",
            "3/13"
        ]
    },
    {
        number:"4",
        question:"16 persons shake hands with one another in a party. How many shake hands took place?",
        answer:"120",
        options:[
            "124",
            "120",
            "165",
            "150"
        ]
    },
    {
        number:"5",
        question:"2 dice are thrown simultaneously. What is the probability that the sum of the numbers on the faces is divisible by either 3 or 5?",
        answer:"19/36",
        options:[
            "7/36",
            "19/36",
            "9/36",
            "2/7"
        ]
    },
    {
        number:"6",
        question:"Daniel speaks truth in 2/5 cases and Sherin lies in 3/7cases. What is the percentage of cases in which both Daniel and Sherin contradict each other in stating a fact?",
        answer:"51.4%",
        options:[
            "72.6%",
            "51.4%",
            "62.3%",
            "47.5%"
        ]
    },
    {
        number:"7",
        question:"The names of 5 students from section A, 6 students from section B and 7 students from section C were selected. The age of all the 18 students was different. Again, one name was selected from them and it was found that it was of section B. What was the probability that it was the youngest student of the section B?",
        answer:"1/6",
        options:[
            "1/18",
            "1/15",
            "1/6",
            "1/12"
        ]
    },
    {
        number:"8",
        question:"There are total 18 balls in a bag. Out of them 6 are red in colour, 4 are green in colour and 8 are blue in colour. If Vishal picks three balls randomly from the bag, then what will be the probability that all the three balls are not of the same colour?",
        answer:"46/51",
        options:[
            "95/140",
            "19/23",
            "21/26",
            "46/51"
        ]
    },
    {
        number:"9",
        question:"Bag A contains 3 green and 7 blue balls. While bag B contains 10 green and 5 blue balls. If one ball is drawn from each bag, what is the probability that both are green?",
        answer:"1/5",
        options:[
            "17/48",
            "1/5",
            "1/3",
            "1/31"
        ]
    },
    {
        number:"10",
        question:"Ram and Shyam are playing chess together. Ram knows the two rows in which he has to put all the pieces in but he doesn’t know how to place them. What is the probability that he puts all the pieces in the right place?",
        answer:"8!/(2*15!)",
        options:[
            "8!/16!",
            "8!/(2*15!)",
            "8!/15!",
            "(2*8!)/16!"
        ]
    }
    
];

let problemsOnAges = [
    {
        number:"1",
        question:"The sum of the ages of Kidambi and Srikanth 14 years hence will be equal to 2 times their present age. If at present Kidambi is 8 years elder to Srikanth, then what are their present ages?",
        answer:"18, 10",
        options:[
            "22, 8",
            "29, 12",
            "18, 10",
            "13, 6"
        ]
    },
    {
        number:"2",
        question:"6 years ago, the ratio of the ages of Arun and Prathap is 7: 6. Present age of Rajeev is 10 years more than one – sixth of Prathap’s present age. Find the ratio of present age of Prathap and Rajeev, if Arun’s age after 6 years is 40 years?",
        answer:"2: 1",
        options:[
            "3: 2",
            "2: 1",
            "4: 5",
            "1: 3"
        ]
    },
    {
        number:"3",
        question:"The ratio of present ages of Sri and Gowtham is 3: 4. Mahesh is 6 years older than Sri and two years younger than Gowtham. Find the sum of the present ages of Sri and Mahesh?",
        answer:"54 years",
        options:[
            "48 years",
            "50 years",
            "52 years",
            "54 years"
        ]
    },
    {
        number:"4",
        question:"The product of the ages of Asha and Nithi is 540. If twice the age of Asha is more than Nithi’s age by 6 years, then find Asha’s age?",
        answer:"18 years",
        options:[
            "18 years",
            "20 years",
            "16 years",
            "22 years"
        ]
    },
    {
        number:"5",
        question:"Naveena’s present age is four times her son’s present age and two fifth of her father’s present age. The average present age of all of them is 40 years. Find the sum of Naveena’s son’s present age and Naveena’s father’s present age?",
        answer:"88 years",
        options:[
            "92 years",
            "74 years",
            "88 years",
            "86 years"
        ]
    },
    {
        number:"6",
        question:"The ratio of B’s age six years hence to C’s present age is 5: 3. B is eleven years younger than A. If A’s present age is twice the age of C, then find B’s age, 4 years ago?",
        answer:"15 years",
        options:[
            "13 years",
            "15 years",
            "17 years",
            "16 years"
        ]
    },
    {
        number:"7",
        question:"After 2 years, the age of Karthi is 2 times the present age of Silambu. Preethi is 8 years elder than Silambu. Find the present age of Karthi, if the present age of Preethi is 23 years?",
        answer:"28 years",
        options:[
            "28 years",
            "26 years",
            "24 years",
            "30 years"
        ]
    },
    {
        number:"8",
        question:"4 years ago, the age of A is 2 times the present age of B. C is 12 years elder than B and 10 years younger than A. Find the present age of D, if the present age of C is 6 times the present age of D?",
        answer:"5 years",
        options:[
            "3 years",
            "6 years",
            "7 years",
            "5 years"
        ]
    },
    {
        number:"9",
        question:"The ratio of present age of Ramesh and Karthi is 2: 3. Sheela is 3 years elder than Karthi. The average present ages of three of them is 25 years. Find the age of Janvi, 4 years ago, if the present age of Janvi is 2 times the present age of Ramesh?",
        answer:"32 years",
        options:[
            "29 years",
            "35 years",
            "32 years",
            "27 years"
        ]
    },
    {
        number:"10",
        question:"The ratio between Gautham and Manoj is 35: x. Manoj is 6 years younger than Nisha. Nisha’s age after 8 years will be 30 years. The Gautham’s present age is 3 years less than the sum of the present age of Manoj and Nisha. Find the value of x?",
        answer:"16",
        options:[
            "22",
            "16",
            "18",
            "17"
        ]
    }
    
];

let profitAndLoss = [
    {
        number:"1",
        question:"If an article is sold at Rs. 304.5, the shopkeeper incurs a loss of 13%. What should be his selling price?",
        answer:"395.5",
        options:[
            "395.5",
            "387.5",
            "399",
            "391.5"
        ]
    },
    {
        number:"2",
        question:"Mukesh buys a pen at a certain price. He marks up the price of the pen by 30 percent. He then starts offering a discount of 20 percent. If mukesh makes a profit of 16 rupees in the transaction then find the price at which he bought the pen",
        answer:"400",
        options:[
            "500",
            "600",
            "400",
            "800"
        ]
    },
    {
        number:"3",
        question:"A shopkeeper buys some pins at 5 pins a rupee. How should he sell the pins if he wants to realize a profit of 50%?",
        answer:"10 pins for 3 rupees",
        options:[
            "8 pins for 2 rupees",
            "12 pins for 4 rupees",
            "30 pins for 5 rupees",
            "10 pins for 3 rupees"
        ]
    },
    {
        number:"4",
        question:"A shopkeeper buys a dozen fruits for Rs.3. At what price must he sell the fruits if he wants to realize a profit of 20%?",
        answer:"50 fruits for 15 rupees",
        options:[
            "6 fruits for 15 rupees",
            "10 fruits for 6 rupees",
            "90 fruits for 30 rupees",
            "50 fruits for 15 rupees"
        ]
    },
    {
        number:"5",
        question:"A shopkeeper buys pencils at the prize of Rs. 150 a dozen. Then, he marks up the price of each pencil by 20%. If he offers 2 consecutive discounts of 10%, what is his overall profit/loss percentage?",
        answer:"2.8% loss",
        options:[
            "1.2% profit",
            "1.4% profit",
            "2.8% loss",
            "1.4% loss"
        ]
    },
    {
        number:"6",
        question:"A shopkeeper marks up the price of an article by x%. Then, he offers a discount of (x/2)%.If he ends up with a loss of 48%, then the value of x is",
        answer:"160",
        options:[
            "80",
            "140",
            "160",
            "60"
        ]
    },
    {
        number:"7",
        question:"Gugan sold a computer to Raj by marking the price up by 20%. Raj then sold the computer to Hari at a profit of 30%. Hari sold the computer to Balu at a profit of 50%. If Balu bought the computer by paying Rs.1560 more than the price at which Hari bought the computer, what is the actual cost price of the computer?",
        answer:"Rs.2000",
        options:[
            "Rs.1000",
            "Rs.2000",
            "Rs.3000",
            "Rs.4000"
        ]
    },
    {
        number:"8",
        question:"A retailer bought 5 dozen notebooks. He got these notebooks at 30% less than printed price. To clear his stock soon he offered 1 notebook free on buying 4 notebooks. If the retailer sold all notebooks on printed price, what is retailer's profit percentage in this transaction?",
        answer:"14.28%",
        options:[
            "21.35%",
            "12.48%",
            "42.89%",
            "14.28%"
        ]
    },
    {
        number:"9",
        question:"To meet the demand during summer, a milkman mixed water with pure milk in 2:5. Then he sold the same mixture at 20% more than normal price. By what percent his revenue will increase during summers?(Water is available without any cost)",
        answer:"68%",
        options:[
            "50%",
            "40%",
            "68%",
            "63%"
        ]
    },
    {
        number:"10",
        question:"A man buys a fan for Rs. 1000 and sells it at a loss of 15%. What is the selling price of the fan?",
        answer:"850",
        options:[
            "800",
            "820",
            "850",
            "950"
        ]
    }
    
];

let pipesAndCisterns = [
    {
        number:"1",
        question:"There are 15 boys and 10 girls in a class. If three students are selectTwo inlet pipes can fill an empty tank in 15 and 18 hours and one outlet pipe can empty the tank in 20 hours. If all the pipes opened simultaneously, then how many hours required fill the full tank?",
        answer:"13 hours",
        options:[
            "11 hours",
            "12 hours",
            "13 hours",
            "9 hours"
        ]
    },
    {
        number:"2",
        question:"Two pipes A and B alone can fill an empty tank in 20 min and 24 min respectively. Two pipes are opened simultaneously, after some time pipe B is closed. In how many minutes after pipe B is closed if the tank was filled in 15 minutes",
        answer:"6 min",
        options:[
            "5 min",
            "6 min",
            "4 min",
            "4.5 min"
        ]
    },
    {
        number:"3",
        question:"A tank has a leak which can empty a full tank in 28 minutes. A tap is turned on which can fill 2.5 liters a minutes. The tank now becomes empty in 42 minutes. What is the capacity of the tank?",
        answer:"210 liters",
        options:[
            "210 liters",
            "342 liters",
            "250 literss",
            "389 liter"
        ]
    },
    {
        number:"4",
        question:"Two pipes A and B can fill a tank in 15 minutes and 25 minutes respectively. Both pipes are opened together and pipe B isclosed,5 minutes before the tank is filled completely. Calculate the total time required to fill the tank?",
        answer:"11 ¼ min",
        options:[
            "11 ¼ min",
            "13 min",
            "12 min",
            "14 min"
        ]
    },
    {
        number:"5",
        question:"Pipe P can fill an empty tank in 24 hours and pipe Q can fill the same tank in 16 hours. How many hours required to fill the whole tank, if P and Q fill alternatively doing the work, P begins on first hour?",
        answer:"19",
        options:[
            "7",
            "19",
            "9",
            "17"
        ]
    },
    {
        number:"6",
        question:"Pipes p, q and r releases three different solution HNO2, HCL and HI. And these three pipes fill the empty tank in 25minutes, 30minutes and 40 minutes respectively. If all the pipes are opened, what is the ratio of HI in that mixed solution in tank after 5 minutes?",
        answer:"15/59",
        options:[
            "15/59",
            "5/21",
            "7/19",
            "6/21"
            
        ]
    },
    {
        number:"7",
        question:"Three pipes A, B and C can fill a tank in 10 hours. After working at it together for 3 hours, C is closed and A and B can fill the remaining part in 14 hours. How much time taken by C to fill the tank alone?",
        answer:"20 hours",
        options:[
            "18 hours",
            "20 hours",
            "24 hours",
            "22 hours"
        ]
    },
    {
        number:"8",
        question:"P, Q and R can fill the tank in 12, 16 and 24 min respectively. All three began to fill the tank together but P and Q left 3 and 4 min respectively before filling the tank. Find the total time taken by all of them to fill the tank?",
        answer:"8 min",
        options:[
            "12 min",
            "16 min",
            "8 min",
            "10 min"
        ]
    },
    {
        number:"9",
        question:"Pipe B is two times efficient as pipe C. Pipe A and B together can fill an empty tank in 8 4/7 hours. Pipe A and C together can fill the same tank in 12 hours. In how many hours required filling by pipe B alone?",
        answer:"15",
        options:[
            "15",
            "12",
            "20",
            "30"
        ]
    },
    {
        number:"10",
        question:"Pipe A and B can fill an empty tank in 8 hours. Pipe B and C together can fill the same tank in 9 3/5 hours. Pipe A opened for first one hour, Pipe B opened for second one hour and pipe C opened for third one hour and this process is repeated until the tank filled completely. How many hours required filling half of the tank if A is twice efficient as B?",
        answer:"8 hrs",
        options:[
            "10 hrs",
            "12 hrs",
            "6 hrs",
            "8 hrs"
        ]
    }
    
]