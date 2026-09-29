/* =====================================================
   PARA LAURA ❤️
   JAVASCRIPT COMPLETO
===================================================== */

const hoja1 = document.getElementById("hoja1");
const hoja2 = document.getElementById("hoja2");
const hoja3 = document.getElementById("hoja3");
const hojaFinal = document.getElementById("hojaFinal");

const mensajeInicio = document.getElementById("mensajeInicio");
const versiculoInicio = document.getElementById("versiculoInicio");
const mensajeSeleccionado = document.getElementById("mensajeSeleccionado");

let animando = false;
let escrituraId = 0;
let mazoMensajes = [];
let mazoVersiculos = [];
let sobreAbierto = false;
let florElegida = 0;

const sobreOverlay = document.getElementById("sobreOverlay");
const botonSobre = document.getElementById("botonSobre");
const petalosCaida = document.getElementById("petalosCaida");


/* =====================================================
   MENSAJES DEL INICIO
===================================================== */

const mensajesInicio = [
    "Esta carta espera quieta, con tinta paciente, hasta que tú la abras.",
    "Un mediodía sereno cabe entero en un renglón escrito para ti.",
    "Las estrellas no gritan; alumbran, y así también quiere verte este cuaderno.",
    "El jardín guarda perfume aunque nadie lo nombre; hoy te lo ofrezco.",
    "Hay una melodía suave que solo se oye cuando el mundo baja la voz.",
    "El sendero se aclara al dar el primer paso, aunque el mapa esté incompleto.",
    "Después de la lluvia el aire huele a tierra nueva y a promesa cumplida.",
    "Un faro no persigue barcos: permanece, y eso basta para orientar.",
    "Un hilo fino une días lejanos y los convierte en un mismo collar.",
    "La ventana abierta deja entrar brisa, luz y ganas de comenzar otra vez.",
    "Hay un recodo del camino donde el ruido se apaga y el corazón oye mejor.",
    "Una lámpara pequeña basta cuando uno decide no caminar a oscuras.",
    "El rocío no pide permiso: llega, brilla un momento y deja el jardín despierto."
];


/* =====================================================
   VERSÍCULOS DEL INICIO
===================================================== */

const versiculosInicio = [
    {
        referencia: "Isaías 41:10",
        texto: "No temas, porque yo soy contigo; no desmayes, porque yo soy tu Dios."
    },
    {
        referencia: "Salmos 23:1",
        texto: "Jehová es mi pastor; nada me faltará."
    },
    {
        referencia: "Mateo 11:28",
        texto: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar."
    },
    {
        referencia: "Filipenses 4:6",
        texto: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios."
    },
    {
        referencia: "Isaías 40:31",
        texto: "Los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas."
    },
    {
        referencia: "Juan 16:33",
        texto: "En el mundo tendréis aflicción; mas confiad, yo he vencido al mundo."
    },
    {
        referencia: "Salmos 91:4",
        texto: "Con sus plumas te cubrirá, y debajo de sus alas estarás seguro."
    },
    {
        referencia: "Sofonías 3:17",
        texto: "Jehová tu Dios está en medio de ti, poderoso; él salvará; se gozará sobre ti."
    },
    {
        referencia: "Jeremías 29:11",
        texto: "Porque yo sé los pensamientos que tengo acerca de vosotros, pensamientos de paz."
    },
    {
        referencia: "Salmos 121:2",
        texto: "Mi socorro viene de Jehová, que hizo los cielos y la tierra."
    },
    {
        referencia: "Proverbios 3:5",
        texto: "Fíate de Jehová de todo tu corazón, y no estribes en tu prudencia."
    },
    {
        referencia: "Salmos 46:1",
        texto: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones."
    }
];


/* =====================================================
   30 FLORES
   CADA UNA TIENE SU PROPIO MENSAJE
===================================================== */

const mensajesFlores = [

    {
        nombre: "Rosa",
        flor: "🌹",
        frase: "El aroma de lo sincero se queda, aunque pase el instante.",
        carta: "Laura, esta rosa no viene a presumir de espinas ni de lujo: viene a decirte que el cariño verdadero no se apaga cuando el día se pone difícil. Hay una belleza tuya que no necesita escenario, solo alguien que sepa mirar con respeto. Que nunca te avergüences de sentir tanto, ni de cuidar a los demás con esa delicadeza que te distingue. El amor que permanece, el que espera y el que no se rinde, se parece a ti cuando eliges el bien aunque nadie aplauda. Guarda esta página como un perfume: invisible, y sin embargo inolvidable.",
        referencia: "1 Corintios 13:7",
        versiculo: "Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta."
    },

    {
        nombre: "Tulipán",
        flor: "🌷",
        frase: "Amanece despacio: el primer capullo no tiene prisa y aun así llega.",
        carta: "Hay primaveras que no llegan de golpe, y aun así son fieles. Este tulipán te pide paciencia con tu propia historia: no todo lo hermoso aparece el mismo día en que lo sueñas. Si algo se cerró, no significa que Dios se haya olvidado de abrir otra cosa, más limpia y más tuya. Camina despacio, sin compararte con quien parece ir más rápido. Un capullo honesto vale más que un jardín fingido. Que este nuevo tramo te encuentre serena, con las manos listas y el corazón en calma.",
        referencia: "Isaías 43:19",
        versiculo: "He aquí que yo hago cosa nueva: presto saldrá á luz."
    },

    {
        nombre: "Girasol",
        flor: "🌻",
        frase: "Gira el rostro hacia el sol y la sombra queda atrás, sin que la persigas.",
        carta: "El girasol no discute con la oscuridad: simplemente busca la luz. Así también puedes hacer tú cuando el pensamiento se nuble o el miedo quiera sentarse a la mesa. No tienes que perseguir cada sombra para vencerla; basta con volver el rostro hacia lo que da vida. Hay una claridad que no depende del clima interior de un mal rato. Recuerda quién te sostiene cuando tiemblas. Mira adelante con esa misma terquedad dulce del girasol, y deja que lo oscuro se quede atrás, sin que le des el centímetro de más.",
        referencia: "Salmos 27:1",
        versiculo: "Jehová es mi luz y mi salvación: ¿de quién temeré?"
    },

    {
        nombre: "Cerezo",
        flor: "🌸",
        frase: "Cinco pétalos bastan para decir lo que un discurso no alcanza.",
        carta: "El cerezo enseña que lo breve no es pobre. Un instante bien vivido puede alumbrar años enteros. No desprecies los días pequeños: una risa, una oración, un café compartido, una palabra dicha a tiempo. Dios no improvisa con tu tiempo; lo va tejiendo con hilos que ahora tal vez no ves. Cuando llegue la estación correcta, lo que hoy parece incompleto se entenderá con otra luz. Descansa en eso. No hace falta un discurso largo para ser amada: a veces bastan cinco pétalos y un corazón atento.",
        referencia: "Eclesiastés 3:11",
        versiculo: "Todo lo hizo hermoso en su tiempo."
    },

    {
        nombre: "Hibisco",
        flor: "🌺",
        frase: "Tu historia tiene color propio; nadie más puede pintarla igual.",
        carta: "El hibisco no pide permiso para ser intenso. Tú tampoco tienes que encogerte para caber en la idea que otros tienen de ti. Hay un color en tu vida que no se copia, y eso no es orgullo: es identidad. Cuando sientas que no alcanzas, recuerda que la fuerza no sale de aparentar, sino de Cristo que te sostiene. Puedes cansarte, sí; rendirte del todo, no. Sigue pintando tu historia con honestidad. El mundo ya tiene demasiadas copias: lo que hace falta es tu tono, tu voz, tu manera de amar.",
        referencia: "Filipenses 4:13",
        versiculo: "Todo lo puedo en Cristo que me fortalece."
    },

    {
        nombre: "Ramo",
        flor: "💐",
        frase: "Juntas, las flores cuentan más que una sola: compañía, variedad, fiesta.",
        carta: "Un ramo es la prueba de que lo distinto puede convivir y volverse fiesta. No estás diseñada para cargarlo todo en soledad. Hay hermanas, amigos, familia y una iglesia que, cuando están en paz, se parecen a este ramo: varios colores, un mismo propósito. Permítete recibir compañía. Permítete también ser esa flor que sostiene a otra cuando se inclina. La vida se vuelve más habitable cuando nadie pretende ser el único ramo. Que nunca te falte una mesa donde quepan la risa y la oración juntas.",
        referencia: "Salmos 133:1",
        versiculo: "Mirad cuán bueno y cuán delicioso es habitar los hermanos igualmente en uno."
    },

    {
        nombre: "Margarita",
        flor: "🌼",
        frase: "Lo humilde también florece: un borde blanco, un centro de oro.",
        carta: "La margarita no compite con las coronas del jardín, y aun así alegra el camino. Hay una hermosura en lo sencillo que el mundo suele pasar de largo. No dejes que te convenzan de que solo vale lo ruidoso o lo caro. Busca primero lo que permanece: el reino, la justicia, lo que endereza el corazón. Lo demás, cuando hace falta, llega a su tiempo. Sé fiel en lo pequeño. Un borde blanco y un centro de oro ya son una fiesta si se ofrecen con gratitud. Que tu vida huela a eso: a lo esencial, no a la prisa.",
        referencia: "Mateo 6:33",
        versiculo: "Mas buscad primeramente el reino de Dios y su justicia."
    },

    {
        nombre: "Lavanda",
        flor: "🪻",
        frase: "El sosiego huele a campo y baja el pulso cuando el día se agita.",
        carta: "La lavanda existe para recordarte que el cuerpo también necesita descanso, y el alma aún más. No es flojera cerrar los ojos un momento y soltar lo que no te toca cargar. Jesús no prometió un mundo sin ruido; prometió una paz que el mundo no fabrica. Cuando el pulso se acelere, vuelve a ese campo interior donde Él habla bajo. No tienes que resolverlo todo esta noche. Hay un sosiego que no se compra: se recibe. Inhálalo. Deja que baje a los hombros. Mañana se verá con otra luz.",
        referencia: "Juan 14:27",
        versiculo: "La paz os dejo, mi paz os doy."
    },

    {
        nombre: "Orquídea",
        flor: "🌷",
        frase: "Lo raro y lo fino conviven: no hace falta ser común para ser admirable.",
        carta: "La orquídea no se disculpa por ser distinta. Tú tampoco. Fuiste hecha con un detalle que no es accidente ni error de fábrica. A veces lo que te hace sentir fuera de lugar es precisamente lo que Dios quiso que nadie más llevara igual. No gastes tu vida intentando ser más fácil de entender para quien no se detiene a mirar. Eres obra admirable, aunque tú todavía no termines de creerlo. Camina con esa certeza callada. Lo fino no grita; se reconoce cuando alguien tiene ojos para ver.",
        referencia: "Salmos 139:14",
        versiculo: "Te alabaré; porque formidables, maravillosas son tus obras."
    },

    {
        nombre: "Clavel",
        flor: "🌹",
        frase: "Una entrega discreta vale más que un desfile de promesas vacías.",
        carta: "El clavel llega sin fanfarria y se queda. Así es el cariño que vale la pena: constante, sin teatro, sin exigir aplauso. Hay personas que hablan mucho y sostienen poco; tú mereces lo segundo. Y tú también puedes serlo: una presencia fiel, un mensaje a tiempo, una oración que nadie ve. El gozo de los que confían no es una sonrisa forzada; es una decisión de no entregar el corazón al amargor. Quédate cerca de lo verdadero. Celebra lo bueno. El clavel no necesita desfilar para ser ofrenda.",
        referencia: "1 Tesalonicenses 5:16",
        versiculo: "Estad siempre gozosos."
    },

    {
        nombre: "Caléndula",
        flor: "🌼",
        frase: "Hay hierbas que curan: da gracias también por lo que alivia en silencio.",
        carta: "La caléndula ha sido, desde antiguo, un gesto de alivio. Hay medicinas que no vienen en frasco: un atardecer, un versículo, una conversación honesta, el consuelo de saberse perdonada. No ignores esas curas pequeñas. La misericordia de Dios no se agota en un mal año ni en una semana rara. Da gracias incluso por lo que todavía no entiendes del todo. El corazón que agradece se ensancha; el que solo exige se encoge. Que esta flor te recuerde que hay un bien que trabaja en silencio, y que ya está tocando tu historia.",
        referencia: "Salmos 107:1",
        versiculo: "Alabad á Jehová, porque es bueno; porque para siempre es su misericordia."
    },

    {
        nombre: "Azalea",
        flor: "🌺",
        frase: "Resiste el viento y sigue abierta; la terquedad dulce también es virtud.",
        carta: "La azalea no cierra el capullo al primer viento. Hay una forma de resistir que no se parece al endurecimiento: se parece a seguir abierta, con esperanza. No dejes que un tropiezo te convenga de que ya no hay gozo posible. El Dios de la esperanza sabe llenar lo que el miedo vació. Cree de nuevo, aunque sea con un sí tembloroso. La fe no siempre grita; a veces solo se niega a cerrarse del todo. Quédate en esa terquedad dulce. El viento pasa. La flor, si está bien plantada, permanece.",
        referencia: "Romanos 15:13",
        versiculo: "El Dios de esperanza os llene de todo gozo y paz en el creer."
    },

    {
        nombre: "Dalia",
        flor: "🌸",
        frase: "Capas de color, una sobre otra: así se forma el carácter, sin prisa.",
        carta: "La dalia no se hace en un solo trazo. Cada capa pide tiempo, y el carácter también. Lo que hoy te incomoda tal vez esté enseñándote paciencia, templanza, una forma más limpia de amar. No apresures el proceso ni te castigues por no estar “lista” según el calendario de otros. La paciencia tiene obra: te va volviendo más completa, menos frágil ante la primera ofensa. Permite que Dios trabaje despacio. Un día mirarás atrás y verás que aquellas capas no eran demora: eran formación.",
        referencia: "Santiago 1:4",
        versiculo: "Mas tenga la paciencia perfecta su obra, para que seáis perfectos y cabales."
    },

    {
        nombre: "Ramillete",
        flor: "💐",
        frase: "Un lazo une lo distinto y lo vuelve ofrenda lista para dar.",
        carta: "El ramillete existe porque alguien ató lo separado y lo volvió regalo. En ti también hay pedazos distintos: recuerdos, sueños, heridas que van sanando, risas que todavía quieren volver. No hace falta que todo coincida para que tu vida sea ofrenda. Deja que la paz de Dios gobierne cuando las piezas no encajan a la primera. Un lazo de gracia puede juntar lo que tú sola no logras ordenar. Preséntate así: incompleta y disponible. Eso, a los ojos de Dios, ya es un ramo hermoso.",
        referencia: "Colosenses 3:15",
        versiculo: "Y la paz de Dios gobierne en vuestros corazones."
    },

    {
        nombre: "Gerbera",
        flor: "🌼",
        frase: "El júbilo es redondo y claro, como un círculo de pétalos al sol.",
        carta: "La gerbera parece una sonrisa que no se disculpa. Te está permitido el gozo. No es superficial alegrarse cuando hay motivos, ni es falta de seriedad recibir un día bueno como don. El gozo del Señor no es un adorno: es fuerza para seguir. Cuando te cueste, pide esa alegría que no depende del aplauso. Rodéate de lo que te devuelve el color. Ríe sin culpa. El sol cabe en una corola, y también puede caber en tu tarde de hoy si le dejas una rendija.",
        referencia: "Nehemías 8:10",
        versiculo: "El gozo de Jehová es vuestra fortaleza."
    },

    {
        nombre: "Jacinto",
        flor: "🪻",
        frase: "El racimo sube en espiral: el coraje también se apoya, tallo a tallo.",
        carta: "El jacinto no trepa de un salto: se apoya, se enrosca, sigue. El valor verdadero rara vez es un grito único; es una sucesión de síes pequeños. No temas ni desmayes cuando el siguiente paso se vea empinado. No vas sola. Hay una presencia que va delante, y eso cambia el tamaño del obstáculo. Pide valor para hoy, no para los próximos diez años. El racimo se forma flor a flor. Tu coraje también. Levántate otra vez. Eso ya es valentía, aunque nadie lo publique.",
        referencia: "Josué 1:9",
        versiculo: "Esfuérzate y sé valiente; no temas ni desmayes."
    },

    {
        nombre: "Gardenia",
        flor: "🌹",
        frase: "El blanco puro no necesita adorno; la verdad tampoco.",
        carta: "La gardenia enseña que lo auténtico se basta. No tienes que pintarte de otra persona para merecer amor. Fuiste amada primero, antes de acertar y también en los tropiezos. Esa es la raíz de cualquier cariño que valga la pena: no un trueque, sino un regalo. Vive desde ahí. Di la verdad con suavidad. Quédate cerca de lo limpio, aunque sea menos brillante en las redes. El blanco no compite; ilumina. Que tu manera de amar se parezca a eso: clara, sin teatro, capaz de devolver lo que primero recibió.",
        referencia: "1 Juan 4:19",
        versiculo: "Nosotros le amamos á él, porque él nos amó primero."
    },

    {
        nombre: "Violeta",
        flor: "🌷",
        frase: "Baja la mirada y aun así ilumina el borde del camino.",
        carta: "La violeta no ocupa el centro del jardín y, aun así, el que se agacha la descubre. Hay una hermosura en la humildad que no se anuncia sola. Se te ha dicho qué es lo bueno: hacer justicia, amar misericordia, caminar humildemente. No es poca cosa. No necesitas un escenario para ser luz; a veces basta el borde del camino, una decisión diaria, un favor no publicado. Baja la mirada sin encogerte el alma. Ilumina cerca. Eso también cambia el paisaje de quienes te rodean.",
        referencia: "Miqueas 6:8",
        versiculo: "Oh hombre, él te ha declarado qué sea lo bueno."
    },

    {
        nombre: "Magnolia",
        flor: "🌻",
        frase: "Se abre de golpe, amplia, como una puerta que invita a entrar.",
        carta: "La magnolia no se esconde cuando le toca abrirse. Hay temporadas en las que Dios pone delante una puerta ancha: un estudio, una conversación difícil, un servicio, un sueño que ya no cabe en el cajón. Encomiéndalo. No todo lo que se abre es trampa; a veces es invitación. Pide discernimiento, sí, pero no dejes que el miedo cierre lo que la fe podría cruzar. Una flor amplia enseña hospitalidad: hay lugar. Que tu vida también tenga umbral y mesa, no solo muro.",
        referencia: "Proverbios 16:3",
        versiculo: "Encomienda á Jehová tus obras, y tus pensamientos serán afirmados."
    },

    {
        nombre: "Peonía",
        flor: "🌸",
        frase: "Lo abundante no es vanidad: es generosidad hecha pétalo.",
        carta: "La peonía no escatima pétalos. Hay una generosidad que no es derroche: es corazón abierto. Si alguna vez sembraste con lágrimas —un adiós, una espera, una oración repetida— esta flor te dice que la cosecha no tiene por qué ser mezquina. Dios sabe de siembras lentas. No te avergüences de desear un bien amplio: paz, familia, propósito, risa. Espera con dignidad. Y cuando llegue, comparte. Lo abundante se vuelve hermoso cuando no se encierra con llave.",
        referencia: "Salmos 126:5",
        versiculo: "Los que sembraron con lágrimas, con regocijo segarán."
    },

    {
        nombre: "Begonia",
        flor: "🌺",
        frase: "En la sombra también hay color; no todo tesoro pide escenario.",
        carta: "La begonia florece donde otras se quejan de poca luz. Hay vocaciones calladas, cuidados invisibles, fidelidades de cocina y de pasillo que el escenario nunca premia. Eso no las hace menores. Todo lo que hagas, de palabra o de hecho, puede llevar el nombre del Señor y volverse culto. No esperes reflectores para hacer el bien. El color en la sombra es de los más honestos. Sigue ahí, con hermosura discreta. Alguien —y sobre todo Él— ya te está viendo.",
        referencia: "Colosenses 3:17",
        versiculo: "Todo lo que hacéis, sea de palabra ó de hecho, hacedlo todo en el nombre del Señor Jesús."
    },

    {
        nombre: "Petunia",
        flor: "🌼",
        frase: "Despierta alegre en el alféizar: el día cabe en una corola.",
        carta: "La petunia saluda la mañana como si el alféizar fuera suficiente universo. Tú también puedes empezar de nuevo sin esperar un año perfecto. Las misericordias se renuevan; no llegas tarde a la fidelidad de Dios. Si ayer pesó, hoy no está obligado a copiarlo. Abre la ventana. Pide un corazón dispuesto. Un día entero cabe en gestos pequeños: un versículo, un vaso de agua, una disculpa, una canción. Despierta. Hay frescura reservada para esta fecha, con tu nombre escrito al margen.",
        referencia: "Lamentaciones 3:23",
        versiculo: "Nuevas son cada mañana; grande es tu fidelidad."
    },

    {
        nombre: "Azucena",
        flor: "🌸",
        frase: "Blanca y alta, recuerda que la dignidad no necesita ruido.",
        carta: "La azucena se sostiene derecha sin alboroto. Hay una dignidad que no se pelea a gritos: se camina. Cuando la carga pese, no finjas que no existe; ponla donde sí pueden con ella. Echar sobre Jehová lo que te dobla no es huir: es sabiduría. Camina alta, no altiva. Habla con calma. No negocies tu valor en conversaciones que te achican. La blancura de esta flor no es frialdad: es limpidez. Que tu presencia consuele, no porque grite, sino porque está en paz.",
        referencia: "Salmos 55:22",
        versiculo: "Echa sobre Jehová tu carga, y él te sustentará."
    },

    {
        nombre: "Hortensia",
        flor: "🪻",
        frase: "Un racimo de cabezas: la amistad se parece a eso, no a un solista.",
        carta: "La hortensia es comunidad hecha flor. Nadie florece bien del todo si se empeña en ser solista eterno. Cuida tus amistades. Siembra bien aunque la cosecha tarde. No te canses de hacer el bien en lo cotidiano: un mensaje, una visita, un límite sano, una oración por quien ni se entera. A su tiempo se siega. Sé racimo, no isla. Y cuando te toque recibir, recibe sin culpa. La amistad cristiana se parece a estas cabezas juntas: distintas, cercanas, sostenidas en el mismo tallo de gracia.",
        referencia: "Gálatas 6:9",
        versiculo: "No nos cansemos, pues, de hacer bien; que á su tiempo segaremos."
    },

    {
        nombre: "Amapola",
        flor: "🌹",
        frase: "Rojo breve sobre el trigo: la vida insiste, aunque dure poco el instante.",
        carta: "La amapola dura poco y aun así incendia de belleza el campo. Hay noches que parecen largas, y no mienten del todo: duelen. Pero no son el capítulo final. La alegría tiene permiso de volver por la mañana, aunque hoy no sepas a qué hora. No desprecies los instantes rojos: una reconciliación, un abrazo, una canción que te desanudó el pecho. La vida insiste. Dios no se queda en el llanto como en una casa propia. Espera el alba. Vendrá. Y cuando venga, recíbela sin desconfiar de tanto bien.",
        referencia: "Salmos 30:5",
        versiculo: "Por la noche durará el lloro, y á la mañana vendrá la alegría."
    },

    {
        nombre: "Gladiolo",
        flor: "🌷",
        frase: "Sube derecho, espada de jardín: hay firmeza que no lastima.",
        carta: "El gladiolo enseña que se puede ser firme sin volverse cruel. Endereza la espalda. Di que no cuando haga falta. Di que sí cuando el miedo sea el único argumento en contra. Jehová va delante; no estás empujando sola una puerta de hierro. La firmeza cristiana no aplasta: sostiene, protege, aclara. Crece hacia arriba, no contra la gente. Hay una espada de jardín que no hiere: señala el cielo. Camina así. Que tu carácter tenga tallo, no solo pétalo.",
        referencia: "Deuteronomio 31:8",
        versiculo: "Jehová es el que va delante de ti; él será contigo."
    },

    {
        nombre: "Alhelí",
        flor: "🌼",
        frase: "El muro pobre se adorna si alguien siembra al pie; así también un día gris.",
        carta: "El alhelí convierte un muro triste en orilla de color. Tú puedes hacer eso con un día gris: no negarlo, sino sembrarle algo vivo al pie. Prueba y verás. A veces el bien de Dios se reconoce al probarlo, no al analizarlo desde lejos. Acércate. Ora aunque el muro siga ahí. Pon una flor —un gesto, un salmo, una caminata— donde solo había cemento. El paisaje cambia más de lo que promete el cansancio. Gustad. Hay una bondad que se comprueba, no solo se discute.",
        referencia: "Salmos 34:8",
        versiculo: "Gustad, y ved que es bueno Jehová."
    },

    {
        nombre: "Camellia",
        flor: "🌺",
        frase: "Invierno o primavera, ella asoma: la constancia tiene calendario propio.",
        carta: "La camelia no consulta el clima para decidir si vale la pena florecer. Hay una constancia tuya que ya es oración, aunque tú la llames rutina. Da gracias en todo, no porque todo sea dulce, sino porque nada queda fuera de Su cuidado. Sigue apareciendo: a clase, a la fe, a las personas que amas, a tu propio cuidado. El calendario de Dios no siempre coincide con el de la impaciencia. Florece igual. Esa tenacidad callada es una de las cosas más hermosas que alguien puede heredar de ti.",
        referencia: "1 Tesalonicenses 5:18",
        versiculo: "Dad gracias en todo; porque esta es la voluntad de Dios."
    },

    {
        nombre: "Adelfa",
        flor: "🌸",
        frase: "Crece junto al agua y enseña que el límite también puede ser orilla.",
        carta: "La adelfa se planta cerca del agua y entiende el borde. Un límite no siempre es cárcel: a veces es orilla, es cuidado, es no dejarse llevar la corriente del corazón. Guarda tu corazón con esmero. De él salen las decisiones que después se vuelven vida. No todo lo que emociona merece entrada. Elige ríos limpios: palabras que edifican, amistades que no te secan, pensamientos que no te acusan sin tregua. Crece junto a lo que da vida. El borde bien puesto también es gracia.",
        referencia: "Proverbios 4:23",
        versiculo: "Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida."
    },

    {
        nombre: "Cosmos",
        flor: "🌼",
        frase: "Orden en el caos del prado: hay un diseño aunque nadie lo dibuje.",
        carta: "El cosmos parece espontáneo y, sin embargo, guarda un orden. Tu vida también, aunque ahora el prado se vea revuelto. Hay un diseño más grande que tu agenda y más tierno que tus miedos. Pide que se te conceda conforme al corazón que Él mismo está formando, no al capricho de un mal día. Trabaja con paciencia. Confía sin dejar de sembrar. Nadie dibuja el prado flor a flor a simple vista, y aun así hay belleza. Descansa en eso: no estás improvisada. Estás sostenida.",
        referencia: "Salmos 20:4",
        versiculo: "Concédate conforme á tu corazón, y cumple todo tu consejo."
    }

];


const secretosRelicario = [
    "Esta rosa te dice: tu ternura no es debilidad; es tu forma de ser valiente.",
    "Este tulipán guarda: hay un comienzo limpio esperándote, sin prisa y sin miedo.",
    "Este girasol susurra: no dejes de buscar la luz, aunque el día se nuble un rato.",
    "Este cerezo te deja: lo breve también puede ser inolvidable, como un instante santo.",
    "Este hibisco afirma: tu historia merece ser contada con color, no en voz baja.",
    "Este ramo recuerda: no estás sola; hay manos y oraciones que te rodean.",
    "Esta margarita dice: lo sencillo que haces con amor ya es suficiente y hermoso.",
    "Esta lavanda calma: puedes soltar el peso de hoy; la paz también es un regalo.",
    "Esta orquídea confiesa: eres excepcional, aunque nadie lo diga en voz alta.",
    "Este clavel promete: hay cariño constante, de esos que no se agotan en un día.",
    "Esta caléndula sana: lo que hoy duele no será para siempre; hay alivio en camino.",
    "Esta azalea anima: aguanta un poco más; tu esperanza todavía tiene raíces.",
    "Esta dalia enseña: cada capa de tu vida te está haciendo más completa.",
    "Este ramillete une: los detalles pequeños, juntos, ya son una historia de amor.",
    "Esta gerbera sonríe: te está permitido el gozo, incluso en un día común.",
    "Este jacinto alienta: sé valiente; el miedo no tiene la última palabra sobre ti.",
    "Esta gardenia declara: eres amada de verdad, sin condiciones y sin teatro.",
    "Esta violeta honra: tu humildad es una corona discreta, y se nota en el cielo.",
    "Esta magnolia abre: hay una puerta nueva; no tengas miedo de cruzarla.",
    "Esta peonía ofrece: mereces abundancia de bien, no migajas de cariño.",
    "Esta begonia consuela: aunque nadie te mire, Dios ya te está cuidando.",
    "Esta petunia despierta: mañana puede oler a inicio; no te quedes en ayer.",
    "Esta azucena afirma: tu dignidad no se discute; camina con la frente en calma.",
    "Esta hortensia acompaña: hay amistad y fe creciendo a tu alrededor, despacio.",
    "Esta amapola consuela: después del llanto también llega un rojo vivo de alegría.",
    "Este gladiolo sostiene: tienes más fuerza de la que crees para el siguiente paso.",
    "Este alhelí señala: hay belleza escondida en el muro más pobre de tus días.",
    "Esta camelia agradece: tu constancia ya es una oración que alguien recibió.",
    "Esta adelfa cuida: guarda tu corazón; de ahí nace todo lo que vas a vivir.",
    "Este cosmos ordena: tu vida tiene un diseño, aunque ahora no veas el dibujo."
];


/* =====================================================
   MAZO SIN REPETIR HASTA AGOTAR LA LISTA
===================================================== */

function barajar(lista) {
    const copia = lista.slice();

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = copia[i];
        copia[i] = copia[j];
        copia[j] = temp;
    }

    return copia;
}

function sacarSinRepetir(mazo, original) {
    if (mazo.length === 0) {
        mazo.push.apply(mazo, barajar(original));
    }

    return mazo.pop();
}


function soltarPetalos() {
    if (!petalosCaida) {
        return;
    }

    const simbolos = ["🌸", "🌷", "💗", "✨", "🌼"];

    for (let i = 0; i < 14; i++) {
        const petalo = document.createElement("span");
        petalo.className = "petalo";
        petalo.textContent = simbolos[i % simbolos.length];
        petalo.style.left = Math.random() * 100 + "vw";
        petalo.style.fontSize = 16 + Math.random() * 16 + "px";
        petalo.style.animationDuration = 2.2 + Math.random() * 1.8 + "s";
        petalo.style.animationDelay = Math.random() * 0.4 + "s";
        petalosCaida.appendChild(petalo);

        window.setTimeout(function () {
            petalo.remove();
        }, 5000);
    }
}


function escribirTexto(elemento, texto, alTerminar) {
    escrituraId += 1;
    const idActual = escrituraId;
    elemento.textContent = "";

    const cursor = document.createElement("span");
    cursor.className = "cursor-escritura";
    elemento.appendChild(cursor);

    let indice = 0;

    function tick() {
        if (idActual !== escrituraId) {
            return;
        }

        if (indice >= texto.length) {
            cursor.remove();
            if (alTerminar) {
                alTerminar();
            }
            return;
        }

        cursor.insertAdjacentText("beforebegin", texto.charAt(indice));
        indice += 1;
        window.setTimeout(tick, 28);
    }

    tick();
}


/* =====================================================
   CAMBIAR MENSAJE DEL INICIO
===================================================== */

function cambiarMensajeInicio() {

    if (!mensajeInicio || !versiculoInicio) {
        return;
    }

    const mensaje = sacarSinRepetir(mazoMensajes, mensajesInicio);
    const versiculo = sacarSinRepetir(mazoVersiculos, versiculosInicio);

    versiculoInicio.innerHTML = "";

    escribirTexto(mensajeInicio, mensaje, function () {
        versiculoInicio.innerHTML =
            "<strong>" + versiculo.referencia + "</strong><br>" +
            versiculo.texto;
    });
}


/* =====================================================
   PASAR DE LA PRIMERA PÁGINA A LAS FLORES
===================================================== */

function pasarPagina(hoja) {
    hoja.classList.remove("detras");
    hoja.classList.add("pasada");

    window.setTimeout(function () {
        hoja.classList.add("detras");
    }, 1250);
}

function recogerPagina(hoja) {
    hoja.classList.remove("detras");
    hoja.classList.remove("pasada");
}

function pasarAFlores() {

    if (animando) {
        return;
    }

    animando = true;
    soltarPetalos();
    pasarPagina(hoja1);

    setTimeout(() => {
        animando = false;
    }, 1300);
}


/* =====================================================
   SELECCIONAR UNA FLOR
===================================================== */

function seleccionarFlor(indice) {

    if (animando) {
        return;
    }

    const flor = mensajesFlores[indice];

    if (!flor) {
        return;
    }

    florElegida = indice;
    prepararRelicario(flor, indice);

    mensajeSeleccionado.innerHTML = `
        
        <h1>Un mensaje para ti</h1>

        <div class="flor-grande">
            ${flor.flor}
        </div>

        <h2>${flor.nombre}</h2>

        <p class="frase-flor">
            ${flor.frase}
        </p>

        <p class="carta-flor">
            ${flor.carta}
        </p>

        <div class="versiculo-flor">
            <strong>${flor.referencia}</strong>
            <br><br>
            ${flor.versiculo}
        </div>

        <button class="boton-principal" onclick="pasarAFinal()">
            <span class="perla"></span>
            Mensaje final
            <span class="perla"></span>
        </button>
    `;

    animando = true;
    soltarPetalos();
    pasarPagina(hoja2);

    setTimeout(() => {
        animando = false;
    }, 1300);
}


/* =====================================================
   PASAR A LA PÁGINA FINAL
===================================================== */

function prepararRelicario(flor, indice) {
    const emoji = document.getElementById("relicarioEmoji");
    const nombre = document.getElementById("relicarioNombre");
    const secreto = document.getElementById("secretoRelicario");
    const bloque = document.getElementById("relicarioBloque");
    const pista = document.getElementById("pistaRelicario");

    if (!secreto) {
        return;
    }

    if (emoji) {
        emoji.textContent = flor.flor;
    }

    if (nombre) {
        nombre.textContent = flor.nombre;
    }

    secreto.textContent = secretosRelicario[indice] ||
        "Hay un cariño guardado aquí, solo para ti.";

    if (bloque) {
        bloque.classList.remove("abierto");
    }

    if (pista) {
        pista.textContent = "Toca el corazón para leer el secreto de tu " +
            flor.nombre.toLowerCase();
    }
}

function abrirRelicario() {
    const bloque = document.getElementById("relicarioBloque");

    if (!bloque) {
        return;
    }

    bloque.classList.toggle("abierto");
}

function pasarAFinal() {

    if (animando) {
        return;
    }

    animando = true;
    soltarPetalos();
    pasarPagina(hoja3);

    window.setTimeout(function () {
        if (hojaFinal) {
            hojaFinal.classList.add("al-frente");
        }
        animando = false;
    }, 700);
}


/* =====================================================
   VOLVER AL INICIO
===================================================== */

function volverAlInicio() {

    if (animando) {
        return;
    }

    animando = true;
    soltarPetalos();

    const relicarioBloque = document.getElementById("relicarioBloque");
    if (relicarioBloque) {
        relicarioBloque.classList.remove("abierto");
    }

    if (hojaFinal) {
        hojaFinal.classList.remove("al-frente");
    }

    recogerPagina(hoja3);

    setTimeout(() => {

        recogerPagina(hoja2);

    }, 700);

    setTimeout(() => {

        recogerPagina(hoja1);

    }, 1400);

    setTimeout(() => {

        cambiarMensajeInicio();

        animando = false;

    }, 2100);
}


function abrirSobre() {
    if (sobreAbierto) {
        return;
    }

    if (!sobreOverlay || !botonSobre) {
        cambiarMensajeInicio();
        return;
    }

    sobreAbierto = true;
    botonSobre.classList.add("abierto");

    window.setTimeout(function () {
        sobreOverlay.classList.add("oculto");
        soltarPetalos();
        cambiarMensajeInicio();
    }, 700);
}


/* =====================================================
   AL CARGAR LA PÁGINA
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        hoja1.classList.remove("pasada");
        hoja2.classList.remove("pasada");
        hoja3.classList.remove("pasada");

        const relicario = document.getElementById("relicario");
        if (relicario) {
            relicario.addEventListener("click", abrirRelicario);
        }

        if (botonSobre && sobreOverlay) {
            botonSobre.addEventListener("click", function (evento) {
                evento.stopPropagation();
                abrirSobre();
            });
            sobreOverlay.addEventListener("click", abrirSobre);
        } else {
            cambiarMensajeInicio();
        }
    }
);