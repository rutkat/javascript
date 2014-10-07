/***
    3 Challenges

    Mapper to prepare map of teams using team names for games schedules.
    function getTeamMap(teamCount, gameWeeks, leagueName)

     Mapper to prepare map of scheduled games. 
    function getScheduledTimes(startDate, startTime, gameWeeks, gamesPerNight, gameLength)




*/
(function () {
// Simulated leagues with teams
var Leagues = {

	kickball:  {
		"Team A": ['Player 1', 'Player 2', 'Player 4', 'Player 5'] ,
		"Team B": ['Player 1', 'Player 2', 'Player 4', 'Player 5'] ,
		"Team C": ['Player 1', 'Player 2', 'Player 4', 'Player 5'] 
	},
    volleyball: {
		"Team D": ['Player 1', 'Player 2', 'Player 4', 'Player 5'] ,
		"Team E": ['Player 1', 'Player 2', 'Player 4', 'Player 5'] ,
		"Team F": ['Player 1', 'Player 2', 'Player 4', 'Player 5'] ,
		"Team G": ['Player 1', 'Player 2', 'Player 4', 'Player 5']
	}
}

var MyApp = {

	/* Get team names for a given league. */
	getTeamList: function(leagueName) {
		
		if (!leagueName) {
			return false
		}
		// Object.keys not supported in IE8
		return Object.keys(Leagues[leagueName])
	} ,

    /* Get total amount of games necessary for team count and game weeks. */
	getScheduleCount: function(teamCount, gameWeeks) {
		if (!teamCount || !gameWeeks) {
			return false
		}

		switch (teamCount) {
			case 3:
	            if (gameWeeks == 6) {
	                return 12
	            }
                if (gameWeeks == 9) {
                    return 18
                }
                break

            case 4:
                if (gameWeeks == 8) {
                    return 12
                }
                if (gameWeeks == 12) {
                    return 18
                }
		}
	} ,
	
    /* Mapper to prepare map of teams using team names for games schedules. */
	getTeamMap: function(teamCount, gameWeeks, leagueName) {

		if (!teamCount || !gameWeeks || !leagueName) {
			return false
		}
		var scheduleCount = MyApp.getScheduleCount( teamCount, gameWeeks ) ,
			teamList  	  = MyApp.getTeamList( leagueName ) ,
			teamMap       = [];

        // 1. Use switch case and if/then expressions to determine what map to use
        // 2. Map team names to a tournament map		
        // 3. Return teamMap
	} ,

	/* Mapper to prepare map of scheduled games. */
	getScheduledTimes: function(startDate, startTime, gameWeeks, gamesPerNight, gameLength) {

        if (!startDate || !startTime || !gameWeeks || !gamesPerNight || !gameLength) {
            return false
        }
		var totalGameCount = gameWeeks * gamesPerNight ,
            startTimeStamp = new XDate(startDate + " " + startTime) ,
            allTimes   = [] ,
            i = 0;

        // 1. Set a date (MM-dd-yyyy) for each game week for a total of all games
        // 2. Set a game time (HH:mm) for each game per night using gameLength
        // 3. Push the modified XDate() object into an array
        // 4. Return allTimes

        // Hint:
        // Don't use the native Date() object, instead use XDate from http://arshaw.com/xdate/
        // XDate() allows easy modification of date time using the .add methods
        //
        // console.log(allTimes[i].toString('MM-dd-yyyy HH:mm'))
        
	} , 
    /* generate and render complete game schedules */
	setSchedules: function (scheduleCount, teamMapped, schedulesMapped) {

        if (!scheduleCount || !teamMapped || !schedulesMapped) {
            return false
        }
        // console.log('scheduleCount:', scheduleCount)
        // console.log('teamMapped:', teamMapped)
        // console.log('schedulesMapped:', schedulesMapped)

        // generate html rows with schedule data
        // Hint: start with -- 
        // var table = document.createElement('table')
        
        // render html to DOM

        // HINT: end with -- 
        // var results = document.getElementById('results') ? document.getElementById('results') : null;
        // results.appendChild(table)

		
	} ,

	init: function() {

		console.log('started')
		// test 1 - count schedules
		console.log('Schedule Count:', MyApp.getScheduleCount(3, 6))
		console.log('Schedule Count:', MyApp.getScheduleCount(3, 9))
		console.log('Schedule Count:', MyApp.getScheduleCount(4, 8))
		console.log('Schedule Count:', MyApp.getScheduleCount(4, 12))


		// test 2 - league team names
		console.log('Volleyball teams: ', MyApp.getTeamList('volleyball'))
		console.log('Kickball teams: '  , MyApp.getTeamList('kickball'))

		// test 3 - get map of teams for schedules
		var teamMapped = MyApp.getTeamMap(3, 6, 'volleyball')
		// for (var teams in teamMapped) {
		// 	console.log(teamMapped[teams])
		// }
        
	    // test 4 - get map of scheduled games
	    var schedulesMapped = MyApp.getScheduledTimes("10-10-2014", "12:00", 6, 2, 30)
        console.log('schedulesMapped:', schedulesMapped)

	   	var scheduleCount   = MyApp.getScheduleCount(3, 6)
        var teamsMapped     = MyApp.getTeamMap(3, 6, 'volleyball')
        console.log('teamsMapped:', teamsMapped)

        var schedulesMapped = MyApp.getScheduledTimes("10-10-2014", "12:00", 6, 2, 30)

        // test 5 - generate and render schedules
        MyApp.setSchedules(scheduleCount, teamsMapped, schedulesMapped)

	}
}

if (!window.onload) {
  window.onload = function() {
    MyApp.init()
  }
}

})()
