// Função para abrir o modal de agendamento
function scrollSchedule() {
    const modal = document.getElementById("bookingModal");
    modal.style.display = "block";
    // Impede o scroll da página ao fundo quando o modal está aberto
    document.body.style.overflow = "hidden";
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("bookingModal");
    modal.style.display = "none";
    // Devolve o scroll à página
    document.body.style.overflow = "auto";
}

// Função que processa o agendamento e envia para o WhatsApp
function confirmBooking() {
    const dateInput = document.getElementById("appointment-date").value;
    
    if (!dateInput) {
        alert("Por favor, selecione uma data e hora para o seu atendimento.");
        return;
    }

    // Formatação básica da data para a mensagem (YYYY-MM-DDTHH:MM -> DD/MM às HH:MM)
    const dataObj = new Date(dateInput);
    const dataFormatada = dataObj.toLocaleDateString('pt-PT');
    const horaFormatada = dataObj.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });

    const mensagem = encodeURIComponent(
        `Olá Egly! Gostaria de solicitar um agendamento:\n\n` +
        `📅 Data: ${dataFormatada}\n` +
        `⏰ Hora: ${horaFormatada}\n\n` +
        `Pode confirmar se tem disponibilidade?`
    );

    // Número de Portugal (Egly Vitiniski)
    const fone = "351931393453";
    
    // Abre o WhatsApp em uma nova aba
    window.open(`https://wa.me/351931393453?text=${mensagem}`, '_blank');
    
    // Fecha o modal após o clique
    closeModal();
}

// Fecha o modal se o utilizador clicar em qualquer lugar fora da caixa branca
window.onclick = function(event) {
    const modal = document.getElementById("bookingModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Função para os detalhes dos serviços (se ainda estiver a usar)
function toggleDetails(element) {
    const details = element.querySelector('.details');
    if (details) {
        const isVisible = details.style.display === 'block';
        document.querySelectorAll('.details').forEach(d => d.style.display = 'none');
        details.style.display = isVisible ? 'none' : 'block';
    }
}
