class KeyValuePair {
    setKey(value) {
        if (value == null) {
            throw new Error("Значение value не может быть пустым.");
        }
        this.key = value;
    }
    getKey() {
        return this.key;
    }
    setValue(value) {
        if (value == null) {
            throw new Error("Значение value не может быть пустым.");
        }
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setDescription(value) {
        if (value == null) {
            throw new Error("Значение value не может быть пустым.");
        }
        this.description = value;
    }
    getDescription() {
        return this.description;
    }
}
class Dictionary {
    constructor() {
        this.data = [];
    }
    add(key, value, description) {
        let entry = new KeyValuePair();
        entry.setKey(key);
        entry.setValue(value);
        entry.setDescription(description);
        this.data.push(entry);
    }
    getValue(key) {
        const candidate = this.data.find((entry) => entry.key === key);
        return candidate ? candidate : null;
    }
}
let dictionary1 = new Dictionary();
let dictionary2 = new Dictionary();
dictionary1.add(1, "car", "for driving");
dictionary2.add('round obj', "ball", "for soccer");
console.log(dictionary1.getValue(1));
console.log(dictionary2.getValue('round obj'));
console.log(dictionary2.getValue('ololo'));
//# sourceMappingURL=index.js.map