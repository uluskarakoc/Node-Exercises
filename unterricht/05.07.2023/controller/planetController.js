import PlanetModel from "../models/planetModel.js"; // zum Zugriff auf die Datenbank bzw. Collection

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
//_______ Ende Zusatz

export const getPlanets = async (req, res) => {
  try {
    // Hier die Datenbank ansprechen:
    // Rufe alle Documents bzw. Planeten von mongoDb ab
    const planets = await PlanetModel.find();
    res.send(planets);
  } catch (error) {
    res.send(`Planeten können nicht geladen werden: ${error.messsage}`);
  }
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getPlanet = async (req, res) => {
  const planetName = req.params.name;

  try {
    const planet = await PlanetModel.find({ name: planetName });

    const planet_caseInsensitiv = await PlanetModel.find({
      name: new RegExp(planetName, "i"),
    });

    if (planet_caseInsensitiv.length !== 0) {
      res.send(planet_caseInsensitiv);
    } else {
      res.send(`Planet mit Namen "${planetName}" nicht gefunden`);
    }
  } catch (error) {
    res.send(`Fehler bei der Suche: ${error.message}`);
  }
};

export const postPlanet = async (req, res) => {
  const planetData = req.body;

  try {
    const newPlanet = new PlanetModel(planetData);
    await newPlanet.save();
    req.send(`Folgender Planet hinzugefügt ${JSON.stringify(newPlanet)}`);
  } catch (error) {
    res.send(`Hinzufügen fesgesclagen ${error.message}`);
  }
};

export const deletePlanet = async (req, res) => {
  let planetId = req.params.id;
  try {
    const deletedPlanet = await PlanetModel.findByIdAndDelete(planetId);
    res.send(`${deletedPlanet} wurde gelöscht`);
  } catch (error) {
    res.send(`Planet mit der ID ${planetId} konnte nicht gelöscht werden.`);
  }
};

export const patchPlanet = async (req, res) => {
  const planetId = req.params.id;
  const updatedFieldsObject = req.body;

  try {
    const updatedPlanet = await PlanetModel.findByIdAndUpdate(planetId,updatedFieldsObject);
  } catch (error) {
    console.log(error.message);
  }
};
