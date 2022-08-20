import {NumberCollection} from './NumberCollection'
import {CharacterCollection} from './CharacterCollection'
import {LinkedList} from './LinkedList';

const numberCollection = new NumberCollection([10, 3, -5, 0]);
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharacterCollection('Xaayb');
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(45);
linkedList.add(15);
linkedList.add(4);
linkedList.sort();
linkedList.print();
