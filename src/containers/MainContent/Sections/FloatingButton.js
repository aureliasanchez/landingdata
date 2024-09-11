// FloatingButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButton = () => {
  const handleWhatsAppClick = () => {
    
    // Aquí debes redirigir al usuario a la URL de WhatsApp
    // Puedes utilizar el enlace con el prefijo 'https://wa.me/' y el número de teléfono
    const phoneNumber = '7713306407'; // Reemplaza con el número de teléfono deseado
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="floating-button" onClick={handleWhatsAppClick}>
      <FaWhatsapp />
    </div>
  );
};

export default FloatingButton;
