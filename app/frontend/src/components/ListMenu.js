import React from "react";

import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const ListMenu = (props) => {

    const [cookies, setCookie, removeCookie] = useCookies(['session']);
    const session = cookies['session'];

    //EXTRAER LISTA DE LA BD
    const [date, setDate] = useState({
        year: '',
        month: '',
        day: ''
    });

    useEffect(() => {
        fetch('http://127.0.0.1:8000/list?id=' + props.id)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            let yyyy = data.created_at.substring(0,4);
            let mm = data.created_at.substring(5,7);
            switch(mm) {
                case '01':
                    mm = 'enero';
                    break;
                case '02':
                    mm = 'febrero';
                    break;
                case '03':
                    mm = 'marzo';
                    break;
                case '04':
                    mm = 'abril';
                    break;
                case '05':
                    mm = 'mayo';
                    break;
                case '06':
                    mm = 'junio';
                    break;
                case '07':
                    mm = 'julio';
                    break;
                case '08':
                    mm = 'agosto';
                    break;
                case '09':
                    mm = 'septiembre';
                    break;
                case '10':
                    mm = 'octubre';
                    break;
                case '11':
                    mm = 'noviembre';
                    break;
                case '12':
                    mm = 'diciembre';
                    break;
                default:
                    mm = 'mes indefinido';
                    break;
            }
            let dd = data.created_at.substring(8,10);
            if (dd.substring(0,1) == '0') dd = dd.substring(1,2);
            setDate({
                year: yyyy,
                month: mm,
                day: dd
            });
          });
    }, [])

    if (session != undefined && session.user_id == props.creator_id) {
        return(
            <>
                    <div class="col-6">
                        <p>Lista creada por <a href={"/user?id=" + props.creator_id}>tí</a> el {date.day} de {date.month} de {date.year}</p>
                    </div>
                    <div class="col-6 text-end">
                        <a class="btn bg-dark text-white" href={"/edit-list?id=" + props.id}>Editar lista</a>
                    </div>
            </>
        );
    } else {
        return(
            <>
                    <div class="col-12">
                        <p>Lista creada por <a href={"/user?id=" + props.creator_id}>{props.username}</a> el {date.day} de {date.month} de {date.year}</p>
                    </div>
            </>
        );
    }
}

export default ListMenu;