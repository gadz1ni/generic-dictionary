class KeyValuePair<TKey, TValue, TDescription> {
    private key: TKey;
    private value: TValue;
    private description: TDescription;

    public setKey(value: TKey) {
        if (value == null) {
            throw new Error("Значение value не может быть пустым.");
        }
        this.key = value;
    }

    public getKey(): TKey {
        return this.key;
    }

    public setValue(value: TValue) {
        if (value == null) {
            throw new Error("Значение value не может быть пустым.");
        }
        this.value = value;
    }

    public getValue(): TValue {
        return this.value;
    }

    public setDescription(value: TDescription) {
        if (value == null) {
            throw new Error("Значение value не может быть пустым.");
        }
        this.description = value;
    }

    public getDescription(): TDescription {
        return this.description;
    }
}

class Dictionary<TKey, TValue, TDescription> {

    private data: KeyValuePair<TKey, TValue, TDescription>[] = [];

    public add(key: TKey, value: TValue, description: TDescription) {
        let entry = new KeyValuePair<TKey, TValue, TDescription>();

        entry.setKey(key);
        entry.setValue(value);
        entry.setDescription(description);
        this.data.push(entry);
    }

    public getValue(key: TKey): KeyValuePair<TKey, TValue, TDescription> | null {
         const candidate = this.data.find((entry: any) =>  entry.key === key);

         return candidate ? candidate : null;
     }
}

let dictionary1 = new Dictionary<number, string, string> ();
let dictionary2 = new Dictionary<string, string, string> ();

dictionary1.add(1,"car", "for driving");
dictionary2.add('round obj',"ball", "for soccer");


console.log(dictionary1.getValue(1));
console.log(dictionary2.getValue('round obj'));
console.log(dictionary2.getValue('ololo'));