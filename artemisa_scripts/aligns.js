function alignContent(){
    console.log("aligns CARGADO");

    /*ALINEACION DE CARTAS*/
    var alSection1 = $('.alignment');
    alSection1.wrapAll('<div class="alignment_container"/>');

    /*ALINEACION DE TITULO BENEFICIOS*/
    var alSection2 = $('.alignment2');
    alSection2.wrapAll('<div class="alignment_absolute"/>');
};