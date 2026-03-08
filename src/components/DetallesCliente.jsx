import './reservation.css'

export function DetallesCliente(
  {
    nombreRestaurante,
    nombreClienteReserva,
    correoClienteReserva,
    telefonoClienteReserva,
    fechaReserva,
    horaReserva,
    cantidadInvitadosReserva
  }
) {
  return (
    <div className="reservation-container">
      <div className="reservation-header">
        <button className="back-btn">←</button>
        <div className="header-center">
          <span className="step-label">RESERVA</span>
          <h2>Paso 4 de 5</h2>
        </div>
        <span className="close">✕</span>
      </div>

      <div className="progress-bar">
        <div className="progress"></div>
      </div>

      <div className="content">

        <h1>Detalles del Cliente</h1>
        <p className="subtitle">
          ¡Ya casi! Sólo faltan algunos detalles
        </p>

        <div className="restaurant-card">
          <div className="icon">🍴</div>

          <div className="restaurant-info">
            <strong>{nombreRestaurante}</strong>
            <span>{fechaReserva} - {horaReserva} - {cantidadInvitadosReserva} invitados</span>
          </div>

          <button className="change-btn">Cambiar</button>
        </div>

        <label>Nombre Completo</label>
        <div className="input-valid">
          <input type="text" defaultValue={nombreClienteReserva} />
          <span className="valid">✔</span>
        </div>

        <label>Número de teléfono</label>

        <div className="phone-group">
          <select>
            <option>+51</option>
            <option>+1</option>
          </select>

          <input
            type="text"
            defaultValue={telefonoClienteReserva}
          />
        </div>

        <label>Correo electrónico</label>

        <div className="input-error">
          <input
            type="email"
            defaultValue={correoClienteReserva}
          />
          <span className="error-icon">!</span>
        </div>

        <span className="error-text">
          Por favor, introduce una dirección de correo electrónico válida
        </span>

        <label>Solicitudes especiales (Opcional)</label>

        <textarea
          placeholder="Alergias, cumpleaños, preferencia de asiento de ventana..."
        />

        <div className="checkbox-group">
          <input type="checkbox" defaultChecked />
          <span>
            Mantenme informado sobre ofertas exclusivas y actualizaciones del menú de temporada de El tenedor dorado.
          </span>
        </div>

        <button className="review-btn">
          Revisar reserva →
        </button>

      </div>
    </div>
  );
}