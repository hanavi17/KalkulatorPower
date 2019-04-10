function btn(angka) {
  var display_po = document.getElementById("po").value;
	if (display_po == "0") {
		display_po = angka; 
  }
  else {
    display_po += angka;
	}
  document.getElementById("po").value = display_po;
}

function clr() {
  document.getElementById("po").value = "";
  document.getElementById("pi").value = "";
  document.getElementById("output").value = "";
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
    var satuan = document.getElementById('satuan').value;
    var satuan_po = document.getElementById('satuan_po').value;

// --------------- ------------ --------------- //

  //dbw -> dbw
  if(satuan_po == "dbw" && satuan == "dbw" ){
    pi = document.getElementById("pi").value;
    pi = parseFloat(pi);

    po = document.getElementById("po").value;
    po = parseFloat(po);

    konversi_pi = Round(Math.pow(10, pi/10), 6);
    konversi_po = Round(Math.pow(10, po/10), 6);

    konversi =  (konversi_po/konversi_pi);

    document.getElementById("output").value = Round(10*Math.log(konversi)*Math.LOG10E, 6);
}

// dbm -> dbm
else if(satuan_po == "dbm" && satuan == "dbm"){
      pi = document.getElementById("pi").value;
      pi = parseFloat(pi);

      po = document.getElementById("po").value;
      po = parseFloat(po);

      konversi_pi = Round(Math.pow(10, (pi-30)/10), 6);
      konversi_po = Round(Math.pow(10, (po-30)/10), 6);

      konversi =  konversi_po/konversi_pi;

      document.getElementById("output").value = Round(10*Math.log(konversi)*Math.LOG10E, 6);
  }

  // dbw -> dbm
else if(satuan_po == "dbw" && satuan == "dbm"){
  pi = document.getElementById("pi").value;
  pi = parseFloat(pi);

  po = document.getElementById("po").value;
  po = parseFloat(po);

  konversi_pi = Round(Math.pow(10, (pi-30)/10), 6);
  konversi_po = Round(Math.pow(10, po/10), 6);

  konversi =  konversi_po/konversi_pi;

  document.getElementById("output").value = Round(10*Math.log(konversi)*Math.LOG10E, 6);
}

  // dbm -> dbw
else if(satuan_po == "dbm" && satuan == "dbw"){
    pi = document.getElementById("pi").value;
    pi = parseFloat(pi);
  
    po = document.getElementById("po").value;
    po = parseFloat(po);
  
    konversi_pi = Round(Math.pow(10, pi/10), 6);
    konversi_po = Round(Math.pow(10, (po-30)/10), 6); //dbm
  
    konversi =  konversi_po/konversi_pi;
  
    document.getElementById("output").value = Round(10*Math.log(konversi)*Math.LOG10E, 6);
  }

 // dbw -> watt
 else if(satuan_po == "dbw" && satuan == "w"){
  pi = document.getElementById("pi").value;
  pi = parseFloat(pi);

  po = document.getElementById("po").value;
  po = parseFloat(po);

  konversi_po = Round(Math.pow(10, po/10), 6);

  konversi = konversi_po/pi;

  document.getElementById("output").value = Round(10*Math.log(konversi)*Math.LOG10E, 6);
}

 // dbm -> watt
 else if(satuan_po == "dbm" && satuan == "w"){
  pi = document.getElementById("pi").value;
  pi = parseFloat(pi);

  po = document.getElementById("po").value;
  po = parseFloat(po);

  konversi_po = Round(Math.pow(10, (po-30)/10), 6); //dbm

  konversi = konversi_po/pi;

  document.getElementById("output").value = Round(10*Math.log(konversi)*Math.LOG10E, 6);
}

// watt -> dbw
else if(satuan_po == "w" && satuan == "dbw"){
  pi = document.getElementById("pi").value;
  pi = parseFloat(pi);

  po = document.getElementById("po").value;
  po = parseFloat(po);

  konversi_pi = Round(Math.pow(10, pi/10), 6); //dbw

  konversi = po/konversi_pi;

  document.getElementById("output").value = Round(10*Math.log(konversi)*Math.LOG10E, 6);
}

// watt -> dbm
else if(satuan_po == "w" && satuan == "dbm"){
  pi = document.getElementById("pi").value;
  pi = parseFloat(pi);

  po = document.getElementById("po").value;
  po = parseFloat(po);

  konversi_pi = Round(Math.pow(10, (pi-30)/10), 6); //dbm

  konversi = po/konversi_pi;

  document.getElementById("output").value = Round(10*Math.log(konversi)*Math.LOG10E, 6);
}

    // fromWatt
else if(satuan_po == "w" && satuan == "w" ){
        pi = document.getElementById("pi").value;
        pi = parseFloat(pi);

        po = document.getElementById("po").value;
        po = parseFloat(po);
        
        x = parseFloat(po/pi);

        document.getElementById("output").value = Round(10*Math.log(x)*Math.LOG10E, 5);
    }

// MW -> MW
else if(satuan_po == "mw" && satuan == "mw" ){
  pi = document.getElementById("pi").value;
  pi = parseFloat(pi);
  pip = pi/1000;

  po = document.getElementById("po").value;
  po = parseFloat(po);
  pop = po/1000;

  x = parseFloat(pop/pip);
 
  document.getElementById("output").value = Round(10*Math.log(x)*Math.LOG10E, 5);
}

// MW -> W
else if(satuan_po == "mw" && satuan == "w" ){
  pi = document.getElementById("pi").value;
  pi = parseFloat(pi);

  po = document.getElementById("po").value;
  po = parseFloat(po);
  pop = po/1000;

  x = parseFloat(pop/pi);

  document.getElementById("output").value = Round(10*Math.log(x)*Math.LOG10E, 5);
}

// W -> MW
else if(satuan_po == "w" && satuan == "mw" ){
  pi = document.getElementById("pi").value;
  pi = parseFloat(pi);
  pip = pi/1000;

  po = document.getElementById("po").value;
  po = parseFloat(po);

  x = parseFloat(po/pip);

  document.getElementById("output").value = Round(10*Math.log(x)*Math.LOG10E, 5);
}

// OUTPUT MW -> INPUT DBW
else if(satuan_po == "mw" && satuan == "dbw" ){
  pi = document.getElementById("pi").value;
  pi = parseFloat(pi);
  pip = Round(Math.pow(10, pi/10), 6);

  po = document.getElementById("po").value;
  po = parseFloat(po);
  pop = po/1000;

  x = parseFloat(pop/pip);

  document.getElementById("output").value = Round(10*Math.log(x)*Math.LOG10E, 5);
}

// OUTPUT MW -> INPUT DBM
else if(satuan_po == "mw" && satuan == "dbw" ){
  pi = document.getElementById("pi").value;
  pi = parseFloat(pi);
  pip = Round(Math.pow(10, (pi-30)/10), 6);

  po = document.getElementById("po").value;
  po = parseFloat(po);
  pop = po/1000;

  x = parseFloat(pop/pip);

  document.getElementById("output").value = Round(10*Math.log(x)*Math.LOG10E, 5);
}

// OUTPUT DBW -> INPUT MW
else if(satuan_po == "dbw" && satuan == "mw" ){
  pi = document.getElementById("pi").value;
  pi = parseFloat(pi);
  pip = pi/1000;

  po = document.getElementById("po").value;
  po = parseFloat(po);
  pop = Round(Math.pow(10, po/10), 6);

  x = parseFloat(pop/pip);

  document.getElementById("output").value = Round(10*Math.log(x)*Math.LOG10E, 5);
}

// OUTPUT DBM -> INPUT MW
else if(satuan_po == "dbw" && satuan == "mw" ){
  pi = document.getElementById("pi").value;
  pi = parseFloat(pi);
  pip = pi/1000;

  po = document.getElementById("po").value;
  po = parseFloat(po);
  pop = Round(Math.pow(10, (po-30)/10), 6);

  x = parseFloat(pop/pip);

  document.getElementById("output").value = Round(10*Math.log(x)*Math.LOG10E, 5);
}
}

