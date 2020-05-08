import { crop_rotation } from './crop_rotation';
import { guilds } from './guilds';
import { banking } from './banking';
import { heavy_plow } from './heavy_plow';
import { caravan } from './caravan';
import { coinage } from './coinage';
import { horse_collar } from './horse_collar';
import { trade_cart } from './trade_cart';
import { market } from './market';
import { farm } from './farm';
import { mill } from './mill';
import { two_man_saw } from './two_man_saw';
import { bow_saw } from './bow_saw';
import { double_bit_axe } from './double_bit_axe';
import { lumber_camp } from './lumber_camp';
import { stone_shaft_mining } from './stone_shaft_mining';
import { gold_shaft_mining } from './gold_shaft_mining';
import { stone_mining } from './stone_mining';
import { gold_mining } from './gold_mining';
import { mining_camp } from './mining_camp';
import { wonder } from './wonder';
import { imperial_age } from './imperial_age';
import { castle_age } from './castle_age';
import { feudal_age } from './feudal_age';
import { hand_cart } from './hand_cart';
import { town_patrol } from './town_patrol';
import { wheelbarrow } from './wheelbarrow';
import { town_watch } from './town_watch';
import { loom } from './loom';
import { villager } from './villager';
import { town_center } from './town_center';
import { house } from './house';
import { theocracy } from './theocracy';
import { block_printing } from './block_printing';
import { illumination } from './illumination';
import { faith } from './faith';
import { fervor } from './fervor';
import { sanctity } from './sanctity';
import { heresy } from './heresy';
import { herbal_medicine } from './herbal_medicine';
import { atonement } from './atonement';
import { redemption } from './redemption';
import { monk } from './monk';
import { monastery } from './monastery';
import { spies } from './spies';
import { conscription } from './conscription';
import { sappers } from './sappers';
import { hoardings } from './hoardings';
import { trebuchet } from './trebuchet';
import { petard } from './petard';
import { castle } from './castle';
import { stone_wall } from './stone_wall';
import { gate } from './gate';
import { palisade_gate } from './palisade_gate';
import { palisade_wall } from './palisade_wall';
import { bombard_tower } from './bombard_tower';
import { keep } from './keep';
import { guard_tower } from './guard_tower';
import { watch_tower } from './watch_tower';
import { outpost } from './outpost';
import { arrowslits } from './arrowslits';
import { siege_engineers } from './siege_engineers';
import { chemistry } from './chemistry';
import { architecture } from './architecture';
import { treadmill_crane } from './treadmill_crane';
import { murder_holes } from './murder_holes';
import { heated_shot } from './heated_shot';
import { ballistics } from './ballistics';
import { fortified_wall } from './fortified_wall';
import { masonry } from './masonry';
import { university } from './university';
import { shipwright } from './shipwright';
import { dry_dock } from './dry_dock';
import { galleon } from './galleon';
import { heavy_demo_ship } from './heavy_demo_ship';
import { elite_cannon_galleon } from './elite_cannon_galleon';
import { cannon_galleon } from './cannon_galleon';
import { fast_fire_ship } from './fast_fire_ship';
import { careening } from './careening';
import { war_galley } from './war_galley';
import { demolition_raft } from './demolition_raft';
import { gillnets } from './gillnets';
import { fire_ship } from './fire_ship';
import { fish_trap } from './fish_trap';
import { galley } from './galley';
import { demolition_ship } from './demolition_ship';
import { trade_cog } from './trade_cog';
import { fire_galley } from './fire_galley';
import { transport_ship } from './transport_ship';
import { fishing_ship } from './fishing_ship';
import { dock } from './dock';
import { plate_mail_armor } from './plate_mail_armor';
import { chain_mail_armor } from './chain_mail_armor';
import { scale_mail_armor } from './scale_mail_armor';
import { plate_barding_armor } from './plate_barding_armor';
import { chain_barding_armor } from './chain_barding_armor';
import { scale_barding_armor } from './scale_barding_armor';
import { blast_furnace } from './blast_furnace';
import { iron_casting } from './iron_casting';
import { forging } from './forging';
import { bracer } from './bracer';
import { bodkin_arrow } from './bodkin_arrow';
import { fletching } from './fletching';
import { ring_archer_armor } from './ring_archer_armor';
import { leather_archer_armor } from './leather_archer_armor';
import { padded_archer_armor } from './padded_archer_armor';
import { blacksmith } from './blacksmith';
import { bombard_cannon } from './bombard_cannon';
import { heavy_scorpion } from './heavy_scorpion';
import { siege_onager } from './siege_onager';
import { onager } from './onager';
import { siege_ram } from './siege_ram';
import { capped_ram } from './capped_ram';
import { siege_tower } from './siege_tower';
import { scorpion } from './scorpion';
import { mangonel } from './mangonel';
import { battering_ram } from './battering_ram';
import { siege_workshop } from './siege_workshop';

import { Technology } from 'src/app/models/technology.model';

import { barracks } from './barracks';
import { eagle_scout } from './eagle_scout';
import { militia } from './militia';
import { archery_range } from './archery_range';
import { archer } from './archer';
import { skirmisher } from './skirmisher';
import { elite_skirmisher } from './elite_skirmisher';
import { hand_cannoneer } from './hand_cannoneer';
import { cavalry_archer } from './cavalry_archer';
import { arbalester } from './arbalester';
import { heavy_cavalry_archer } from './heavy_cavalry_archer';
import { crossbowman } from './crossbowman';
import { man_at_arms } from './man_at_arms';
import { thumb_ring } from './thumb_ring';
import { parthian_tactics } from './parthian_tactics';
import { spearman } from './spearman';
import { supplies } from './supplies';
import { long_swordsman } from './long_swordsman';
import { pikeman } from './pikeman';
import { halberdier } from './halberdier';
import { elite_eagle_warrior } from './elite_eagle_warrior';
import { squires } from './squires';
import { arson } from './arson';
import { eagle_warrior } from './eagle_warrior';
import { two_handed_swordsman } from './two_handed_swordsman';
import { champion } from './champion';
import { stable } from './stable';
import { scout_cavalary } from './scout_cavalry';
import { bloodlines } from './bloodlines';
import { light_cavalary } from './light_cavalry';
import { knight } from './knight';
import { camel_rider } from './camel_rider';
import { battle_elephant } from './battle_elephant';
import { steppe_lancer } from './steppe_lancer';
import { husbandry } from './husbandry';
import { hussar } from './hussar';
import { cavalier } from './cavalier';
import { paladin } from './paladin';
import { heavy_camel_rider } from './heavy_camel_rider';
import { elite_battle_elephant } from './elite_battle_elephant';
import { elite_steppe_lancer } from './elite_steppe_lancer';

export const technologies: Technology[] = [
  barracks,
  militia,
  man_at_arms,
  spearman,
  eagle_scout,
  supplies,
  long_swordsman,
  pikeman,
  eagle_warrior,
  squires,
  arson,
  two_handed_swordsman,
  champion,
  halberdier,
  elite_eagle_warrior,
  archery_range,
  archer,
  crossbowman,
  arbalester,
  skirmisher,
  elite_skirmisher,
  hand_cannoneer,
  cavalry_archer,
  heavy_cavalry_archer,
  thumb_ring,
  parthian_tactics,
  stable,
  scout_cavalary,
  bloodlines,
  light_cavalary,
  knight,
  camel_rider,
  battle_elephant,
  steppe_lancer,
  husbandry,
  hussar,
  cavalier,
  paladin,
  heavy_camel_rider,
  elite_battle_elephant,
  elite_steppe_lancer,
  siege_workshop,
  battering_ram,
  mangonel,
  scorpion,
  siege_tower,
  capped_ram,
  siege_ram,
  onager,
  siege_onager,
  heavy_scorpion,
  bombard_cannon,
  blacksmith,
  padded_archer_armor,
  leather_archer_armor,
  ring_archer_armor,
  fletching,
  bodkin_arrow,
  bracer,
  forging,
  iron_casting,
  blast_furnace,
  scale_barding_armor,
  chain_barding_armor,
  plate_barding_armor,
  scale_mail_armor,
  chain_mail_armor,
  plate_mail_armor,
  dock,
  fishing_ship,
  transport_ship,
  fire_galley,
  trade_cog,
  demolition_ship,
  galley,
  fish_trap,
  fire_ship,
  gillnets,
  demolition_raft,
  war_galley,
  careening,
  fast_fire_ship,
  cannon_galleon,
  elite_cannon_galleon,
  heavy_demo_ship,
  galleon,
  dry_dock,
  shipwright,
  university,
  masonry,
  fortified_wall,
  ballistics,
  heated_shot,
  murder_holes,
  treadmill_crane,
  architecture,
  chemistry,
  siege_engineers,
  arrowslits,
  outpost,
  watch_tower,
  guard_tower,
  keep,
  bombard_tower,
  palisade_wall,
  palisade_gate,
  gate,
  stone_wall,
  castle,
  petard,
  trebuchet,
  hoardings,
  sappers,
  conscription,
  spies,
  monastery,
  monk,
  redemption,
  atonement,
  herbal_medicine,
  heresy,
  sanctity,
  fervor,
  faith,
  illumination,
  block_printing,
  theocracy,
  house,
  town_center,
  villager,
  loom,
  town_watch,
  wheelbarrow,
  town_patrol,
  hand_cart,
  feudal_age,
  castle_age,
  imperial_age,
  wonder,
  mining_camp,
  gold_mining,
  stone_mining,
  gold_shaft_mining,
  stone_shaft_mining,
  lumber_camp,
  double_bit_axe,
  bow_saw,
  two_man_saw,
  mill,
  farm,
  market,
  trade_cart,
  horse_collar,
  coinage,
  caravan,
  heavy_plow,
  banking,
  guilds,
  crop_rotation,
]