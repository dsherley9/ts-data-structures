import Queue from '../../queue/Queue';


describe('clear', () => {
    it('should reset the queue', () => {
        const queue = new Queue<string>();
        queue.enqueue('test');
        queue.clear();
        expect(queue.count).toEqual(0);
    });
});