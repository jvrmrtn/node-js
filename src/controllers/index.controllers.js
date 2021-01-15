const controller = {};

controller.index = (req, res) => {
  res.render('index', {
    titulo: 'mi titulo dinamico en rutas desde controllers.',
  });
};

controller.servicios = (req, res) => {
  res.render('servicios', {
    tituloServicios: 'mi titulo dinámico en servicios desde controllers.',
  });
};

module.exports = controller;
