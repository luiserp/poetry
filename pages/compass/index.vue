<template>
  <NuxtLayout>
    <section
      class="container px-10 mt-6 text-justify leading-8 text-gray-900 p-10 border-solid border bg-gray-50 shadow-sm rounded-lg mx-4 w-[90%] min-h-screen"
      data-aos="fade-up"
      >
      <h2 class="text-lg font-semibold">
        “La muerte y la brújula” de Jorge Luis Borges. 1942.
      </h2>
      <!-- Intro -->
      <p class="select-none text-xl leading-10">
        De los muchos problemas que ejercitaron la temeraria perspicacia de
        Lönnrot, ninguno tan extraño —tan rigurosamente extraño, diremos— como
        la periódica serie de hechos de sangre que culminaron en la quinta de
        Triste-le-Roy, entre el interminable olor de los eucaliptos. Es verdad
        que Erik Lönnrot no logró impedir el último crimen, pero es indiscutible
        que lo previó. Tampoco adivinó la identidad del infausto asesino de
        Yarmolinsky, pero sí la secreta morfología de la malvada serie y la
        participación de Red Scharlach, cuyo segundo apodo es Scharlach el
        Dandy. Ese criminal (como tantos) había jurado por su honor la muerte de
        Lönnrot, pero éste nunca se dejó intimidar. Lönnrot se creía un puro
        razonador, un Auguste Dupin, pero algo de aventurero había en él y hasta
        de tahur.
      </p>
      <!-- First -->
      <div id="first">
        <Button class="my-10" @click="first">
          ESCOJE TU PRIMER CRIMEN EN LA BRÚJULA
        </Button>
      </div>

      <p class="select-none text-xl leading-10">
        Lönnrot se abstuvo de sonreír. Bruscamente bibliófilo o hebraísta,
        ordenó que le hicieran un paquete con los libros del muerto y los llevó
        a su departamento. Indiferente a la investigación policial, se dedicó a
        estudiarlos. Un libro en octavo mayor le reveló las enseñanzas de Israel
        Baal Shem Tobh, fundador de la secta de los Piadosos; otro, las virtudes
        y terrores del Tetragrámaton, que es el inefable Nombre de Dios; otro,
        la tesis de que Dios tiene un nombre secreto, en el cual está
        compendiado (como en la esfera de cristal que los persas atribuyen a
        Alejandro de Macedonia), su noveno atributo, la eternidad, es decir, el
        conocimiento inmediato de todas las cosas que serán, que son y que han
        sido en el universo. La tradición enumera noventa y nueve nombres de
        Dios; los hebraístas atribuyen ese imperfecto número al mágico temor de
        las cifras pares; los Hasidim razonan que ese hiato señala un centésimo
        nombre. El Nombre Absoluto.
      </p>
      <p class="select-none text-xl leading-10">
        De esa erudición lo distrajo, a los pocos días, la aparición del
        redactor de la Yidische Zaitung. Este quería hablar del asesinato;
        Lönnrot prefirió hablar de los diversos nombres de Dios; el periodista
        declaró en tres columnas que el investigador Erik Lönnrot se había
        dedicado a estudiar los nombres de Dios para dar con el nombre del
        asesino. Lönnrot, habituado a las simplificaciones del periodismo, no se
        indignó. Uno de esos tenderos que han descubierto que cualquier hombre
        se resigna a comprar cualquier libro, publicó una edición popular de la
        Historia de la secta de los Hasidim
      </p>

      <!-- Second -->
      <div id="second">
        <Button class="my-10" @click="second">
          ELIGE EL SEGUNDO CRIMEN EN LA BRÚJULA
        </Button>
      </div>

      <p class="select-none text-xl leading-10">
        Examinó, después, la piecita de Gryphius—Ginzberg. Había en el suelo una
        brusca estrella de sangre; en los rincones , restos de cigarrillo de
        marca húngara; en un armario, un libro en latín —el Philologus
        hebraeograecus(1739), de Leusden— con varias notas manuscritas.
        Treviranus lo miró con indignación e hizo buscar a Lönnrot. Este, sin
        sacarse el sombrero, se puso a leer, mientras el comisario interrogaba a
        los contradictorios testigos del secuestro posible. A las cuatro
        salieron. En la torcida Rue de Toulon, cuando pisaban las serpentinas
        muertas del alba, Treviranus dijo:
      </p>
      <p class="select-none text-xl leading-10">
        —¿Y si la historia de esta noche fuera un simulacro? Erik Lönnrot sonrió
        y le leyó con toda gravedad un pasaje (que estaba subrayado) de la
        disertación trigésima tercera del Philologus: Dies Judaeorum incipit a
        solis occasu usque ad solis occasum diei sequentis. Esto quiere decir
        —agregó—, El día hebreo empieza al anochecer y dura hasta el siguiente
        anochecer.
      </p>
      <p class="select-none text-xl leading-10">El otro ensayó una ironía.</p>
      <p class="select-none text-xl leading-10">
        —¿Ese dato es el más valioso que usted ha recogido esta noche? —No. Más
        valiosa es una palabra que dijo Ginzberg.
      </p>
      <p class="select-none text-xl leading-10">
        Los diarios de la tarde no descuidaron esas desapariciones periódicas.
        La Cruz de la Espada las contrastó con la admirable disciplina y el
        orden del último Congreso Eremítico; Erns Palast, en El Mártir, reprobó
        “las demoras intolerables de un pogrom clandestino y frugal, que ha
        necesitado tres meses para liquidar tres judíos”; la Yidische Zaitung
        rechazó la hipótesis horrorosa de un complot antisemita, “aunque muchos
        espíritus penetrantes no admiten otra solución del triple misterio”; el
        más ilustre de los pistoleros del Sur, Dandy Red Scharlach, juró que en
        su distrito nunca se producirían crímenes de ésos y acusó de culpable
        negligencia al comisario Franz Treviranus.
      </p>
      <p class="select-none text-xl leading-10">
        Este recibió, la noche del primero de marzo, un imponente sobre sellado.
        Lo abrió: el sobre contenía una carta firmada Baruj Spinoza y un
        minucioso plano de la ciudad, arrancado notoriamente de un Baedeker. La
        carta profetizaba que el tres de marzo no habría un cuarto crimen, pues
        la pinturería del Oeste, la taberna de la Rue de Toulon y el Hôtel du
        Nord eran “los vértices perfectos de un triángulo equilátero y místico”;
        el plano demostraba en tinta roja la regularidad de ese triángulo.
        Treviranus leyó con resignación ese argumento more geometrico y mandó la
        carta y el plano a casa de Lönnrot, indiscutible merecedor de tales
        locuras.
      </p>
      <!-- Third -->
      <div id="third">
        <Button class="my-10" @click="third">
          ELIGE EL TERCER CRIMEN EN LA BRÚJULA
        </Button>
      </div>
      <p class="select-none text-xl leading-10">
        Erik Lönnrot las estudió. Los tres lugares, en efecto, eran
        equidistantes. Simetría en el tiempo (3 de diciembre, 3 de enero, 3 de
        febrero); simetría en el espacio también... Sintió, de pronto, que
        estaba por descifrar el misterio. Un compás y una brújula completaron
        esa brusca intuición. Sonrió, pronunció la palabra Tetragrámaton (de
        adquisición reciente) y llamó por teléfono al comisario. Le dijo:
      </p>
      <p class="select-none text-xl leading-10">
        —Gracias por ese triángulo equilátero que usted anoche me mandó. Me ha
        permitido resolver el problema. Mañana viernes los criminales estarán en
        la cárcel; podemos estar muy tranquilos.
      </p>
      <p class="select-none text-xl leading-10">
        —Entonces, ¿no planean un cuarto crimen? —Precisamente, porque planean
        un cuarto crimen, podemos estar muy tranquilos. —Lönnrot colgó el tubo.
        Una hora después, viajaba en un tren de los Ferrocarriles Australes,
        rumbo a la quinta abandonada de Triste-le-Roy. Al sur de la ciudad de mi
        cuento fluye un ciego riachuelo de aguas barrosas, infamado de
        curtiembres y de basuras. Del otro lado hay un suburbio donde, al amparo
        de un caudillo barcelonés, medran los pistoleros. Lönnrot sonrió al
        pensar que el más afamado —Red Scharlach— hubiera dado cualquier cosa
        por conocer su clandestina visita. Azevedo fue compañero de Scharlach;
        Lönnrot consideró la remota posibilidad de que la cuarta víctima fuera
        Scharlach. Después, la desechó... Virtualmente, había descifrado el
        problema; las meras circunstancias, la realidad (nombres, arrestos,
        caras, trámites judiciales y carcelarios) apenas le interesaban ahora.
        Quería pasear, quería descansar de tres meses de sedentaria
        investigación. Reflexionó que la explicación de los crímenes estaba en
        un triángulo anónimo y en una polvorienta palabra griega. El misterio
        casi le pareció cristalino; se abochornó de haberle dedicado cien días.
      </p>
      <p class="select-none text-xl leading-10">
        El tren paró en una silenciosa estación de cargas. Lönnrot bajó. El aire
        de la turbia llanura era húmedo y frío. Lönnrot echó a andar por el
        campo. Vio perros, vio un furgón en una vía muerta, vio el horizonte,
        vio un caballo plateado que bebía del agua crapulosa de un charco.
        Oscurecía cuando vio el mirador rectangular de la quinta de
        Triste-le-Roy, casi tan alto como los negros eucaliptos que lo rodeaban.
        Pensó que apenas un amanecer y un ocaso (un viejo resplandor en el
        oriente y otro en el occidente) lo separaban de la hora anhelada por los
        buscadores del Nombre.
      </p>

      <!-- Fourth -->
      <div id="fourth">
        <Button class="my-10" @click="fourth">
          ELIGE EL CUARTO CRIMEN EN LA BRÚJULA
        </Button>
      </div>

      <p class="select-none text-xl leading-10">
        Una herrumbrada verja definía el perímetro irregular de la quinta. El
        portón principal estaba cerrado. Lönnrot, sin mucha esperanza de entrar,
        dio toda la vuelta. De nuevo ante el porton infranqueable, metió la mano
        entre los barrotes, casi maquinalmente, y dio con el pasador. El
        chirrido del hierro lo sorprendió. Con una pasividad laboriosa, el
        portón entero cedió.
      </p>
      <p class="select-none text-xl leading-10">
        Lönnrot avanzó entre los eucaliptos, pisando confundidas generaciones de
        rotas hojas rígidas. Vista de cerca, la casa de la quinta de
        Triste-le-Roy abundaba en inútiles simetrías y en repeticiones
        maniáticas: a una Diana glacial en un nicho lóbrego correspondía en un
        segundo nicho otra Diana; un balcón se reflejaba en otro balcón; dobles
        escalinatas se abrían en doble balaustrada. Lönnrot rodeó la casa como
        había rodeado la quinta. Todo lo examinó: bajo el nivel de la terraza
        vio una estrecha persiana.
      </p>
      <p class="select-none text-xl leading-10">
        La empujó: unos pocos escalones de mármol descendían a un sotano.
        Lönnrot, que ya intuía las preferencias del arquitecto, adivino que en
        el opuesto muro del sótano había otros escalones. Los encontró, subió,
        alzó las manos y abrió la trampa de salida.
      </p>
      <p class="select-none text-xl leading-10">
        Un resplandor lo guió a una ventana. La abrió: una luna amarilla y
        circular definía en el triste jardín dos fuentes cegadas. Lönnrot
        exploró la casa. Por ante comedores y galerías salió a patios iguales y
        repetidas veces al mismo patio. Subió por escaleras polvorientas a
        antecámaras circulares; infinitamente se multiplicó en espejos opuestos;
        se cansó de abrir o entreabrir ventanas que le revelaban, afuera, el
        mismo desolado jardín desde varias alturas y varios ángulos; adentro,
        muebles con fundas amarillas y arañas embaladas en tarlatán. un
        dormitorio lo detuvo; en ese dormitorio, una sola flor en una copa de
        porcelana; al primer roce los pétalos antiguos se deshicieron. En el
        segundo piso, en el último, la casa le pareció infinita y creciente. La
        casa no es tan grande, pensó. La agrandan la penumbra, la simetría, los
        espejos, los muchos años, mi desconocimiento, la soledad.
      </p>
      <p class="select-none text-xl leading-10">
        Por una escalera espiral llegó al mirador. La luna de esa tarde
        atravesaba los losanges de las ventanas; eran amarillos, rojos y verdes.
        Lo detuvo un recuerdo asombrado y vertiginoso. Dos hombres de pequeña
        estatura, feroces y fornidos, se arrojaron sobre él y lo desarmaron;
        otro, muy alto, lo saludó con gravedad y le dijo:
      </p>
      <p class="select-none text-xl leading-10">
        —Usted es muy amable. Nos ha ahorrado una noche y un día. Era Red
        Scharlach. Los hombres maniataron a Lönnrot. Este, al fin, encontró su
        voz. —Scharlach, ¿usted busca el Nombre Secreto? Scharlach seguía de
        pie, indiferente. No había participado en la breve lucha, apenas si
        alargó la mano para recibir el revólver de Lönnrot. Habló; Lönnrot oyó
        en su voz una fatigada victoria, un odio del tamaño del universo, una
        tristeza no menor que aquel odio. —No —dijo Scharlach—. Busco algo más
        efímero y deleznable, busco a Erik Lönnrot. Hace tres años, en un garito
        de la Rue de Toulon, usted mismo arrestó e hizo encarcelar a mi hermano.
        En un cupé, mis hombres me sacaron del tiroteo con una bala policial en
        el vientre. Nueve días y nueve noches agonicé en esta desolada quinta
        simétrica; me arrasaba la fiebre, el odioso Jano bifronte que mira los
        ocasos y las auroras daban horror a mi ensueño y a mi vigilia. Llegué a
        abominar de mi cuerpo, llegué a sentir que dos ojos, dos manos, dos
        pulmones, son tan mostruosos como dos caras. Un irlandés trató de
        convertirme a la fe de Jesús; me repetía la sentencia de los goim: Todos
        los caminos llevan a Roma. De noche, mi delirio se alimentaba de esa
        metáfora: yo sentía que el mundo es un laberinto, del cual era imposible
        huir, pues todos los caminos, aunque fingieran ir al Norte o al Sur,
        iban realmente a Roma, que era también la cárcel cuadrangular donde
        agonizaba mi hermano y la quinta de Triste-le-Roy. En esas noches yo
        juré por el dios que ve con dos caras y por todos los dioses de la
        fiebre y de los espejos tejer un laberinto en torno del hombre que había
        encarcelado a mi hermano. Lo he tejido y es firme: los materiales son un
        heresiólogo muerto, una brújula, una secta del siglo XVIII, una palabra
        griega, un puñal, los rombos de una pinturería.
      </p>
      <p class="select-none text-xl leading-10">
        El primer término de la serie me fue dado por el azar. Yo había tramado
        con algunos colegas —entre ellos, Daniel Azevedo— el robo de los zafiros
        del Tetrarca. Azevedo nos traicionó: se emborrachó con el dinero que le
        habíamos adelantado y acometió la empresa el día antes. En el enorme
        hotel se perdió; hacia las dos de la madrugada irrumpió en el dormitorio
        de Yarmolinsky. Este, acosado por el insomio, se había puesto a
        escribir. Verosímilmente, redactaba unas notas o un artículo sobre el
        Nombre de Dios; había escrito ya las palabras La primera letra del
        Nombre ha sido articulada. Azevedo le intimó silencio; Yarmolinsky
        alargó la mano hacia el timbre que despertaría todas las fuerzas del
        hotel; Azevedo le dio una sola puñalada en el pecho.Fue casi un
        movimiento reflejo; medio siglo de violencia le había enseñado que lo
        más fácil y seguro es matar... A los diez días yo supe por la Yidische
        Zaitung que usted buscaba en los escritos de Yarmolinsky la clave de la
        muerte de Yarmolinsky. Leí la Historia de la secta de los Hasidim; supe
        que el miedo reverente de pronunciar el Nombre de Dios había originado
        la doctrina de que ese Nombre es todopoderoso y recóndito. Supe que
        algunos Hasidim, en busca de ese Nombre secreto, habían llegado a
        cometer sacrificios humanos... Comprendí que usted conjeturaba que los
        Hasidim habían sacrificado al rabino; me dediqué a justificar esa
        conjetura.
      </p>
      <p class="select-none text-xl leading-10">
        Marcelo Yarmolinsky murió la noche del tres de diciembre; para el
        segundo “sacrificio” elegí la del tres de enero. Muró en el Norte; para
        el segundo “sacrificio” nos convenía un lugar del Oeste. Daniel Azevedo
        fue la víctima necesaria. Merecía la muerte: era un impulsivo, un
        traidor; su captura podía aniquilar todo el plan. Uno de los nuestros lo
        apuñaló; para vincular su cadáver al anterior, yo escribí encima de los
        rombos de la pinturería La segunda letra del Nombre ha sido articulada.
      </p>
      <p class="select-none text-xl leading-10">
        El tercer “crimen” se produjo el tres de febrero. Fue, como Treviranus
        adivinó, un mero simulacro. Gryphius-Ginzberg-Ginsburg soy yo; una
        semana interminable sobrellevé (suplementado por una tenua barba
        postiza) en ese perverso cubículo de la Rue de Toulon, hasta que los
        amigos me secuestraron. Desde el estribo del cupé, uno de ellos escribió
        en un pilar La última de las letras del Nombre ha sido articulada. Esa
        escritura divulgó que la serie de crímenes era triple. Así lo entendió
        el público; yo, sin embargo, intercalé repetidos indicios para que
        usted, el razonador Erik Lönnrot, comprendiera que es cuádruple.
      </p>
      <p class="select-none text-xl leading-10">
        Un prodigio en el Norte, otros en el Este y en el Oeste, reclaman un
        cuarto prodigio en el Sur; el Tetragrámaton —el nombre de Dios, JHVH—
        consta de cuatroletras; los arlequines y la muestra del pinturero
        sugieren cuatro términos. Yo subrayé cierto pasaje en el manual de
        Leusden: ese pasaje manifiesta que los hebreos computaban el día de
        ocaso a ocaso; ese pasaje da a entender que las muertes ocurrieron el
        cuatro de cada mes. Yo mandé el triángulo equilátero a Treviranus. Yo
        presentí que usted agregaría el punto que falta. El punto que determina
        un rombo perfecto, el punto que prefija el lugar donde una exacta muerte
        lo espera. Todo lo he premeditado, Erik Lönnrot, para atraerlo a usted a
        las soledades
      </p>
      <p class="select-none text-xl leading-10">
        Lönnrot evitó los ojos de Scharlach. Miró los árboles y el cielo
        subdivididos en rombos turbiamente amarillos, verdes y rojos. Sintió un
        poco de frío y una tristeza impersonal, casi anónima. Ya era de noche;
        desde el polvoriento jardín subió el grito inútil de un pájaro. Lönnrot
        consideró por última vez el problema de las muertes simétricas y
        periódicas. —En su laberinto sobran tres líneas —dijo por fin—. Yo sé de
        un laberinto griego que es una línea única, recta. En esa línea se han
        perdido tantos filósofos que bien puede perderse un mero detective.
        Scharlach, cuando en otro avatar usted me dé caza, finja (o cometa) un
        crimen en A, luego un segundo crimen en B, en 8 kilómetros de A, luego
        un tercer crimen en C, a 4 kilómetros de A y de B, a mitad de camino
        entre los dos. Aguárdeme después en D, a 2 kilómetros de A y de C, de
        nuevo a mitad de camino. Máteme en D, como ahora va a matarme en
        Triste-le-Roy.
      </p>
      <p class="select-none text-xl leading-10">
        Para la otra vez que lo mate —replicó Scharlach—, le prometo ese
        laberinto, que consta de una sola línea recta y que es indivisible,
        incesante.
      </p>
      <p class="select-none text-xl leading-10">
        Retrocedió unos pasos. Después, muy cuidadosamente, hizo fuego.
      </p>

      <Modal :show="show" @close="show = false">
        <div class="w-[100%] h-80 flex flex-col justify-center items-center">
          <Compass :link="link" />
        </div>
      </Modal>
    </section>


  </NuxtLayout>
</template>

<script setup>
import Compass from "@/components/Compass.vue";
import Modal from "~/components/Core/Modal.vue";
import { ref } from "vue";
import Button from "~/components/Core/Button/Button.vue";

useHead({
  title: 'El Girar De Destinos',
})

const show = ref(false);
const link = ref("");

function first() {
  link.value = "first";
  showModal();
}

function second() {
  link.value = "second";
  showModal();
}

function third() {
  link.value = "third";
  showModal();
}

function fourth() {
  link.value = "fourth";
  showModal();
}

function showModal() {
  show.value = true;
}


</script>

<style lang="scss" scoped>
html {
  scroll-behavior: smooth;
}
</style>
