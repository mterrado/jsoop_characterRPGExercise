

class Character{
	constructor(name, charClass){
		this.stats = {
			strength: null,
			dexterity: null,
			constitution: null,
			willpower: null,
			intelligence: null,
			charisma: null
		}
		this.weapon = null;
		this.armor = null;
		this.itemWeight = 0;
		this.clothing = {
			head: null,
			neck: null,
			torso: null,
			hands: null,
			legs: null,
			feet: null
		}
	}
	generateStat( statName, valueDice){

	}
	equipWeapon( weapon ){

	}
	wearItem( wearable ){

	}
	attack( target ){
		
	}
}