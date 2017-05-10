var Stopwatch = function(template) {

	// set up options; should be passed as argument to constructor

	// application title
	var title              = "Stopwatch App";
	// instructions on how to use the application
	var instructions       = "These are the instructions you stupid piece of shit";
	// text to be displayed above target time
	var displayTargetLabel = "Target Time:";
	// text to be displayed above measured time
	var measuredTimeLabel  = "Your Time:";
	// tect to be displayed above the difference between the measured and target time;
	var resultsTimeLabel   = "You were off by:"
	// time the user is attempting to stop on
	var targetTime         = 60000;
	// time the user starts the game
	var startTime          = null;
	// time the user actually starts on
	var measuredTime       = null;
	// text on the start button
	var startButtonText    = "start";
	// text on the stop button
	var stopButtonText     = "stop";
	// text on the reset button
	var resetButtonText    = "reset";
	
	// get template references
	var _title              = template.querySelector(".stopwatch_app_title_container > .stopwatch_app_title");
	var _instructions       = template.querySelector(".stopwatch_app_instructions_container > .stopwatch_app_instructions");
	var _displayTargetLabel = template.querySelector(".stopwatch_app_display_container > .stopwatch_app_display_target_container > .stopwatch_app_display_target_label");
	var _displayTargetValue = template.querySelector(".stopwatch_app_display_container > .stopwatch_app_display_target_container > .stopwatch_app_display_target_value");
	var _measuredTimeLabel  = template.querySelector(".stopwatch_app_display_container > .stopwatch_app_display_measured_container >.stopwatch_app_display_measured_label");
	var _measuredTimeValue  = template.querySelector(".stopwatch_app_display_container > .stopwatch_app_display_measured_container >.stopwatch_app_display_measured_value");
	var _resultsTimeLabel   = template.querySelector(".stopwatch_app_display_container > .stopwatch_app_display_results_container >.stopwatch_app_display_results_label");
	var _resultsTimeValue   = template.querySelector(".stopwatch_app_display_container > .stopwatch_app_display_results_container >.stopwatch_app_display_results_value");
	var _startButton        = template.querySelector(".stopwatch_app_controls_container > .stopwatch_app_controls_startbutton");
	var _stopButton         = template.querySelector(".stopwatch_app_controls_container > .stopwatch_app_controls_stopbutton");
	var _resetButton        = template.querySelector(".stopwatch_app_controls_container > .stopwatch_app_controls_resetbutton");

	//starts the timer
	function start() {
		if (startTime == null) {
			startTime = Date.now();
		}
	}

	// stops the timer and renders results
	function stop() {
		if (startTime != null && measuredTime == null) {
			measuredTime = Date.now() - startTime;
			render();
		}
	}

	// clears startTime, measuredTime
	function reset() {
		startTime = null;
		measuredTime = null;
		render();
	}

	// displays how long the timer ran before you stopped it
	function render() {
		if (measuredTime != null) {
			_measuredTimeValue.innerHTML = measuredTime / 1000;
			_resultsTimeValue.innerHTML  = (measuredTime - targetTime) / 1000;
		} else {
			_measuredTimeValue.innerHTML = 0;
			_resultsTimeValue.innerHTML  = 0;
		}
	}

	function init() {
		// initialize text and whatnot
		_title.innerHTML              = title;
		_instructions.innerHTML       = instructions;
		_displayTargetLabel.innerHTML = displayTargetLabel;
		_measuredTimeLabel.innerHTML  = measuredTimeLabel;
		_resultsTimeLabel.innerHTML   = resultsTimeLabel
		_displayTargetValue.innerHTML = targetTime / 1000;
		_measuredTimeValue.innerHTML  = (measuredTime != null) ? measuredTime / 1000 : 0;
		_resultsTimeValue.innerHTML   = (measuredTime != null) ? (measuredTime - targetTime) / 1000 : 0;
		_startButton.innerHTML        = startButtonText;
		_stopButton.innerHTML         = stopButtonText;
		_resetButton.innerHTML        = resetButtonText;

		// initialize handlers
		_startButton.onclick = start;
		_stopButton.onclick  = stop;
		_resetButton.onclick = reset;
	}

	init();
};

// create the stopwatch element
var elem = document.getElementsByClassName("stopwatch_app_template")[0];

new Stopwatch(elem);