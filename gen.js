let number = 1

// BD, BN, B, BE, BI, C, CB, DI, F, GU, H, P, HA, SD, IX, X

// BassDrum, Banjo, Base, Bell, Bit, Chime, Cow Bell, Didgeridoo, Flute, Guitar, Harp, Pling, Hat, Snare Drum, Iron Xylophone, Xylophone
function generate() {
  let generating = true;
  let i = 0;
  let txt = "";
  while(generating) {
    i++;

    console.log(document.getElementById(`Instrument${i}`).value)
    console.log(document.getElementById(`Pitch${i}`).value)
    txt += `${document.getElementById(`Instrument${i}`).value}:${document.getElementById(`Pitch${i}`).value};`
    if(i >= number) {
      generating = false; 
    }
  }
  document.getElementById('generatedId').innerHTML = txt;
}
function newn() {
  number++;
  
  let instrs = document.body.getElementsByClassName("instruments");
  let html = instrs.innerHTML;
  try {
    instrs.innerHTML = html + `<br><span class="font-consolas" id="Note${number}"><select name="Instrument${number}" id="Instrument${number}">
      <option value="BD">Bass Drum</option>
      <option value="BN">Banjo</option>
      <option value="B">Base</option>
      <option value="BE">Bell</option>
      <option value="BI">Bit</option>
      <option value="C">Chime</option>
      <option value="CB">Cow Bell</option>
      <option value="DI">Didgeridoo</option>
      <option value="F">Flute</option>
      <option value="HU">Guitar</option>
      <option value="H">Harp</option>
      <option value="P">Pling</option>
      <option value="HA">Hat</option>
      <option value="SD">Snare Drum</option>
      <option value="IX">Iron Xylophone</option>
      <option value="X">Xylophone</option>
    </select> <input type="text" name="Pitch${number}" id="Pitch${number}" placeholder="Pitch"> <button class="removebtn" onclick="remove(${number})">X</button></span>`
  } catch(err) {
    console.log(err)
  }
}
   
function remove(x) {
  alert("nope you cant do that")
}
