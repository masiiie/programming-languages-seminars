// Objeto creado de forma literal
var book = {
    title: 'Single Page Web Applications',
    authors: ['Raidel Nápoles', 'Masiel Villalba', 'Camilo González', 'Yasmany Morejón'],
    year: 2018,
    editorial: 'Gente Nueva',
    isbn: '9781617290756',
    tags: ['SPA', 'JavaScript', 'sample.js']
}

// Objeto creado con el operador new
var book = new Object();

book.title = 'Single Page Web Applications';
book.authors = ['Raidel Nápoles', 'Masiel Villalba', 'Camilo González', 'Yasmany Morejón'];
book.year = 2018;
book.editorial = 'Gente Nueva';
book.isbn = '9781617290756';
book.tags = ['SPA', 'JavaScript', 'sample.js'];

// Objeto creado via Object.create(<object.prototype>)
var book = Object.create({});

book.title = 'Single Page Web Applications';
book.authors = ['Raidel Nápoles', 'Masiel Villalba', 'Camilo González', 'Yasmany Morejón'];
book.year = 2018;
book.editorial = 'Gente Nueva';
book.isbn = '9781617290756';
book.tags = ['SPA', 'JavaScript', 'sample.js'];

///////////////////////////////////////////////////////////////////////////////////////////////////////

//ahora veremos la manera de simular una 'clase'
//vamos a trabajar con robots
//comencemos con la manera básica de crear objetos con las características de un robot
var R2D2 = {
    nombre: 'R2D2',
    tipo: 'arreglatodo',
    estado: 0,
    modoEspera: function () {
        console.log(this.nombre + ': Iniciando modo espera...');
        this.estado = 0;
        console.log(this.nombre + ': En modo espera!');
    },
    activar: function () {
        console.log(this.nombre + ': Saliendo modo espera...');
        this.estado = 1;
        console.log(this.nombre + ': Activado!');
    },
    ayuda: function () {
        if (this.estado === 1) {
            console.log(this.nombre + ': Vengo inmediatamente!');
        } else console.log(this.nombre + ': Piiiip');
    },
    arreglar: function (item) {
        if (this.estado === 1) {
            if (item && item !== '') {
                console.log(this.nombre + ': Arreglando ' + item);
            } else console.log(this.nombre + ': Debes indicarme qué quieres que arregle');
        } else console.log(this.nombre + ': Piiiip');
    }
};

var C3PO = {
    nombre: 'C3PO',
    tipo: 'traductor',
    estado: 0,
    modoEspera: function () {
        console.log(this.nombre + ': Iniciando modo espera...');
        this.estado = 0;
        console.log(this.nombre + ': En modo espera!');
    },
    activar: function () {
        console.log(this.nombre + ': Saliendo modo espera...');
        this.estado = 1;
        console.log(this.nombre + ': Activado!');
    },
    ayuda: function () {
        if (this.estado === 1) {
            console.log(this.nombre + ': Ahora vengo. Aunque no es mi cometido intentaré ayudar');
        } else console.log(this.nombre + ': Piiiip');
    },
    traducir: function (texto) {
        if (this.estado === 1) {
            if (texto && texto !== '') {
                console.log(this.nombre + ': Traduciendo ' + texto);
            } else console.log(this.nombre + ': Debes indicarme qué quieres que traduzca');
        } else console.log(this.nombre + ': Piiiip');
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Vamos a crear una 'clase' Robot:
// Definición de la clase Robot
function Robot(nombre, tipo) {
    this.nombre = nombre || 'sin nombre',
    this.tipo = tipo || 'arreglatodo';
    this.estado = 0;
};

Robot.prototype = {
    modoEspera: function () {
        console.log(this.nombre + ': Iniciando modo espera...');
        this.estado = 0;
        console.log(this.nombre + ': En modo espera!');
    },

    activar: function () {
        console.log(this.nombre + ': Saliendo modo espera...');
        this.estado = 1;
        console.log(this.nombre + ': Activado!');
    },

    ayuda: function () {
        if (this.estado === 1) {
            console.log(this.nombre + ': Vengo inmediatamente!');
        } else console.log(this.nombre + ': Piiiip');
    },

    arreglar: function (item) {
        if (this.estado === 1) {
            if (item && item !== '') {
                console.log(this.nombre + ': Arreglando ' + item);
            } else console.log(this.nombre + ': Debes indicarme qué quieres que arregle');
        } else console.log(this.nombre + ': Piiiip');
    },

    traducir: function (texto) {
        if (this.estado === 1) {
            if (texto && texto !== '') {
                console.log(this.nombre + ': Traduciendo ' + texto);
            } else console.log(this.nombre + ': Debes indicarme qué quieres que traduzca');
        } else console.log(this.nombre + ': Piiiip');
    }
};
// FIN definición de la clase Robot

var R2D2 = new Robot('R2D2', 'arreglatodo'),
    C3PO = new Robot('C3PO', 'traductor');

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Modificamos la 'clase' Robot y creamos dos 'subclases' RobotArreglaTodo y RobotTraductor:
// Definición de la clase Robot
function Robot(nombre) {
    this.nombre = nombre || 'sin nombre',
    this.estado = 0;
};

Robot.prototype = {
    modoEspera: function () {
        console.log(this.nombre + ': Iniciando modo espera...');
        this.estado = 0;
        console.log(this.nombre + ': En modo espera!');
    },

    activar: function () {
        console.log(this.nombre + ': Saliendo modo espera...');
        this.estado = 1;
        console.log(this.nombre + ': Activado!');
    },

    ayuda: function () {
        if (this.estado === 1) {
            console.log(this.nombre + ': Vengo inmediatamente!');
        } else console.log(this.nombre + ': Piiiip');
    }
};
// FIN definición de la clase Robot

// Definición de la subclase RobotArreglaTodo
function RobotArreglaTodo(nombre) {
    Robot.call(this, nombre); // Invocamos el constructor de Robot con this
    this.tipo = 'arreglatodo';
};

RobotArreglaTodo.prototype = new Robot(); // Herencia;

RobotArreglaTodo.prototype.constructor = RobotArreglaTodo;

RobotArreglaTodo.prototype.arreglar = function (item) {
    if (this.estado === 1) {
        if (item && item !== '') {
            console.log(this.nombre + ': Arreglando ' + item);
        } else console.log(this.nombre + ': Debes indicarme qué quieres que arregle');
    } else console.log(this.nombre + ': Piiiip');
};
// FIN definición de la subclase RobotArreglaTodo

// Definición de la subclase RobotTraductor
function RobotTraductor(nombre) {
    Robot.call(this, nombre); // Invocamos el constructor de Robot con this
    this.tipo = 'traductor';
};

RobotTraductor.prototype = new Robot(); // Herencia;

RobotTraductor.prototype.constructor = RobotTraductor;

RobotTraductor.prototype.traducir = function (texto) {
    if (this.estado === 1) {
        if (texto && texto !== '') {
            console.log(this.nombre + ': Traduciendo ' + texto);
        } else console.log(this.nombre + ': Debes indicarme qué quieres que traduzca');
    } else console.log(this.nombre + ': Piiiip');
};
// FIN definición de la subclase RobotTraductor


var R2D2 = new RobotArreglaTodo('R2D2'),
    C3PO = new RobotTraductor('C3PO');

// este código proporciona comportamiento polimórfico al invocar el método ayuda()
RobotTraductor.prototype.ayuda = function () {
    if (this.estado === 1) {
        console.log(this.nombre + ': Ahora vengo. Aunque no es mi cometido intentaré ayudar');
    } else console.log(this.nombre + ': Piiiip');
};

// hasta aquí nada nos impide hacer lo siguiente
C3PO.tipo = 'arreglatodo';

///////////////////////////////////////////////////////////////////////////////////////////////////////

// aquí se aplica el encapsulamiento (este código si esta OK)
// Definición de la clase Robot
function Robot(nombre) {
    this.nombre = nombre || 'sin nombre',
    this.estado = 0;
};

Robot.prototype = {
    modoEspera: function () {
        console.log(this.nombre + ': Iniciando modo espera...');
        this.estado = 0;
        console.log(this.nombre + ': En modo espera!');
    },

    activar: function () {
        console.log(this.nombre + ': Saliendo modo espera...');
        this.estado = 1;
        console.log(this.nombre + ': Activado!');
    },

    ayuda: function () {
        if (this.estado === 1) {
            console.log(this.nombre + ': Vengo inmediatamente!');
        } else console.log(this.nombre + ': Piiiip');
    }
};
// FIN definición de la clase Robot

// Definición de la subclase RobotArreglaTodo
function RobotArreglaTodo(nombre) {
    var tipo = 'arreglatodo';
    Robot.call(this, nombre); // Invocamos el constructor de Robot con this
    this.getTipo = function () {
        return tipo;
    }
};

RobotArreglaTodo.prototype = new Robot(); // Herencia;

RobotArreglaTodo.prototype.constructor = RobotArreglaTodo;

RobotArreglaTodo.prototype.arreglar = function (item) {
    if (this.estado === 1) {
        if (item && item !== '') {
            console.log(this.nombre + ': Arreglando ' + item);
        } else console.log(this.nombre + ': Debes indicarme qué quieres que arregle');
    } else console.log(this.nombre + ': Piiiip');
};
// FIN definición de la subclase RobotArreglaTodo

// Definición de la subclase RobotTraductor
function RobotTraductor(nombre) {
    var tipo = 'traductor';
    Robot.call(this, nombre); // Invocamos el constructor de Robot con this
    this.getTipo = function () {
        return tipo;
    }
};

RobotTraductor.prototype = new Robot(); // Herencia;

RobotTraductor.prototype.constructor = RobotTraductor;

RobotTraductor.prototype.traducir = function (texto) {
    if (this.estado === 1) {
        if (texto && texto !== '') {
            console.log(this.nombre + ': Traduciendo ' + texto);
        } else console.log(this.nombre + ': Debes indicarme qué quieres que traduzca');
    } else console.log(this.nombre + ': Piiiip');
};

RobotTraductor.prototype.ayuda = function () {
    if (this.estado === 1) {
        console.log(this.nombre + ': Ahora vengo. Aunque no es mi cometido intentaré ayudar');
    } else console.log(this.nombre + ': Piiiip');
};
// FIN definición de la subclase RobotTraductor


var R2D2 = new RobotArreglaTodo('R2D2'),
    C3PO = new RobotTraductor('C3PO');