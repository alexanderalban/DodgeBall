// Array of People, our Default

const arrOfPeople = [
    {
        id: 2,
        name: "Charles Young",
        age: 55,
        skillSet: "welding",
        placeBorn: "Omaha, Nebraska"
    },
    {
        id: 3,
        name: "Judy Twilight",
        age: 35,
        skillSet: "fishing",
        placeBorn: "Louisville, Kentucky"
    },
    {
        id: 4,
        name: "Cynthia Doolittle",
        age: 20,
        skillSet: "tic tac toe",
        placeBorn: "Pawnee, Texas"
    },
    {
        id: 5,
        name: "John Willouby",
        age: 28,
        skillSet: "pipe fitting",
        placeBorn: "New York, New York"
    },
    {
        id: 6,
        name: "Stan Honest",
        age: 20,
        skillSet: "boom-a-rang throwing",
        placeBorn: "Perth, Australia"
    },
    {
        id: 7,
        name: "Mia Watu",
        age: 17,
        skillSet: "acrobatics",
        placeBorn: "Los Angeles, California"
    },
    {
        id: 8,
        name: "Walter Cole",
        age: 32,
        skillSet: "jump rope",
        placeBorn: "New Orleans, Louisiana"
    },
];

// Array where they will be moved from people to List of Players
const listOfPlayers = [];

//Blue Team Array
const blueTeam = [];

//Red Team Array
const redTeam = [];


//Player Class
class Player {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, 
        isHealthy, yearsExperience) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
    addToBlueTeam(id) {
        console.log(`li ${id} was clicked!`)
        let player = listOfPlayers.find(people => people.id === id);
        let indexOfPlayer = listOfPlayers.indexOf(player);
        console.log("Index is " + indexOfPlayer);
        let playerMove = listOfPlayers.splice(indexOfPlayer, 1);
        console.log(playerMove);
        //Removing Player from Dodge Ball Player List
        let list = document.getElementById('players');
        list.removeChild(list.childNodes[indexOfPlayer]);
        //Adding Player to Blue Team
        let newBlueRookie = new BlueTeammate(this.id, this.name, this.age, this.skillSet, 
            this.placeBorn, this.canThrowBall, this.canDodgeBall, this.hasPaid, this.isHealthy, 
            this.yearsExperience);
        blueTeam.push(newBlueRookie);
        //Displaying Blue Team
        let blueElement = document.getElementById('blue')
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(newBlueRookie.name + " from " 
            + newBlueRookie.placeBorn + " is now a member of the " + newBlueRookie.teamColor 
            + " " + newBlueRookie.mascot + "."));
        blueElement.append(li);
        document.getElementById('blue').style.color = 'rgb(68,93,178)';
    }
    addToRedTeam(id) {
        console.log(`li ${id} was clicked!`)
        let player = listOfPlayers.find(people => people.id === id);
        let indexOfPlayer = listOfPlayers.indexOf(player);
        let playerMove = listOfPlayers.splice(indexOfPlayer, 1);
        //Removing Player from Dodge Ball Player List
        let list = document.getElementById('players');
        list.removeChild(list.childNodes[indexOfPlayer]);
        console.log(playerMove);
        //Adding Player to Red Team
        let newRedRookie = new RedTeammate(this.id, this.name, this.age, this.skillSet, 
            this.placeBorn, this.canThrowBall, this.canDodgeBall, this.hasPaid, this.isHealthy, 
            this.yearsExperience);
        redTeam.push(newRedRookie);
        //Displaying Red Team
        let redElement = document.getElementById('red')
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(newRedRookie.name + " from " 
            + newRedRookie.placeBorn + " is now a member of the " + newRedRookie.teamColor 
            + " " + newRedRookie.mascot + "."));
        redElement.append(li);
        document.getElementById('red').style.color = 'rgb(169,25,30)';
    }
};

//Randomizers for Player values! The Variables are not used, but you will see the equations used in 
// the makePlayer Function below
// let randomBallThrow = Math.random() <= 0.5;
// let randomBallDodge = Math.random() <= 0.5;
// let randomHasPaid = Math.random() <= 0.5;
// let randomIsHealthy = Math.random() <= 0.5;
// let randomYearsExperience = Math.floor(Math.random() * 10);


//Blue Team Class
class BlueTeammate extends Player {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
        super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, 
            yearsExperience);
        this.mascot = "Eagles";
        this.teamColor = "Blue";
    }
};


//Red Team Class
class RedTeammate extends Player {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
        super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, 
            yearsExperience);
        this.mascot = "Cobras";
        this.teamColor = "Red";
    }
};


//Function to list People in the people array.
//**Current Bugs- Can just keep clicking list, and it keeps populating with the same names. Clear on click? */
//***UPDATE=Fixed */
const listPeopleChoices = () => {
    document.getElementById('people').innerHTML = ""; 
    let listElement = document.getElementById('people')
    arrOfPeople.map(person => {
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        button.addEventListener('click', function () { makePlayer(person.id) })
        li.appendChild(button)
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        listElement.append(li)
    })
};


//Button to make a person a player.
//Only console logs for now. And not very well. 
//Need to make this button move the player from the person array to the player array, and add values
const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
    let player = arrOfPeople.find(people => people.id === id);
    console.log("player is " + player.name);
    let indexOfPlayer = arrOfPeople.indexOf(player);
    console.log(indexOfPlayer);
    let playerMove = arrOfPeople.splice(indexOfPlayer, 1);
    console.log(arrOfPeople);
    console.log(playerMove);
    listPeopleChoices();
    let dodgeBallPlayer = new Player(player.id, player.name, player.age, player.skillSet,
         player.placeBorn, Math.random() <= 0.5, Math.random() <= 0.5, Math.random() <= 0.5, 
         Math.random() <= 0.5, Math.floor(Math.random() * 10));
    console.log("New Player is " + dodgeBallPlayer.name);
    listOfPlayers.push(dodgeBallPlayer);
    console.log(listOfPlayers);
    // displaying listOfPlayers
    let playerElement = document.getElementById('players')
    const li = document.createElement("li");
    //Blue Team Button
    const blueButton = document.createElement("button");
    blueButton.innerHTML = "Join Blue Team";
    blueButton.addEventListener('click', function () { dodgeBallPlayer.addToBlueTeam(player.id) });
    li.appendChild(blueButton);
    blueButton.style.background = 'rgb(68,93,178)';
    blueButton.style.color = 'white';
    //Red Team Button
    const redButton = document.createElement("button");
    redButton.innerHTML = "Join Red Team";
    redButton.addEventListener('click', function () { dodgeBallPlayer.addToRedTeam(player.id) });
    li.appendChild(redButton);
    redButton.style.background = 'rgb(169,25,30)';
    redButton.style.color = 'white'
    //Player Name List
    li.appendChild(document.createTextNode(player.name + " - " + player.skillSet));
    playerElement.append(li);
};