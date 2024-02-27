import express from 'express';
import VehicleService from './services/vehicleService.js';
import bodyParser from 'body-parser';
var app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
const vehicleService = new VehicleService();

app.get('/vehicles', (req, res) => {
    vehicleService.getAll()
        .then(products => {
            res.json(products);
        })
        .catch(error => console.log(error));
});

app.post('/vehicles', (req, res) => {
    console.log(req.body);
    let vehicle = req.body.vehicle || {};
    vehicleService.addVehicle(vehicle)
        .then(() => {
            res.send("Write succeeded!");
        })
        .catch(error => console.log(error));
});

app.put('/vehicles/:id', (req, res) => {
    console.log(req.body);
    let id = req.params.id;
    let vehicle = req.body.vehicle || {};
    
    vehicleService.updateVehicle(vehicle, id)
        .then(() => {
            res.send("Update succeeded!");
        })
        .catch(error => console.log("error: ", error));
});

app.delete('/vehicles/:id', (req, res) => {
    let id = req.params.id;
    
    vehicleService.removeVehicle(id)
        .then(() => {
            res.send("Remove succeeded!");
        })
        .catch(error => console.log("error: ", error));
});

app.get('/vehicles/filter', (req, res) => {
    //console.log(vehicleService.getVehicles());
    vehicleService.getVehicles()
    .then(products => {
        res.json(products);
    })
    .catch(error => console.log(error));
});

app.listen(3000, () => {
    console.log("Vehicles service..");
})