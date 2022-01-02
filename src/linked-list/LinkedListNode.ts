import LinkedList from './LinkedList';

class LinkedListNode<T> {
    constructor(value: T) {
        this.value = value;
        return this;
    }

    public value: T;
    public list: LinkedList<T>;
    public next: T;
    public previous: T;
};

export default LinkedListNode;