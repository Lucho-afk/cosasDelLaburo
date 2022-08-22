console.log("el pepe");

function primerEjemplo(elemento1, elemento2) {
  console.log("el pepe");
  require(["dojo/dom", "dojo/dom-construct", "dojo/domReady!"], function (
    dom,
    domConstruct
  ) {
    function setText(node, text) {
      node = dom.byId(node);
      node.innerHTML = text;
    }

    var one = dom.byId(elemento1);
    setText(one, "One has been set");
    setText(elemento2, "Two has been set as well");

    domConstruct.create(
      "li", // hay que poner el tipo de elemento que se esta agregardo
      {
        innerHTML: "luciano capo",
      },
      four, //tambien podemos agregar la posicion [four,five], si ponemos list va a ir al lugar donde le corresponde en el codigo
      "before"
    );
  });
}

function segundoEjemplo(lista, elemento) {
  console.log("paleta sanguchera");
  require(["dojo/dom", "dojo/dom-construct", "dojo/domReady!"], function (
    dom,
    domConstruct
  ) {
    var list = dom.byId(lista),
      three = dom.byId(elemento);

    domConstruct.create(
      "li",
      {
        innerHTML: "Six",
      },
      list
    );

    domConstruct.create(
      "li",
      {
        innerHTML: "Seven",
        className: "seven",
        style: {
          fontWeight: "bold",
        },
      },
      list
    );

    domConstruct.create(
      "li",
      {
        innerHTML: "Three and a half",
      },
      three,
      "after"
    );
  });
}

function tercerEjemplo() {
  require([
    "dojo/dom",
    "dojo/dom-construct",
    "dojo/on",
    "dojo/domReady!",
  ], function (dom, domConstruct, on) {
    function moveFirst() {
      var list = dom.byId("list"),
        three = dom.byId("three");

      domConstruct.place(three, list, "first"); // id de variable, donde va estar, la posiscion relativa a donde va estar
    }
    console.log(three);
    function moveBeforeTwo() {
      var two = dom.byId("two"),
        three = dom.byId("three");

      domConstruct.place(three, two, "before");
    }

    function moveAfterFour() {
      var four = dom.byId("four"),
        three = dom.byId("three");

      domConstruct.place(three, four, "after");
    }

    function moveLast() {
      var list = dom.byId("list"),
        three = dom.byId("three");

      domConstruct.place(three, list);
    }

    // Connect the buttons
    on(dom.byId("moveFirst"), "click", moveFirst);
    on(dom.byId("moveBeforeTwo"), "click", moveBeforeTwo);
    on(dom.byId("moveAfterFour"), "click", moveAfterFour);
    on(dom.byId("moveLast"), "click", moveLast);
  });
}
//estos son las posible posicion que podes optar a la relativa anterior[ "before", "after", "replace", "only", "first", and "last"]

function cuartoEjemplo() {
  require([
    "dojo/dom",
    "dojo/dom-construct",
    "dojo/on",
    "dojo/domReady!",
  ], function (dom, domConstruct, on) {
    console.log("llega despues del cuarto");
    function destroyFirst() {
      var list = dom.byId("list"),
        items = list.getElementsByTagName("li");

      if (items.length) {
        domConstruct.destroy(items[0]);
      }
    }
    function destroyAll() {
      domConstruct.empty("list");
    }

    on.once(dom.byId("suicida"), "click", destroyFirst); // funciona una ves
    // Connect buttons to destroy elements
    on(dom.byId("destroyFirst"), "click", destroyFirst);
    on(dom.byId("destroyAll"), "click", destroyAll);
  });
}

function hover() {
  require([
    "dojo/on",
    "dojo/dom",
    "dojo/dom-style",
    "dojo/mouse",
    "dojo/domReady!",
  ], function (on, dom, domStyle, mouse) {
    var myButton = dom.byId("myButton"),
      myDiv = dom.byId("myDiv");

    on(myButton, "click", function (evt) {
      domStyle.set(myDiv, "backgroundColor", "blue");
    });
    on(myDiv, mouse.enter, function (evt) {
      domStyle.set(myDiv, "backgroundColor", "red");
    });
    on(myDiv, mouse.leave, function (evt) {
      domStyle.set(myDiv, "backgroundColor", "");
    });

    var handle = on(myButton, "click", function (evt) {
      // este evento ocurre una ves
      // Remove this event using the handle
      handle.remove();

      // Do other stuff here that you only want to happen one time
      alert("This alert will only happen one time.");
    });
  });
}

function crear() {
  require([
    "dojo/dom",
    "dojo/on",
    "dojo/dom-construct",
    "dojo/domReady!",
  ], function (dom, on, domConstruct) {
    function agregar() {
      var list = dom.byId("list");
      domConstruct.create(
        "li",
        {
          innerHTML: "nuevo elemento creado",
        },
        list,
        "last"
      );
    }
    on(dom.byId("constructOne"), "click", agregar);
  });
}
