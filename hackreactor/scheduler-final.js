/*******************************************************************
    Algorithm Challenges by Tom Rutka

    [Easy Difficulty]
    -Mapper to prepare map of teams using team names for games schedules.
    function getTeamMap(teamCount, gameWeeks, leagueName)

    [Medium Difficulty]
    -Mapper to prepare map of scheduled games. 
    function getScheduledTimes(startDate, startTime, gameWeeks, gamesPerNight, gameLength)

    [BONUS]
    -Generate and render complete game schedules
    function setSchedules(scheduleCount, teamMapped, schedulesMapped)

********************************************************************/
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

		switch (teamCount) {
            case 3:
                if (scheduleCount === 12) {
                    teamMap = [
                   		[teamList[0], teamList[1]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[0], teamList[1]] ,
                        [teamList[1], teamList[2]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[1], teamList[2]] ,
                        [teamList[0], teamList[1]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[0], teamList[1]] ,
                        [teamList[1], teamList[2]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[1], teamList[2]]
                    ]
                }
                else if (scheduleCount == 18) {
                    teamMap = [
                        [teamList[0], teamList[1]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[0], teamList[1]] ,
                        [teamList[1], teamList[2]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[1], teamList[2]] ,
                        [teamList[0], teamList[1]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[0], teamList[1]] ,
                        [teamList[1], teamList[2]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[1], teamList[2]] ,
                        [teamList[0], teamList[1]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[0], teamList[1]] ,
                        [teamList[1], teamList[2]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[1], teamList[2]] 
                    ]
                }
                break;
            // if teamCount is 4
            case 4:
                if (scheduleCount === 12) {
                    teamMap = [
                        [teamList[0], teamList[1]] ,
                        [teamList[2], teamList[3]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[1], teamList[3]] ,
                        [teamList[0], teamList[3]] ,
                        [teamList[1], teamList[2]] ,
                        [teamList[0], teamList[1]] ,
                        [teamList[2], teamList[3]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[1], teamList[3]] ,
                        [teamList[0], teamList[3]] ,
                        [teamList[1], teamList[2]] 
                    ]
                }
                else if (scheduleCount === 18) {
                    teamMap = [
                        [teamList[0], teamList[1]] ,
                        [teamList[2], teamList[3]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[1], teamList[3]] ,
                        [teamList[0], teamList[3]] ,
                        [teamList[1], teamList[2]] ,
                        [teamList[0], teamList[1]] ,
                        [teamList[2], teamList[3]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[1], teamList[3]] ,
                        [teamList[0], teamList[3]] ,
                        [teamList[1], teamList[2]] ,
                        [teamList[0], teamList[1]] ,
                        [teamList[2], teamList[3]] ,
                        [teamList[0], teamList[2]] ,
                        [teamList[1], teamList[3]] ,
                        [teamList[0], teamList[3]] ,
                        [teamList[1], teamList[2]] 
                    ]
                }
        }
        return teamMap
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

        for (i; i < totalGameCount; i++) {

            // advance game time by one week for a total of game weeks * games per night
            for (var j = 0; j < gamesPerNight; j++) {

                // Increment game time by i weeks
                var nextDateTime = new XDate( startTimeStamp )
                nextDateTime = nextDateTime.addWeeks( i )

                if (j > 0) {
                    // increment time of game per day
                    var minutes = j * gameLength
                    
                    var tempTime = nextDateTime.addMinutes( minutes )

                    allTimes.push( nextDateTime )
                } 
                else {
                    allTimes.push( nextDateTime )
                } 
            }
            // console.log(allTimes[i].toString('MM-dd-yyyy HH:mm'))
        }
        return allTimes
	} , 
    /* generate and render complete game schedules */
	setSchedules: function (scheduleCount, teamMapped, schedulesMapped) {

        if (!scheduleCount || !teamMapped || !schedulesMapped) {
            return false
        }
        // console.log('scheduleCount:', scheduleCount)
        // console.log('teamMapped:', teamMapped)
        // console.log('schedulesMapped:', schedulesMapped)

        // render schedules in DOM
        var table = document.createElement('table')
        var rows = '<tr>' + '\n'
                    +'<th>Game</th>' + '\n'
                    +'<th>Home Team</th>' + '\n'
                    +'<th>Away Team</th>' + '\n'
                    +'<th>Start Date</th>' + '\n'
                    +'<th>Start Time</th>' + '\n'
                  +'</tr>'

        for (var i = 0; i < scheduleCount; i++) {

            if (teamMapped[i] && schedulesMapped[i]) {
                rows += '<tr>'
                + '<td>' + (i + 1) + '</td>\n' 
                + '<td>' + teamMapped[i][0] + '</td>\n' 
                + '<td>' + teamMapped[i][1] + '</td>\n'
                + '<td>' + schedulesMapped[i].toString('MM-dd-yy') + '</td>\n'
                + '<td>' + schedulesMapped[i].toString('HH:mm') + '</td>\n'
                + '</tr>'
                
            }
           
        }

        table.innerHTML = rows
        var results = document.getElementById('results') ? document.getElementById('results') : null;
        results.appendChild(table)

		
	} ,

	init: function() {

		console.log('started')
		// test 1 - count schedules
		// console.log(MyApp.getScheduleCount(3, 6))
		// console.log(MyApp.getScheduleCount(3, 9))
		// console.log(MyApp.getScheduleCount(4, 8))
		// console.log(MyApp.getScheduleCount(4, 12))


		// // test 2 - league team names
		// console.log('Volleyball teams: ', MyApp.getTeamList('volleyball'))
		// console.log('Kickball teams: '  , MyApp.getTeamList('kickball'))

		// // test 3 - get map of teams for schedules
		// var teamMapped = MyApp.getTeamMap(3, 6, 'volleyball')
		// for (var teams in teamMapped) {
		// 	console.log(teamMapped[teams])
		// }
        
	    // test 4 - get map of scheduled games
	    var schedulesMapped = MyApp.getScheduledTimes("10-15-2014", "14:00", 6, 2, 30)
        console.log('schedulesMapped:', schedulesMapped)

	   	var scheduleCount = MyApp.getScheduleCount(3, 6)
        var teamsMapped = MyApp.getTeamMap(3, 6, 'volleyball')
        console.log('teamsMapped:', teamsMapped);
        
        // var schedulesMapped = MyApp.getScheduledTimes("10-10-2014", "12:00", 6, 2, 30)

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
