const controller = {};

const Mascotas = require('../models/mascota.model');

controller.mascotas = async (req, res) => {
  try {
    const arrayMascotasDB = await Mascotas.find();
    /* console.log(arrayMascotasDB); */

    res.render('mascotas', {
      arrayMascotas: arrayMascotasDB,
    });
  } catch (error) {
    console.log(error);
  }
};

controller.crear = (req, res) => {
  res.render('crear', {});
};

controller.mascotaNueva = async (req, res) => {
  const body = req.body;
  try {
    /* const mascotaDB = new Mascotas(body);
    await mascotaDB.save(); */

    await Mascotas.create(body);

    res.redirect('/mascotas');
  } catch (error) {
    console.log(error);
  }
};

controller.leer = async (req, res) => {
  const id = req.params.id;

  try {
    const mascotaDB = await Mascotas.findOne({ _id: id });
    console.log(mascotaDB);

    res.render('detalle', {
      mascota: mascotaDB,
      error: false,
    });
  } catch (error) {
    res.render('detalle', {
      error: true,
      mensaje: 'No se encuentra el id seleccionado.',
    });
  }
};

controller.borrar = async (req, res) => {
  const id = req.params.id;
  try {
    const mascotaDB = await Mascotas.findByIdAndDelete({ _id: id });

    res.json({
      estado: true,
      mensaje: 'Mascota eliminada.',
    });
  } catch (error) {
    console.log(error);
    res.json({
      estado: false,
      mensaje: 'La mascota no se pudo eliminar.',
    });
  }
};

controller.actualizar = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log(body);
  try {
    const mascotaDB = await Mascotas.findByIdAndUpdate(id, body, {
      useFindAndModify: false,
    });
    console.log(mascotaDB);

    res.json({
      estado: true,
      mensaje: 'Editado.',
    });
  } catch (error) {
    console.log(error);
    res.json({
      estado: false,
      mensaje: 'La mascota no se pudo actualizar.',
    });
  }
};

module.exports = controller;
