if (localStorage.getItem("seats12") === null) {
  localStorage.setItem("seats12", "[]");
} else {
  let item = JSON.parse(localStorage.getItem("seats12"));
  for (let key in item) {
    // (item[key]);
    let id = document.getElementById(item[key]);
    let para = id.childNodes[1];
    let para_2 = id.childNodes[3];
    id.style.backgroundColor = "red";
    para_2.style.display = "none";
    para.style.display = "block";
    id.style.pointerEvents = "none";
  }
}


const onSeat = (event) => {
  event.style.backgroundColor = "green";
  let para = event.childNodes[3];
  para.style.display = "block";
  let old_data = JSON.parse(localStorage.getItem("seats12"));
  old_data.push(event.getAttribute("id"));
  localStorage.setItem("seats12", JSON.stringify(old_data));
};


