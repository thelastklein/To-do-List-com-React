
class Item {

    static lastid = 0;

    constructor(text) {
        this.id = Item.lastid++
        this.text = text;
        this.done = false;
    }
}

export default Item;