import React from 'react';
import Icon from './ladyIcon.jsx'

const App = () => {
    return (
        <>
            <div className="container">
                <div className="grid">
                    <h2 className="caption">Файл cкомпилирован с помощью React</h2>
                    <div className="logo logo-png">
                        <img className="logo1" src="./img/cat2.png"
                            alt="Загрузка PNG изображений с помощью Webpack" />
                    </div>
                    <div className="logo logo-svg">
                        <img className="logo2" src="./img/super-cat.jpg"
                            alt="Загрузка SVG изображений с помощью Webpack" /></div>
                    <div className="logo logo-css"> </div>
                    <div className="logo static-logo1">
                        <object type="image/svg+xml" data="./static/hand.svg">
                            <img src="../static/hand.svg" />
                        </object>
                    </div>
                    <div className="logo static-logo2">
                        <Icon />
                    </div>
                    <div className="logo static-logo3">
                        <img src="static/sweden-copy-1.svg" alt="" />
                    </div>
                </div>


            </div>
        </>
    );
}

export default App;