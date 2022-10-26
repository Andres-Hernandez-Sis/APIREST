new gridjs.Grid({
    columns: ['Cliente id','Nombre', 'Telefono', 'Hora de Reservacion'],
    server: {
      url: 'http://localhost:8082/Cliente',
      then: data => data.map(cliente => 
        [cliente.id_cliente, cliente.nombre, cliente.telefono, cliente.hora_reservacion]
      )
    } 
}).render(document.getElementById("idWrapper"));