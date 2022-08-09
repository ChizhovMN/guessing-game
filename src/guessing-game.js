class GuessingGame {
    constructor() {
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    guess() {
        return this.middle = Math.round((this.min + this.max) / 2);
        // if (number == this.middle) return this.middle;
        // while (number != this.middle) {
        //     this.middle = Math.round((this.min + this.max) / 2);
        //     if (number < this.middle) {
        //         this.max = this.middle - 1;
        //         this.lower();
        //     } else if (number > this.middle) {
        //         this.min = this.middle + 1;
        //         this.greater();
        //     }
        // else {
        //     console.log('find',this.middle);
        //     return this.middle
        // }
        // }
        // console.log('find',this.middle);
        // return this.middle
    }
    lower() {
        // this.middle = Math.floor((this.max + this.min) / 2);
        // console.log('lower',this.middle);
        this.max = this.middle;
    }
    greater() {
        // this.middle = Math.floor((this.min + this.max) / 2);
        // console.log('greater',this.middle);
        this.min = this.middle;
    }
}

module.exports = GuessingGame;
