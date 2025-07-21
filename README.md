This repository documents my progress as I learn backend development with JavaScript, following the "Chai aur JavaScript Backend" playlist.

## Technologies

- Node.js
- Express.js
- MongoDB (planned)
- Mongoose (planned)

## Progress
 
# 📅 Day 1 – Setting Up Express Server & dotenv

## ✅ What I Did

- Initialized a Node.js project using:

  ```bash
  npm init -y
  ```

- Installed **Express** and **dotenv**:

  ```bash
  npm install express dotenv
  ```

---

## 🚀 Created a Basic Express Server

```js
// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

---

## 🔐 Managed Environment Variables Using dotenv

1. Created a `.env` file:

   ```env
   PORT=3000
   ```

2. Modified the server code to use the environment variable:

   ```js
   require('dotenv').config();
   const express = require('express');
   const app = express();

   app.get('/', (req, res) => {
     res.send('Hello World');
   });

   app.listen(process.env.PORT, () => {
     console.log(`Server is running on port ${process.env.PORT}`);
   });
   ```


## Future Projects

- My full-stack projects will be in a separate repository.
