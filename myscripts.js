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
]

// Array where they will be moved from people to List of Players
const listOfPlayers = [];

//Blue Team Array
const blueTeam = [];

//Red Team Array
const redTeam = [];


//Player Class
class player {
    constructor() { }
}


//Blue Team Class
class blueTeammate {
    constructor() { }
}


//Red Team Class
class redTeammate {
    constructor() { }
}


//Function to list People in the people array.
//**Current Bugs- Can just keep clicking list, and it keeps populating with the same names. Clear on click? */
const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        button.addEventListener('click', function () { makePlayer(person.id) })
        li.appendChild(button)
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        listElement.append(li)
    })
}


//Button to make a person a player.
//Only console logs for now. And not very well. 
//Need to make this button move the player from the person array to the player array, and add values
const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
}