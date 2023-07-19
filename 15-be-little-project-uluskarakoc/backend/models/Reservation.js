import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  guestName: {
    type: String,
    required: true,
  },
  roomNumber: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
  checkInDate: {
    type: Date,
    default: () => new Date(),
  },
  checkOutDate: {
    type: Date,
    default: () => new Date(),
  },
});
const ReservationModel = new mongoose.model("Reservation", reservationSchema);
export default ReservationModel;
