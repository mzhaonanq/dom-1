const div = dom.find("#test>.red")[0];
dom.text(div, "hello");
dom.style(div, "color", "red");
const divList = dom.find(".red");
dom.each(divList, (n) => console.log(n));
