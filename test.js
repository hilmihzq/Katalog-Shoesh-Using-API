fetch("https://the-sneaker-database.p.rapidapi.com/sneakers?limit=10", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "de8570b34cmshd207190a909f34ep1b9843jsn4fb9b5214191",
      "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching sneakers:", error);
  });
  