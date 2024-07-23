let a;
let logisticsPrice = {
  glory: {
    manipulator: {
      nal: [15200, 16200, 17200, 18200, 19200],
      nds: [16400, 17400, 18400, 19400, 20400],
    },
    truck: {
      nal: [15200, 16200, 17200, 18200, 19200],
      nds: [16400, 17900, 18900, 19900, 20900],
    },
    hitch: {
      nal: [21200, 22300, 24700, 26000, 27700],
      nds: [22400, 24900, 26900, 28400, 30400],
    },
  },
  tiana: {
    manipulator: {
      nal: [14000, 15000, 16000, 17000, 18000],
      nds: [16500, 17500, 18500, 19500, 21500],
    },
    truck: {
      nal: [15200, 16200, 17200, 18200, 19200],
      nds: [16400, 17900, 18900, 19900, 20900],
    },
    hitch: {
      nal: [21200, 22300, 24700, 26000, 27700],
      nds: [22400, 24900, 26900, 28400, 30400],
    },
  },
  my: {
    manipulator: {
      nal: [0, 0, 0, 0, 0],
      nds: [0, 0, 0, 0, 0],
    },
    truck: {
      nal: [0, 0, 0, 0, 0],
      nds: [0, 0, 0, 0, 0],
    },
    hitch: {
      nal: [0, 0, 0, 0, 0],
      nds: [0, 0, 0, 0, 0],
    },
  },
};

function copy(containerid) {
  let textarea = document.createElement("textarea");
  textarea.id = "temp";
  textarea.style.height = 0;
  document.body.appendChild(textarea);
  textarea.value = document.getElementById(containerid).innerText;
  let selector = document.querySelector("#temp");
  selector.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
function checkRange(start = 0, end = 100, num) {
  if (num > start && num < end) return true;
  return false;
}

class Veiw {
  field;
  constructor(field) {
    this.field = field;
  }

  setParam(paramName, param) {
    if (paramName === "isNonCash") return;
    this.field
      .querySelectorAll(`[data-${paramName}]`)
      .forEach((el) => el.classList.remove("active"));
    this.field
      .querySelector(`[data-${paramName}='${param}']`)
      .classList.add("active");
  }
  showCubes(cubes = 0, pieces = 0, pallets = 0) {
    this.field.querySelector(`[name="cube"]`).value = cubes;
    this.field.querySelector(`[name="pieces"]`).value = pieces;
    this.field.querySelector(`[name="pallets"]`).value = pallets;
  }
  checkTypeLogistics(type) {
    this.field.querySelectorAll(`[data-typelogistics]`).forEach((el) => {
      el.dataset.typelogistics == type
        ? el.classList.add("active")
        : el.classList.remove("active");
    });
  }
  setPrice(price) {
    this.field.querySelector(`[name='price']`).value = price;
  }
  tooglePersentNC(isNonCash) {
    // this.field.querySelector(`[name='NCPersent']`).disabled = !isNonCash;
  }
  showResult(result, logistics, payment) {
    let options = { style: "currency", currency: "RUB" };
    let numberFormat = new Intl.NumberFormat("ru-RU", options);
    let summ =
      logistics.truck.price * logistics.truck.counter +
      logistics.manipulator.price * logistics.manipulator.counter +
      logistics.hitch.price * logistics.hitch.counter;
    let rows = result.map((el, i) => {
      summ += el.c * el.p;
      return `<li>
      <button data-idItem='${i}'>${el.d}</button>
      <span> ${el.l}x${el.w}x${el.h} ${el.c} м3 - ${numberFormat.format(
        el.c * el.p
      )}</span>
      <input data-itemCube=${i} class="input__number input__number_result" type="number" value='${
        el.c
      }'>
        <input data-itemPrice=${i} class="input__number input__number_result" type="number" value='${numberFormat.format(
        el.p
      )}'>
      </li>`;
    });
    let resultField = this.field.querySelector(".result");
    resultField.innerHTML = rows.join("");
    let resultLogField = this.field.querySelector(".resultLogistics");
    resultLogField.innerHTML = "";
    let text = ``;
    if (logistics.truck.counter) {
      text += `<li>Доставка фурой: ${numberFormat.format(
        logistics.truck.price
      )} x ${logistics.truck.counter}</li>`;
    }
    if (logistics.manipulator.counter) {
      text += `<li>Доставка манипулятором: ${numberFormat.format(
        logistics.manipulator.price
      )} x ${logistics.manipulator.counter} </li>`;
    }
    if (logistics.hitch.counter) {
      text += `<li>Доставка манипулятором с прицепом: ${numberFormat.format(
        logistics.hitch.price
      )} x ${logistics.hitch.counter} </li>`;
    }
    resultLogField.innerHTML += `<p>${text}</p>`;

    this.field.querySelector(".resultTotal").innerHTML = `${
      payment === "nds" ? "<p>В том числе НДС 20%: " + numberFormat.format((summ / 120) * 20) : ""
    }<p>Итого: ${numberFormat.format(summ)}</p>`;
  }
  showLogistics(truckPrice, manipulatorPrice, hitchPrice) {
    this.field.querySelector("[data-logicstics='truck']").value = truckPrice;
    this.field.querySelector("[data-logicstics='manipulator']").value =
      manipulatorPrice;
    this.field.querySelector("[data-logicstics='hitch']").value = hitchPrice;
  }
  showCount(type, count) {
    let a = this.field.querySelector(`[data-${type}Count='${count + 1}']`);
    let b = this.field.querySelector(`[data-${type}Count='${count}']`);
    let c = this.field.querySelector(`[data-${type}Count='${count - 1}']`);
    if (a) {
      a.innerHTML = count;
      a.dataset[`${type}count`] = count;
    }
    if (b) {
      b.innerHTML = count;
      b.dataset[`${type}count`] = count;
    }
    if (c) {
      c.innerHTML = count;
      c.dataset[`${type}count`] = count;
    }
  }
  showResultLogistics(logistics) {
    let resultField = this.field.querySelector(".resultLogistics");
    resultField.innerHTML = "";
    let text = ``;
    if (logistics.truck.counter) {
      text += `Доставка фуры: ${logistics.truck.price} руб x ${logistics.truck.counter}\n`;
    }
    if (logistics.manipulator.counter) {
      text += `Доставка манипулятора: ${logistics.manipulator.price} руб x ${logistics.manipulator.counter}\n`;
    }
    if (logistics.hitch.counter) {
      text += `Доставка манипулятора с прицепом: ${logistics.hitch.price} руб x ${logistics.hitch.counter}\n`;
    }
    resultField.innerHTML += `<p>${text}</p>`;
  }
}

let test;

class Model {
  view;
  density = "D500";
  lenght = 600;
  width = 300;
  height = 250;
  cubes = 0;
  pieces = 0;
  step = 1.8;
  pallets = 0;
  price;
  priceData = {
    my: 0,
    DZGI: {
      D400: {
        nal: 6975,
        nds: 7800,
      },
      D500: {
        nal: 5860,
        nds: 6560,
      },
      D600: {
        nal: 5860,
        nds: 6560,
      },
    },
    SK: {
      D400: {
        nal: 6975,
        nds: 7800,
      },
      D500: {
        nal: 5960,
        nds: 6660,
      },
      D600: {
        nal: 5960,
        nds: 6660,
      },
    },
    MY: {
      D400: {
        nal: 6975,
        nds: 7800,
      },
      D500: {
        nal: 5800,
        nds: 6460,
      },
      D600: {
        nal: 5800,
        nds: 6460,
      },
    },
  };
  factory = "DZGI";
  isNonCash = false;
  payment = "nal";
  NCPersent;
  ourInner;
  result = [];
  logistics = {
    type: "",
    truck: {
      price: 0,
      counter: 0,
    },
    manipulator: {
      price: 0,
      counter: 0,
    },
    hitch: {
      price: 0,
      counter: 0,
    },
  };
  constructor(view) {
    this.view = view;
    this.init();
  }
  init() {
    // this.setParam("isNonCash", false);
    this.setParam("payment", "nal");
    this.setParam("factory", "DZGI");
    this.setParam("height", this.height);
    this.setParam("width", this.width);
    this.setParam("lenght", this.lenght);
    this.setParam("density", this.density);
    this.setPrice(5960);
    this.setTypeLogistics("glory");
    view.showCubes(this.cubes, this.pieces, this.pallets);
  }
  setParam(paramName, param) {
    this[`${paramName}`] = param;
    if (paramName === "density")
      this.setPrice(this.priceData[this.factory][param][this.payment]);
    view.setParam(paramName, param);
    this.setStep();
    this.showResult()
  }
  setStep() {
    if (this.lenght == 600) {
      if (this.width == 400) {
        this.step = this.factory === "SK" ? 2.16 : 1.92;
      } else if (this.width == 350) this.step = 1.68;
      else if (this.width == 200 && this.height == 200) this.step = 1.44;
      else this.step = 1.8;
    }

    if (this.lenght == 625) {
      if (this.width == 400) this.step = 2;
      if (this.width == 350) this.step = 1.75;
      if (this.width == 200) {
        this.setParam("height", 250);
        this.step = 1.875;
      } else {
        this.step = 1.875;
      }
    }
    this.calcCube(this.cubes);
    view.showCubes(this.cubes, this.pieces, this.pallets);
  }
  calcCube(cubes) {
    this.cubes = cubes;
    this.pieces = (
      (((((this.cubes / this.lenght) * 1000) / this.width) * 1000) /
        this.height) *
      1000
    ).toFixed(2);
    this.pallets = this.cubes / this.step;
    view.showCubes(this.cubes, this.pieces, this.pallets);
  }
  calcPieces(pieces) {
    this.pieces = pieces;
    this.cubes = (
      (this.lenght / 1000) *
      (this.width / 1000) *
      (this.height / 1000) *
      this.pieces
    ).toFixed(3);
    this.pallets = (this.cubes / this.step).toFixed(2);
    view.showCubes(this.cubes, this.pieces, this.pallets);
  }
  calcPallets(pieces) {
    this.pallets = pieces;
    this.cubes = this.pallets * this.step;
    this.pieces = (
      this.cubes /
      ((this.lenght / 1000) * (this.width / 1000) * (this.height / 1000))
    ).toFixed(2);
    view.showCubes(this.cubes, this.pieces, this.pallets);
  }
  setTypeLogistics(type) {
    this.logistics.type = type;
    this.calcLogictics(this.logistics.type);
    view.checkTypeLogistics(this.logistics.type);
  }
  calcLogictics(type = this.logistics.type) {
    let pay = this.payment;
    if (checkRange(0, 30, this.km)) {
      this.logistics.truck.price = logisticsPrice[`${type}`].truck[`${pay}`][0];
      this.logistics.manipulator.price =
        logisticsPrice[`${type}`].manipulator[`${pay}`][0];
      this.logistics.hitch.price = logisticsPrice[`${type}`].hitch[`${pay}`][0];
    } else if (checkRange(30, 45, this.km)) {
      this.logistics.truck.price = logisticsPrice[`${type}`].truck[`${pay}`][1];
      this.logistics.manipulator.price =
        logisticsPrice[`${type}`].manipulator[`${pay}`][1];
      this.logistics.hitch.price = logisticsPrice[`${type}`].hitch[`${pay}`][1];
    } else if (checkRange(45, 60, this.km)) {
      this.logistics.truck.price = logisticsPrice[`${type}`].truck[`${pay}`][2];
      this.logistics.manipulator.price =
        logisticsPrice[`${type}`].manipulator[`${pay}`][2];
      this.logistics.hitch.price = logisticsPrice[`${type}`].hitch[`${pay}`][2];
    } else if (checkRange(60, 90, this.km)) {
      this.logistics.truck.price = logisticsPrice[`${type}`].truck[`${pay}`][3];
      this.logistics.manipulator.price =
        logisticsPrice[`${type}`].manipulator[`${pay}`][3];
      this.logistics.hitch.price = logisticsPrice[`${type}`].hitch[`${pay}`][3];
    } else if (checkRange(90, 120, this.km)) {
      this.logistics.truck.price = logisticsPrice[`${type}`].truck[`${pay}`][4];
      this.logistics.manipulator.price =
        logisticsPrice[`${type}`].manipulator[`${pay}`][4];
      this.logistics.hitch.price = logisticsPrice[`${type}`].hitch[`${pay}`][4];
    }
    view.showLogistics(
      this.logistics.truck.price,
      this.logistics.manipulator.price,
      this.logistics.hitch.price
    );
  }
  setPrice(price) {
    if (price) {
      this.price = price;
      let a;
      a = this.price / this.ourInner;
      if (a < 1) this.NCPersent = (1 - this.price / this.ourInner) * -100;
      if (a > 1) this.NCPersent = (this.price / this.ourInner - 1) * 100;
      if (a == 1) this.NCPersent = 0;
    } else {
      if (this.payment === "nal") {
        this.price = this.ourInner + this.ourInner * (this.NCPersent / 100);
      } else price = this.ourInner;
    }
    view.setPrice(this.price);
  }
  setNC(isNonCash) {
    this.isNonCash = isNonCash;
    view.tooglePersentNC(this.isNonCash);
  }
  setKm(km) {
    this.km = km;

    this.calcLogictics();
  }
  addRow() {
    this.result.push({
      w: this.width,
      h: this.height,
      l: this.lenght,
      d: this.density,
      c: this.cubes,
      p: this.price,
      pay: this.payment,
    });
    this.showResult()
  }
  deleteRow(idItem) {
    this.result = this.result.filter((el, i) => i != idItem);
    this.showResult()
  }
  addTransport(type) {
    this.logistics[`${type}`].counter += 1;
    view.showCount(type, this.logistics[`${type}`].counter);
    this.showResult()
  }
  removeTransport(type) {
    if (this.logistics[`${type}`].counter <= 0) return;
    this.logistics[`${type}`].counter -= 1;
    view.showCount(type, this.logistics[`${type}`].counter);
    this.showResult()
  }
  setMyLogistics(type, price) {
    this.logistics[`${type}`].price = price;
    this.showResult();
  }
  addLogistics() {
    this.result;
  }
  setItemCube(cube, i) {
    this.result[i].c = cube;
  }
  setItemPrice(price, i) {
    this.result[i].p = price;
  }
  showResult() {
    view.showResult(this.result, this.logistics, this.payment)
  }
}

class Controller {
  model;
  constructor(model) {
    this.model = model;
    this.init();
    return this;
  }

  init() {
    document.addEventListener("click", this.combiner);
    document.addEventListener("input", this.inputData);
  }

  combiner(e) {
    let target = e.target;
    let data = target.dataset;
    if (target.dataset.density) {
      model.setParam("density", data.density);
    } else if (data.lenght) {
      model.setParam("lenght", data.lenght);
    } else if (data.width) {
      model.setParam("width", data.width);
    } else if (data.height) {
      model.setParam("height", data.height);
    } else if (data.payment) {
      model.setParam("payment", data.payment);
    } else if (data.factory) {
      model.setParam("factory", data.factory);
    } else if (data.typelogistics) {
      model.setTypeLogistics(data.typelogistics);
    } else if (target.id === "btnAddRow") {
      model.addRow();
    } else if (target.name === "NC") {
      model.setNC(target.checked);
    } else if (data.iditem) {
      model.deleteRow(data.iditem);
    } else if (data.logisticsadd) {
      model.addTransport(data.logisticsadd);
    } else if (data.logisticsremove) {
      model.removeTransport(data.logisticsremove);
    } else if (data.btnsetprice) {
      model.setPrice(data.btnsetprice);
    } else if (target.id === "addLogistics") {
      model.addLogistics();
    }
  }
  inputData(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    let data = target.dataset;
    if (value === "") return;
    if (name == "cube") {
      model.calcCube(value);
    } else if (name == "pieces") {
      e.preventDefault();
      model.calcPieces(value);
    } else if (name == "pallets") {
      e.preventDefault();
      model.calcPallets(value);
    } else if (name == "km") {
      e.preventDefault();
      model.setKm(value);
    } else if (name == "price") {
      e.preventDefault();
      model.setPrice(value);
    } else if (data.logicstics) {
      e.preventDefault();
      model.setMyLogistics(data.logicstics, value);
    } else if (data.itemprice) {
      e.preventDefault();
      model.setItemPrice(value, data.itemprice);
      e.target.addEventListener("blur", showRes);
    } else if (data.itemcube) {
      e.preventDefault();
      model.setItemCube(value, data.itemcube);
      e.target.addEventListener("blur", showRes);
    }
  }
}

function showRes(e) {
  model.showResult();
  e.target.removeEventListener("blur", showRes, true);
}

let view = new Veiw(document.querySelector(".calc"));
let model = new Model(view);
let controller = new Controller(model);
function reload() {
  location.reload();
}
