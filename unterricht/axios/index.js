import axios from "axios";

function fetchData() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      console.log(response.data);
    })

    .catch((error) => {
      console.log("es gab fehler", error);
    })
    .finally(() => {
      console.log("die anfrage wurde abgeschclosen!");
    });
}

fetchData();

async function fetchDataAwait() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(response.data);
  } catch (error) {
    console.log("Es gab einen Fehler!", error);
  } finally {
    console.log("Anfrage abgeschlossen!");
  }
}
fetchDataAwait();
