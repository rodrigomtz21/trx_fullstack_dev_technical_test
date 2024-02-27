import { database, firestoreDatabase } from "../lib/firebaseLib.js";
import { onValue, set, push, ref, child, update, remove, equalTo, query, orderByChild, limitToLast, orderByValue, orderByKey } from "firebase/database";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

class VehicleService {
    constructor() {
        this.database = database;
        this.firestoreDatabase = firestoreDatabase;
        this.VehiclesRef = ref(this.database, 'vehicles');
    }

    getAll() {
        const promise = new Promise((resolve, reject) => {
            onValue(this.VehiclesRef, (snapshot) => {
                const data = snapshot.val();
                resolve(data);
            }, {
                onlyOnce: true
            });
        });

        return promise;
}

    addVehicle(vehicle) {
        const newVehicleRef = push(this.VehiclesRef);
        
        return set(newVehicleRef, vehicle);
    }

    updateVehicle(vehicle, id) {
        const newRef  = ref(this.database, `/vehicles/${id}`);
        
        return update(newRef, vehicle);
    }

    removeVehicle(id) {
        const newRef  = ref(this.database, `/vehicles/${id}`);

        return remove(newRef);
    }

    async getVehicles() {
        const filterRef = query(this.VehiclesRef, orderByChild('MODEL'), equalTo('MKT'));
        return new Promise((resolve, reject) => {
            onValue(filterRef, (snapshot) => {
                const data = snapshot.val();
                resolve(data);
            });
        });
    }

}

export default VehicleService;
