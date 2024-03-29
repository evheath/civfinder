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
    if (!mayans[tech.name]) {
      console.log(`mayans doesn't have ${tech.name}`);
      return;
    }

    // Walls cost -50%
    if (tech.name === "palisade gate"
      || tech.name === "palisade wall"
      || tech.name === "stone wall"
      || tech.name === "fortified wall"
      || tech.name === "gate"
    ) {
      cost.wood += Math.ceil(tech.cost.wood * 0.5);
      cost.food += Math.ceil(tech.cost.food * 0.5);
      cost.food += Math.ceil(tech.cost.gold * 0.5);
      cost.stone += Math.ceil(tech.cost.stone * 0.5);
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
export const mayans: Civilization = {
  calculateCost,
  "name": "mayans",
  "barracks": true,
  "militia": true,
  "man at arms": true,
  "spearman": true,
  "eagle scout": true,
  "supplies": false,
  "long swordsman": true,
  "pikeman": true,
  "eagle warrior": true,
  "squires": true,
  "arson": true,
  "two handed swordsman": true,
  "champion": false,
  "halberdier": true,
  "elite eagle warrior": true,
  "archery range": true,
  "archer": true,
  "crossbowman": true,
  "arbalester": true,
  "skirmisher": true,
  "elite skirmisher": true,
  "hand cannoneer": false,
  "cavalry archer": false,
  "dark age": true,
  "heavy cavalry archer": false,
  "thumb ring": true,
  "parthian tactics": false,
  "stable": false,
  "scout cavalry": false,
  "bloodlines": false,
  "light cavalry": false,
  "knight": false,
  "camel rider": false,
  "battle elephant": false,
  "steppe lancer": false,
  "husbandry": false,
  "hussar": false,
  "cavalier": false,
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
  "siege onager": false,
  "heavy scorpion": true,
  "bombard cannon": false,
  "blacksmith": true,
  "padded archer armor": true,
  "leather archer armor": true,
  "ring archer armor": true,
  "fletching": true,
  "bodkin arrow": true,
  "bracer": true,
  "forging": true,
  "iron casting": true,
  "blast furnace": true,
  "scale barding armor": false,
  "chain barding armor": false,
  "plate barding armor": false,
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
  "heavy demo ship": true,
  "galleon": true,
  "dry dock": true,
  "shipwright": true,
  "university": true,
  "masonry": true,
  "fortified wall": true,
  "ballistics": true,
  "heated shot": true,
  "murder holes": true,
  "treadmill crane": true,
  "architecture": true,
  "chemistry": true,
  "siege engineers": false,
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
  "block printing": true,
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
  "gold shaft mining": false,
  "stone shaft mining": true,
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
  "fortified wall research": true,
  "guard tower research": true,
  "keep research": true,
  "halberdier research": true,
  "pikeman research": true,
  "champion research": false,
  "man at arms research": true,
  "long swordsman research": true,
  "two handed swordsman research": true,
  "crossbowman research": true,
  "arbalester research": true,
  "cavalier research": false,
  "paladin research": false,
  "elite skirmisher research": true,
  "eagle warrior research": true,
  "elite eagle warrior research": true,
  "heavy cavalry archer research": false,
  "heavy camel rider research": false,
  "elite battle elephant research": false,
  "cannon galleon research": false,
  "elite cannon galleon research": false,
  "war galley research": true,
  "fast fire ship research": true,
  "galleon research": true,
  "heavy demo ship research": true,
  "light cavalry research": false,
  "hussar research": false,
  "elite steppe lancer research": false,
  "onager research": true,
  "siege onager research": false,
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