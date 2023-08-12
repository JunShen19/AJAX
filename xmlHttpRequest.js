const btn = document.querySelector("button");
const url = "./api/peoples.json";
btn.addEventListener("click", () => getData(url));

// it will not cause web refresh!! (importance)
const getData = (url) => {
  // run in background
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const displayData = data
        .map((item) => {
          return `<p>${item.name}<p>`;
        })
        .join("");
      const element = document.createElement("div");
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        readyState: xhr.readyState,
      });
    }
  };
  xhr.send();
  // run in background
};

// it is asynchronous function, too.
setTimeout(() => {
  console.log("hello world");
}, 5000);
console.log("log first!!");
