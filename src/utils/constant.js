export const netflixLogo = "/MOVIESTREAM.png";

export const avatar =
  "https://i.pinimg.com/736x/48/d3/03/48d3030d33beb3991a9a219a3e8b160c.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const IMG_Background =
  "/theatre.jpg";

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
