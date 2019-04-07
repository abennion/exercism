enum ShiftType {
    Encode = 1,
    Decode = -1
}

class SimpleCipher {
    protected _key: string;

    constructor(key: string = SimpleCipher.generateKey()) {
        this.key = key;
    }

    static * randomChar() {
        while (true) {
            yield String.fromCharCode((Math.random() * 26 | 0) + 97);
        }
    }

    static generateKey(size: number = 100): string {
        const iter = SimpleCipher.randomChar();
        let key: string = '';
        while (key.length < size) {
            key += iter.next().value;
        }
        return key;
    }

    get key(): string {
        return this._key;
    }

    set key(key: string) {
        if (/([^a-z]|^$)/.test(key))
            throw new Error('Bad key');
        this._key = key;
    }

    protected shift(msg: string, st: ShiftType): string {
        return msg.replace(/./g, (e, i) => {
            let k = this.key[i % this.key.length];
            let x = st as number;
            let o = e.charCodeAt(0) + (x * (k.charCodeAt(0) - 97));
            switch (st) {
                case ShiftType.Encode:
                    if (o > 122)
                        o -= 26;
                    break;
                default:
                    if (o < 97)
                        o += 26;
                    break;
            }
            return String.fromCharCode(o);
        });
    }

    encode = (msg: string) => this.shift(msg, ShiftType.Encode);

    decode = (msg: string) => this.shift(msg, ShiftType.Decode);
}

export default SimpleCipher
