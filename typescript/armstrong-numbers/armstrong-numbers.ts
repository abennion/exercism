class ArmstrongNumbers {
    static isArmstrongNumber(x: number) {
        return x === x 
            .toString()
            .split('')
            .reduce(
                (acc, s, _, arr) => acc + Math.pow(Number(s), arr.length)
                , 0
            )
    }
}

export default ArmstrongNumbers;