var platesjson = [
 {
  "id":"1/1",
  "load":["9A.jpeg","56.jpeg", "60.jpeg"]
 },
 {
  "id":"1/2",
  "load":["2A.jpeg","2B.jpeg","3A.jpeg","3B.jpeg","3C.jpeg","3D.jpeg","3E.jpeg","3F.jpeg","3G.jpeg","3H.jpeg","3I.jpeg","4A.jpeg","4B.jpeg","5A.jpeg","5B.jpeg","5C.jpeg","5D.jpeg","5E.jpeg","5F.jpeg","5G.jpeg","5H.jpeg","5I.jpeg","5J.jpeg","24A.jpeg","24B.jpeg","24C.jpeg","24D.jpeg","24E.jpeg","24F.jpeg","32.jpeg"]
 },
 {
  "id":"1/3",
  "load":["25A.jpeg","25B.jpeg","26A.jpeg","26B.jpeg","28A.jpeg","28B.jpeg","29.jpeg","30.jpeg","32.jpeg","40.jpeg","53.jpeg"]
 },
 {
  "id":"1/4",
  "load":["1A.jpeg","1B.jpeg","1C.jpeg","1D.jpeg","5A.jpeg","5B.jpeg","5C.jpeg","5D.jpeg","5E.jpeg","5F.jpeg","5G.jpeg","5H.jpeg","5I.jpeg","5J.jpeg","7A.jpeg","7C.jpeg","11A.jpeg","12A.jpeg","12B.jpeg","12C.jpeg","13A.jpeg","14A.jpeg","15A.jpeg","17.jpeg","24A.jpeg","24B.jpeg","24C.jpeg","24D.jpeg","24E.jpeg","24F.jpeg","52.jpeg"]
 },
 {
  "id":"1/5",
  "load":["1A.jpeg","1B.jpeg","1C.jpeg","1D.jpeg","5A.jpeg","5B.jpeg","5C.jpeg","5D.jpeg","5E.jpeg","5F.jpeg","5G.jpeg","5H.jpeg","5I.jpeg","5J.jpeg","12A.jpeg","12B.jpeg","12C.jpeg","24A.jpeg","24B.jpeg","24C.jpeg","24D.jpeg","24E.jpeg","24F.jpeg","25A.jpeg","25B.jpeg","32.jpeg","39A.jpeg","39B.jpeg","39C.jpeg","39D.jpeg","39E.jpeg","39F.jpeg","39G.jpeg","39H.jpeg","39I.jpeg","39J.jpeg","39K.jpeg","39L.jpeg","39M.jpeg","39N.jpeg","39O.jpeg","39P.jpeg","52.jpeg","53.jpeg"]
 },
 {
  "id":"1/6",
  "load":["1A.jpeg","1B.jpeg","1C.jpeg","1D.jpeg","8A.jpeg","8B.jpeg","9A.jpeg","10A.jpeg","10B.jpeg","10C.jpeg","10D.jpeg","10E.jpeg","10F.jpeg","10G.jpeg","10H.jpeg","10I.jpeg","25B.jpeg","33A.jpeg","33B.jpeg","33C.jpeg","34A.jpeg","34B.jpeg","37.jpeg","43.jpeg","58.jpeg","59A.jpeg","59B.jpeg","59C.jpeg","59D.jpeg"]
 },
 {
  "id":"1/7",
  "load":["20.jpeg","21A.jpeg","21B.jpeg","24A.jpeg","24B.jpeg","24C.jpeg","24D.jpeg","24E.jpeg","24F.jpeg","53.jpeg","58.jpeg"]
 },
 {
  "id":"1/8",
  "load":["20.jpeg","24A.jpeg","24B.jpeg","24C.jpeg","24D.jpeg","24E.jpeg","24F.jpeg"]
 }
]

function navigate()
{
    if (navToggled.style.display == "none")
	{
        navToggled.style.display = "block"
    } 
	else 
	{
        navToggled.style.display = "none"
    }
}

function hideresults()
{
	document.getElementById("aquaticend").style.display = "none";
	document.getElementById("treeend").style.display = "none";
	document.getElementById("parasiteend").style.display = "none";
	document.getElementById("qtable").style.display = "none";
	let i1 = 0;
	while(i1 < 36)
	{
		let platedesc = "p" + i1;
		document.getElementById(platedesc).style.display = "none";
		++i1;
	}
}

function hideresultsrestart()
{
	document.getElementById("aquaticend").style.display = "none";
	document.getElementById("treeend").style.display = "none";
	document.getElementById("parasiteend").style.display = "none";
	document.getElementById("qtable").style.display = "none";
	let i1 = 0;
	while(i1 < 36)
	{
		let platedesc = "p" + i1;
		document.getElementById(platedesc).style.display = "none";
		++i1;
	}
	document.getElementById("qn").innerHTML = "Is your plant any of the following?";
	document.getElementById("f4").style.display = "block";
}


function firstfourq(clickedid)
{
	document.getElementById("f4").style.display = "none";
	if(clickedid == "treeb")
	{
		document.getElementById("treeend").style.display = "block";
	}
	else if(clickedid == "aquab")
	{
		document.getElementById("aquaticend").style.display = "block";
	}
	else if(clickedid == "parab")
	{
		document.getElementById("parasiteend").style.display = "block";
	}
	else //move on
	{	
		document.getElementById("qtable").style.display = "block";
		document.getElementById("qn").innerHTML = "Match the flower with the correct characteristics.";
	}
}

//waow
function tableq(clickedid)
{
let pl = "p";
document.getElementById("qtable").style.display = "none";
	platesjson.forEach(item => {
		if(item.id == clickedid)
		{
			let xl = item.load.length;
			let i = 0;
			while(i < xl)
			{
				let platedesc = pl + i;
				let tbl = "plates/SMPL/" + item.load[i];
				document.getElementById(platedesc).style.display = "block";
				document.getElementById(platedesc).src = tbl;
				++i;
			}
		}
	})
}