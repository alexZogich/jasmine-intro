var Man = function (name,age) {
	this.name = name;
	this.age = age;
	this.alive = true;
}

Man.prototype.live = function (){
	if (this.alive) {
		return this.name + " has been living for " + this.age;
	} else {
		throw new Error("Sorry but this guy is gone");
	}
  
 }

var Student = function (name, age) {
  Man.apply(this, arguments);
}

Student.prototype = new Man();

Student.prototype.study = function () {
    return this.name + "is studying";
}

var Professor = function () {
	this.skillLevel = 0;
	this.hasSenseOfHumor = false;
}

Professor.prototype.setName = function (name) {
	if (name) {
		this.name = name;
	} else {
		throw new Error("Izvinite pojaluista");
	}
	return this;
}

Professor.prototype.upSkill = function () {
	this.skillLevel++;
	return this;
}

Professor.prototype.changeHumor = function () {
	if (this.hasSenseOfHumor) {
		this.hasSenseOfHumor = false;
	} else {
		this.hasSenseOfHumor = true;
	}

	return this;
}

Professor.prototype.addTwoNumbers = function (a,b) {
	return a + b;
}


function duckTypes() {
	var obj = this;
	if("study" in obj){
		return "Student";
	} else {
		return "Man";
	}
}

