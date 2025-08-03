import express from 'express'
const app = express()
app.get('/' , (req,res)=>{
    res.send("server is ready")
})
  const jokes = [
  {
    id: 1,
    title: "JavaScript Timeout",
    joke: "Why did the JavaScript developer go broke? Because he kept using setTimeout on his salary!"
  },
  {
    id: 2,
    title: "Undefined Love",
    joke: "I asked my crush if she likes me. She said, 'undefined'."
  },
  {
    id: 3,
    title: "Promise Issues",
    joke: "Why do JavaScript promises always fail at relationships? Because they never settle."
  },
  {
    id: 4,
    title: "Scope It Out",
    joke: "I told a variable a joke in private, but it didn't laugh — it was out of scope."
  },
  {
    id: 5,
    title: "null vs undefined",
    joke: "Why was 'null' so chill? Because he knew he was nothing!"
  },
  {
    id: 6,
    title: "Callback Confusion",
    joke: "I tried to write a joke about callbacks, but by the time it ran, nobody cared anymore."
  },
  {
    id: 7,
    title: "Event Loop",
    joke: "Why don't JavaScript developers sleep? Because the event loop never lets them rest!"
  },
  {
    id: 8,
    title: "Falsy Humor",
    joke: "0, null, undefined, false, NaN, and an empty string walk into a bar. The bartender says, 'Who's truthy?'"
  },
  {
    id: 9,
    title: "Array Party",
    joke: "Why did the array break up with the object? Because it found it too keyed up!"
  },
  {
    id: 10,
    title: "Strictly Funny",
    joke: "'use strict'; — because JavaScript needed discipline!"
  }
];
app.get('/api/jokes',(req,res)=>{
  
    res.send(jokes)
})



app.listen(3000,(req,res)=>{
    console.log("http://localhost:3000")
})