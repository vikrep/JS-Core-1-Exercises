
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}
Person.prototype.fullName = function(){
return this.firstName + this.lastName
};
var viktor = new Person("Viktor", "Protsenko", "47", "grey")
console.log(viktor.fullName());