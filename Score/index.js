window.addEventListener('DOMContentLoaded', ()=>{
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));
    var puntajeScore = localStorage.getItem('countScore');

    for (let i = 0; i < usuarios.length; i++) {

        tabla.innerHTML+=`
    <tr>
      <th>${i+1}</th>
      <th>${usuarios[i]['user']}</th>
      <th>${usuarios[i]['score']}</th>
    </tr>
    `
    }
});
