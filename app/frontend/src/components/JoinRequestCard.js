import React from "react";

import { useState, useEffect } from "react";

const JoinRequestCard = (props) => {

    //EXTRAER LISTA DE LA BD

    const [request, setRequest] = useState([])
    const [date, setDate] = useState({
        day: '',
        month: '',
        year: '',
        time: ''
    })
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/request?id=' + props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setRequest(data);

            let yyyy = data.created_at.substring(0,4);
            let mm = data.created_at.substring(5,7);
            let dd = data.created_at.substring(8,10);
            let t = data.created_at.substring(11,16);
            setDate({
                day: dd,
                month: mm,
                year: yyyy,
                time: t
            })

            fetch('http://127.0.0.1:8000/user?id=' + data.user)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setUser(data);
            });
          });
    }, ['http://127.0.0.1:8000/request?id=' + props.id])


    // aceptar

    const handleAccept = () => {
        fetch('http://127.0.0.1:8000/accept-request?id=' + props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.modified > 0) {
                alert('Se ha aceptado la solicitud del usuario "' + user.name + '"');
                window.location.href = "/join-requests?group_id=" + request.group;
            }
            else {alert('No se ha podido aceptar la solicitud.');}
          });
    }


    // rechazar

    const handleReject = () => {
        fetch('http://127.0.0.1:8000/reject-request?id=' + props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.modified > 0) {
                alert('Se ha eliminado la solicitud.');
                window.location.href = "/join-requests?group_id=" + request.group;
            }
            else {alert('No se ha podido eliminar la solicitud.');}
          });
    }

    return(
                            <div class="scrollable-card my-card w-100">
                                <div class="card">
                                        <div class="card-body d-flex flex-row text-start">
                                            <div class="col-5"><h5 class="card-title">{user.name}</h5></div>
                                            <div class="col-3"><p class="card-text">{date.day}/{date.month}/{date.year} {date.time}</p></div>
                                            <div class="col-2"><button class="btn w-50 bg-dark text-white" onClick={handleAccept}>Aceptar</button></div>
                                            <div class="col-2"><button class="btn w-50 bg-white text-dark border border-1 border-dark" onClick={handleReject}>Rechazar</button></div>
                                        </div>
                                </div>
                            </div>
    );
};

export default JoinRequestCard;