var allplates = [
 {
  "id":"rt1",
  "load":["1A.png","1B.png","1C.png","1D.png","1E.png","2A.png","2B.png","3A.png","3B.png","3C.png","3D.png","3E.png","3F.png","3G.png","3H.png","3I.png","4A.png","4B.png","5A.png","5B.png","5C.png","5D.png","5E.png","5F.png","5G.png","5H.png","5I.png","5J.png","6.png","7A.png","7B.png","8A.png","8B.png","9.png","10A.png","10B.png","10C.png","10D.png","10E.png","10F.png","10G.png","10H.png","10I.png","11.png","12A.png","12B.png","13A.png","13B.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21A.png","21B.png","22A.png","22B.png","22C.png","23A.png","23B.png","23C.png","24A.png","24B.png","24C.png","24D.png","24E.png","24F.png","25A.png","25B.png","26A.png","26B.png","27A.png","27B.png","27C.png","27D.png","28A.png","28B.png","29.png","30.png","31A.png","31B.png","32.png","33A.png","33B.png","33C.png","34A.png","34B.png","35A.png","35B.png","36.png","37.png","38A.png","38B.png","38C.png","38D.png","38E.png","39A.png","39B.png","39C.png","39D.png","39E.png","39F.png","39G.png","39H.png","39I.png","39J.png","39K.png","39L.png","39M.png","39N.png","39O.png","39P.png","40.png","41A.png","41B.png","41C.png","41D.png","41E.png","42.png","43.png","44.png","45.png","46.png","47.png","48.png","49.png","50A.png","50B.png","51.png","52.png","53.png","54.png","55.png","56.png","57.png","58.png","59A.png","59B.png","59C.png","59D.png","60A.png","60B.png","61A.png","61B.png","62.png","63A.png","63B.png","63C.png"]
 },
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

function sw_easier() //intermediate plates swapper
{
	if(document.getElementById("cbtn").innerHTML == "See intermediate (simplified) plates")
	{
	allplates.forEach(item => {
		if(item.id == "rt1")
		{
			let xl = item.load.length;
			let i = 0;
			while(i < xl)
			{
				let platedesc = "p" + i;
				let tbl = "plates/RMPLB/" + item.load[i];
				document.getElementById(platedesc).style.display = "block";
				document.getElementById(platedesc).src = tbl;
				++i;
			}
		}
	})
		document.getElementById("cbtn").innerHTML = "See full (advanced) plates"
	}
	else
	{
	allplates.forEach(item => {
		if(item.id == "rt1")
		{
			let xl = item.load.length;
			let i = 0;
			while(i < xl)
			{
				let platedesc = "p" + i;
				let tbl = "plates/SMPL/" + item.load[i];
				document.getElementById(platedesc).style.display = "block";
				document.getElementById(platedesc).src = tbl;
				++i;
			}
		}
	})
		document.getElementById("cbtn").innerHTML = "See intermediate (simplified) plates"
	}
}