const url = "./api/peoples.json";

// fetch
fetch(url)
  .then((resp) => {
    // useful methods and prop
    // return promise
    // console.log(resp);
    return resp.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
