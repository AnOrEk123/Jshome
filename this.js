function run() {
    console.log(`${this.name} runs`);
  }
  
  function Person(name = "Valerchik", age = 1, techStack = []) {
    this.name = name;
    this.age = age;
    this.techStack = techStack;
    this.soul = true;
    this.documents = ["Born doc"];
    this.photos = [];
    this.places = [];
    this.toString = () => "own object toString";
  }
  
  Person.prototype.run = run;
  Person.prototype.toString = () => {
    return "STRING FROM PROTOTYPE";
  };
  Person.prototype.x = 2;
  
  function fly() {
    console.log(`${this.name} flies!`);
  }
  
  function saleSoul() {
    this.soul = false;
  }
  
  function SuperHero(isBad = false) {
    // this = {};
    Person.apply(this, Array.prototype.slice.call(arguments, 1));
  
    this.saleSoul = isBad ? saleSoul : () => "IM GOOD!";
  }
  
  SuperHero.prototype = Object.create(Person.prototype);
  SuperHero.prototype.constructor = SuperHero;
  SuperHero.prototype.fly = fly;
  
  const pr = new Person("Oleg", 23, ["Eat"]);
  const pr2 = new Person("Evlampij", 90, ["sleep"]);
  const sh = new SuperHero(true, "Batman", 54, ["ride a car", "spend money"]);
  
//   console.log(sh instanceof SuperHero);
// JapanSuperHero
JapanSuperHero.prototype = Object.create(SuperHero.prototype)
  
  function eatWithSticks () {
      console.log(`${this.name} eat with sticks`)
  }

  function jumpOverTrees () {
    console.log(`${this.name} jump over trees`)
}
  
  function JapanSuperHero (isBad = false) {
    SuperHero.apply(this, Array.prototype.slice.call(arguments));
    this.amountOfSticks = 100
    this.saleSoul = isBad ? saleSoul : () => "IM GOOD!";
  }

  const jsh = new JapanSuperHero(true, "JapanSuperHero", 72, ["fry chicken"]);
  JapanSuperHero.prototype.eatWithSticks = eatWithSticks;
  JapanSuperHero.prototype.jumpOverTrees = jumpOverTrees;
  console.log(jsh);
//   .eatWithSticks()
//   .jumpOverTrees()