const bottaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

bottaoEnviar.addEventListener('click', () =>{
    if(caixaMensagem.value !== ""){
        socket.emit('nova mensagem', caixaMensagem.value);
        caixaMensagem.value = "";
    }
})

socket.addEventListener('nova mensagem', (msg) =>{
    const elementoMensagem = document.createElement('li'); //<li></li>
    elementoMensagem.textContent = msg;//<li>Teste</li>
    elementoMensagem.classList.add('mensagem');//<li class='mensagem'>Teste</li>
    chat.appendChild(elementoMensagem);
})