// let x = "frontend developer"

// indeed api----------------------------------
// const url =
//   "https://indeed12.p.rapidapi.com/jobs/search?query=manager&location=India&page_id=1&fromage=3&radius=50";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "c6b77b25a9msh4fe51e21727aad3p171430jsn50b8fc836df7",
//     "X-RapidAPI-Host": "indeed12.p.rapidapi.com",
//   },
// };

// async function getJobs() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);

//     // let a = document.createElement("a");
//     // // a.href = `${result.}`

//   } catch (error) {
//     console.error(error);
//   }
// }

// getJobs();

// Linked Api - https://rapidapi.com/jaypat87/api/linkedin-jobs-search
// -----------------------------------------
// const url = 'https://linkedin-jobs-search.p.rapidapi.com/';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': 'b8bb314eb8msh5bcb832919161fdp12af72jsn4c6c655daa90',
// 		'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
// 	},
// 	body: {
// 		search_terms: 'python programmer',
// 		location: 'Chicago, IL',
// 		page: '1'
// 	}
// };

// async function getJobs() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getJobs();



// final
// JSearch api - https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch ---------------------------------------------------
// const url = 'https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b8bb314eb8msh5bcb832919161fdp12af72jsn4c6c655daa90',
// 		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
// 	}
// };

// let jobSuggestionContainer = document.getElementById("jobSuggestionContainer");

// async function getJobs() {
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	// console.log(result);
//     let searchQuery = `${result.parameters.query}`;
//     console.log("searchQuery",searchQuery);
//     // console.log(result);
//     let companyName = `${result.data[0].employer_name}`
//     console.log("companyName",companyName);
//     let logoUrl = `${result.data[0].employer_logo}`;
//     console.log("logoUrl",logoUrl);
//     let job_publisher = `${result.data[0].job_publisher}`;
//     console.log("job_publisher",job_publisher);
//     let job_employment_type = `${result.data[0].job_employment_type}`;
//     console.log("job_employment_type",job_employment_type);
//     let job_title = `${result.data[0].job_title}`;
//     console.log("job_title",job_title);
//     let job_apply_link = `${result.data[0].job_apply_link}`;
//     console.log("job_apply_link",job_apply_link);
//     let job_description = `${result.data[0].job_description}`;
//     console.log("job_description",job_description);
//     let job_is_remote = `${result.data[0].job_is_remote}`;
//     console.log("job_is_remote",job_is_remote);

//     let div = document.createElement("div");
//     div.innerHTML = `
//     <span class="flex gap-4">
//         <img src="${logoUrl}" class="w-[48px] h-[48px]" alt="${companyName} Logo">
//         <h1 class="text-2xl font-bold>${job_title}</h1>
//     </span>
//     <h1>${companyName}</h1>
//     <a href="${job_apply_link}" class="border-[1px] border-black rounded-lg px-3 py-[2px] hover:cursor-pointer">Apply</a>
//     <p>${job_description}</p>
//     `;
//     div.style.display = "flex";
//     div.style.flexDirection = "column";
//     div.style.gap = "10px";
    
//     // let job_offer_expiration_datetime_utc = `${result.data[1].job_offer_expiration_datetime_utc}`;
//     // console.log("",);
//     // let job_is_remote = `${result.data[1].job_is_remote}`;
//     // let job_is_remote = `${result.data[1].job_is_remote}`;
//     jobSuggestionContainer.append(div);

// } catch (error) {
// 	console.error(error);
// }
// }
// getJobs();




// Gemini Api
let heading = ""

let jobSuggestionsDisplayContainer = document.getElementById("jobSuggestionsDisplayContainer");


import { GoogleGenerativeAI } from "@google/generative-ai";
    const API_KEY = "AIzaSyBIEScln1EtBCi61VYNPaogJ8U7Fe-LFEA";

    const genAI = new GoogleGenerativeAI(API_KEY);

let prompt = "";

async function Search(prompt,heading){
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const md = window.markdownit(); // Create a new instance of markdown-it
    // console.log(md.render(text));
    jobSuggestionsDisplayContainer.innerHTML = `<h1 id="jobSuggestionsDisplayContainerHeading" class="text-2xl font-bold text-blue-600">${heading}</h1><br>${md.render(text)}`;
    jobSuggestionsDisplayContainer.style.justifyContent = "center"
}

document.getElementById("jobSuggestionButton").addEventListener("click",()=>{
    // let skills_dsp = document.querySelectorAll(".skills-items");
    
    prompt = "";
    let skills_dsp = document.querySelectorAll(".skills-items .preview-item .preview-item-val");
    //   console.log(skills_dsp);
     heading = "Jobs Suggestion :-"
        skills_dsp.forEach(element=>{
            prompt = prompt + element.innerHTML +" ";
        })
        prompt += "  jobs suggestions with reference links"
        
         Search(prompt,heading);
    
         console.log(prompt);
        
})

document.getElementById("roadmapSuggestionButton").addEventListener("click",()=>{
        
    prompt = "";

    heading = "RoadMap with how you can enhance your skills :-"

    let skills_dsp = document.querySelectorAll(".skills-items .preview-item .preview-item-val");
    //   console.log(skills_dsp);
        skills_dsp.forEach(element=>{
            prompt = prompt + element.innerHTML +" ";
        })
        prompt += " Advance roadMap with these skils"
        
         Search(prompt,heading);
        
         console.log(prompt);
        
})















