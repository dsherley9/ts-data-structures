import { TryResult } from "../core/TryResult";

export interface IQueue<T> extends IterableIterator<T> {

    // Properties -------------------------------------------------------------------------------

    /**
     * 	Gets the number of elements contained in the Queue<T>.
     */
    get count(): number;


    // Methods ----------------------------------------------------------------------------------

    /**
     * Removes all objects from the Queue<T>.
     */
    clear(): void;

    /**
     * Determines whether an element is in the Queue<T>.
     * @param item 
     */
    contains(item: T): boolean;

    /**
     * Copies the Queue<T> elements to an existing one-dimensional Array, starting at the specified array index.
     * @param array 
     * @param index 
     */
    copyTo(array: T[], index: number): void;

    /**
     * Removes and returns the object at the beginning of the Queue<T>.
     */
    dequeue(): T;

    /**
     * Adds an object to the end of the Queue<T>.
     * @param item 
     */
    enqueue(item: T): void;

    /**
     * A shallow copy of the current Object.
     */
    clone(): IQueue<T>

    /**
     * The object at the beginning of the Queue<T>.
     */
    peek(): T;

    /**
     * Copies the Queue<T> elements to a new array.
     */
    toArray(): T[]
    
    /**
     * Returns a value that indicates whether there is an object at the beginning of the Queue<T>. The object is not removed from the Queue<T>.
     */
    tryPeek(): TryResult<T>;

    /**
     * Removes the object at the beginning of the Queue<T>
     */
    tryDequeue(): TryResult<T>;
}