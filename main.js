class Memory {
  store = "0";
  
  getMemory() {
    return this.store;
  }

  clearMemory() {
    this.store = "0";
  }

  setMemory(value) {
    if (this.store == "0" && isNaN(value)) {
      this.store = this.store;
    } else if (this.store  == "0") {
      this.store = value;
    } else if (this.store[this.store.length - 1] == value && isNaN(value)) {
      this.store = this.store;
    } else if (isNaN(this.store[this.store.length - 1]) && isNaN(value)) {
      this.store = this.store.slice(0, this.store.length - 1) + value;
    } else {
      this.store += value;
    }
  }
}


const memory = new Memory;

const buttons = [ ...document.getElementsByClassName("btn") ];
buttons.map((btn) => btn.addEventListener("click", (e) => getData(e.target.value)));


function getData(value) {
  switch (value) {
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
    case "equal": {
      equal();
      return;
    }
    default:
      memory.setMemory(value);
      break;
  }
  display();
}

function equal() {
  const equal = eval(memory.getMemory()).toFixed(2);
  memory.clearMemory();
  memory.setMemory(parseFloat(equal));
  display();
  memory.clearMemory();
}


function display() {
  const data = memory.getMemory();
  document.getElementById('display').innerText = data;
}
