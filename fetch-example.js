const url = "./api/peoples.json";

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      displayItems(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
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
