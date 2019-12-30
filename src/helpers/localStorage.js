
class localStorage {
    items = {}

    getItem(item) {
        return this.items[item]; 
    }

    setItem(item, value) {
        this.items[item] = value;
    }

    removeItem(item) {
        delete this.items[item];
    }
}

export default new localStorage();
