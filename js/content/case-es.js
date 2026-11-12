/* Spanish line casebooks: escenarios para leer, con causa, solución y frases */
window.EXTRA_LESSONS=(window.EXTRA_LESSONS||[]).concat([

{id:"e20",track:"es",lang:"es",title:"Casebook 1: Internet y Wi-Fi, casos de soporte técnico",level:"basic",account:"Northwave Fiber",mins:22,
 teach:[
  SE("No hay internet y las luces están apagadas","El cliente dice que nada funciona. El módem no tiene ninguna luz.","No hay corriente: cable flojo, enchufe sin energía o regleta apagada.","1) Pídale que siga el cable de corriente hasta la pared. 2) Que lo conecte a otro enchufe que sepa que funciona. 3) Que apriete bien el conector. 4) Esperar tres minutos.","Empecemos por lo más sencillo. ¿Puede seguir el cable de corriente del módem hasta la pared y decirme dónde termina?","Si sigue apagado en un enchufe bueno: reemplazo del equipo."),
  SE("La luz de Internet parpadea en naranja","El módem está encendido pero no se conecta.","No encuentra la señal: cable flojo, doblado o una falla en la zona.","1) Revisar el cable de la pared al módem. 2) Que quede apretado con la mano. 3) Desconectar 30 segundos y volver a conectar. 4) Revisar si hay una interrupción en la zona.","Esa luz me indica que el módem está buscando nuestra red. Revisemos el cable de la pared.","Sigue parpadeando: abrir caso o enviar técnico."),
  SE("Hay Wi-Fi pero no hay internet","El teléfono dice conectado, sin acceso.","El router perdió la conexión con el proveedor, o es solo el Wi-Fi.","1) Conectar una computadora con cable al router. 2) Si funciona, el problema es el Wi-Fi. 3) Si no, reiniciar el módem y después el router.","Vamos a ver si falla el internet o solo el Wi-Fi. ¿Puede conectar una computadora al router con un cable?",""),
  SE("Internet lento solo por la noche","Funciona bien de día y se pone lento de siete a diez.","Muchos aparatos usando la red a la vez o la red de la zona está saturada.","1) Contar los aparatos activos. 2) Pausar descargas grandes. 3) Usar la banda de 5 GHz o un cable para la televisión. 4) Anotar las horas para el nivel 2.","Por la noche mucha gente usa video al mismo tiempo. Veamos qué aparatos puede pasar a cable o a la red de 5.","Lento incluso con cable varias noches: nivel 2."),
  SE("La señal no llega al cuarto del fondo","Hay una zona sin cobertura.","Distancia y paredes gruesas.","1) Medir la señal por cuarto. 2) Mover el router a un lugar central y alto. 3) Agregar un nodo mesh a la mitad. 4) Conectarlo con cable si se puede.","La señal pierde fuerza al atravesar paredes. Un punto a medio camino la lleva hasta el fondo.",""),
  SE("El cliente cambió el router y los aparatos inteligentes no conectan","Enchufes y cámaras sin conexión.","Solo funcionan en 2.4 GHz o cambió el nombre de la red.","1) Separar las bandas. 2) Conectar los aparatos al nombre de 2.4. 3) Durante la configuración, poner el celular en 2.4.","Muchos aparatos inteligentes solo usan la banda de 2.4. Vamos a separar los nombres de la red.",""),
  SE("Un solo sitio web no abre","Los demás sitios cargan.","El sitio está caído o hay datos guardados que fallan.","1) Probar en una ventana privada. 2) Probar con datos móviles. 3) Limpiar la caché de ese sitio.","Si los demás sitios abren, su internet funciona. Probemos ese sitio en una ventana privada.","")
 ],
 steps:{h:"Orden rápido de diagnóstico",items:[["Alcance","¿Un aparato o todos?"],["Luces","¿Qué luces ve exactamente?"],["Cable","Apretado, sin dobleces."],["Reinicio","Primero el módem, esperar tres minutos."],["Prueba","Cable a una computadora."],["Zona","Revisar interrupciones."]]},
 script:[["c","No tengo internet y no sé qué hacer."],["a","Lamento el inconveniente, señora. Vamos a resolverlo juntas. ¿Qué luces ve en el módem y de qué color son?","Empatía y pregunta abierta, de usted."],["c","La de Internet parpadea en naranja."],["a","Gracias. Eso significa que el módem busca nuestra red. ¿Puede revisar que el cable de la pared esté bien apretado?","Explica y da un paso."]],
 qa:["Usó usted en toda la llamada","Explicó cada resultado","Hizo una prueba de control","Anotó el caso en inglés o según la política"],
 quiz:[
  ["Si el módem no tiene ninguna luz, revise primero:",["La cuenta","La corriente y el enchufe","El DNS"],1,"Sin luces, sin corriente."],
  ["El Wi-Fi no tiene internet, pero con cable sí. El problema es:",["El proveedor","El Wi-Fi","La cuenta"],1,"La prueba con cable lo aísla."],
  ["Aparatos inteligentes suelen necesitar:",["5 GHz","2.4 GHz","Ethernet"],1,"2.4 GHz."]
 ]},

{id:"e21",track:"es",lang:"es",title:"Casebook 2: Computadoras, celulares y correo en español",level:"basic",account:"Brightdesk IT",mins:22,
 teach:[
  SE("La computadora está muy lenta","Tarda mucho en encender y se traba.","Demasiados programas al inicio, disco lleno o actualizaciones pendientes.","1) Administrador de tareas, pestaña de Inicio. 2) Desactivar programas que no necesite. 3) Liberar espacio. 4) Dejar terminar las actualizaciones y reiniciar.","Muchos programas arrancan con Windows y lo hacen lento. Podemos desactivar los que no necesita al inicio. No se borran.","Disco al 100 por ciento sin uso: nivel 2."),
  SE("Olvidó la contraseña de Windows","No puede entrar a su cuenta.","Cuenta de Microsoft o local.","1) Preguntar si usa correo de Microsoft. 2) Restablecer desde otro aparato. 3) Para trabajo, seguir el proceso de la empresa. 4) Nunca adivinar ni saltar la seguridad.","Como es una cuenta de Microsoft, la guío para restablecerla desde su teléfono.",""),
  SE("El celular dice que no hay espacio","No puede tomar fotos.","Fotos, videos y aplicaciones.","1) Ajustes, Almacenamiento. 2) Ver qué ocupa más. 3) Respaldar fotos primero. 4) Borrar solo después de confirmar el respaldo.","Antes de borrar algo, vamos a asegurarnos de que sus fotos estén respaldadas.","El cliente teme perder fotos: no borrar sin respaldo."),
  SE("Una aplicación se cierra sola","Se cierra al abrirla.","Versión vieja, poco espacio o datos dañados.","1) Actualizar la aplicación. 2) Reiniciar el teléfono. 3) Borrar la caché. 4) Desinstalar y volver a instalar.","Primero borremos los datos temporales de la aplicación. Su cuenta y archivos no se pierden.",""),
  SE("No puede enviar correos","Quedan en la bandeja de salida.","Modo sin conexión, archivo grande o contraseña vieja.","1) Revisar Trabajar sin conexión. 2) Quitar archivos adjuntos grandes. 3) Actualizar la contraseña. 4) Probar el correo por la web.","Probemos el correo por internet. Así sabemos si es la cuenta o solo la aplicación.","El correo web también falla: nivel 2."),
  SE("Hizo clic en un enlace falso","Escribió su contraseña en una página sospechosa.","Phishing.","1) No regañar. 2) Cambiar la contraseña desde un aparato limpio. 3) Activar la verificación en dos pasos. 4) Revisar accesos recientes. 5) Si es banco, llamar al banco.","Gracias por avisarme enseguida. Cambiemos su contraseña ahora y revisemos si hay algo raro.","Dinero o cuentas de trabajo involucradas: seguridad."),
  SE("Perdió el teléfono con las claves de verificación","No puede entrar a su cuenta de trabajo.","Dispositivo de verificación perdido.","1) Verificar identidad. 2) Usar códigos de respaldo. 3) Iniciar el restablecimiento. 4) Registrar el teléfono nuevo. Nunca pedir ni leer códigos en voz alta.","Puedo iniciar un restablecimiento seguro. Primero necesito verificar su identidad.","")
 ],
 steps:{h:"Problemas de cuentas y aparatos",items:[["Verificar","Confirme la identidad."],["Alcance","¿Un aparato o varios?"],["Respaldo","Antes de borrar."],["Arreglo","El cambio más pequeño primero."],["Prueba","Compruebe que funciona."],["Notas","Documente lo que hizo."]]},
 script:[["c","Hice clic en un enlace y puse mi contraseña. Creo que cometí un error."],["a","Gracias por decírmelo enseguida; hizo lo correcto. Vamos a cambiar su contraseña desde su propio aparato.","Sin culpar, acción inmediata."],["c","¿Y después?"],["a","Después activamos un segundo paso de seguridad y revisamos la actividad reciente. Yo la acompaño.","Plan claro."]],
 qa:["No culpó al cliente","Respaldo antes de borrar","No pidió códigos","Verificó antes de restablecer"],
 quiz:[
  ["El cliente cayó en phishing. Primero:",["Decirle que no importa","Cambiar la contraseña y activar verificación","Esperar"],1,"Actuar rápido."],
  ["Antes de borrar fotos:",["Borrar","Confirmar el respaldo","Restablecer"],1,"Primero el respaldo."],
  ["Códigos de verificación:",["Se leen al agente","Nunca se piden","Se envían por mensaje al agente"],1,"Nunca."]
 ]},

{id:"e22",track:"es",lang:"es",title:"Casebook 3: Facturas, pagos y planes en español",level:"basic",account:"Northwave Fiber",mins:20,
 teach:[
  SE("La factura subió treinta dólares","Le dijeron sesenta y cinco y ahora paga noventa y cinco.","Terminó la promoción o hay un cargo único.","1) Abrir la factura y comparar dos meses. 2) Explicar cada línea. 3) Ofrecer opciones: nueva promoción, plan más barato o crédito de cortesía.","Voy a revisar su factura línea por línea. Veo que terminó la promoción el mes pasado, y eso explica los treinta dólares.","Cargo por error: ajuste según la política."),
  SE("Le cobraron dos veces","Dos pagos iguales en el mes.","Pago automático más pago manual, o duplicado.","1) Revisar fechas. 2) Confirmar con el banco. 3) Si hay duplicado, reembolso o crédito. 4) Dar un plazo.","Veo dos pagos el mismo día. Voy a devolver el pago extra; debe llegar en cinco a siete días hábiles.",""),
  SE("No puede pagar este mes","Perdió horas de trabajo.","Falta de dinero temporal.","1) Mostrar empatía. 2) Ofrecer un plan de pagos. 3) Explicar el riesgo de cargos por mora. 4) Programar un recordatorio.","Tenemos opciones. Armemos un plan que se ajuste a su presupuesto.","Programa de ayuda o supervisor."),
  SE("Se muda la próxima semana","Quiere trasladar el servicio.","Cambio de domicilio.","1) Verificar cobertura. 2) Fijar fecha. 3) Decidir sobre el equipo. 4) Factura final prorrateada.","Voy a revisar si su nueva dirección tiene cobertura y le programo la instalación.","Sin cobertura: cancelar y devolver equipo."),
  SE("Falló el pago automático","La tarjeta venció.","Método de pago caducado.","1) Verificar al cliente. 2) Tomar la tarjeta nueva por el proceso seguro. 3) Hacer el pago. 4) Confirmar el pago automático.","Su tarjeta venció. Puedo actualizarla ahora y enviarle la confirmación.",""),
  SE("La promoción no se aplicó","El cliente dice que le prometieron cincuenta.","La oferta no se registró.","1) Revisar notas y elegibilidad. 2) Si hay registro, cumplirla. 3) Si no, explicar y ofrecer lo disponible.","Voy a revisar las notas de esa llamada.","Promesa documentada: supervisor."),
  SE("Pide un crédito por una falla","Dos días sin internet.","Interrupción del servicio.","1) Confirmar la interrupción. 2) Aplicar la regla de crédito. 3) Anotarlo. 4) Decir cuándo se verá.","Lamento la falla. Veo que estuvo sin servicio dos días, así que aplico un crédito.","")
 ],
 steps:{h:"Llamada de facturación",items:[["Verificar","Nombre y otro dato."],["Abrir la factura","Comparar meses."],["Explicar","Línea por línea."],["Opciones","Plan, promoción, crédito."],["Hacer","Durante la llamada."],["Confirmar","Resumen y plazo."]]},
 script:[["c","Mi factura subió treinta dólares y quiero saber por qué."],["a","Entiendo su molestia. Voy a revisar su factura y compararla con la del mes pasado para mostrarle qué cambió.","Empatía y plan."],["c","Está bien."],["a","Terminó su descuento promocional, y eso suma treinta dólares. Puedo ver si califica para otra oferta.","Respuesta clara y opción."]],
 qa:["Verificó antes de hablar de la cuenta","Explicó cada cargo","Ofreció opciones válidas","Confirmó plazos"],
 quiz:[
  ["La factura subió. Primero:",["Perdonar el cargo","Comparar meses y explicar","Transferir"],1,"Buscar la razón."],
  ["Si no puede pagar:",["Amenazar","Ofrecer un plan de pagos","Cancelar"],1,"Dar opciones."],
  ["Dice que le prometieron un precio:",["Decir que miente","Revisar notas","Ignorar"],1,"Verificar."]
 ]},

{id:"e23",track:"es",lang:"es",title:"Casebook 4: Pedidos, devoluciones y entregas en español",level:"basic",account:"Meridian Retail",mins:20,
 teach:[
  SE("Dice entregado pero no llegó","Revisó la puerta y con los vecinos.","Error del transportista o robo.","1) Confirmar la dirección. 2) Pedirle que revise de nuevo. 3) Abrir una búsqueda con el transportista. 4) Reenviar o reembolsar según la política.","Lamento lo ocurrido. Vamos a encontrarlo y, si no, lo resolvemos.","Varias quejas de la misma dirección: fraude."),
  SE("Llegó el artículo equivocado","Pidió azul y llegó rojo.","Error al preparar el pedido.","1) Verificar el pedido. 2) Disculparse. 3) Enviar el correcto primero o reembolsar. 4) Etiqueta de devolución gratis.","Fue un error nuestro. Le envío el correcto ahora y le mando la etiqueta de devolución.",""),
  SE("Devolución fuera de plazo","Pasaron cinco días del límite.","La política es de 30 días.","1) Explicar con amabilidad. 2) Ofrecer cambio o crédito si se permite. 3) Pedir una excepción al supervisor.","No puedo hacer el reembolso, pero puedo preguntar al supervisor si hay crédito en tienda.","Excepciones: supervisor."),
  SE("Producto dañado","Llegó roto.","Daño en el envío.","1) Pedir fotos. 2) Disculparse. 3) Reemplazo o reembolso. 4) Anotar la reclamación.","Lamento mucho el daño. Envíeme una foto y preparo el reemplazo ahora.",""),
  SE("El pedido se retrasó","Le prometieron el viernes.","Retraso de inventario o transporte.","1) Revisar el estado. 2) Dar una fecha honesta. 3) Ofrecer cancelar o acelerar. 4) No prometer lo que no controla.","La nueva fecha estimada es el martes. Si es muy tarde, puedo cancelar con reembolso completo.",""),
  SE("El cupón no funcionó","Esperaba veinte por ciento.","Código vencido o artículo excluido.","1) Leer las condiciones. 2) Explicar. 3) Ofrecer una opción válida.","Ese código excluye artículos en oferta. Puedo aplicar nuestra oferta actual del diez por ciento.","Error del sitio: informática."),
  SE("¿Dónde está mi reembolso?","Devolvió hace dos semanas.","Plazo de procesamiento.","1) Confirmar la recepción. 2) Decir el plazo. 3) Mostrar la fecha de emisión. 4) Explicar el tiempo del banco.","Recibimos su devolución el día tres y emitimos el reembolso al día siguiente. El banco puede tardar de cinco a siete días hábiles.","No llegó pasado el plazo: facturación.")
 ],
 steps:{h:"Llamada de pedidos",items:[["Buscar el pedido","Número o correo."],["Estado","Seguimiento y fechas."],["Política","Qué permite."],["Opciones","Reemplazo, reembolso, crédito."],["Hacer","Completarlo en la llamada."],["Confirmar","Resumen por correo."]]},
 script:[["c","Mi pedido dice entregado pero no lo tengo."],["a","Lamento mucho eso. Vamos a resolverlo. ¿Puede revisar alrededor de la puerta y con los vecinos mientras reviso el seguimiento?","Ayuda mientras investiga."],["c","No está."],["a","Gracias. Abro una búsqueda y le explico los pasos y la fecha en que tendrá respuesta.","Plan y fecha."]],
 qa:["Disculpa y responsabilidad","Política explicada con amabilidad","Fechas honestas","Reclamación anotada"],
 quiz:[
  ["Pedido retrasado:",["Prometer mañana","Dar la fecha real y opciones","Culpar al transportista"],1,"Ser honesta."],
  ["Devolución fuera de plazo:",["Colgar","Explicar y ofrecer alternativas","Aceptar siempre"],1,"Alternativas."],
  ["Producto dañado necesita:",["Fotos","Nada","Un gerente"],0,"Evidencia."]
 ]},

{id:"e24",track:"es",lang:"es",title:"Casebook 5: Banco y seguros en español",level:"mid",account:"Bright Bank / Harbor Health",mins:22,
 teach:[
  SE("Tarjeta perdida en un viaje","El cliente está fuera del país.","Pérdida o robo.","1) Verificar con rigor. 2) Bloquear la tarjeta. 3) Revisar los cargos. 4) Pedir una tarjeta nueva. 5) Anotar el viaje.","Voy a bloquear la tarjeta ahora mismo para que nadie más la use.",""),
  SE("Cargo de doscientos cuarenta dólares que no reconoce","No lo hizo.","Posible fraude.","1) Verificar. 2) Revisar los detalles con el cliente. 3) Abrir la reclamación. 4) Reemplazar la tarjeta. 5) Explicar plazos sin prometer el resultado.","Vamos a investigar y le daremos una decisión dentro del plazo.",""),
  SE("Un adulto mayor quiere enviar cinco mil dólares por un premio","Tono urgente.","Estafa.","1) Hacer una pausa. 2) Preguntar quién lo contactó. 3) Explicar las señales. 4) Ofrecer una retención. 5) Reportar.","Antes de enviar, ¿le puedo hacer unas preguntas para asegurarme de que está protegido?","Insiste: supervisor y fraude."),
  SE("Sobregiro inesperado","Le cobraron treinta y cinco dólares.","Un débito pendiente.","1) Explicar los pendientes. 2) Revisar si procede reembolso de cortesía. 3) Ofrecer alertas.","Veo que el débito se aplicó antes de su depósito. Veamos si podemos devolver la tarifa.",""),
  SE("Le negaron un reclamo médico","Recibió una carta.","Sin autorización previa u otro código.","1) Leer el motivo. 2) Explicar en palabras sencillas. 3) Ofrecer reenvío o apelación. 4) Dar plazos.","Veamos el motivo de la carta. Algunas negaciones son de papeleo y se pueden corregir.","Necesidad médica compleja: apelaciones."),
  SE("Factura sorpresa de un proveedor fuera de red","Fue a un hospital dentro de la red.","El proveedor facturó aparte.","1) Revisar protecciones. 2) Pedirle que no pague aún. 3) Abrir una revisión. 4) Dar plazos.","Puede estar protegido. Por favor espere antes de pagar mientras lo revisamos.",""),
  SE("Pide apelar","Le negaron tres veces.","Derecho del miembro.","1) Explicar los niveles: interno y externo. 2) Plazos. 3) Cómo enviar. 4) Anotar el caso.","Usted tiene derecho a apelar. Le explico los pasos y el plazo.","Urgencia médica: apelación acelerada.")
 ],
 steps:{h:"Banco y seguros",items:[["Verificar","Sin excepciones."],["Proteger","Bloquear primero si hay riesgo."],["Investigar","Revisar detalles."],["Hacer","Reclamar, reemplazar, apelar."],["Explicar","Plazos y reglas."],["Documentar","Notas y número de caso."]]},
 script:[["c","Me llamaron del banco diciendo que mi cuenta fue hackeada y que mueva mi dinero."],["a","Gracias por llamarnos. Eso es una estafa muy común. Por favor no mueva dinero. ¿Me dice desde qué número llamaron y qué le pidieron?","Detiene la transferencia con calma."],["c","Dijeron que eran del banco."],["a","Nunca le pedimos mover dinero para protegerlo. Revisemos su cuenta y aseguremos todo juntos.","Regla clara."]],
 qa:["Verificación estricta","Bloqueó antes de investigar","No pidió PIN ni códigos","Explicó las señales de estafa"],
 quiz:[
  ["Alguien dice ser del banco y pide mover dinero:",["Es normal","Es una estafa","Es una promoción"],1,"El banco no lo pide."],
  ["Tarjeta perdida. Primero:",["Disputar","Bloquearla","Enviar una nueva"],1,"Bloquear."],
  ["Una EOB es:",["Una factura","Un resumen de cómo se procesó el reclamo","Una receta"],1,"Resumen."]
 ]},

{id:"e25",track:"es",lang:"es",title:"Casebook 6: Clientes difíciles y cancelaciones en español",level:"mid",account:"Cuentas variadas",mins:22,
 teach:[
  SE("Grita desde la primera palabra","Llama muy molesto.","Frustración acumulada.","1) Déjelo desahogarse 20 a 30 segundos. 2) Baje la voz. 3) Use su nombre. 4) Disculpa específica. 5) Pregunta que lleve a la acción.","Escucho lo molesto que está y tiene razón. Voy a resolverlo con usted.",""),
  SE("Exige un reembolso que no puede dar","Fuera de política.","Límite de política.","1) Reconocer. 2) Explicar brevemente. 3) Ofrecer lo que sí puede. 4) Ofrecer un supervisor.","No puedo reembolsarlo, pero puedo ofrecerle un reemplazo o pedir que un supervisor lo revise.",""),
  SE("Le insulta","Palabras ofensivas.","Enojo.","1) Primer aviso: límite respetuoso. 2) Segundo aviso final. 3) Terminar según la política y documentar.","Quiero ayudarle, y necesito que hablemos con respeto para poder hacerlo.","Amenazas: terminar y reportar."),
  SE("Repite lo mismo una y otra vez","Da vueltas.","Necesita otra respuesta.","1) Resumir lo que puede y no puede hacer. 2) Ofrecer un camino. 3) Ofrecer supervisor.","Permítame resumir dónde estamos y qué puedo hacer ahora.",""),
  SE("Llora durante la llamada","Muy afectada.","Estrés.","1) Hablar más despacio y suave. 2) Darle tiempo. 3) Ofrecer pasos.","Tómese su tiempo. Estoy aquí y vamos paso a paso.","Menciona hacerse daño: protocolo de seguridad inmediato."),
  SE("Quiere cancelar por el precio","Es muy caro.","Falta de valor.","1) Preguntar el motivo. 2) Ofrecer un plan más barato una sola vez. 3) Respetar un no.","Tengo un plan de cincuenta dólares. ¿Le gustaría escucharlo?",""),
  SE("Quiere cancelar por la muerte de un familiar","El titular falleció.","Situación delicada.","1) Dar el pésame. 2) Pedir los documentos requeridos. 3) Explicar los pasos con calma.","Lamento mucho su pérdida. Voy a hacer esto lo más fácil posible.","")
 ],
 steps:{h:"Clientes difíciles",items:[["Dejar hablar","20 a 30 segundos."],["Reconocer","De forma específica."],["Asumir","Decir qué hará."],["Opciones","Ofrecer caminos."],["Límite","Aviso respetuoso."],["Escalar","Supervisor o terminar según política."]]},
 script:[["c","¡Esto es absurdo! Ya llamé cuatro veces."],["a","Cuatro llamadas son demasiadas y lo lamento. Me quedo con esto hasta resolverlo. ¿Me cuenta qué pasó en la última?","Reconocimiento específico y responsabilidad."],["c","Dijeron que me devolverían la llamada y no lo hicieron."],["a","Eso no debió pasar. Lo corrijo y le doy una hora con la que pueda contar.","Compromiso concreto."]],
 qa:["Lo dejó desahogarse","Disculpa específica","Ofreció opciones","Siguió la política de abuso"],
 quiz:[
  ["El cliente grita. Primero:",["Colgar","Dejarlo desahogarse","Subir la voz"],1,"Dejar salir el enojo."],
  ["Cancelación firme:",["Presionar con ofertas","Respetarla","Discutir"],1,"Respetar."],
  ["El cliente llora:",["Apurarlo","Hablar suave","Ignorar"],1,"Empatía."]
 ]}
]);
