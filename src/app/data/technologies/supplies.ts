import { Technology } from 'src/app/models/technology.model';
import { barracks } from './barracks';
import { feudal_age } from './feudal_age';

export const supplies: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "supplies",
  "age": "feudal",
  "color": "green",
  dependencies: [barracks.name,],
}