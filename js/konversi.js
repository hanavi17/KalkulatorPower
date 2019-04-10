function btn(angka) {
	var display = document.getElementById("input").value;
	if (display == "0") {
		display = angka; 
	} else {
		display += angka;
	}
	document.getElementById("input").value = display;
}

function clr() {
	document.getElementById("input").value = "0";
	bil1 = 0;
	bil2 = 0;
	opr_seleksi = false;
}

function koma() {
	var display = document.getElementById("input").value;
	if (display.includes(".") == false) {
		display += ".";
	}
	document.getElementById("input").value = display;	
}

function Round(x,res) 
{
  y = parseFloat(x);
  res = Math.pow(10,res);
  y = Math.round(y*res)/res;
  return y;
}

function Convert(){
    var asal = document.getElementById('asal').value;
    var hasil = document.getElementById('hasil').value;

    // fromDBW
    if(asal == "dbw" && hasil == "dbw"){
        dbw = document.getElementById("input").value;
        dbw = parseFloat(dbw);
        document.getElementById("output").value = Round(dbw, 6);
    }
    else if(asal == "dbw" && hasil == "dbm"){
        dbw = document.getElementById("input").value;
        dbw = parseFloat(dbw);
        document.getElementById("output").value = Round(dbw+30, 6);
    }
    else if(asal == "dbw" && hasil == "w"){
        dbw = document.getElementById("input").value;
        dbw = parseFloat(dbw);
        document.getElementById("output").value = Round(Math.pow(10, dbw/10), 6);
    }

    // fromDBM
    else if(asal == "dbm" && hasil == "dbw"){
        dbm = document.getElementById("input").value;
        dbm = parseFloat(dbm);
        document.getElementById("output").value = Round(dbm-30, 6);
    }
    else if(asal == "dbm" && hasil == "dbm"){
        dbm = document.getElementById("input").value;
        dbm = parseFloat(dbm);
        document.getElementById("output").value = Round(dbm, 6);
    }
    else if(asal == "dbm" && hasil == "w"){
        dbm = document.getElementById("input").value;
        dbm = parseFloat(dbm);
        document.getElementById("output").value = Round(Math.pow(10, (dbm-30)/10), 6);
    }

    // fromWatt
    else if(asal == "w" && hasil == "dbw"){
        w = document.getElementById("input").value;
        w = parseFloat(w);
        document.getElementById("output").value = Round(10*Math.log(w*1000)*Math.LOG10E-30, 6);
    }
    else if(asal == "w" && hasil == "dbm"){
        w = document.getElementById("input").value;
        w = parseFloat(w);
        document.getElementById("output").value = Round((10*Math.log(w*1000)*Math.LOG10E-30)+30, 6);
    }
    else if(asal == "w" && hasil == "w"){
        w = document.getElementById("input").value;
        w = parseFloat(w);
        document.getElementById("output").value = Round(w, 6);
    }
    
    // MW -> MW
    else if(asal == "mw" && hasil == "mw"){
        w = document.getElementById("input").value;
        w = parseFloat(w);
        document.getElementById("output").value = Round(w, 6);
    }

    // W -> MW
    else if(asal == "w" && hasil == "mw"){
        w = document.getElementById("input").value;
        w = parseFloat(w);
        document.getElementById("output").value = Round(w*1000, 6);
    }

    // MW -> W
    else if(asal == "mw" && hasil == "w"){
        mw = document.getElementById("input").value;
        mw = parseFloat(mw);
        document.getElementById("output").value = Round(mw/1000, 6);
    }

     // DBW -> MW
     else if(asal == "dbw" && hasil == "mw"){
        dbw = document.getElementById("input").value;
        dbw = parseFloat(dbw);
        document.getElementById("output").value = Round((Math.pow(10, dbw/10)*1000), 6);
    }
    // DBM -> MW
    else if(asal == "dbm" && hasil == "mw"){
        dbm = document.getElementById("input").value;
        dbm = parseFloat(dbm);
        document.getElementById("output").value = Round((Math.pow(10, (dbm-30)/10))*1000, 6);
    }

    // MW -> DBW
    else if(asal == "mw" && hasil == "dbw"){
        mw = document.getElementById("input").value;
        mw = parseFloat(mw);
        document.getElementById("output").value = Round(10*Math.log((mw/1000)*1000)*Math.LOG10E-30, 6);
    }

    // MW -> DBM
    else if(asal == "mw" && hasil == "dbm"){
        mw = document.getElementById("input").value;
        mw = parseFloat(mw);
        document.getElementById("output").value = Round((10*Math.log((mw/1000)*1000)*Math.LOG10E-30)+30, 6);
    }

}

