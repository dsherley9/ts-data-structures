import ArgumentOutOfRangeError from '../../errors/ArgumentOutOfRangeError';
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
        const queue = new Queue<string>(['a', 'b', 'ccc']);
        expect(queue.contains('ccc')).toEqual(true);
    });

    it('should return false if the item is NOT in the queue', () => {
        const queue = new Queue<string>(['a', 'b', 'ccc']);
        expect(queue.contains('d')).toEqual(false);
    });
});

describe('copyTo', () => {
    it('should throw an ArgumentOutOfRangeError if the given index is less than 0', () => {
        const myArr: string[] = [];
        const queue = new Queue<string>(['a', 'b', 'ccc']); 
        
        expect(
            () => queue.copyTo(myArr, -1)
        ).toThrow(ArgumentOutOfRangeError)
    });
});