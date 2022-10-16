import { Civilization } from 'src/app/models/civilization.model';
import { Cost } from 'src/app/models/cost.model';
import { Technology } from 'src/app/models/technology.model';
import { formatCost } from 'src/app/utils/cost';


function calculateCost(techs: Technology[]): string {

  const cost: Cost = {
    wood: 0,
    food: 0,
    gold: 0,
    stone: 0
  };
  techs.forEach(tech => {
    // if the civ doesn't have the tech, move to next tech
    if (!bulgarians[tech.name]) {
      console.log(`bulgarians doesn't have ${tech.name}`);
      return;
    }
    // Militia-line upgrades free
    if (tech.name === "man at arms research" || tech.name === "long swordsman research" || tech.name === "two handed swordsman research") {
      return;
    }
    // Blacksmith and Siege Workshop technologies cost -50% food
    if (tech.name === "forging"
      || tech.name === "iron casting"
      || tech.name === "blast furnace"
      || tech.name === "scale mail armor"
      || tech.name === "chain mail armor"
      || tech.name === "plate mail armor"
      || tech.name === "fletching"
      || tech.name === "bodkin arrow"
      || tech.name === "bracer"
      || tech.name === "padded archer armor"
      || tech.name === "leather archer armor"
      || tech.name === "ring archer armor"
      || tech.name === "scale barding armor"
      || tech.name === "chain barding armor"
      || tech.name === "plate barding armor"
      || tech.name === "capped ram research"
      || tech.name === "siege ram research"
      || tech.name === "onager research"
      || tech.name === "siege onager research"
      || tech.name === "heavy scorpion research"
    ) {
      cost.food += Math.ceil(tech.cost.food * 0.5);
      cost.wood += tech.cost.wood;
      cost.gold += tech.cost.gold;
      cost.stone += tech.cost.stone;
      return;
    }

    // generic cost calculation
    cost.wood += tech.cost.wood;
    cost.food += tech.cost.food;
    cost.gold += tech.cost.gold;
    cost.stone += tech.cost.stone;
  });
  return formatCost(cost);
}
export const bulgarians: Civilization = {
  calculateCost,
  "name": "bulgarians",
  "dark age": true,
  "barracks": true,
  "militia": true,
  "man at arms": true,
  "spearman": true,
  "eagle scout": false,
  "supplies": true,
  "long swordsman": true,
  "pikeman": true,
  "eagle warrior": false,
  "squires": true,
  "arson": true,
  "two handed swordsman": true,
  "champion": false,
  "halberdier": true,
  "elite eagle warrior": false,
  "archery range": true,
  "archer": true,
  "crossbowman": false,
  "arbalester": false,
  "skirmisher": true,
  "elite skirmisher": true,
  "hand cannoneer": false,
  "cavalry archer": true,
  "heavy cavalry archer": true,
  "thumb ring": true,
  "parthian tactics": true,
  "stable": true,
  "scout cavalry": true,
  "bloodlines": true,
  "light cavalry": true,
  "knight": true,
  "camel rider": false,
  "battle elephant": false,
  "steppe lancer": false,
  "husbandry": true,
  "hussar": true,
  "cavalier": true,
  "paladin": false,
  "heavy camel rider": false,
  "elite battle elephant": false,
  "elite steppe lancer": false,
  "siege workshop": true,
  "battering ram": true,
  "mangonel": true,
  "scorpion": true,
  "siege tower": true,
  "capped ram": true,
  "siege ram": true,
  "onager": true,
  "siege onager": true,
  "heavy scorpion": true,
  "bombard cannon": false,
  "blacksmith": true,
  "padded archer armor": true,
  "leather archer armor": true,
  "ring archer armor": false,
  "fletching": true,
  "bodkin arrow": true,
  "bracer": true,
  "forging": true,
  "iron casting": true,
  "blast furnace": true,
  "scale barding armor": true,
  "chain barding armor": true,
  "plate barding armor": true,
  "scale mail armor": true,
  "chain mail armor": true,
  "plate mail armor": true,
  "dock": true,
  "fishing ship": true,
  "transport ship": true,
  "fire galley": true,
  "trade cog": true,
  "demolition ship": true,
  "galley": true,
  "fish trap": true,
  "fire ship": true,
  "gillnets": true,
  "demolition raft": true,
  "war galley": true,
  "careening": true,
  "fast fire ship": false,
  "cannon galleon": true,
  "elite cannon galleon": false,
  "heavy demo ship": false,
  "galleon": true,
  "dry dock": false,
  "shipwright": false,
  "university": true,
  "masonry": true,
  "fortified wall": false,
  "ballistics": true,
  "heated shot": true,
  "murder holes": true,
  "treadmill crane": false,
  "architecture": true,
  "chemistry": true,
  "siege engineers": true,
  "arrowslits": false,
  "outpost": true,
  "watch tower": true,
  "guard tower": true,
  "keep": true,
  "bombard tower": false,
  "palisade wall": true,
  "palisade gate": true,
  "gate": true,
  "stone wall": true,
  "castle": true,
  "petard": true,
  "trebuchet": true,
  "hoardings": false,
  "sappers": false,
  "conscription": true,
  "spies": true,
  "monastery": true,
  "monk": true,
  "redemption": true,
  "atonement": false,
  "herbal medicine": true,
  "heresy": true,
  "sanctity": false,
  "fervor": true,
  "faith": false,
  "illumination": true,
  "block printing": false,
  "theocracy": true,
  "house": true,
  "town center": true,
  "villager": true,
  "loom": true,
  "town watch": true,
  "wheelbarrow": true,
  "town patrol": true,
  "hand cart": true,
  "feudal age": true,
  "castle age": true,
  "imperial age": true,
  "wonder": true,
  "mining camp": true,
  "gold mining": true,
  "stone mining": true,
  "gold shaft mining": true,
  "stone shaft mining": true,
  "lumber camp": true,
  "double bit axe": true,
  "bow saw": true,
  "two man saw": false,
  "mill": true,
  "farm": true,
  "market": true,
  "trade cart": true,
  "horse collar": true,
  "coinage": true,
  "caravan": true,
  "heavy plow": true,
  "banking": true,
  "guilds": false,
  "crop rotation": true,
  "bombard tower research": false,
  "fortified wall research": false,
  "guard tower research": true,
  "keep research": true,
  "halberdier research": true,
  "pikeman research": true,
  "champion research": false,
  "man at arms research": true,
  "long swordsman research": true,
  "two handed swordsman research": true,
  "crossbowman research": false,
  "arbalester research": false,
  "cavalier research": true,
  "paladin research": false,
  "elite skirmisher research": true,
  "eagle warrior research": false,
  "elite eagle warrior research": false,
  "heavy cavalry archer research": true,
  "heavy camel rider research": false,
  "elite battle elephant research": false,
  "cannon galleon research": true,
  "elite cannon galleon research": false,
  "war galley research": true,
  "fast fire ship research": false,
  "galleon research": true,
  "heavy demo ship research": false,
  "light cavalry research": true,
  "hussar research": true,
  "elite steppe lancer research": false,
  "onager research": true,
  "siege onager research": true,
  "capped ram research": true,
  "siege ram research": true,
  "heavy scorpion research": true,
  'elephant archer': false,
  'elite elephant archer research': false,
  'elite elephant archer': false,
  'armored elephant': false,
  'siege elephant research': false,
  'siege elephant': false
}