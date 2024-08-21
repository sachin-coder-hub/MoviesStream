export const netflixLogo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const avatar =
  "https://i.pinimg.com/736x/48/d3/03/48d3030d33beb3991a9a219a3e8b160c.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_API,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const IMG_Background =
  "https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg";

export const IMG_SearchPageBg =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const OPENAI_API = process.env.REACT_APP_OPENAI_API;
// const gptQuery =
//   "Act as a movie recomendation system and suggest some movies to the given query: " +
//   searchText.current.value +
//   "Only give me name of 5-8 movies like example: Sholay, Gadar, Don, Golmaal, Dabang";
// const gptResults = await client.chat.completions.create({
//   messages: [{ role: "user", content: gptQuery }],
//   model: "gpt-3.5-turbo",
// });
// console.log(gptResults.choices);
