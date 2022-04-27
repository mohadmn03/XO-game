let result = document.querySelector(".result");
let cars = document.querySelectorAll(".car");
//
let startValue = "X";
result.innerHTML = `The turn pour ${startValue}`;
//
let carsClicked = [];
//
function winner(one, two, three) {
  document.getElementById(one).style.backgroundColor = "black";
  document.getElementById(two).style.backgroundColor = "black";
  document.getElementById(three).style.backgroundColor = "black";
  setInterval(() => {
    result.innerHTML += ".";
  }, 1000);
  setInterval(() => {
    window.location.reload();
  }, 3900);
}
//
cars.forEach((car) => {
  car.addEventListener("click", (event) => {
    //enter values
    if (startValue === "X" && car.innerHTML !== "O" && car.innerHTML === "") {
      car.innerHTML = startValue;
      startValue = "O";
      result.innerHTML = `The turn pour ${startValue}`;
    } else if (
      startValue === "O" &&
      car.innerHTML !== "X" &&
      car.innerHTML === ""
    ) {
      car.innerHTML = startValue;
      startValue = "X";
      result.innerHTML = `The turn pour ${startValue}`;
    }
    //push to array
    for (let i = 1; i < 10; i++) {
      carsClicked[i] = document.getElementById(i).innerHTML;
    }
    if (
      carsClicked[1] === carsClicked[2] &&
      carsClicked[1] === carsClicked[3] &&
      carsClicked[1] !== ""
    ) {
      result.innerHTML = `${carsClicked[1]} WON !!`;
      winner(1, 2, 3);
    } else if (
      carsClicked[4] === carsClicked[5] &&
      carsClicked[5] === carsClicked[6] &&
      carsClicked[4] !== ""
    ) {
      result.innerHTML = `${carsClicked[4]} WON !!`;
      winner(4, 5, 6);
    } else if (
      carsClicked[7] === carsClicked[8] &&
      carsClicked[7] === carsClicked[9] &&
      carsClicked[7] !== ""
    ) {
      result.innerHTML = `${carsClicked[7]} WON !!`;
      winner(7, 8, 9);
    } else if (
      carsClicked[1] === carsClicked[4] &&
      carsClicked[1] === carsClicked[7] &&
      carsClicked[1] !== ""
    ) {
      result.innerHTML = `${carsClicked[1]} WON !!`;
      winner(1, 4, 7);
    } else if (
      carsClicked[2] === carsClicked[5] &&
      carsClicked[2] === carsClicked[8] &&
      carsClicked[2] !== ""
    ) {
      result.innerHTML = `${carsClicked[2]} WON !!`;
      winner(2, 5, 8);
    } else if (
      carsClicked[3] === carsClicked[6] &&
      carsClicked[3] === carsClicked[9] &&
      carsClicked[3] !== ""
    ) {
      result.innerHTML = `${carsClicked[3]} WON !!`;
      winner(3, 6, 9);
    } else if (
      carsClicked[1] === carsClicked[5] &&
      carsClicked[1] === carsClicked[9] &&
      carsClicked[1] !== ""
    ) {
      result.innerHTML = `${carsClicked[1]} WON !!`;
      winner(1, 5, 9);
    } else if (
      carsClicked[3] === carsClicked[5] &&
      carsClicked[3] === carsClicked[7] &&
      carsClicked[3] !== ""
    ) {
      result.innerHTML = `${carsClicked[3]} WON !!`;
      winner(3, 5, 7);
    }
  });
});
//
