const memory = {
  store: "0",
  getter: function () {
    return this.store;
  },
  reseter: function () {
    this.store = "0";
  },
  setter: function (value) {
    if (this.store == "0" && isNaN(value)) {
      this.store = this.store;
    } else if (this.store == "0") {
      this.store = value;
    } else if (this.store[this.store.length - 1] == value && isNaN(value)) {
      this.store = this.store;
    } else if (isNaN(this.store[this.store.length - 1]) && isNaN(value)) {
      this.store = this.store.slice(0, this.store.length - 1) + value;
    } else {
      this.store += value;
    }
  },
};

const buttons = [...document.getElementsByClassName("btn")];

buttons.map((btn) =>
  btn.addEventListener("click", (e) => getData(e.target.value))
);

function getData(value) {
  vibrate();

  switch (value) {
    case "clear":
      memory.reseter();
      break;

    case "dot":
      const dotted = dot(memory.getter());
      memory.setter(dotted);
      break;

    case "percent":
      const percentual = percent(memory.getter());
      memory.reseter();
      memory.setter(percentual.toString());
      break;

    case "equal":
      const equalized = equal(memory.getter());
      memory.reseter();
      memory.setter(equalized.toString());
      display(memory.getter());
      memory.reseter();
      return;

    case "changeSignal":
      const changed = changeSignal(memory.getter());
      memory.reseter();
      memory.setter(changed.toString());
      break;

    default:
      memory.setter(value);
  }

  display(memory.getter());
}

function percent(state) {
  if (state) {
    const percent = state / 100;
    return percent;
  }
}

function dot(state) {
  if (state == "0") {
    return "0.";
  }
  return ".";
}

function changeSignal(state) {
  if (Math.sign(state) == -1) {
    return Math.abs(state);
  }
  const a = state * 2;
  return state - a;
}

function equal(state) {
  const equal = eval(state).toFixed(2);
  return parseFloat(equal);
}

function display(state) {
  document.getElementById("display").innerText = state;
}

function vibrate() {
  window.navigator.vibrate(18); // vibrate for smartphone devices
}
