let a, b, c, data, couname, ab, ac, bc, i;
let countries = [];
let input = [];
let index, li;
let coun;

async function fetchData() {
  coun = document.getElementById("cou");
  try {
    a = document.getElementById("countryname").value.toLowerCase();
    b = a
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

    couname = await fetch(
      `https://countriesnow.space/api/v0.1/countries/states`
    );

    data = await couname.json();

    c = data.data.map((a) => a).map((a) => a.name);
    for (let i = 0; i < c.length; i++) {
      countries.push(c[i]);
    }
    function findWordIndex(inputword) {
      index = countries.indexOf(inputword);
      return index;
    }
    findWordIndex(b);

    if (index < 0) {
      coun.textContent = `Sorry please enter a valid country name`;
      list.textContent = " ";
    }

    ab = data.data.map((a) => a);

    bc = Object.values(ab).map((a) => a.states);

    bcd = bc[index]

      .map((a) => a)
      .map((b) => {
        return b.name;
      });

    coun.textContent = b;
    let sname = document.getElementById("list");
    sname.textContent = "";
    for (i = 0; i < bcd.length; ++i) {
      li = document.createElement("li");
      li.innerText = bcd[i];
      sname.appendChild(li);
    }

    if (!couname.ok) {
      throw new Error("Could not fetch resource");
    }
  } catch (error) {
    console.error(error);
  }
}
