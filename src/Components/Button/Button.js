import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
    render() {
        return (
            <div className="Button">
                <p>Componente: Button</p>
                <button>Botón</button>
            </div>
        )
    }
}