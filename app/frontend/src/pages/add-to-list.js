import React from "react";

import { useState } from "react";
import { useCookies } from 'react-cookie';

const AddToList = () => {

    // get parameters

    const queryParameters = new URLSearchParams(window.location.search)
    const item_id = queryParameters.get("item_id")

    const [cookies, setCookie, removeCookie] = useCookies(['session']);
    const session = cookies['session'];

    // add to list

    const [formData, setFormData] = useState({
        item: '',
        list: '',
        sender: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleAdd = (e) => {
        e.preventDefault();

        formData.item = item_id;
        formData.sender = session.user_id;

        console.log(formData);

        fetch('http://127.0.0.1:8000/add-to-list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message);
            if (data.hasOwnProperty('item')) {
                setFormData({
                    item: '',
                    list: '',
                    sender: ''
                });
                window.location.href = '/item?id=' + data.item;
            }
        })
        .catch((error) => {
            alert(error);
        });
    }

    return(
        <main class="m-5">
                <div class="row mb-3 text-center">
                    <div class="col-lg-3 col-md-2"></div>

                    <div class="col-lg-6 col-md-8">
                        <h3 class="mb-5 text-dark">Añadir el ítem a una lista</h3>

                        <form onSubmit={handleAdd}>
                            <div class="row mb-5 p-0 text-start">
                                <label for="list" class="mb-2 p-1">Nombre de la lista:</label>
                                <input name="list" type="text" class="form-control" value={formData.list} onChange={handleInputChange} required/>
                            </div>

                            <div class="row m-5"></div>

                            <div class="row p-0 mb-5">
                                <div class="col-6 p-0 text-start">
                                    <a class="btn w-50 border border-1 border-dark rounded boton-volver text-dark" href={"/item?id=" + item_id}>Volver</a>
                                </div>
                                <div class="col-6 p-0 text-end">
                                    <button type="submit" class="btn w-50 bg-dark text-white">Añadir</button>
                                </div>                                
                            </div>
                        </form>

                        <br/><br/><br/>
                    </div>

                    <div class="col-lg-3 col-md-2"></div>
                </div>
            </main>
    );
};

export default AddToList;