const url = 'http://localhost:4000/clientes';

//When it's created a new client
export const newClient = async client => {

    try {

        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
}


// Get all clients
export const getClients = async () => {

    try {
        const response = await fetch(url);
        const clients = await response.json();
        return clients;

    } catch (error) {
        console.log(error);
    }
}


//Delete a client
export const deleteClient = async id => {

    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
        })

    } catch (error) {
        console.log(error);
    }
}


//Get client for ID
export const getClietnt = async id => {

    try {
        const response = await fetch(`${url}/${id}`);
        const client = await response.json();
        return client;

    } catch (error) {
        console.log(error);
    }
}

//Update Client
export const editClient = async client => {

    try {
        await fetch(`${url}/${client.id}`, {
            method: 'PUT',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
}