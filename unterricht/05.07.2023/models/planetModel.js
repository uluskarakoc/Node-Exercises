import mongoose from "mongoose";

const planetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  orderFromSun: Number,
  hasRings: Boolean,
  mainAtmosphere: [String],
  surfaceTemperature: Object,
});

const PlanetModel = mongoose.model("Planet", planetSchema);

export default PlanetModel;
