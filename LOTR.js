'use strict';
class createCharacter {
  constructor(name, nickname, race, origin, attack, defense, weapon) {
    this.name = name;
    this.nickname = nickname;
    this.race = race;
    this.origin = origin;
    this.attack = attack;
    this.defense = defense;
    this.weapon = weapon ? weapon : null;
  }
  
  describe() {
    if (!this.weapon)
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    else
      console.log(
        `${this.name} is a ${this.race} from ${this.origin} who uses ${
          this.weapon
        }.`
      );
  }
  
  evaluateFight(character) {
    console.log(
      `Your opponent takes ${
        this.attack < character.defense ? 0 : this.attack - character.defense
      } damage and you receive ${
        this.defense > character.attack ? 0 : this.defense - character.attack
      } damage`
    );
  }
  
  equipWeapon(weapon) {
    this.weapon = weapon;
  }
}
  
const characters = [
  new createCharacter(
    "Gandalf the White",
    "gandalf",
    "Wizard",
    "Middle Earth",
    10,
    6
  ),
  new createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1),
  new createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2),
  new createCharacter(
    "Aragorn son of Arathorn",
    "aragorn",
    "Man",
    "Dunnedain",
    6,
    8
  ),
  new createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5),
  new createCharacter("Arwen Undomiel", "Arwen", "Half-Elf", "Rivendell", 8, 5)
];
  
const aragorn = characters.find(i => i.nickname == "aragorn");
aragorn.describe();
  
const hobbits = characters.filter(i => i.race == "Hobbit");
const highAttack = characters.filter(i => i.attack > 5);
  