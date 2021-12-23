import { TryResult } from "../core/TryResult";
import ArgumentError from "../errors/ArgumentError";
import ArgumentOutOfRangeError from "../errors/ArgumentOutOfRangeError";
import InvalidOperationError from "../errors/InvalidOperationError";
import QueueIterator from './QueueIterator';

class Queue<T> implements Iterable<T> {
    
    constructor(arr?: T[]) {
        if (arr) {
            this._queue = arr;
        }
    
        return this;
    }
   
    private _queue: T[] = [];

    public get count() : number {
        return this._queue.length;
    }    

    clear(): void {
        this._queue = [];
    }

    contains(item: T): boolean {
        return this._queue.includes(item);
    }

    copyTo(array: T[], index: number = array.length): void {
        if (index < 0) throw new ArgumentOutOfRangeError('The given index cannot be less than 0.');
        if (index > array.length) throw new ArgumentError('The given index cannot be greater than the total number of elements in the array.');

        for (let i = 0; i < this._queue.length; i++) {
            const element = this._queue[i];
            array[index + i] = element;
        }
    }

    dequeue(): T {
        if (!this.count) {
            throw new InvalidOperationError('The queue is empty.');
        }

        return this._queue.shift()!;
    }

    enqueue(item: T): void {
        this._queue.push(item);
    }

    clone(): Queue<T> {
        return new Queue(this.toArray());
    }

    peek(): T {
        if (!this.count) {
            throw new InvalidOperationError('The queue is empty.');
        }

        return this._queue[0];
    }

    toArray(): T[] {
        return [...this._queue];
    }

    tryPeek(): TryResult<T> {
        const value = (this._queue.length)
            ? this._queue[0] 
            : null;

        return { value, result: (value !== null) };
    }

    tryDequeue(): TryResult<T> {
        const value = (this._queue.length)
            ? this._queue.shift()!
            : null;

        return { value, result: (value !== null) };
    }

    [Symbol.iterator](): Iterator<T> {
        return new QueueIterator(this._queue);
    }
}

export default Queue;