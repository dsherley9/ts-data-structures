import LinkedList from '../../src/linked-list/LinkedList';

describe('addFirst', () => {
    it('should set the item as the first in the list', () => {
        const list = new LinkedList<string>();
        list.addFirst('a');
        expect(list.first?.value).toEqual('a');
    });

    it('should replace the current first item and adjust the list', () => {
        const list = new LinkedList<string>();
        list.addFirst('a');
        list.addFirst('b')
        expect(list.first?.value).toEqual('b');
        expect(list.first?.next?.value).toEqual('a');
    });
});