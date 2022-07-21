import { getClietnt, editClient } from './API.js'
import { showAlert, validate } from './funciones.js';

(function () {

    //Form Fields
    const nameiInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#telefono');
    const enterpriseInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');


    document.addEventListener('DOMContentLoaded', async () => {

        const urlParams = new URLSearchParams(window.location.search);

        const idClient = parseInt(urlParams.get('id'));

        const client = await getClietnt(idClient);
        showClient(client);

        //Submit form
        const form = document.querySelector('#formulario');
        form.addEventListener('submit', validateClient);

    });


    function showClient(client) {
        const { name, email, phone, enterprise, id } = client;

        nameiInput.value = name;
        emailInput.value = email;
        phoneInput.value = phone;
        enterpriseInput.value = enterprise;
        idInput.value = id;
    }


    function validateClient(e) {
        e.preventDefault();
        
        const client = {
            name: nameiInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            enterprise: enterpriseInput.value,
            id: parseInt(idInput.value) 
        }


        if (validate(client)) {
            //Show Message
            showAlert('Todos los campos son obligatorios');
            return;
        }

        //Override the object
        editClient(client);
    }



})();