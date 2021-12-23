import ArgumentError           from '../../errors/ArgumentError';
import ArgumentOutOfRangeError from '../../errors/ArgumentOutOfRangeError';
import InvalidOperationError   from '../../errors/InvalidOperationError';
import Queue                   from '../../queue/Queue';

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

describe('enqueue', () => {
    it('should add the item to the queue', () => {
        const queue = new Queue<string>();
        queue.enqueue('test');

        expect(queue.count).toEqual(1);
        expect(queue.contains('test')).toEqual(true);
    });
});

describe('clone', () => {
    it('should return a new instance of Queue with the same queued items', () => {
        const queue = new Queue<string>(['a', 'b', 'c']);
        const clone = queue.clone();

        expect(clone).not.toBe(queue);
    });
});

describe('peek', () => {
    it('should throw if there are no queued items', () => {
        const queue = new Queue<string>();
        expect(() => queue.peek()).toThrow(InvalidOperationError);        
    });

    it('should return the first queued item', () => {
        const queue = new Queue<string>(['a', 'b', 'c']);
        const result = queue.peek();

        expect(result).toEqual('a');
    });
});

describe('toArray', () => {
    it('should return an array of the queued items', () => {
        const items = ['a', 'b', 'c'];
        const queue = new Queue<string>(items); 
        queue.enqueue('d');

        const array = queue.toArray();
        expect(array).toEqual(['a', 'b', 'c', 'd']);
        expect(array).not.toBe(items);
    });
});

describe('tryPeek', () => {
    it('should return null and false when there is no head element', () => {
        const queue = new Queue<string>();
        expect(queue.tryPeek()).toEqual({
            value: null,
            result: false
        }) ;
    });

    it('should return the first element and true when there is a head element', () => {
        const queue = new Queue<string>(['b', 'c', 'a']);
        expect(queue.tryPeek()).toEqual({
            value: 'b',
            result: true
        });
    });

    it('should not remove any of the elements', () => {
        const queue = new Queue<string>(['c', 'b', 'a']);
        queue.tryPeek();
        expect(queue.count).toEqual(3);
    });
});

describe('tryDequeue', () => {
    it('should return null and false when there is no head element', () => {
        const queue = new Queue<string>();
        expect(queue.tryDequeue()).toEqual({
            value: null,
            result: false
        });
    });

    it('should return the first element and true when there is a head element', () => {
        const queue = new Queue<string>(['c', 'b', 'a']);
        expect(queue.tryDequeue()).toEqual({
            value: 'c',
            result: true
        });
    });

    it('should remove the first element', () => {
        const queue = new Queue<string>(['c', 'b', 'a']);
        queue.tryDequeue();
        expect(queue.count).toEqual(2);
    });
});

describe('iterator', () => {
    it('should be iterable', () => {
        const queue = new Queue<string>();
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');
        
        expect([...queue]).toEqual(['a', 'b', 'c']);
    });
});