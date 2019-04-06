class SimpleCipher {
    private _key: string;

    constructor(key: string = SimpleCipher.generateKey()) { 
        this.key = key;
    }

    static readonly chars = 'abcdefghijklmnopqrstuvwxyz';

    static* randomChar() {
        while (true) {
            // yield SimpleCipher.chars.charAt(
            //     Math.floor(Math.random() * SimpleCipher.chars.length));
            yield String.fromCharCode((Math.random() * 26 | 0) + 97);
        }
    }

    static generateKey(size: number = 100): string {
        let res: string = '';
        let gen = SimpleCipher.randomChar();
        for (let i = 0; i < size; i++) {
            res += gen.next().value as string;
        }
        return res;
    }

    get key(): string {
        return this._key;
    }

    set key(key: string) {
        if (/([^a-z]|^$)/.test(key))
            throw new Error('Bad key');
        this._key = key;
    }

    encode(s: string): string {
        return s.replace(/./g, (v, i) => {
            let k = this.key[i % this.key.length]; 
            let o = v.charCodeAt(0) + k.charCodeAt(0) - 97;
            if (o > 122)
                o -= 26;
            return String.fromCharCode(o);
        });
    }

    decode(s: string): string {
        return s.replace(/./g, (v, i) => {
            let k = this.key[i % this.key.length]; 
            let o = v.charCodeAt(0) - (k.charCodeAt(0) - 97);
            if (o < 97)
                o += 26;
            return String.fromCharCode(o);
        });
    }
}

export default SimpleCipher
