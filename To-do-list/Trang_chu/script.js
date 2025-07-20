const add = document.getElementById("add");
add.addEventListener("click", function () {
  const tablebody = document.getElementById("body");

  const newrow = document.createElement("tr"); // tao dong moi
  const newtarget = document.createElement("td"); //tao o thuoc dong
  //tao o input
  const target = document.createElement("input");
  target.type = "text";
  //tao nut xoa
  const erasebutton = document.createElement("td");
  const erase = document.createElement("button");
  erase.textContent = "X";
  erase.style.color = "red";
  erase.style.fontWeight = "bold";
  erasebutton.appendChild(erase);
  //gan thong tin va nut xoa vao dong moi
  newtarget.appendChild(target);
  newrow.appendChild(newtarget);
  newrow.appendChild(erasebutton);
  //gan dong moi vao table
  tablebody.appendChild(newrow);

  target.focus();
  //ham event an enter
  target.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const value = target.value.trim();
      if (value === "") {
        return;
      } else {
        newtarget.textContent = value;
      }
    }
  });
  //ham event xoa dong
  erase.addEventListener("click", function () {
    tablebody.removeChild(newrow);
  });
});
