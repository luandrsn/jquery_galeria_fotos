$(document).ready(function() { //referente as ações do jQuery
    $('header button').click(function() {
        $('form').slideDown(); //ação de aparecer o formulário
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); //ação de esconder o formulário
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val(); //ação de adicionar de nova imagem
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div> 
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    })
})