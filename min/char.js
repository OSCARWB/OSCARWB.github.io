var bigs = document.getElementsByClassName("big");
var smalls = document.getElementsByClassName("small");
var edits = document.getElementsByClassName("edit");
var bigSizes = [];

var thingsToAdd = [];

function load()
{
	initDynTabs();

	window.onresize = function (event)
	{
		handleResize(event);
	};
	for (var i = 0; i < bigs.length; i++)
	{
		bigSizes[i] = bigs[i].offsetLeft + bigs[i].offsetWidth;
	}
	edit();
	handleResize("");

	document.getElementById("fileLoader").onchange = function (event)
	{
		handleUpload(event);
	}
}

function initDynTabs()
{
	thingsToAdd[0] =	'<td><textarea name="type"     class="edit" onkeyup="handleBasic(this)" rows="1" cols="10"></textarea></td>' +
						'<td><textarea name="tl"       class="edit" onkeyup="handleBasic(this)" rows="1" cols="2" ></textarea></td>' +
						'<td><textarea name="rating"   class="edit" onkeyup="handleBasic(this)" rows="1" cols="5" ></textarea></td>' +
						'<td><textarea name="skill"    class="edit" onkeyup="handleBasic(this)" rows="1" cols="15"></textarea></td>' +
						'<td><textarea name="location" class="edit" onkeyup="handleBasic(this)" rows="1" cols="10"></textarea></td>' +
						'<td><textarea name="mass"     class="edit" onkeyup="handleBasic(this)" rows="1" cols="5" ></textarea></td>' +
						'<td><textarea name="notes"    class="edit" onkeyup="handleBasic(this)" rows="1" cols="15"></textarea></td>' +
						'<td><button class="edit" onclick="handleRemove(this,0)">X</button></td>';

	thingsToAdd[1] =	'<td><textarea name="name"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="15"></textarea></td>' +
						'<td><textarea name="speciality" class="edit" onkeyup="handleBasic(this)" rows="1" cols="15"></textarea></td>' +
						'<td><textarea name="lvl"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="2" ></textarea></td>' +
						'<td><button class="edit" onclick="handleRemove(this,1)">X</button></td>';

	thingsToAdd[2] =	'<td><textarea name="weapon"	 class="edit" onkeyup="handleBasic(this)" rows="1" cols="10"></textarea></td>' +
						'<td><textarea name="tl"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="2" ></textarea></td>' +
						'<td><textarea name="mass"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="5" ></textarea></td>' +
						'<td><textarea name="rof"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="2" ></textarea></td>' +
						'<td><textarea name="atk"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="10"></textarea></td>' +
						'<td><textarea name="dmg"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="4" ></textarea></td>' +
						'<td><textarea name="mag"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="3" ></textarea></td>' +
						'<td><textarea name="range"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="6" ></textarea></td>' +
						'<td><textarea name="notes"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="15"></textarea></td>' +
						'<td><button class="edit" onclick="handleRemove(this,2)">X</button></td>';

	thingsToAdd[3] =	'<td><textarea name="name"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="10"></textarea></td>' +
						'<td><textarea name="mass"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="5" ></textarea></td>' +
						'<td><textarea name="notes"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="15"></textarea></td>' +
						'<td><button class="edit" onclick="handleRemove(this,3)">X</button></td>';

	thingsToAdd[4] =	'<td><textarea name="talent"	 class="edit" onkeyup="handleBasic(this)" rows="1" cols="10"></textarea></td>' +
						'<td><textarea name="power"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="10"></textarea></td>' +
						'<td><textarea name="psi_cost"	 class="edit" onkeyup="handleBasic(this)" rows="1" cols="8" ></textarea></td>' +
						'<td><textarea name="notes"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="15"></textarea></td>' +
						'<td><button class="edit" onclick="handleRemove(this,4)">X</button></td>';

	thingsToAdd[5] =	'<td><textarea name="career"	 class="edit" onkeyup="handleBasic(this)" rows="1" cols="10"></textarea></td>' +
						'<td><textarea name="branch"	 class="edit" onkeyup="handleBasic(this)" rows="1" cols="15"></textarea></td>' +
						'<td><textarea name="events"	 class="edit" onkeyup="handleBasic(this)" rows="1" cols="10"></textarea></td>' +
						'<td><textarea name="rank"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="3 "></textarea></td>' +
						'<td><textarea name="title"		 class="edit" onkeyup="handleBasic(this)" rows="1" cols="10"></textarea></td>' +
						'<td><button class="edit" onclick="handleRemove(this,5)">X</button></td>';

	for(var i = 0;i<6;i++)
	{
		//console.log(document.getElementById("E"+i));
		addElem(document.getElementById("E"+i).getElementsByTagName("TBODY")[0],i);
	}
}

function handleBasic(elem)
{
	var textareas = elem.parentElement.parentElement.getElementsByTagName("TEXTAREA");
	var maxRows = 0;
	for (var i = 0; i < textareas.length; i++)
	{
		var count = 0;
		var rowz = 1;
		for(var j = 0; j < textareas[i].value.length;j++)
		{
			if (textareas[i].value[j] == '\n')
			{
				rowz++;
				count = 0;
			} else {
				count++;
				if (count == textareas[i].cols + 1) {
					rowz++;
					count = 0;
				}
			}
		}
		if (rowz > maxRows) {
			maxRows = rowz;
		}
	}
	for (var i = 0; i < textareas.length; i++) {
		textareas[i].rows = maxRows;
	}
}

function handleBasicOLD(elem)
{
	var textareas = elem.parentElement.parentElement.getElementsByTagName("TEXTAREA");
	var maxRows = 0;
	for (var i = 0; i < textareas.length; i++)
	{
		var newLines = textareas[i].value.split(/\r\n|\r|\n/).length - 1;
		var newLines2 = newLines;
		var rowz = ((textareas[i].value.length - newLines) / (textareas[i].cols + 1)) + 1 + newLines2;
		if(rowz > maxRows)
		{
			maxRows = rowz;
		}
	}
	console.log("maxRows: " + maxRows);
	for (var i = 0; i < textareas.length; i++) {
		textareas[i].rows = maxRows;
	}
	console.log("----------------------------------");
}

function handleResize(event)
{
	for(var i = 0; i < bigs.length;i++)
	{
		if (bigSizes[i] + 5 >= bigs[i].parentElement.offsetLeft + bigs[i].parentElement.offsetWidth)
		{
			bigs[i].parentElement.getElementsByClassName("small")[0].style.display = "block";
			bigs[i].style.display = "none";
		} else {
			bigs[i].style.display = "block";
			bigs[i].parentElement.getElementsByClassName("small")[0].style.display = "none";
		}
	}
}

function addElem(root,thing)
{
	var nr = document.createElement("TR");
	nr.innerHTML = thingsToAdd[thing];
	nr.setAttribute("class", "T" + thing);
	root.appendChild(nr);
	return nr;
}

function handleAdd(elem, thing)
{
	var table = elem.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("tbody")[0];
	addElem(table,thing);
}

function handleRemove(elem, thing)
{
	var root = elem.parentElement.parentElement.parentElement;
	elem.parentElement.parentElement.remove();
	if(root.childElementCount < 2)
	{
		addElem(root,thing);
	}
}

function updateMod(elem)
{
	var root = elem.parentElement.parentElement;
	if (elem.value == 0)
	{
		root.getElementsByTagName("INPUT")[2].value = -3;
	} else {
		root.getElementsByTagName("INPUT")[2].value = Math.floor(elem.value / 3) - 2;
	}
}

var oldHid;

function hide()
{
	var hid = document.getElementById("tools");
	if (!(hid.style.display === "none"))
	{
		oldHid = hid.style.display;
		hid.style.display = "none";
	} else
	{
		hid.style.display = oldHid;
	}
}

var gdisabled = false;

function edit()
{
	for(var i = 0; i < edits.length;i++)
	{
		if (gdisabled == false)
		{
			edits[i].disabled = "true";
			if(edits[i].nodeName=="BUTTON")
			{
				edits[i].style.display = "none";
			}
		} else {
			edits[i].disabled = "";
			if (edits[i].nodeName == "BUTTON")
			{
				edits[i].style.display = "block";
			}
		}
	}
	gdisabled = !gdisabled;
}

function getBasicFromPage()
{
	var basic = {};
	var bazicz = document.getElementsByClassName("basic");
	basic.name = 		bazicz[0].value;
	basic.age = 		bazicz[1].value;
	basic.terms = 		bazicz[2].value;
	basic.race = 		bazicz[3].value;
	basic.homeworld =	bazicz[4].value;
	return basic;
}

function getFinancesFromPage()
{
	var finace = {};
	var financz = document.getElementById("finances").getElementsByTagName("TEXTAREA");
	finace.pension = 			financz[0].value;
	finace.debt = 				financz[1].value;
	finace.cashOnHand = 		financz[2].value;
	finace.monthyShipPayments = financz[3].value;
	finace.paymentRemaining = 	financz[4].value;
	return finace;
}

function getCHR(thing)
{
	var str = {};
	var strr = document.getElementsByClassName(thing);
	str.b = strr[0].value;
	str.t = strr[1].value;
	str.m = strr[2].value;
	return str;
}

function getCharacteristicsFromPage()
{
	var charist = {};
	charist.str = getCHR("str");
	charist.dex = getCHR("dex");
	charist.end = getCHR("end");
	charist.int = getCHR("int");
	charist.edu = getCHR("edu");
	charist.soc = getCHR("soc");
	return charist;
}

function getDataFromTR(TR)
{
	var dyn = {};
	var dynTA = TR.getElementsByTagName("textarea");
	for(var i =0;i<dynTA.length;i++)
	{
		dyn[dynTA[i].name] = dynTA[i].value;
	}
	return dyn;
}

function getDynTabData(where)
{
	var dyns = [];
	var dynTR = document.getElementById(where).getElementsByTagName("tbody")[0].getElementsByTagName("tr");
	for(var i = 1;i<dynTR.length;i++)
	{
		dyns[i-1] = getDataFromTR(dynTR[i]);
	}
	return dyns;
}

function download(data,filename, contentType)
{
	var file = new Blob([data],{type: contentType});
	var a = document.createElement("a");

	a.href = URL.createObjectURL(file);
	a.download = filename;
	a.click();
	URL.revokeObjectURL(a.href);
}

function save()
{
	var character = {};
	character.basic = getBasicFromPage();
	character.characteristics = getCharacteristicsFromPage();
	character.armours =			getDynTabData("E0");
	character.skills =			getDynTabData("E1");
	character.weapons =			getDynTabData("E2");
	character.equipment =		getDynTabData("E3");
	character.psionic_powers =	getDynTabData("E4");
	character.finances = 		getFinancesFromPage();
	character.career_history =	getDynTabData("E5");
	download(JSON.stringify(character),character.basic.name + ".chr","text/json");
}

function loadChar()
{
	var loader = document.getElementById("load");
	if(loader.style.display == "none")
	{
		loader.style.display = "block";
	}else{
		loader.style.display = "none"
	}
}

var character;

function handleUpload(event)
{
	var loader = document.getElementById("load");
	loader.style.display = "none";

	var reader = new FileReader();
	reader.onload = function (event)
	{
		character = JSON.parse(event.target.result);
		loadChr(character);
	}
	reader.readAsText(event.target.files[0]);
}

function setBasicFromJSON(basic)
{
	var bazicz = document.getElementsByClassName("basic");
	bazicz[0].value = basic.name;
	bazicz[1].value = basic.age;
	bazicz[2].value = basic.terms;
	bazicz[3].value = basic.race;
	bazicz[4].value = basic.homeworld;
}

function setFinancesFromJSON(finace)
{
	var financz = document.getElementById("finances").getElementsByTagName("TEXTAREA");
	financz[0].value = finace.pension;
	financz[1].value = finace.debt;			
	financz[2].value = finace.cashOnHand;
	financz[3].value = finace.monthyShipPayments; 
	financz[4].value = finace.paymentRemaining;
}

function setCHR(thing, chr)
{
	var strr = document.getElementsByClassName(thing);
	strr[0].value = chr.b;
	strr[1].value = chr.t;
	strr[2].value = chr.m;
}

function setCharacteristicFromJSON(charist)
{
	setCHR("str",charist.str);
	setCHR("dex",charist.dex);
	setCHR("end",charist.end);
	setCHR("int",charist.int);
	setCHR("edu",charist.edu);
	setCHR("soc",charist.soc);
}

function setDataForTR(TR,rowData)
{
	var dynTA = TR.getElementsByTagName("textarea");
	for(var i =0;i<dynTA.length;i++)
	{
		dynTA[i].value = rowData[dynTA[i].name];
	}
}

function setDynTabData(where,thing)
{
	var dynTR = document.getElementById(where).getElementsByTagName("tbody")[0].getElementsByTagName("tr");
	for(var i = 1;i<dynTR.length;i++)
	{
		dynTR[i].remove();
	}
	for(i = 0;i<thing.length;i++)
	{
		var TR = addElem(document.getElementById(where).getElementsByTagName("tbody")[0],where[1]);
		setDataForTR(TR,thing[i]);
	}
}

function loadChr(chr)
{
	if(gdisabled == true)
	{
		edit();
	}
	setBasicFromJSON(chr.basic);
	setCharacteristicFromJSON(chr.characteristics);
	setDynTabData("E0",character.armours);
	setDynTabData("E1",character.skills);
	setDynTabData("E2",character.weapons);
	setDynTabData("E3",character.equipment);
	setDynTabData("E4",character.psionic_powers);
	setFinancesFromJSON(character.finances);
	setDynTabData("E5",character.career_history);

	edit();
}