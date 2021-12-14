import ArgumentError from '../../errors/ArgumentError';
import ArgumentOutOfRangeError from '../../errors/ArgumentOutOfRangeError';
import InvalidOperationError from '../../errors/InvalidOperationError';
import Queue from '../../queue/Queue';

describe('count', () => {
    it('should return a count of 3', () => {
        const queue = new Queue<string>(['a', 'b', 'c']);
        expect(queue.count).toEqual(3);
    });

    it('should return a count of 4', () => {
        const queue = new Queue<string>(['a', 'b', 'c']);
        queue.enqueue('d');
        expect(queue.count).toEqual(4);
    });
});

describe('clear', () => {
    it('should reset the queue when clear is called', () => {
        const queue = new Queue<string>(['a', 'b']);
        queue.clear();
        expect(queue.count).toEqual(0);
    });
});

describe('contains', () => {
    it('should return true if the item is in the queue', () => {
        const queue = new Queue<string>(['a', 'b', 'c']);
        expect(queue.contains('c')).toEqual(true);
    });

    it('should return false if the item is NOT in the queue', () => {
        const queue = new Queue<string>(['a', 'b', 'c']);
        expect(queue.contains('d')).toEqual(false);
    });
});

describe('copyTo', () => {
    it('should throw an ArgumentOutOfRangeError if the given index is less than 0', () => {
        const myArr: string[] = [];
        const queue = new Queue<string>(['a', 'b', 'c']); 
        
        expect(() => queue.copyTo(myArr, -1)).toThrow(ArgumentOutOfRangeError);
    });

    it('should throw an ArgumentError if the given index is larger than', () => {
        const myArr: string[] = ['d', 'e'];
        const queue = new Queue<string>(['a', 'b', 'c']); 
        
        expect(() => queue.copyTo(myArr, 3)).toThrow(ArgumentError);
    });

    it('should copy all the elements and overwrite the items starting at index 0', () => {
        const myArr: string[] = ['d', 'e', 'f'];
        const queue = new Queue<string>(['a', 'b', 'c']); 
        
        queue.copyTo(myArr, 0);
        expect(myArr).toEqual(['a', 'b', 'c']);
    });

    it('should copy all the elements and overwrite the items starting at index 2', () => {
        const myArr: string[] = ['d', 'e', 'f'];
        const queue = new Queue<string>(['a', 'b', 'c']); 
        
        queue.copyTo(myArr, 2);
        expect(myArr).toEqual(['d', 'e', 'a', 'b', 'c']);
    });

    it('should copy all the elements to the end of the array', () => {
        const myArr: string[] = ['d', 'e', 'f'];
        const queue = new Queue<string>(['a', 'b', 'c']); 
        
        queue.copyTo(myArr);
        expect(myArr).toEqual(['d', 'e', 'f', 'a', 'b', 'c']);
    });
});

describe('dequeue', () => {
    it('should throw an InvalidOperationError if there are no items in the queue', () => {
        const queue = new Queue<string>();
        expect(() => queue.dequeue()).toThrow(InvalidOperationError);        
    });

    it('should return the first item in the queue', () => {
        const queue = new Queue<string>(['a', 'b', 'c']);
        const result = queue.dequeue();

        expect(result).toEqual('a');
        expect(queue.count).toEqual(2);
    });
});