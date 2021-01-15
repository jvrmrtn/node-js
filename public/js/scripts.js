const table = document.getElementById('table');

const deletePet = async (id) => {
  const req = await fetch(`/mascotas/${id}`, {
    method: 'DELETE',
  });

  const res = await req.json();

  if (res.estado) {
    location.reload();
  } else {
    console.log(res.estado);
  }
};

table.addEventListener('click', (e) => {
  if (e.target.classList.contains('button-delete')) {
    deletePet(e.target.dataset.id);
  }
});
