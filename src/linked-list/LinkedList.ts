import InvalidOperationError from '../errors/InvalidOperationError';
import LinkedListNode from './LinkedListNode';

class LinkedList<T> implements Iterable<T> {
    constructor(arr?: T[]) {
        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                const item = arr[i];
                
                if (!i) {
                    this.addFirst(item)
                } else {
                    this.addLast(item)
                }
            }
        }

        return this;
    }
    
    public get count() : number {
        let node = this._first;
        let i = 0;

        while (node) {
            i++;
            node = node.next;
        }

        return i;
    }

    private _first?: LinkedListNode<T>;
    public get first(): LinkedListNode<T> | undefined {
        return this._first;
    }
    
    private _last?: LinkedListNode<T>;
    public get last(): LinkedListNode<T> | undefined {
        return this._last;
    }

    [Symbol.iterator](): Iterator<T> {
        throw new Error('Method not implemented.');
    }

    private _existsInAnotherList(node: LinkedListNode<T>): boolean {
        return (
            node?.list instanceof LinkedList
            && node?.list !== this
        );
    }

    private _wrap(item: LinkedListNode<T> | T): LinkedListNode<T> {
        return (item instanceof LinkedListNode)
            ? item : new LinkedListNode(item);
    }

    // addAfter(node: LinkedListNode<T>, item: T): void
    // addAfter(node: LinkedListNode<T>, item: LinkedListNode<T>): void
    // addAfter(node: LinkedListNode<T>, item: LinkedListNode<T> | T): void {
    //     const _newNode = this._wrap(item);

    //     if (this._existsInAnotherList(_newNode)) {
    //         throw new InvalidOperationError('Node belongs to another linked list.');
    //     }

    //     // If there is a next node, move to
    //     // the next node to the new node.
    //     if (node.next instanceof LinkedListNode) {
    //         node.next.previous = _newNode;
    //         _newNode.next = node.next;
    //     }
        
    //     _newNode.previous = node;
    //     node.next = _newNode;
    // }

    // addBefore(node: LinkedListNode<T>, newNode: LinkedListNode<T> | T): void {
    //     return;
    // }

    addFirst(item: LinkedListNode<T> | T): void {
        const _newNode = this._wrap(item)

        if (this._first) {
            this._first.previous = _newNode;
            _newNode.next = this._first;
        }

        this._first = _newNode
    }

    addLast(item: LinkedListNode<T> | T): void {
        const _newNode = this._wrap(item)

        if (this._last) {
            this._last.next = _newNode;
            _newNode.previous = this._last;
        }

        this._last = _newNode;
    }

    // clear(): void {

    // }

    // contains(item: T): boolean {

    // }
    
    // copyTo(array: T[], index: number = array.length): void {
    // }

    // find(item: T): T | null {
    //     return null;
    // }

    // findLast(item: T): T | null {
    //     return null;
    // }

    // remove(item: T): void {

    // }

    // removeFirst(): void {

    // }

    // removeLast(): void {
    //     return;
    // }
}

export default LinkedList;