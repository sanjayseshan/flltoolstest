// This is where all the translations go for every language
// Language switcher v2.0 Dynamic Content Replacer

// For forwards compatibility with older versions of the scorer, just add "languageInit();version=versionText" at the end of this file.
// Note that the line "langs=[XXX]" has no effect in old versions of the scorer and will just be ignored. To update the language list in old versions, copy that line to the equivalent place in index.html

// Universal

versionNum = "1.0"
versionDay = 14
versionMonth = 07
versionYear = 2021
versionText = ""

//langs=['en:United States:English','pt:Brazil:Portugues','de:Germany:Deutsche','es:Spain:Español','sk:Slovakia:Slovenský','nl:Netherlands:Nederlands','el:Greece:ελληνικά','hu:Hungary:Magyar','he:Israel:עִבְרִית‎','fr:France:français']
langs = ['en:United States:English', 'es:Spain:Español']
// 
// ,'el:Greece:Ελληνικά','pt:Brazil:Portugues','nl:Netherlands:Nederlands','th:Thailand:ไทย','ro:Romania:Română','he:Israel:עִבְרִית‎',"sl:Slovenia:slovenščino"
//  langs=['en:United States:English','es:Spain:Español','pt:Brazil:Portugues','de:Germany:Deutsche','el:Greece:ελληνικά','tr:Turkey:Türk','ro:Romania:Română','nl:Netherlands:Nederlands','hu:Hungary:Magyar','it:Italy:Italiano']




// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

//usage:


function getDict(language) {
	try {
		data = JSON.parse(textFile(""+language+".json"));
		console.log(data);
		return data;
	} catch (error) {
		return { "Translator Credit": ""}
	}
	
}

function getMainDict(type) {
	try {
		data = JSON.parse(textFile(type+".json"));
		console.log(data);
		return data;
	} catch (error) {
		return { "Translator Credit": ""}
	}
	
}


monthNames = []

// Default Language (English/en)

function getTranslation(dictionary, word) {
	if (dictionary[word] != undefined) return dictionary[word];
	else return word;
}

function languageInit() {

	dictionary = getDict(language);

	translatorCredit = getTranslation(dictionary, "Translator Credit");

	yes = getTranslation(dictionary, "Yes");
	no = getTranslation(dictionary, "No");
	partly = getTranslation(dictionary, "Partly");
	completely = getTranslation(dictionary, "Completely");
	resetText = getTranslation(dictionary, "Reset");
	saveText = getTranslation(dictionary, "Save");
	saveNText = getTranslation(dictionary, "Save");
	savescoreText = getTranslation(dictionary, "Save Score");
	loadsaveText = getTranslation(dictionary, "Load Score No.");
	deletesaveText = getTranslation(dictionary, "Delete All Saved Scores");
	importsaveText = getTranslation(dictionary, "Import Shared Scores");
	exportsaveText = getTranslation(dictionary, "Share Scores");
	signin = getTranslation(dictionary, "Sign in with");
	signout = getTranslation(dictionary, "Sign out of");
	GoogleCreate = getTranslation(dictionary, "Create New Spreadsheet");
	GoogleOpen = getTranslation(dictionary, "Open Google Spreadsheet");
	created = getTranslation(dictionary, "Created");
	savedto = getTranslation(dictionary, "Saved to");
	dateText = getTranslation(dictionary, "Date/Time");
	totalText = getTranslation(dictionary, "Total Points");
	savedText = getTranslation(dictionary, "Saved");
	loadedText = getTranslation(dictionary, "Loaded");

	monthNames = ["", getTranslation(dictionary, "January"), getTranslation(dictionary, "February"), getTranslation(dictionary, "March"), getTranslation(dictionary, "April"), getTranslation(dictionary, "May"), getTranslation(dictionary, "June"), getTranslation(dictionary, "July"), getTranslation(dictionary, "August"), getTranslation(dictionary, "September"), getTranslation(dictionary, "October"), getTranslation(dictionary, "November"), getTranslation(dictionary, "December")];
	improvementText = getTranslation(dictionary, "Score History");
	scorerText = getTranslation(dictionary, "Scorer");
	timersText = getTranslation(dictionary, "Timers");
	savesText = getTranslation(dictionary, "Saves");
	startText = getTranslation(dictionary, "Start");
	stopText = getTranslation(dictionary, "Stop");
	pointsText = getTranslation(dictionary, "Points");

	sketchTitle = getTranslation(dictionary, "FLL CARGO CONNECT Strategy Planner");
	drawingsText = getTranslation(dictionary, "Saved Drawings");
	saveDrawingText = getTranslation(dictionary, "Save Drawing");
	deleteSavedDrawingsText = getTranslation(dictionary, "Delete All Saved Drawings");
	loadSavedDrawingText = getTranslation(dictionary, "Load Saved Drawing");
	exportSavedDrawingsText = getTranslation(dictionary, "Share Drawings");
	importSavedDrawingsText = getTranslation(dictionary, "Import Shared Drawings");
	exportPNGText = getTranslation(dictionary, "Export Drawing as PNG");

	home = getTranslation(dictionary, "Home");

	rubricsTitle = getTranslation(dictionary, "FLL Judging Rubrics");
	reviewTitle = getTranslation(dictionary, "FLL Explore Review Sheet");

	doneText = getTranslation(dictionary, "Completed");

	timerText = getTranslation(dictionary, "Timer:");
	stopwatchText = getTranslation(dictionary, "Stopwatch:");

	undefinedText = getTranslation(dictionary, "undefined");

	revisionText = getTranslation(dictionary, "FLL Tools")+" Version";
	copyrightText = "Copyright (c) " + versionYear + " Seshan Brothers";
	tournamentText = getTranslation(dictionary,"FLL Tournament Scoring System");

	title = getTranslation(dictionary, "FLL CARGO CONNECT Scorer");

	mainTitle = getTranslation(dictionary, "FLL Tools");

	missionNumbering = getTranslation(dictionary, "Mission")[0] // i.e. display as M01, M02, etc. (first letter of the word "Mission" in your language)


	versionText = versionNum + " - " + versionDay + " " + monthNames[versionMonth] + " " + versionYear


	improvement = improvementText

	window.monthNames = monthNames
}

languageInit()
version = versionText


