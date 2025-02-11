import express, { query } from "express";
import developer from "./devloper.json" assert { type : "json" };

const app = express();


app.get('/developer', (req, res) => {
    console.info(req.query);
    let { limit, category } = req.query;
    limit = parseInt(limit) || 10;
  
    let dev = developer;
    if (category) {
      dev = dev.filter(item => item.category === category);
    }
  
    res.json(dev.slice(0, limit));
  });
  
  app.get('/developer/:id', (req, res) => {
    const develop = developer.find(d => d.id === parseInt(req.params.id));
    if (!develop) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json(develop);
  });






const serverPort = 3310;
app.listen(serverPort, () => {
  console.info(`Listening on port ${serverPort}`);
});
