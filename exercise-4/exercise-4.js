global.hi = 'hallaien';
function greet() {
  console.log(this.hi);
}
greet();