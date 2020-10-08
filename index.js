import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

 */

//Find the Index first.

const index = fifaData.findIndex(final2014 => final2014.Year === 2014 && final2014.Stage === "Final");

console.log(index);

//828

// (a) Home Team name for 2014 world cup final

console.log(fifaData[index]['Home Team Name']);


// (b) Away Team name for 2014 world cup final

console.log(fifaData[index]['Away Team Name']);

// (c) Home Team goals for 2014 world cup final

console.log(fifaData[index]['Home Team Goals']);

// (d) Away Team goals for 2014 world cup final

console.log(fifaData[index]['Away Team Goals']);


// (e) Winner of 2014 world cup final

console.log(fifaData[index]['Win conditions']);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    const finalsInfo = data.filter ((condition)=> {
       return condition.Stage === 'Final';
    });
    return finalsInfo;
    }
    
    
    getFinals(fifaData);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

 
function getYears(cb) {
        
    const finalYears = getFinals(fifaData);
          
    const filteredYears = finalYears.map(item => item.Year);
      console.log(filteredYears);
        };

  getYears(getFinals);


/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` 
and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 



function getWinners(cb) {

    const wins = getFinals(fifaData);
    
    
      const filteredWinners = wins.map ((condition) => {
         if (condition['Home Team Goals'] > condition['Away Team Goals']){
                    return(`Home Win: ${condition['Home Team Name']}`);
                }
                else if (condition['Home Team Goals'] < condition['Away Team Goals']){
                    return(`Away Win: ${condition['Away Team Name']}`);
                }
                else{
                   return(`Tie: ${condition['Away Team Name']} and ${condition['Home Team Name']}`);
                }
            });
            return(filteredWinners);
        };
    getWinners(getFinals);

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, 
{country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
    const finalWinners = []
    let finalYears = getFinals(fifaData);
    let finalWinners =getFinals(fifaData);
   

    for (i = 0; i < finalYears.length; i++) {
        finalWinners.push(finalYears[i], finalWinners[i]);
        console.log("In " + finalYears[i] + ", " + finalWinners[i + 1] + " won the world cup!");
        i + 1;
    };
}
    
getWinnersByYear(getWinners, getYears);
/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals 
and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAwayGoals(home) {

    const awayGoals = home.reduce((acc,currentValue) => {
        return acc + currentValue['Away Team Goals'];
    },0);
    return `The average goals for the away teams are ${awayGoals / home.length}`
    };


getAwayGoals(fifaData);

function getHomeGoals(away) {

const homeGoals = away.reduce((acc,currentValue) => {
        return acc + currentValue['Home Team Goals'];
    },0);
    return `The average goals for home teams are ${homeGoals / away.length}`;
    };

getHomeGoals(fifaData);


function getAverageGoals (cb1, cb2) {
  return cb1 && cb2;
}

getAverageGoals(getAwayGoals(fifaData), getHomeGoals(fifaData));






/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
