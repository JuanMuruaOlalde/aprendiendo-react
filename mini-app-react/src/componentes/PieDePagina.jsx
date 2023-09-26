function EnlaceDeUtilidad({url, descripcion}) {
    return (
        <p><a href={url} target="_blank"> {descripcion} asdf</a></p>
    )
}

export function PieDePaginaConEnlacesDeUtilidad() {
    return(
        <footer>
            <hr />
            <p>Aquí va el contenido que ha de ir al pie de página. Por ejemplo, esta colección de enlaces de utilidad:</p>
            <EnlaceDeUtilidad 
                url="https://react.dev/"  
                descripcion="_1_ React Main Page" 
            /> 
            <EnlaceDeUtilidad 
                url="https://react.dev/learn"  
                descripcion="_2_ Quick Start – React" 
            /> 
            <EnlaceDeUtilidad 
                url="https://react.dev/learn/passing-props-to-a-component"  
                descripcion="_3_ Passing Props to a Component – React" 
            /> 
            <EnlaceDeUtilidad 
                url="https://reactjsexample.com/hello-react-create-a-minimalist-react-app/"  
                descripcion="_4_ Hello React- Create a minimalist react app" 
            /> 
            <EnlaceDeUtilidad 
                url="https://create-react-app.dev/docs/getting-started/"  
                descripcion="_5_ Getting Started - Create React App" 
            /> 
            <EnlaceDeUtilidad 
                url="https://create-react-app.dev/docs/proxying-api-requests-in-development/"  
                descripcion="_6_ Back-End Integration - Proxying API Requests in Development - Create React App" 
            /> 
            <EnlaceDeUtilidad 
                url="https://create-react-app.dev/docs/deployment/"  
                descripcion="_7_ Deployment - Create React App" 
            /> 
            <EnlaceDeUtilidad 
                url="https://react.dev/reference/react"  
                descripcion="_9_ API reference – React" 
            /> 
            <EnlaceDeUtilidad 
                url="https://react.dev/reference/react/Component"  
                descripcion="_9_ Class Component – React" 
            /> 
            <EnlaceDeUtilidad 
                url="https://react.dev/learn/your-first-component#defining-a-component"  
                descripcion="_9_ Functional Component – React" 
            /> 
        </footer>
    )
}

