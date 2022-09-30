
function numeroAleatorio(){
    return Math.round(Math.random()*(100-0))+0
}
function GenerarPalabras(){
    let Palabras= ["us ","most ","day ","give ","these ","any ","because ","want ","new ","even ","way ","well ","first ","work ","our ","how ","two ","use ","after ","back ","also ","think ","over ","its ","come ","only ","look ","now ","then ","than ","other ","see ","them ","could ","some ","good ","your ","year ","into ","people ","take ","know ","him ","just ","no ","time ","like ","can ","make ","when ","me ","go ","which ","get ","who ","about ","if ","out ","up ","so ","what ","their ","there ","would ","all ","one ","my ","will ","an ","or ","she ","her ","say ","we ","they ","from ","by ","his ","but ","this ","at ","do ","you ","as ","he ","with ","on ","not ","for ","it ","I ","have ","that ","in ","a ","and ","of ","to ","be ","the"]
    let Significado = ["nos, nosotros ","la mayoría, el mayor número, el máximo, ","día ","dar ","estos, estas ","alguno/a, cualquier/a ","porque ","querer ","nuevo ","incluso, aún, parejo ","camino, manera, método ","bien ","primero/a ","trabajo, trabajar ","nuestro/a ","cómo, como ","dos ","usar, uso ","después de ","de vuelta, atrás, espalda, ","también ","pensar ","encima de, por encima de, más de ","su ","venir, llegar ","solo, solamente, únicamente ","mirar, buscar, parecer ","ahora ","entonces ","que ","otra/o ","ver ","ellos, los (posesivo) ","podría, podríamos, podrían ","algo, alguno, algunas ","bueno ","tu/tus (posesivo) ","año ","dentro de, en, contra ","gente, personas ","tomar ","saber, conocer ","él ","solo, justo, acabar de ","no ","tiempo ","gustar, como (adv.) ","puede/o ","hacer ","cuando, cuándo ","yo, me, mi ","ir ","cuál, el/la cual ","obtener ","quién ","sobre, acerca de ","si ","afuera, fuera, lejos ","arriba ","así, tan ","qué ","ellos/as ","allá, allí ","condicional, terminación -ría ","todo/a, todos/as ","uno ","mi ","(futuro), voluntad ","un, una/o, unas/os ","o ","ella ","ella ","decir ","nosotros/as ","ellos/as ","de, desde ","por ","el ","pero ","esto/a ","a, en ","hacer ","tú, usted, ustedes ","como (adv.) ","él ","con ","en, sobre ","no ","para ","él, lo, la (cosa, animal), eso, esto ","yo ","tener, haber ","que, eso/e/a, aquello/a, cual ","en, dentro de ","un, una ","y ","de ","a, hacia, hasta, por, para, ","ser o estar ","el, la, los, las"]
    let numero = numeroAleatorio();
    document.getElementById("Palabra").innerHTML=Palabras[numero];
    document.getElementById("Significado").innerHTML=Significado[numero];
    
}

