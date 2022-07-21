export function showAlert(message) {

    const alert = document.querySelector('.bg-red-100');

    if (!alert) {
        const alert = document.createElement('p');

        alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alert.innerHTML = `
            <strong class ="font-bold">Error!</strong>
            <span class ="block sm:inline">${message}</span>
        `;

        const form = document.querySelector('#formulario');
        form.appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}



export function validate(obj) {
    return !Object.values(obj).every(input => input !== '')
}