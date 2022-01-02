class LinkedList<T> implements Iterable<T> {
    constructor(arr?: T[]) {    
        return this;
    }    
    
    public get count() : number {
        return 1;
    }

    public get first(): T {
        return;
    }
    
    public get last(): T {
        return;
    }

    [Symbol.iterator](): Iterator<T> {
        throw new Error('Method not implemented.');
    }
    
}

export default LinkedList;