require('dotenv').config();
const express = require("express");
const db = require("./db");

//creates instance of app
const app = express();


//define routes
// Get all services
//http://localhost:3006/master
app.get("/master", async (req, res) => {
    try {
        const results = await db.query("SELECT service FROM services");
        res.json({
            status: "success",
            results: results.rows.length,
            data: {
                services: results.rows,
            },
        });
    } catch(err) {
        console.log(err);
    }
});

// Get relevant community programs
//http://localhost:3006/master/foodHamper, http://localhost:3006/master/justice, etc
app.get("/master/:id", async (req, res) => {
    try {
        var results;
        switch(req.params.id) {
            case "foodHamper":
                results = await db.query("SELECT * FROM program_services WHERE service = 'Food Hamper'");
                break;
            case "justice":
                results = await db.query("SELECT * FROM program_services WHERE service = 'Justice'");
                break;
            case "addiction":
                results = await db.query("SELECT * FROM program_services WHERE service = 'Addiction Treatment'");
                break;
            case "job":
                results = await db.query("SELECT * FROM program_services WHERE service = 'Job Search'");
                break;
            case "shelter":
                results = await db.query("SELECT * FROM program_services WHERE service = 'Shelter Services'");
                break;
            case "violence":
                results = await db.query("SELECT * FROM program_services WHERE service = 'Domestic Violence'");
                break;
            case "disability":
                results = await db.query("SELECT * FROM program_services WHERE service = 'Physical Disability Assistance'");
                break;
            case "senior":
                results = await db.query("SELECT * FROM program_services WHERE service = 'Senior Support'");
                break;
            default:
        }
        //console.log(results.rows);
        res.json({
            status: "success",
            results: results.rows.length,
            data: {
                programs: results.rows,
            },
        });
    } catch(err) {
        console.log(err);
    }
});

// Get contact info for specific community program
//http://localhost:3006/program/rayofhope, http://localhost:3006/program/houseoffriendship, etc
app.get("/program/:id", async (req, res) => {
    try {
        var results;
        switch(req.params.id) {
            case "rayofhope":
                results = await db.query("SELECT * FROM program_contact WHERE program_name = 'Ray of Hope Community Centre'");
                break;
            case "houseoffriendship":
                results = await db.query("SELECT * FROM program_contact WHERE program_name = 'House of Friendship'");
                break;
            case "salvationarmy":
                results = await db.query("SELECT * FROM program_contact WHERE program_name = 'Salvation Army Kitchener'");
                break;
            case "wcswaterloo":
                results = await db.query("SELECT * FROM program_contact WHERE program_name = 'Women''s Crisis Services of Waterloo Region'");
                break;
            case "wcscambridge":
                results = await db.query("SELECT * FROM program_contact WHERE program_name = 'Women''s Crisis Services of Waterloo Region - Cambridge'");
                break;
            case "traverseindep":
                results = await db.query("SELECT * FROM program_contact WHERE program_name = 'Traverse Independence'");
                break;
            case "sevengen":
                results = await db.query("SELECT * FROM program_contact WHERE program_name = 'Healing of the Seven Generations'");
                break;
            case "workingcentre":
                results = await db.query("SELECT * FROM program_contact WHERE program_name = 'The Working Centre'");
                break;
            default:
        }
        //console.log(results.rows);
        res.json({
            status: "success",
            results: results.rows.length,
            data: {
                programs: results.rows,
            },
        });
    } catch(err) {
        console.log(err);
    }
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});