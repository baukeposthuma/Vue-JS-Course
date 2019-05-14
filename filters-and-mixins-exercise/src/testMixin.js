export const testMixin = {
    data() {
        return {
            testString: 'Hallo daar'
        }
    },
    computed: {
        reverseStringComputed() {
            return this.testString.split("").reverse().join("")
        },
        wordCountComputed() {
            return `${this.testString}, ${this.testString.length}`;
        }
    }
}
