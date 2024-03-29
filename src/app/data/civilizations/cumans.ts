import { Civilization } from 'src/app/models/civilization.model';
import { Technology } from 'src/app/models/technology.model';
import { formatCost } from 'src/app/utils/cost';

function calculateCost(techs: Technology[]): string {
  const cost = {
    wood: 0,
    food: 0,
    gold: 0,
    stone: 0
  };

  techs.forEach(tech => {
    // if the civ doesn't have the tech, move to next tech
    if (!cumans[tech.name]) {
      console.log(`cumans doesn't have ${tech.name}`);
      return;
    }

    // Archery Ranges and Stables cost -75 wood
    if (tech.name === "archery range" || tech.name === "stable") {
      cost.wood += tech.cost.wood - 75;
      cost.food += tech.cost.food;
      cost.gold += tech.cost.gold;
      cost.stone += tech.cost.stone;
      return;
    }

    // generic cost
    cost.food += tech.cost.food;
    cost.wood += tech.cost.wood;
    cost.gold += tech.cost.gold;
    cost.stone += tech.cost.stone;
  });

  return formatCost(cost);
}

export const cumans: Civilization = {
  calculateCost,
  "name": "cumans",
  "barracks": true,
  "militia": true,
  "man at arms": true,
  "spearman": true,
  "eagle scout": false,
  "supplies": false,
  "long swordsman": true,
  "pikeman": true,
  "eagle warrior": false,
  "squires": true,
  "arson": true,
  "two handed swordsman": true,
  "champion": true,
  "halberdier": true,
  "elite eagle warrior": false,
  "archery range": true,
  "archer": true,
  "crossbowman": true,
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
  "dark age": true,
  "light cavalry": true,
  "knight": true,
  "camel rider": true,
  "battle elephant": false,
  "steppe lancer": true,
  "husbandry": false,
  "hussar": true,
  "cavalier": true,
  "paladin": true,
  "heavy camel rider": false,
  "elite battle elephant": false,
  "elite steppe lancer": true,
  "siege workshop": true,
  "battering ram": true,
  "mangonel": true,
  "scorpion": true,
  "siege tower": true,
  "capped ram": true,
  "siege ram": true,
  "onager": true,
  "siege onager": true,
  "heavy scorpion": false,
  "bombard cannon": false,
  "blacksmith": true,
  "padded archer armor": true,
  "leather archer armor": true,
  "ring archer armor": true,
  "fletching": true,
  "bodkin arrow": true,
  "bracer": false,
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
  "fast fire ship": true,
  "cannon galleon": false,
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
  "architecture": false,
  "chemistry": true,
  "siege engineers": false,
  "arrowslits": false,
  "outpost": true,
  "watch tower": true,
  "guard tower": false,
  "keep": false,
  "bombard tower": false,
  "palisade wall": true,
  "palisade gate": true,
  "gate": false,
  "stone wall": false,
  "castle": true,
  "petard": true,
  "trebuchet": true,
  "hoardings": true,
  "sappers": true,
  "conscription": true,
  "spies": true,
  "monastery": true,
  "monk": true,
  "redemption": false,
  "atonement": true,
  "herbal medicine": true,
  "heresy": true,
  "sanctity": true,
  "fervor": true,
  "faith": true,
  "illumination": false,
  "block printing": false,
  "theocracy": false,
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
  "stone shaft mining": false,
  "lumber camp": true,
  "double bit axe": true,
  "bow saw": true,
  "two man saw": true,
  "mill": true,
  "farm": true,
  "market": true,
  "trade cart": true,
  "horse collar": true,
  "coinage": true,
  "caravan": true,
  "heavy plow": true,
  "banking": true,
  "guilds": true,
  "crop rotation": true,
  "bombard tower research": false,
  "fortified wall research": false,
  "guard tower research": false,
  "keep research": false,
  "halberdier research": true,
  "pikeman research": true,
  "champion research": true,
  "man at arms research": true,
  "long swordsman research": true,
  "two handed swordsman research": true,
  "crossbowman research": true,
  "arbalester research": false,
  "cavalier research": true,
  "paladin research": true,
  "elite skirmisher research": true,
  "eagle warrior research": false,
  "elite eagle warrior research": false,
  "heavy cavalry archer research": true,
  "heavy camel rider research": false,
  "elite battle elephant research": false,
  "cannon galleon research": false,
  "elite cannon galleon research": false,
  "war galley research": true,
  "fast fire ship research": true,
  "galleon research": true,
  "heavy demo ship research": false,
  "light cavalry research": true,
  "hussar research": true,
  "elite steppe lancer research": true,
  "onager research": true,
  "siege onager research": true,
  "capped ram research": true,
  "siege ram research": true,
  "heavy scorpion research": false,
  'elephant archer': false,
  'elite elephant archer research': false,
  'elite elephant archer': false,
  'armored elephant': false,
  'siege elephant research': false,
  'siege elephant': false
}