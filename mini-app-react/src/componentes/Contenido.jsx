function ContenidoPrincipalPorDefecto() {
    return (
        <div id="contenido_principal">
            <p>Aquí va el contenido principal.</p>
            <p>
                Ese contenido puede ser <strong>contenido estático</strong>, escrito tal cual, como el escrito justo a
                continuación...
            </p>
            <p>
                O puede ser <strong>contenido dinámico</strong>, como el que aparece si se clican los botones sobre gatos,
                jirafas,... en la barra de navegación
            </p>

            <section>
                <h2>Título de la sección</h2>
                <p>Una sección alberga contenido de una misma temática.</p>
                <p>Este contenido puede estructurarse a su vez en artículos...</p>

                <article>
                    <h3>Título del artículo</h3>
                    <p>
                        Un artículo alberga un bloque de contenido que es "autosuficiente"; un bloque que podria llevarse
                        "tal cual" a otra parte; un bloque que "tiene sentido en sí mismo".
                    </p>
                    <p>Aquí iria el contenido de este artículo...</p>
                </article>
            </section>
        </div>
    )
}


function ContenidoSecundarioPorDefecto() {
    return (
        <aside id="contenido_secundario">
            <p>Aquí va contenido secundario o contenido explicativo del contenido principal</p>
        </aside>
    )
}

function ContenidoPrincipalDeGatos() {
    return (
        <div id="contenido_principal">
            <h2>El contenido de gatos</h2>
            <p>Un montón de texto sobre gatos.... asdkfasjf kas dfkjasd kaslkf aslk flaflaf laksj flkas</p>
            <a href="https://es.wikipedia.org/wiki/Felis_silvestris_catus" target="_blank">https://es.wikipedia.org/wiki/Felis_silvestris_catus</a>
        </div>
    )
}

function ContenidoSecundarioDeGatos() {
    return (
        <aside id="contenido_secundario">
            <p>
                <a href="https://commons.wikimedia.org/wiki/File:Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg#/media/File:Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1200px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg" alt="Orange tabby cat sitting on fallen leaves-Hisashi-01A.jpg"/>
                </a>
                <br/>
                <a href="https://creativecommons.org/licenses/by-sa/2.0" title="Creative Commons Attribution-Share Alike 2.0">
                    CC BY-SA 2.0
                </a>
                , 
                <a href="https://commons.wikimedia.org/w/index.php?curid=8313371">
                    Link
                </a>
            </p>
        </aside>
    )
}

function ContenidoPrincipalDeJirafas() {
    return (
        <div id="contenido_principal">
            <h2>El contenido de jirafas</h2>
            <p>Un montón de texto sobre jirafas....,zmxnc,nzcn cbxmvzb ,mn zmvb mzxcbm,zxbc m mcznbv mnjzbxcjvhbjzhxbc vjhzjhxcvb </p>
            <a href="https://es.wikipedia.org/wiki/Giraffa_camelopardalis" target="_blank">https://es.wikipedia.org/wiki/Giraffa_camelopardalis</a>
        </div>
    )
}

function ContenidoSecundarioDeJirafas() {
    return (
        <aside id="contenido_secundario">
            <p>
                <a href="https://commons.wikimedia.org/wiki/File:Giraffa_camelopardalis_angolensis.jpg#/media/Archivo:Giraffa_camelopardalis_angolensis.jpg">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Giraffa_camelopardalis_angolensis.jpg/1200px-Giraffa_camelopardalis_angolensis.jpg" alt="Giraffa camelopardalis angolensis.jpg"/>
                </a>
                <br/>
                De © Hans Hillewaert, 
                <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>
                , 
                <a href="https://commons.wikimedia.org/w/index.php?curid=2429667">Enlace</a>
            </p>';
        </aside>
    )
}

export function Contenido({tematicaDelContenido}) {
    if (tematicaDelContenido=="gatos") {
        return (
            <div id="contenido">
                <ContenidoPrincipalDeGatos/>
                <ContenidoSecundarioDeGatos/>
            </div>
        )
    }
    if (tematicaDelContenido=="jirafas") {
        return (
            <div id="contenido">
                <ContenidoPrincipalDeJirafas/>
                <ContenidoSecundarioDeJirafas/>
            </div>
        )
    }
    return (
        <div id="contenido">
            <ContenidoPrincipalPorDefecto/>
            <ContenidoSecundarioPorDefecto/>
        </div>
    )
}