//Test 1
// const language = prompt('what do you want to know about these languages? chinese, spanish, english, hindi, arabic ');
// switch(language){
//     case 'chinese': 
//         console.log('MOST number of native speakers!');
//         break;
//     case 'mandarin': 
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too');
// }

//Test 2 Dolphins and Koalas

// sum of score for Data 1
const sumOfDolphinsScore_data1 = 96 + 108 + 89;
const sumOfKoalasScore_data1 = 88 + 91 + 110;
// sum of score for Data Bonus 1
const sumOfDolphinsScore_dataBonus1 = 97 + 112 + 101;
const sumOfKoalasScore_dataBonus1 = 109 + 95 + 123;
// sum of score for Data Bonus 2
const sumOfDolphinsScore_dataBonus2 = 97 + 112 + 101;
const sumOfKoalasScore_dataBonus2 = 109 + 95 + 106;
//
// Average score for Data 1
const averageScoreDolphins_data1 = sumOfDolphinsScore_data1 / 3;
console.log(averageScoreDolphins_data1, 'average Score of Dolphin data 1');
const averageScoreKoalas_data1 = sumOfKoalasScore_data1 / 3;
console.log(averageScoreKoalas_data1,'average Score of Dolphin data 1');

// Average score for Data Bonus 1
const averageScoreDolphins_dataBonus1 = sumOfDolphinsScore_dataBonus1 / 3;
console.log(averageScoreDolphins_dataBonus1, 'average Score of Dolphin data bonus1');
const averageScoreKoalas_dataBonus1 = sumOfKoalasScore_dataBonus1 / 3;
console.log(averageScoreKoalas_dataBonus1, 'average Score of Koalas data bonus1');

// Average score for Data Bonus 2
const averageScoreDolphins_dataBonus2 = sumOfDolphinsScore_dataBonus2 / 3;
console.log(averageScoreDolphins_dataBonus2, 'average Score of Dolphin data bonus2');
const averageScoreKoalas_dataBonus2 = sumOfKoalasScore_dataBonus2 / 3;
console.log(averageScoreKoalas_dataBonus2, 'average Score of Dolphin data bonus2');
 
//Winner for Data 1
if(averageScoreDolphins_data1 > averageScoreKoalas_data1){
    console.log('The winner of the competion is Dolphins team.');
}else if (averageScoreDolphins_data1 === averageScoreKoalas_data1){
    console.log('Its a draw game ,thus there is no winner');    
}else {
    console.log('The winner of the competion is Koalas team.');
}

//Winner for Data Bonus 1
if(averageScoreDolphins_dataBonus1 > averageScoreKoalas_dataBonus1){
    console.log('The winner of the competion is Dolphins team.');
}else if(averageScoreDolphins_dataBonus1 == averageScoreKoalas_dataBonus1){
    console.log('Its a draw game ,thus there is no winner');
}else {
    console.log('This winner of the competion is Koalas team.');
}

//Winner for Data Bonus 2
if(averageScoreDolphins_dataBonus2 > averageScoreKoalas_dataBonus2){
    console.log('The winner of the competion is Dolphins team.');
}else if(averageScoreDolphins_dataBonus2 == averageScoreKoalas_dataBonus2){
    console.log('Its a draw game ,thus there is no winner');
}else {
    console.log('This winner of the competion is Koalas team.');
}

//comparing dolphins and koalas data bonus1
if(averageScoreDolphins_dataBonus1 >= 100 && averageScoreDolphins_dataBonus1 > averageScoreKoalas_dataBonus1){
    console.log('The winner of the competion is Dolphins team.');
}else if(averageScoreKoalas_dataBonus1 >=100 && averageScoreKoalas_dataBonus1 > averageScoreDolphins_dataBonus1){
    console.log('This winner of the competion is Koalas team.');
}else {
    console.log('Its a draw game ,thus there is no winner');
}
//comparing dolphins and koalas data bonus2
if(averageScoreDolphins_dataBonus2 >= 100 && averageScoreDolphins_dataBonus2 > averageScoreKoalas_dataBonus2){
    console.log('The winner of the competion is Dolphins team.');
}else if(averageScoreKoalas_dataBonus2 >=100 && averageScoreKoalas_dataBonus2 > averageScoreDolphins_dataBonus2){
    console.log('This winner of the competion is Koalas team.');
}else {
    console.log('Its a draw game ,thus there is no winner');
}


//Test 3
const bill_Value = prompt('Want to know ur meal tip for the day? input bill value, for example 275,40,430')
let tip;
const bill = parseFloat(bill_Value);
if (bill >= 50 && bill <= 300){
    tip = 0.15 * bill;
}else{
    tip = 0.2 * bill;
}
const total_Bill = bill + tip;
console.log(`This bill was ${bill}, the tip was ${tip} , and the total bill ${total_Bill}`);


// Test 4
function describeCountry(country,population,capitalCity){
    const countryInfo = `${country} has ${population} people and its capital city is ${capitalCity}`;
    return countryInfo;
}
const countryInfo1 = describeCountry('Finland','6 million','Helsinki');
console.log(countryInfo1);
const countryInfo2 = describeCountry('Nigeria','200 million','Abuja');
console.log(countryInfo2);
const countryInfo3 = describeCountry('Botswana','2.5 million','Gaborone');
console.log(countryInfo3);
const countryInfo4 = describeCountry('Namibia','200 million','Windhoek');
console.log(countryInfo4);

//Test 5
//For percentageworld1
function percentageWorld1(countryName,population){
    const percentage = population / 7900 *100;
    const  percentageInfo =`${countryName} is about ${percentage} of the world population`;
    return percentageInfo;
}
const percentageInfo1 = percentageWorld1('China','1441');
console.log(percentageInfo1);
const percentageInfo2 = percentageWorld1('Finland','1200');
console.log(percentageInfo2);
const percentageInfo3 = percentageWorld1('Namibia','1400');
console.log(percentageInfo3);
const percentageInfo4 = percentageWorld1('Botswana','1000');
console.log(percentageInfo4);

//For percentageworld2
function percentageWorld2(countryName,population){
    const percentage = population / 7900 *100;
    const  percentageInfo =`${countryName} is about ${percentage} of the world population`;
    return percentageInfo;
}
const percentage_Info1 = percentageWorld2('China','1441');
console.log(percentage_Info1);
const percentage_Info2 = percentageWorld2('Finland','1200');
console.log(percentage_Info2);
const percentage_Info3 = percentageWorld2('Namibia','1400');
console.log(percentage_Info3);
const percentage_Info4 = percentageWorld2('Botswana','1000');
console.log(percentage_Info4);

//For percentageworld3
const percentageWorld3 = (country, population)=>  (population / 7900) *100;

const percentageInfo5 = function(country,population){
    const percentage = percentageWorld3(population);
    const  percentageInfo6 =`${country} is about ${percentage} of the world population`;
    return percentageInfo6;
}
const percentage_Info7 = percentageInfo5('China', 1441);
console.log(percentage_Info7);

//Test 6
const china = 1441;
const  finland = 1200;
const namibia = 1400;
const botswana = 1000;

const population = [china, finland, namibia, botswana];
console.log(population);
console.log(population.length);

//array percentages

const percentages = [18.2,15.1,17.7,12.7];