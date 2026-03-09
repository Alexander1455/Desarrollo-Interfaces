import { useState } from 'react'
import RestaurantCard from './Components/RestaurantCard.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <div style={{ padding: '20px', background: '#f5f5f5', minHeight: '100vh' }}>
      <RestaurantCard
        title="El Tenedor Dorado"
        rating={4.8}
        cocina="Gastronomía moderna"
        priceLevel="$$$$"
        description="Gastronomía Elegante en el Corazón de la Ciudad."
        address="Calle Miguel Dasso 155, San Isidro"
        postalCode="15073"
        schedule={{
          weekdays: "Lun - Vie   5:00 PM - 11:00 PM",
          weekend: "Sáb - Dom   4:00 PM - 12:00 AM"
        }}
        imageUrl="https://www.revistadeck.com/wp-content/uploads/Osaka-10.jpg"
      />

      <RestaurantCard
        title="La Mesa de Zafiro"
        rating={4.8}
        cocina="Gastronomía moderna"
        priceLevel="$$$$"
        description="Cocina de autor inspirada en la ciudad."
        address="Calle Miguel Dasso 155, San Isidro"
        postalCode="15073"
        schedule={{
          weekdays: "Lun - Vie   5:00 PM - 11:00 PM",
          weekend: "Sáb - Dom   4:00 PM - 12:00 AM"
        }}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsod4cXct7bWTLECyAbZuOgOvIcFWAc0gUQ&s"
        isOpen={true}
      />

      <RestaurantCard
        title="La Casa Gourmet"
        rating={4.8}
        cocina="Gastronomía moderna"
        priceLevel="$$$$"
        description="Gastronomía Elegante en el Corazón de la Ciudad."
        address="Calle Don Jode 355, San Borja"
        postalCode="15073"
        schedule={{
          weekdays: "Lun - Vie   5:00 PM - 11:00 PM",
          weekend: "Sáb - Dom   4:00 PM - 12:00 AM"
        }}
        imageUrl="https://static.where-e.com/Italy/La-Maison-Du-Gourmet_03190cd3831daf167b59a3f5b0c11f04.jpg"
      />
    </div>
  );
}

export default App
