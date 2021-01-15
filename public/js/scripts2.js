console.log('hola');

const form = document.getElementById('form');

const updatePet = async (id, data) => {
  const req = await fetch(`/mascotas/${id}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });

  const res = await req.json();
  if (res.estado) {
    location.href = '/mascotas';
  } else {
    console.log(res.mensaje);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    name: e.target.name.value,
    description: e.target.description.value,
  };

  updatePet(e.target.dataset.id, data);
});
