class Vehicle {
	constructor(occupancy, wheels, maximumSpeed) {
		this.occupancy = occupancy;
		this.wheels = wheels;
		this.maximumSpeed = maximumSpeed;
	}
	accelerate(amount) {
		this.speed += amount;
	}
	decelerate(amount) {
		this.speed -= amount;
	}
	park() {
		this.speed = 0;
	}
}

function create() {
  let occupancy = document.getElementById('occupancy').value;
  let wheels = document.getElementById('wheels').value;
  let maximumSpeed = document.getElementById('maximumSpeed').value;
  var myVehicle = new Vehicle(occupancy, wheels, maximumSpeed);
  console.log(`myVehicle fits ${myVehicle.occupancy} passenger(s), has ${myVehicle.wheels} wheel(s) and a top speed of ${myVehicle.maximumSpeed}`);
}

function init() {

}

window.addEventListener('DOMContentLoaded', init);