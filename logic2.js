  


  var config = {
    apiKey: "AIzaSyCZEDQXcml8LhMWIsDlTmP2dUCwhhslL2w",
    authDomain: "train-schedule-f1482.firebaseapp.com",
    databaseURL: "https://train-schedule-f1482.firebaseio.com",
    projectId: "train-schedule-f1482",
    storageBucket: "",
    messagingSenderId: "721034479770"
  };


  firebase.initializeApp(config);

	var database = firebase.database();



	$('#add-train-btn').on("click", function (event) {
		event.preventDefault();

	var trainName = $("#train-name-input").val.trim();
	var trainDestination = $("#destination-input").val.trim();
	var startTime = moment($("#start-input").val().trim(),"H:HH").format("X")
	var trainFrequency = $("#frequency-input").val().trim();


	var newTrain = {
			name: trainName,
			destination: trainDestination,
			time: trainStart,
			minutes: trainFrequency,
		};

		database.ref().push(newTrain);

	$("#train-name-input").val("");
	$("#destination-input").val("");
	$("#start-input").val("");
	$("#frequency-input").val("");

});


	database.ref().on()"child_added", function (childSnapshot, prevChildKey) {

	var trainName = childSnapshot.val().name;
	var trainDestination = childSnapshot.val().destination;
	var startTime = childSnapshot.val().start;
	var frequency = childSnapshot.val().freq;
	console.log(trainName);


	var trainStart = moment.unix(startTime).format("H:HH");

	
	var arrivingTime = moment().diff(moment.unix(startTime, "X"), "minutes");
	console.log(arrivingTime);

	
	var time = arrivingTime * frequency;
	console.log(time);

	$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
		trainStart + "</td><td>" + arrivingTime + "</td><td>" + frequency + "</td><td>" + time + "</td></tr>");







};



