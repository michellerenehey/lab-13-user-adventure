import questArray from '../data/quest-data.js'; 
import { findById } from '../utils.js'; 

const params = new URLSearchParams(window.location.search); 
const questData = findById(quests, params.get('id')); 

const 