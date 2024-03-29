import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { feudal_age } from './feudal_age';

export const eagle_scout: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "eagle scout",
  "age": "feudal",
  "color": "blue",
  dependencies: [barracks.name,],
}