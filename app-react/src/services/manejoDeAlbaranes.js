export function getUltimosAlbaranes() {
    return new Promise ((resolve, reject) => {
        fetch("/api/albaranes",
        {
            headers: {
                "accepts": "application/json"
            }
        })
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                reject(response);
            }
        })
        .then((jsonData) => {
            const datos = [];
            for(const dato in jsonData) {
                datos.push(jsonData[dato]);
            }
            resolve(datos);
        });
     });
}