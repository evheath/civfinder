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
    // replacing hussar with winged hussar
    if (tech.name === "hussar research") {
      cost.food += 600;
      cost.gold += 800;
      return;
    }

    // if the civ doesn't have the tech, move to next tech
    if (!poles[tech.name]) {
      console.log(`poles doesn't have ${tech.name}`);
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
export const poles: Civilization = {
  calculateCost,
  "name": "poles",

  // Archery range
  "archery range": true,
  "archer": true,
  "crossbowman": true,
  "arbalester": true,
  "skirmisher": true,
  "elite skirmisher": true,
  "hand cannoneer": false,
  "cavalry archer": true,
  "heavy cavalry archer research": true,
  "heavy cavalry archer": true,
  "thumb ring": true,
  "parthian tactics": false,
  "crossbowman research": true,
  "arbalester research": true,
  "elite skirmisher research": true,

  // Barracks
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
  "champion": true,
  "halberdier": false,
  "elite eagle warrior": false,
  "halberdier research": false,
  "pikeman research": true,
  "champion research": true,
  "man at arms research": true,
  "long swordsman research": true,
  "two handed swordsman research": true,
  "eagle warrior research": false,
  "elite eagle warrior research": false,

  // Stable
  "stable": true,
  "scout cavalry": true,
  "bloodlines": true,
  "light cavalry": true,
  "knight": true,
  "camel rider": false,
  "battle elephant": false,
  "steppe lancer": false,
  "husbandry": true,
  "hussar": false,
  "cavalier": true,
  "paladin": false,
  "heavy camel rider": false,
  "elite battle elephant": false,
  "elite steppe lancer": false,
  "cavalier research": true,
  "paladin research": false,
  "heavy camel rider research": false,
  "elite battle elephant research": false,
  "light cavalry research": true,
  "hussar research": false,
  "elite steppe lancer research": false,

  // Siege Workshop
  "siege workshop": true,
  "battering ram": true,
  "mangonel": true,
  "scorpion": true,
  "siege tower": true,
  "capped ram": true,
  "siege ram": true,
  "onager": true,
  "siege onager": false,
  "heavy scorpion": false,
  "bombard cannon": true,
  "onager research": true,
  "siege onager research": false,
  "capped ram research": true,
  "siege ram research": true,
  "heavy scorpion research": false,

  // Blacksmith
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
  "plate barding armor": false,
  "scale mail armor": true,
  "chain mail armor": true,
  "plate mail armor": true,

  // Dock
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
  "cannon galleon": true,
  "elite cannon galleon": false,
  "heavy demo ship": false,
  "galleon": true,
  "dry dock": false,
  "shipwright": false,
  "cannon galleon research": true,
  "elite cannon galleon research": false,
  "war galley research": true,
  "fast fire ship research": true,
  "galleon research": true,
  "heavy demo ship research": false,

  // University
  "university": true,
  "masonry": true,
  "fortified wall research": true,
  "ballistics": true,
  "heated shot": false,
  "murder holes": true,
  "treadmill crane": true,
  "architecture": false,
  "chemistry": true,
  "siege engineers": true,
  "arrowslits": true,
  "bombard tower research": true,
  "guard tower research": true,
  "keep research": true,

  // Defensive buildings
  "outpost": true,
  "watch tower": true,
  "guard tower": true,
  "keep": true,
  "bombard tower": true,
  "palisade wall": true,
  "palisade gate": true,
  "gate": true,
  "stone wall": true,
  "fortified wall": true,

  // Castle
  "castle": true,
  "petard": true,
  "trebuchet": true,
  "hoardings": true,
  "sappers": true,
  "conscription": true,
  "spies": true,

  // Monastery
  "monastery": true,
  "monk": true,
  "redemption": true,
  "atonement": false,
  "herbal medicine": true,
  "heresy": false,
  "sanctity": true,
  "fervor": true,
  "faith": true,
  "illumination": false,
  "block printing": true,
  "theocracy": true,

  // Town Center
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

  // Economy
  "mining camp": true,
  "gold mining": true,
  "stone mining": true,
  "gold shaft mining": false,
  "stone shaft mining": true,
  "lumber camp": true,
  "double bit axe": true,
  "bow saw": true,
  "two man saw": false,
  "mill": true,
  "farm": true,
  "heavy plow": true,
  "horse collar": true,
  "crop rotation": true,

  // Market
  "market": true,
  "trade cart": true,
  "coinage": true,
  "caravan": true,
  "banking": true,
  "guilds": true,

  // Misc
  "dark age": true,
  "house": true,
  "wonder": true,
  'elephant archer': false,
  'elite elephant archer research': false,
  'elite elephant archer': false,
  'armored elephant': false,
  'siege elephant research': false,
  'siege elephant': false
}