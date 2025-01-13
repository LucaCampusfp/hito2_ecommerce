import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactForm = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Formulario de Contacto</h1>
            <form className="needs-validation" noValidate>
                {/* Nombre */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Tu nombre"
                        required
                    />
                    <div className="invalid-feedback">Por favor ingresa tu nombre.</div>
                </div>

                {/* Correo Electrónico */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Tu correo electrónico"
                        required
                    />
                    <div className="invalid-feedback">Por favor ingresa un correo electrónico válido.</div>
                </div>

                {/* Asunto */}
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Asunto</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        placeholder="Asunto del mensaje"
                        required
                    />
                    <div className="invalid-feedback">Por favor ingresa un asunto.</div>
                </div>

                {/* Mensaje */}
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        placeholder="Escribe tu mensaje aquí"
                        rows="4"
                        required
                    />
                    <div className="invalid-feedback">Por favor ingresa tu mensaje.</div>
                </div>

                {/* Botón de Envío */}
                <button type="submit" className="btn btn-primary w-100">Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;
