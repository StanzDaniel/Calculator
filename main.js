class MemorySetter {
  constructor() {};

  clearMemory() {
    this.store = "0";
  }

  setMemory(value) {
    console.log(this.store)
    if (this.store == "0" && isNaN(value)) {
      this.store = this.store;
    } else if (this.store  == "0") {
      this.store = value;
    } else if (this.store[this.store.length - 1] == value && isNaN(value)) {
      this.store = this.store;
    } else if (isNaN(this.store[this.store.length - 1]) && isNaN(value)) {
      this.store = this.store.slice(0, this.store.length - 1) + value;
    } else {
      this.store = this.store + value;
    }
  }
}

class Memory extends MemorySetter {
  store = "0";
  
  constructor() {
    super();
  };
  
  getMemory() {
    return this.store;
  }
}

const memory = new Memory;
const screen = document.getElementById('display');

function getData(e) {
  switch (e) {
    case "clear": {
      memory.clearMemory(); 
      break;
    }
    case ".": {
      if ( memory.getMemory() == "0" ) {
        memory.setMemory("0.");
        break;
      } 
      memory.setMemory(".");
      break;
    }  
    case "percent": {
      if ( memory.getMemory() ) {
        const percent = memory.getMemory() / 100;
        memory.clearMemory();
        memory.setMemory(percent.toString());
      }
      break;
    }
    default:
      memory.setMemory(e);
      break;
  }
  display();
}


function display() {
  const data = memory.getMemory();
  screen.innerText = data;
}


function equal() {
  const equal = eval(memory.getMemory()).toFixed(2);
  memory.clearMemory();
  memory.setMemory(parseFloat(equal));
  display();
  memory.clearMemory();
}