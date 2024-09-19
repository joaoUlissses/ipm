function chamarBarraS() {
    var textoGrande = `
    <header class="barra__superior">
        <ul class="barra__superior__ordenado">
            <li class="barra__superior__ordenado__ancora"><a href="sobre.html">sobre</a></li>
            <li class="barra__superior__ordenado__ancora"><a href="eventos.html">eventos</a></li>
            <li class="barra__superior__ordenado__ancora"><a href="IPM.html"><img src="imagens/ipbSimbolo.png" class="simbolo__ipb"  alt="Simbolo IPB" style="width:50px; height: auto;" href="IPM.html" ></a> </li>
            <li class="barra__superior__ordenado__ancora"><a href="https://www.instagram.com/ip.centralmacapa/" target="_blank">instagram</a> </li>
            <li class="barra__superior__ordenado__ancora"><a href="https://maps.app.goo.gl/wV6fvNo7aafn7V2E8" target="_blank">endereço</a></li>
        </ul>
    </header>
    `;

    // Seleciona o elemento onde o texto será inserido
    var divTexto = document.getElementById("texto");

    // Insere o texto no elemento
    divTexto.innerHTML = textoGrande;
}
