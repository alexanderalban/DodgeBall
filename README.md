# DodgeBall

DodgeBall App for ACA 211

CODE PLAN

The goal of this application is to take a list of people, be able to move them from being in the "people" category to the "player" category, and them assign them to either the Blue Team, or the Red Team.

Here is a list of what we already have with the provided code:

What We Have, JS:

1. Array of People
   i. 7 people in the array
   ii. 5 values per person

2. An Empty array for "List of Players"

3. An empty array for players on the Blue Team

4. An empty array for players on the Red Team

5. A function for listing the People to choose from to make players (listPeopleChoices())
   i. onclick it creates list items for each person and a button to move them from the People array to the Player array

6. A makePlayer() function, which should move the people to the Player array using the button mentioned above. Right now it just console.logs what id was clicked.

What We Have, HTML:

1. A section to append the list of people from the person array, and a button to show that list. The button needs to be fixed so that it doesn't populate the same list over and over again.

2. A section to list the dodgeball players. I forsee similar bugs here

3. A section to list members of Blue Team

4. A section to list members of Red Team

What We Need:

1. Can add People to Players - When clicked, can add People to the Players column while removing them from the People list. Also need to add new values of a player to them
   i. Use the class keyword to create a template of a dodgeBallPlayer that required canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience.
   ii. Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick.
   iii. Add a button to each new player that will allow each one to be selected for either Blue Team or Red Team and now has mascot and teamColor
   iv. Use the this keyword to assign each player to a team with an onclick. Assign them to either Blue Team or Red Team.
   v. Display the two teams in a new list in the DOM with appropriate titles.

2. Can add Players to different Teams - When clicking the blue button, the Player is added to the blue team and removed from the player list, while also getting the keys color and mascot extended to them when they are moved to a team

3. Uses class - This is not a hack job. You should use class to add the new properties you need and extend when you need.

The Basics:
-We have an array of people.
-We need to push the chosen person into the Player array for eligibility to add to a team
-We then select whether that person is on the red team or blue team, and push them there

The Not-So-Basics:
-Add people to a Player class, which has the pre-requested values. This can be done using the 'new' keyword with Player, importing their current values and adding new ones (randomizer?)
-We need to remove them from the previous list (slice)
-We need to display the Players by appending them to a new list
-append buttons to move them to red and blue teams
-remove and add them to the teams similarly to when they were moved from People to Player
-extend a new class with mascot and color values

Please see comments within code!
