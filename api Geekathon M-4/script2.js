const url = "https://youtube86.p.rapidapi.com/api/youtube/links";
const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-Forwarded-For": "70.41.3.18",
    "X-RapidAPI-Key": "c6b77b25a9msh4fe51e21727aad3p171430jsn50b8fc836df7",
    "X-RapidAPI-Host": "youtube86.p.rapidapi.com",
  },
  body: {
    url: "https://www.youtube.com/watch?v=a9LDPn-MO4I",
  },
};

async function x() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
x();
