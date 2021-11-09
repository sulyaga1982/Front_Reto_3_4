function traerInformacionCategorias(){
    $.ajax({
        url:"http://152.70.212.87:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategorias(respuesta);
        }
    });
}

function pintarRespuestaCategorias(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionCategorias("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarCategorias("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoCategorias").html(myTable);
}

function guardarInformacionCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://152.70.212.87:8080/api/Category/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function actualizarInformacionCategorias(idElemento){
    let myData={
        id:idElemento,
        name:$("#Cname").val(),
        description:$("#Cdescription").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.212.87:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCategorias").empty();
            $("#id").val("");
            $("#Cname").val("");
            $("#Cdescripcion").val("");
            traerInformacionCategorias();
            alert("se ha Actualizado correctamente Cliente")
        }
    });

}

function borrarCategorias(idElemento){
    let myData={
        id:idElemento
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.212.87:8080/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCategorias").empty();
            traerInformacionCategorias();
            alert("Se ha Eliminado.")
        }
    });

}

///////////////////Motorbikes//////////////////////////////////////

function traerInformacionMotorbikes(){
    $.ajax({
        url:" http://152.70.212.87:8080/api/Motorbike/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMotorbikes(respuesta);
        }
    });
}

function pintarRespuestaMotorbikes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionMotorbikes("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarMotorbikes("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMotorbikes").html(myTable);
}

function guardarInformacionMotorbikes(){
    let var3 = {
        name:$("#Mname").val(),
        brand:$("#Mbrand").val(),
        year:$("#Myear").val(),
        description:$("#Mdescription").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://152.70.212.87:8080/api/Motorbike/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function actualizarInformacionMotorbikes(idElemento){
    let myData={
        id:idElemento,
        name:$("#Mname").val(),
        brand:$("#Mbrand").val(),
        year:$("#Myear").val(),
        description:$("#Mdescription").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.212.87:8080/api/Motorbike/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMotorbikes").empty();
            $("#id").val("");
            $("#name").val("");
            $("#brand").val("");
            $("#year").val("");
            traerInformacionMotorbikes();
            alert("se ha Actualizado correctamente Cliente")
        }
    });

}

function borrarMotorbikes(idElemento){
    let myData={
        id:idElemento
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.212.87:8080/api/Motorbike/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMotorbikes").empty();
            traerInformacionMotorbikes();
            alert("Se ha Eliminado.")
        }
    });

}

//////////////////////Clientes//////////////////////////////////

function traerInformacionClientes(){
    $.ajax({
        url:"http://152.70.212.87:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionClientes("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarClientes("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClientes").html(myTable);
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#Clemail").val(),
        password:$("#Clpassword").val(),
        name:$("#Clname").val(),
        age:$("#Clage").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://152.70.212.87:8080/api/Client/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function actualizarInformacionClientes(idElemento){
    let myData={
        id:idElemento,
        email:$("#Clemail").val(),
        password:$("#Clpassword").val(),
        name:$("#Clname").val(),
        age:$("#Clage").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.212.87:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoClientes").empty();
            $("#id").val("");
            $("#email").val("");
            $("#password").val("");
            $("#name").val("");
            $("#age").val("");
            traerInformacionClientes();
            alert("se ha Actualizado correctamente Cliente")
        }
    });

}

function borrarClientes(idElemento){
    let myData={
        id:idElemento
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.212.87:8080/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoClientes").empty();
            traerInformacionClientes();
            alert("Se ha Eliminado.")
        }
    });

}

//////////////////////Mensajes//////////////////////////////////

function traerInformacionMensajes(){
    $.ajax({
        url:"http://152.70.212.87:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    });
}

function pintarRespuestaMensajes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionMensajes("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarMensajes("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMensajes").html(myTable);
}

function guardarInformacionMensajes(){
    let var5 = {
        messageText:$("#MmessageText").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        
        url:"http://152.70.212.87:8080/api/Message/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function actualizarInformacionMensajes(idElemento){
    let myData={
        id:idElemento,
        messageText:$("#MmessageText").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.212.87:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensajes").empty();
            $("#id").val("");
            $("# messageText ").val("");
            traerInformacionMensajes();
            alert("se ha Actualizado correctamente Cliente")
        }
    });

}

function borrarMensajes(idElemento){
    let myData={
        id:idElemento
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.212.87:8080/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensajes").empty();
            traerInformacionMensajes();
            alert("Se ha Eliminado.")
        }
    });

}

//////////////////////Reservaciones//////////////////////////////////

function traerInformacionReservaciones(){
    $.ajax({
        url:"http://152.70.212.87:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservaciones(respuesta);
        }
    });
}

function pintarRespuestaReservaciones(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";

        myTable+="<td> <button onclick=' actualizarInformacionReservaciones("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarReservaciones("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoReservaciones").html(myTable);
}

function guardarInformacionReservaciones(){
    let var6 = {
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        status:$("#Rstatus").val()

        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var6),
        
        url:"http://152.70.212.87:8080/api/Reservation/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function actualizarInformacionReservaciones(idElemento){
    let myData={
        id:idElemento,
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        status:$("#Rstatus").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.212.87:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoReservaciones").empty();
            $("#id").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#status").val("");

            traerInformacionReservaciones();
            alert("se ha Actualizado correctamente Cliente")
        }
    });

}

function borrarReservaciones(idElemento){
    let myData={
        id:idElemento
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://152.70.212.87:8080/api/Reservation/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoReservaciones").empty();
            traerInformacionReservaciones();
            alert("Se ha Eliminado.")
        }
    });

}



