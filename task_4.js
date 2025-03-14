const express = require("express");
const app = express();

const port = 4444; 

const missions =[
    {
    id: "1",
    missionname:"Able 1",
    astronaut:["abdallah","fares","eren","Ice Bear"],
    progress:90,
    },
    {
        id: "2",
        missionname:"the mission",
        astronaut:["no one","all in one"],
        progress:30,
        }
]

app.use(express.json())

app.post("/mission", function(req, res) {
    const data =req.body;
    data.astronaut=JSON.parse(data.astronaut);
    missions.push(data)
    res.send("create mission");
});

app.get("/missions", function(req, res) {
    res.send(missions); 
});

app.get("/mission/:id", function(req, res) {
    const paramsid=req.params.id; //string
    for(let i=0;i<missions.length;i++)
    {
        if(paramsid===missions[i].id)
        {
            res.send(missions[i]);
        }
    }
    res.send("mission not found"); 
});

app.put("/mission", function(req, res) {
    const data=req.body;

    for(let i=0;i<missions.length;i++)
    {
        if(data.id===missions[i].id)
        {
            missions[i]=data;
            res.send("data updated")
        }
    }

});

app.delete("/mission", function(req, res) {
    const paramsid=req.params.id;
    for(let i=0;i<missions.length;i++)
    {
        if(paramsid===missions[i].id)
        {
           missions.splice[i,1];
           res.send("mission deleted");
        }
    }
     

});

app.listen(port, function () {
    console.log("running on 4444");
});
