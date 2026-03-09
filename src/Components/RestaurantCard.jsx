import { useState } from 'react';
import { Heart, Share2, MapPin, Clock, Calendar } from 'lucide-react';
import './RestaurantCard.css';

const RestaurantCard = ({
    title,
    rating = 4.8,
    cocina = "Gastronomía moderna",
    priceLevel = "$$$$",
    description,
    address,
    postalCode,
    schedule,
    imageUrl,
    isOpen = true
}) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="restaurant-card">
            {/* Contenedor de imagen */}
            <div className="image-container">
                <img
                    src={imageUrl}
                    alt={title}
                    className="restaurant-image"
                />

                {/* Botones superior izquierdo */}
                <div className="top-actions">
                    <button
                        className={`action-btn ${liked ? 'liked' : ''}`}
                        onClick={() => setLiked(!liked)}
                    >
                        <Heart size={20} fill={liked ? "currentColor" : "none"} />
                    </button>
                    <button className="action-btn">
                        <Share2 size={20} />
                    </button>
                </div>

                {/* Badge superior derecho */}
                <div className="top-badge">
                    MEJOR VALORADOS EN 2026
                </div>
            </div>

            {/* Contenido */}
            <div className="card-content">
                <div className="header">
                    <h2>{title}</h2>
                    <div className="rating">★ {rating.toFixed(1)}</div>
                </div>

                <p className="cocina">
                    {cocina} • {priceLevel}
                </p>
                <p className="description">{description}</p>

                <div className="info-row">
                    <MapPin size={18} />
                    <div>
                        <strong>Ubicación</strong><br />
                        {address}, San Isidro, Lima {postalCode}
                        <span className="get-direction">OBTENER DIRECCIÓN</span>
                    </div>
                </div>

                <div className="info-row">
                    <Clock size={18} />
                    <div>
                        <strong>Horario de apertura</strong><br />
                        <span className={`status ${isOpen ? 'open' : 'closed'}`}>
                            {isOpen ? 'ABIERTA AHORA' : 'CERRADO'}
                        </span><br />
                        {schedule.weekdays}<br />
                        {schedule.weekend}
                    </div>
                </div>

                <button className="reserva-btn">
                    <Calendar size={20} />
                    Reservar Mesa
                </button>
            </div>
        </div>
    );
};

export default RestaurantCard;