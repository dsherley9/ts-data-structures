abstract class BaseIterator<T> implements Iterator<T> {
    constructor(_values: Array<T>) {
        this.index = 0;
        this.values = _values;
    }
    
    protected index: number;
    protected values: Array<T>;

    next(): IteratorResult<T> {
        return {
            done: (this.index < this.values.length),
            value: this.values[this.index]
        };
    }
}

export default BaseIterator;