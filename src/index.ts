import express from "express";
class App {
  public application : express.Application;
  constructor(){
    this.application = express();
  }
}

const app = new App().application;

app.get("/",(req : express.Request , res : express.Response) =>{
  res.send("Hello World!");
})

app.listen(3000,()=>console.log("server init"));