let a;
let bufferText = "";
let logisticsPrice = {
  glory: {
    manipulator: {
      nal: [15200, 16200, 17200, 18200, 19200],
      nds: [17100, 18100, 19200, 20200, 21300],
    },
    truck: {
      nal: [15200, 16200, 17200, 18200, 19200],
      nds: [17100, 18700, 19700, 20696, 21800],
    },
    hitch: {
      nal: [21200, 22300, 24700, 26000, 27700],
      nds: [23300, 25900, 28000, 29600, 31700],
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
let bridges = {
  1210100: {
    name: "Перемычка брусковая Poritep D600 1200*100*250/1000 В3,5 ТУ",
    short: "D600 1200*100*250/1000",
    incoming: 600,
    count: 0,
    price: 700,
    heft: "28,46",
  },
  1215100: {
    name: "Перемычка брусковая Poritep D600 1200*150*250/1000 В3,5 ТУ",
    short: "D600 1200*150*250/1000",
    incoming: 878,
    count: 0,
    price: 1000,
    heft: "42,19",
  },
  1220100: {
    name: "Перемычка брусковая Poritep D600 1200*200*250/1000 В3,5 ТУ",
    short: "D600 1200*200*250/1000",
    incoming: 1168,
    count: 0,
    price: 1300,
    heft: "55,92",
  },
  1510700: {
    name: "Перемычка брусковая Poritep D600 1500*100*250/700 В3,5 ТУ",
    short: "D600 1500*100*250/700",
    incoming: 750,
    count: 0,
    price: 800,
    heft: "35,46",
  },
  1515700: {
    name: "Перемычка брусковая Poritep D600 1500*150*250/700 B3,5 ТУ",
    short: "D600 1500*150*250/700",
    incoming: 1097,
    count: 0,
    price: 1200,
    heft: "52,19",
  },
  1520700: {
    name: "Перемычка брусковая Poritep D600 1500*200*250/700 B3,5 ТУ",
    short: "D600 1500*200*250/700",
    incoming: 1463,
    count: 0,
    price: 1600,
    heft: "68,92",
  },
  1520325: {
    name: "Перемычка брусковая Poritep D600 1500*200*250/3250 В3,5 ТУ",
    short: "D600 1500*200*250/3250",
    incoming: 1688,
    count: 0,
    price: 1800,
    heft: "72,92",
  },
  1530325: {
    name: "Перемычка брусковая Poritep D600 1500*300*250/3250 В3,5 ТУ",
    short: "D600 1500*300*250/3250",
    incoming: 2531,
    count: 0,
    price: 2700,
    heft: "107,38",
  },
  2010400: {
    name: "Перемычка брусковая Poritep D600 2000*100*250/400 B3,5 ТУ",
    short: "D600 2000*100*250/400",
    incoming: 1000,
    count: 0,
    price: 1100,
    heft: "47,92",
  },
  2015400: {
    name: "Перемычка брусковая Poritep D600 2000*150*250/400 В3,5 ТУ",
    short: "D600 2000*150*250/400",
    incoming: 1463,
    count: 0,
    price: 1600,
    heft: "71,38",
  },
  2020800: {
    name: "Перемычка брусковая Poritep D600 2000*200*250/1800 В3,5 ТУ",
    short: "D600 2000*200*250/1800",
    incoming: 2250,
    count: 0,
    price: 2400,
    heft: "98,83",
  },
  2020400: {
    name: "Перемычка брусковая Poritep D600 2000*200*250/400 В3,5 ТУ",
    short: "D600 2000*200*250/400",
    incoming: 1950,
    count: 0,
    price: 2100,
    heft: "94,83",
  },
  2030185: {
    name: "Перемычка брусковая Poritep D600 2000*300*250/1850 В3,5 ТУ",
    short: "D600 2000*300*250/1850",
    incoming: 3375,
    count: 0,
    price: 3500,
    heft: "145,75",
  },
  2515350: {
    name: "Перемычка брусковая Poritep D600 2500*150*250/350 В3,5 ТУ",
    short: "D600 2500*150*250/350",
    incoming: 1828,
    count: 0,
    price: 2000,
    heft: "88,38",
  },
  2520110: {
    name: "Перемычка брусковая Poritep D600 2500*200*250/1100 В3,5 ТУ",
    short: "D600 2500*200*250/1100",
    incoming: 2813,
    count: 0,
    price: 3000,
    heft: "121,83",
  },
  2520350: {
    name: "Перемычка брусковая Poritep D600 2500*200*250/350 В3,5 ТУ",
    short: "D600 2500*200*250/350",
    incoming: 2438,
    count: 0,
    price: 2600,
    heft: "121,83",
  },
  2530150: {
    name: "Перемычка брусковая Poritep D600 2500*300*250/1500 В3,5 ТУ",
    short: "D600 2500*300*250/1500",
    incoming: 4219,
    count: 0,
    price: 4300,
    heft: "180,75",
  },
  3015300: {
    name: "Перемычка брусковая Poritep D600 3000*150*250/300 В3,5 ТУ",
    short: "D600 3000*150*250/300",
    incoming: 2194,
    count: 0,
    price: 2300,
    heft: "104,38",
  },
  3020750: {
    name: "Перемычка брусковая Poritep D600 3000*200*250/750 В3,5 ТУ",
    short: "D600 3000*200*250/750",
    incoming: 3375,
    count: 0,
    price: 3500,
    heft: "144,83",
  },
  3030100: {
    name: "Перемычка брусковая Poritep D600 3000*300*250/1000 B3,5 ТУ",
    short: "D600 3000*300*250/1000",
    incoming: 5063,
    count: 0,
    price: 5200,
    heft: "215,75",
  },
};
function copy(containerid) {
  let textarea = document.createElement("textarea");
  textarea.id = "temp";
  textarea.style.height = 0;
  document.body.appendChild(textarea);
  let text;
  // textarea.value = document.getElementById(containerid).innerText;
  textarea.value = bufferText;
  let selector = document.querySelector("#temp");
  selector.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
function checkRange(start = 0, end = 100, num) {
  if (num >= start && num < end) return true;
  return false;
}

class Veiw {
  field;
  constructor(field) {
    this.field = field;
  }

  setParam(paramName, param) {
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
  showGlay(parName, val) {
    this.field.querySelector(`[name="${parName}"]`).value = val;
  }
  checkTypeLogistics(type) {
    this.field.querySelectorAll(`[data-typelogistics]`).forEach((el) => {
      let kmRow = this.field.querySelector("#kmRow");
      el.dataset.typelogistics == type
        ? el.classList.add("active")
        : el.classList.remove("active");
      if (type === "glory") kmRow.classList.remove("d-none");
      else kmRow.classList.add("d-none");
    });
  }
  setPrice(price) {
    this.field.querySelector(`[name='price']`).value = price;
  }
  showResult(data) {
    let { result, logistics, payment, glay, glayPrice } = data;
    let options = { style: "currency", currency: "RUB" };
    let numberFormat = new Intl.NumberFormat("ru-RU", options);
    let summ =
      logistics.truck.price * logistics.truck.counter +
      logistics.manipulator.price * logistics.manipulator.counter +
      logistics.hitch.price * logistics.hitch.counter +
      glay * glayPrice;
    bufferText = "";
    let rows = result.map((el, i) => {
      let text = `${el.l}x${el.w}x${el.h} - ${el.c} м3 * ${
        el.p
      } ₽ - ${numberFormat.format(el.c * el.p)}`;
      bufferText += `${el.d} ` + text + "\n";

      summ += el.c * el.p;
      return `
      <li>
        <div class="d-flex justify-content-between">
          <span class="d-flex align-items-center">${el.d} ${text}</span>
          <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${i}" aria-expanded="false" aria-controls="collapseExample">
            <svg class="svg_edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
          </button>
        </div>
        <div class="collapse" id="collapseExample${i}">
          <div class="card card-body p-0">
            <div class="input-group mb-2">
              <span class="input-group-text">м3</span>
              <input data-itemCube=${i} class="input__number input__number_result form-control" type="number" value='${el.c}'>
              <input data-itemPrice=${i} class="input__number input__number_result form-control" type="number" value='${el.p}'>
              <span class="input-group-text">₽</span>
              <button class="btn btn-danger input-group-text" data-idItem='${i}'>
              <svg class="svg_edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
            </div>
          </div>
        </div>
      </li>`;
    });
    //     `<div class="input-group mb-3">
    //   <span class="input-group-text">$</span>
    //   <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
    //   <span class="input-group-text">.00</span>
    // </div>`
    for (const key in bridges) {
      if (Object.hasOwnProperty.call(bridges, key)) {
        const bridge = bridges[key];
        let cost = bridge.price * bridge.count;
        summ = +cost + summ;
        if (bridge.count > 0) {
          let text = `${bridge.name} - ${bridge.count} шт * ${
            bridge.price
          } ₽ - ${numberFormat.format(cost)}`;
          bufferText += text + "\n";
          rows.push(`<li>${text}</li>`);
        }
      }
    }
    let resultField = this.field.querySelector(".result");
    resultField.innerHTML = "";
    resultField.innerHTML = rows.join("");
    if (glay > 0) {
      let text = "";
      text = `Клей 25 кг: ${glay} шт * ${glayPrice} ₽ - ${numberFormat.format(
        glayPrice * glay
      )}`;
      bufferText +=
        `Клей 25 кг: ${glay} шт - ${numberFormat.format(glayPrice * glay)}` +
        "\n";
        
      resultField.innerHTML += `<p>${text}</p>`;
    }
    let resultLogField = this.field.querySelector(".resultLogistics");
    resultLogField.innerHTML = "";
    let textLogistic = ``;
    if (logistics.truck.counter) {
      let text = `Доставка фурой: ${numberFormat.format(
        logistics.truck.price
      )} x ${logistics.truck.counter}`;
      bufferText += text + "\n";
      textLogistic += `<li>${text}</li>`;
    }
    if (logistics.manipulator.counter) {
      let text = `Доставка манипулятором: ${numberFormat.format(
        logistics.manipulator.price
      )} x ${logistics.manipulator.counter}`;
      bufferText += text + "\n";
      textLogistic += `<li>${text} </li>`;
    }
    if (logistics.hitch.counter) {
      let text = `Доставка манипулятором с прицепом: ${numberFormat.format(
        logistics.hitch.price
      )} x ${logistics.hitch.counter}`;
      bufferText += text + "\n";
      textLogistic += `<li>${text}</li>`;
    }
    resultLogField.innerHTML += `<p>${textLogistic}</p>`;
    let resultTotal = this.field.querySelector(".resultTotal");
    let textTotal = "";
    let textNds = "";
    textTotal = `Итого: ${numberFormat.format(summ)}`;

    if (payment === "nds") {
      textNds = `В том числе НДС 20%: ${numberFormat.format(
        (summ / 120) * 20
      )}`;
      bufferText += textNds + "\n";
      resultTotal.innerHTML = `
      <p>В том числе НДС 20%: ${numberFormat.format((summ / 120) * 20)}
      <p>Итого: ${numberFormat.format(summ)}</p>
      `;
    } else {
      resultTotal.innerHTML = `<p>Итого: ${numberFormat.format(summ)}</p>`;
    }
    bufferText += textTotal + "\n";
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
  createBridgeBlock(id) {
    console.log(123);
    let block = "";
    id.forEach((id) => {
      let bridge = bridges[id];
      let row = `      
  <li class="row">
    <div class="col">
      <div class="d-flex justify-content-between">
        <span>${bridge.short}</span>
        <span>${bridge.price} ₽</span>
      </div>
      <div class="input-group mb-3">
        <button class="btn btn-outline-secondary w-auto" type="button" data-countRemove="${id}">-</button>
        <input type="text" class="form-control" id="${id}" data-countInp="${id}" value="${bridge.count}" aria-label="Example text with button addon"
          aria-describedby="button-addon1">
        <button class="btn btn-outline-secondary w-auto" type="button" data-countAdd="${id}">+</button>
      </div>
    </div>
  </li>`;
      block += row;
    });
    let field = document.querySelector("#bridge ul");
    field.innerHTML = block;
  }
  countInpShow(id, target) {
    target.classList.add("hide");
    document
      .querySelector(`input[data-countInp="${id}"]`)
      .classList.remove("hide");
  }
  toggleModal(modalName) {
    document.querySelector("#" + modalName).classList.toggle("show");
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
  bridgesId = [
    "1210100",
    "1215100",
    "1220100",
    "1510700",
    "1515700",
    "1520700",
    "1520325",
    "1530325",
    "2010400",
    "2015400",
    "2020800",
    "2020400",
    "2030185",
    "2515350",
    "2520110",
    "2520350",
    "2530150",
    "3015300",
    "3020750",
    "3030100",
  ];
  priceData = {
    my: 0,
    DZGI: {
      D400: {
        nal: 6464,
        nds: 7640,
      },
      D500: {
        nal: 4690,
        nds: 5542,
      },
      D600: {
        nal: 4690,
        nds: 5542,
      },
    },
    SK: {
      D400: {
        nal: 6550,
        nds: 7740,
      },
      D500: {
        nal: 4770,
        nds: 5641,
      },
      D600: {
        nal: 4770,
        nds: 5641,
      },
    },
    MY: {
      D400: {
        nal: 6294,
        nds: 7440,
      },
      D500: {
        nal: 4520,
        nds: 5342,
      },
      D600: {
        nal: 4520,
        nds: 5342,
      },
    },
  };
  factory = "DZGI";
  payment = "nal";
  NCPersent;
  ourInner;
  glay;
  glayPrice;
  result = [];
  logistics = {
    type: "my",
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
    this.setParam("payment", "nal");
    this.setParam("factory", "DZGI");
    this.setGlay("glay", 0);
    this.setGlay("glayPrice", 300);
    this.setParam("height", this.height);
    this.setParam("width", this.width);
    this.setParam("lenght", this.lenght);
    this.setParam("density", this.density);
    this.setPrice(5680);
    this.setTypeLogistics("my");
    view.showCubes(this.cubes, this.pieces, this.pallets);
    this.createBridgeBlock();
  }
  setParam(paramName, param) {
    this[`${paramName}`] = param;
    if (paramName === "density")
      this.setPrice(this.priceData[this.factory][param][this.payment]);
    view.setParam(paramName, param);
    this.setStep();
    this.calcLogictics();
    this.showResult();
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
      else if (this.width == 100) this.step = 2;
      else if (this.width == 200) this.step = 2;
      else if (this.width == 350) this.step = 1.75;
      else if (this.width == 200) {
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
    this.pallets = (this.cubes / this.step).toFixed(2);
    view.showCubes(this.cubes, this.pieces, this.pallets);
  }
  setGlay(parName, val) {
    console.log(val);
    this[parName] = val;
    view.showGlay(parName, val);
    this.showResult();
  }
  calcGlay() {
    let allCubes = this.result.reduce((acc, curPos) => (acc += +curPos.c), 0);
    if (allCubes > 0) this.setGlay("glay", Math.ceil(allCubes * 1.15));
  }
  calcPieces(pieces) {
    this.pieces = pieces;
    this.cubes = (
      (this.lenght / 1000) *
      (this.width / 1000) *
      (this.height / 1000) *
      this.pieces
    ).toFixed(2);
    this.pallets = (this.cubes / this.step).toFixed(2);
    view.showCubes(this.cubes, this.pieces, this.pallets);
  }
  calcPallets(pieces) {
    this.pallets = pieces;
    this.cubes = (this.pallets * this.step).toFixed(2);
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
    } else {
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
    this.showResult();
  }
  deleteRow(idItem) {
    this.result = this.result.filter((el, i) => i != idItem);
    this.showResult();
  }
  addTransport(type) {
    this.logistics[`${type}`].counter += 1;
    view.showCount(type, this.logistics[`${type}`].counter);
    this.showResult();
  }
  removeTransport(type) {
    if (this.logistics[`${type}`].counter <= 0) return;
    this.logistics[`${type}`].counter -= 1;
    view.showCount(type, this.logistics[`${type}`].counter);
    this.showResult();
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
    console.log(this.result[i]);
  }
  showResult() {
    let data = {
      result: this.result,
      payment: this.payment,
      glay: this.glay,
      glayPrice: this.glayPrice,
      logistics: this.logistics,
    };
    view.showResult(data);
  }
  createBridgeBlock() {
    view.createBridgeBlock(this.bridgesId);
    this.showResult();
  }
  countAdd(id, count) {
    if (count) bridges[id].count = count;
    else bridges[id].count = bridges[id].count * 1 + 1;
    this.createBridgeBlock();
    this.showResult();
  }
  countRemove(id) {
    if (bridges[id].count - 1 < 0) return;
    bridges[id].count--;
    this.createBridgeBlock();
    this.showResult();
  }
  countInpShow(id, target) {
    view.countInpShow(id, target);
    this.showResult();
  }
  toggleModal(modalName) {
    view.toggleModal(modalName);
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
    document.addEventListener("click", this.clickComb);
    document.addEventListener("input", this.inputData);
    document.addEventListener("focusout", this.focusout);
    addEventListener("keydown", (event) => {
      console.log(event);
    });
  }
  bridgeOut(e) {
    let target = e.target;
    let data = target.dataset;
    if (data.countinp) model.countAdd(target.id, target.value);
  }
  focusout(e) {
    let target = e.target;
    let data = target.dataset;
    if (data.countinp) model.countAdd(target.id, target.value);
    if (target.type === "radio") return;

    // let target = e.target;
    let value = target.value;
    let name = target.name;
    // let data = target.dataset;
    // if (value === "") return;

    if (name == "cube") {
      model.calcCube(value);
    } else if (name == "pieces") {
      e.preventDefault();
      model.calcPieces(value);
    } else if (name == "glay") {
      model.setGlay("glay", value);
    } else if (name == "glayPrice") {
      model.setGlay("glayPrice", value);
    } else if (name == "pallets") {
      e.preventDefault();
      model.calcPallets(value);
    } else if (name == "km") {
      e.preventDefault();
      model.setKm(value);
    } else if (name == "price") {
      e.preventDefault();
      model.setPrice(value);
      // } else if (data.logicstics) {
      //   e.preventDefault();
      //   model.setMyLogistics(data.logicstics, value);
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

  clickComb(e) {
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
    } else if (data.iditem) {
      e.stopImmediatePropagation();
      model.deleteRow(data.iditem);
    } else if (data.logisticsadd) {
      model.addTransport(data.logisticsadd);
    } else if (data.logisticsremove) {
      model.removeTransport(data.logisticsremove);
    } else if (data.btnsetprice) {
      model.setPrice(data.btnsetprice);
    } else if (target.id === "addLogistics") {
      model.addLogistics();
    } else if (data.countremove) {
      model.countRemove(data.countremove);
    } else if (data.countadd) {
      model.countAdd(data.countadd);
    } else if (data.count) {
      model.countInpShow(data.count, target);
    } else if (data.modal) {
      model.toggleModal(data.modal);
    } else if (data.calcgaly) {
      model.calcGlay();
    }
  }

  inputData(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    let data = target.dataset;
    if (value === "") return;

    // if (name == "cube") {
    // model.calcCube(value);
    // } else if (name == "pieces") {
    // e.preventDefault();
    // model.calcPieces(value);
    // } else if (name == "glay") {
    //   model.setGlay("glay", value);
    // } else if (name == "glayPrice") {
    //   model.setGlay("glayPrice", value);
    // } else if (name == "pallets") {
    // e.preventDefault();
    // model.calcPallets(value);
    // } else
    if (name == "km") {
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
