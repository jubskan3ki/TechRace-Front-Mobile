const socket = new WebSocket('ws://192.168.0.50/ws');

socket.onopen = () => {
    console.log('Connexion WebSocket établie.');
};

socket.onmessage = (event) => {
    console.log('Message reçu :', event.data);
};

socket.onclose = (event: Event) => {
    console.log('Connexion fermée');
};

socket.onerror = (error: Event) => {
    console.error('Une erreur WebSocket est survenue :', error);
};

export default socket;
