document.addEventListener("DOMContentLoaded", function () {
  const make = document.getElementById("make");
  const minYear = document.getElementById("minYear");
  const maxYear = document.getElementById("maxYear");
  const mileage = document.getElementById("mileage");
  const maxPrice = document.getElementById("maxPrice");
  const color = document.getElementById("color");

  const carContainer = document.getElementById("cars");

  function createCars() {
    const selectedMake = make.value;
    const selectedMinYear = minYear.value;
    const selectedMaxYear = maxYear.value;
    const selectedMileage = mileage.value;
    const selectedMaxPrice = maxPrice.value;
    const selectedColor = color.value;

    const filteredCars = usedCars.filter((car) => {
      if (selectedMake !== "all" && car.make !== selectedMake) {
        return false;
      }

      // Adjust the year filtering logic
      if (
        (selectedMinYear && car.year < parseInt(selectedMinYear)) ||
        (selectedMaxYear && car.year > parseInt(selectedMaxYear))
      ) {
        return false;
      }

      if (selectedMileage < car.mileage) {
        return false;
      }

      if (
        selectedMaxPrice !== "all" &&
        car.price > parseInt(selectedMaxPrice)
      ) {
        return false;
      }

      if (selectedColor !== "all" && car.color !== selectedColor) {
        return false;
      }

      return true;
    });

    if (filteredCars.length === 0) {
      carContainer.innerHTML =
        "<p>I'm sorry, but we could not find any cars matching your criteria. Please reconsider your requirements and try again.</p>";
    } else {
      carContainer.innerHTML = "";
      filteredCars.forEach((car) => {
        const carElement = document.createElement("div");
        carElement.classList.add("carCard");
        carElement.innerHTML = `
        <img class="car-img" src="${car.image}" alt="${car.year} ${car.make} ${car.model}">
        <h3>${car.make} ${car.model}</h3>
        <p>Year: ${car.year}</p>
        <p>Price: $${car.price}</p>
        <p>Color: ${car.color}</p>
        <p>Mileage: ${car.mileage} miles</p>
        <p>Gas Mileage: ${car.gasMileage}</p>
      `;
        carContainer.appendChild(carElement);
      });
    }
  }

  // Add event listeners for minYear and maxYear
  minYear.addEventListener("input", createCars);
  maxYear.addEventListener("input", createCars);

  // Existing event listeners
  make.addEventListener("change", createCars);
  maxPrice.addEventListener("change", createCars);
  mileage.addEventListener("change", createCars);
  color.addEventListener("change", createCars);

  // Initial call to createCars
  createCars();
});

//for the scroll wheel

const rangeInputMin = document.getElementById("minYear");
const rangeValueDisplayMin = document.getElementById("rangeValueMin");

const rangeInputMax = document.getElementById("maxYear");
const rangeValueDisplayMax = document.getElementById("rangeValueMax");

rangeInput.addEventListener("input", () => {
  const currentValue = rangeInputMin.value;
  rangeValueDisplayMin.textContent = currentValue;
});

rangeInput.addEventListener("input", () => {
  const currentValue = rangeInputMax.value;
  rangeValueDisplayMax.textContent = currentValue;
});
