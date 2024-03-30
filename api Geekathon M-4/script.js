const url =
  "https://indeed12.p.rapidapi.com/jobs/search?query=manager&location=chicago&page_id=1&fromage=3&radius=50";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c6b77b25a9msh4fe51e21727aad3p171430jsn50b8fc836df7",
    "X-RapidAPI-Host": "indeed12.p.rapidapi.com",
  },
};

async function getJobs() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getJobs();
