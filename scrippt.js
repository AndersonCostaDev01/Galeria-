$(document).ready(function(){
    // Clique no botão do header
    $('header button').click(function(){
        // Aninhamento de cliques, o que não é necessário
        $('header button').click(function(e){
            // Mostra o formulário com efeito de deslizamento
            $('form').slideDown();
        })
    })

    // Clique no botão de cancelar
    $('#cancel').click(function(){
        // Esconde o formulário com efeito de deslizamento
        $('form').slideUp();
    })

    // Evento de envio do formulário
    $('form').on("submit", function(e){
        // Previne o comportamento padrão do formulário
        e.preventDefault();
        // Obtém o valor do campo de entrada com id "new-image"
        const enderecoNewImage = $('#new-image').val();
        // Cria um novo elemento <li>
        const newItem = $('<li style="display:none;"></li>');
        
        // Cria um elemento <img> com o valor do input como src e adiciona ao <li>
        $(`<img src="${enderecoNewImage}" />`).appendTo(newItem);
        
        // Cria um div com link para a imagem e adiciona ao <li>
        $(`
            <div class="img-link">
                <a href="${enderecoNewImage}" target="_blank" title="Quer ver a imagem em tamanho real?">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(newItem);
        
        // Adiciona o novo <li> à lista <ul>
        newItem.appendTo($('ul'));

        // Faz uma animação ao surgir o item
        $(newItem).fadeIn(1500);
        $('#new-image').val('');
    })
})