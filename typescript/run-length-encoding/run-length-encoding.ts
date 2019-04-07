// class RunLengthEncoding {
//     static encode = (s: string) => s.replace(/(.)\1+/g, m => m.length + m[0])
//     static decode = (s: string) => s.replace(/([0-9]+)(.)/g, (_, n, c) => c.repeat(Number(n)))
// }
// export default RunLengthEncoding

class RunLengthEncoding {
    static encode3(s: string): string {
        switch (s.length === 1) {
            case true:
                return s;
            case false:
                return s.length.toString() + s[0];
        }
    }

    static encode2(ss: string[]): string {
        switch (ss.length === 0) {
            case true:
                return "";
            case false:
                let [head, ...tail] = ss;
                return this.encode3(head) + this.encode2(tail);
        } 
    }

    static encode(s: string): string {
        return this.encode2(s.match(/([^0-9])\1*/gu) || []);
    }

    static decode3(s: string): string {
        let x: number = Number(s.match(/[0-9]+/u) || 1);
        let char: string = String(s.match(/[^0-9]+/u) || "");
        return char.repeat(x); 
    }

    static decode2(ss: string[]): string {
        switch (ss.length === 0) {
            case true:
                return "";
            case false:
                let [head, ...tail] = ss;
                return this.decode3(head) + this.decode2(tail);
        }
    }

    static decode(s: string) {
        return this.decode2(s.match(/([0-9]+[^0-9])|./gu) || []);
    }
}

export default RunLengthEncoding;