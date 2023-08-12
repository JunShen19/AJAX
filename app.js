const url = "./api/peoples.json";

const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data);
  } catch (err) {
    console.log(err);
  }
});

const displayItems = (data) => {
  const displayData = data
    .map((item) => {
      return `<p>${item.name}<p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
