class ReverseString {
    // static reverse3(s: string) {
    //     let chars = s.split('');
    //     let i = 0;
    //     let j = chars.length - 1;
    //     while (i < j) {
    //         [chars[i], chars[j]] = [chars[j], chars[i]];
    //         i++;
    //         j--;
    //     }
    //     return chars.join('');
    // }

    // static reverse2(s: string[], acc: string[]): string[] {
    //     switch (s.length === 0) {
    //         case true:
    //             return acc;
    //         case false:
    //             return this.reverse2(s.slice(1, s.length), acc + [s[0]]); 
    //     }
    // }

    static reverseArray = <T>(lst: Array<T>, acc: Array<T>): Array<T> => {
        switch (lst.length === 0) {
            case true:
                return acc;
            case false:
                // we want the last element, not the first
                let [head, ...tail] = lst;
                console.log(`h: ${head}, t: ${tail}`);
                acc.push(head);
                console.log('acc', acc);
                return ReverseString.reverseArray(tail, acc);
        }
    }

    static reverse(s: string): string {
        return this.reverseArray(s.split(''), []).join('');
    }
}

export default ReverseString
