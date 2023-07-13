import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    table: { 
        type: mongoose.Schema.Types.ObjectId, 
        
        // 'ref' sagt mongoose, dass sich das Feld 'table'
        // auf ein Dokument von 'Table' bzw. der tables-collection
        // bezieht
        ref: 'Table'
     },
    foodItems: [{ 
        name: { 
            type: String, 
            required: true 
        }, 
        price: {
            type: Number, 
            required: true 
        } 
    }],
    orderTime: {
        type: Date,
        // default: Date.now()
        // - Date.now() muss  in eine Funktion gepackt,
        // (oder ohne Klammern ausgeführt) werden
        // - Ansonsten wird der Zeitpunkt der Schema-Erstellung
        // bzw. Code-Ausführung als Datum genommen

        default: () => Date.now()
        // Jetzt geben wir mongoose eine Funktion,
        // die mongoose aufruft, wenn wir ein neues Dokument erstellen
    }
})


orderSchema.virtual('totalPrice').get(function () {
    return this.foodItems.reduce((total, item) => total + item.price, 0);
});


export const OrderModel = mongoose.model("Order", orderSchema);