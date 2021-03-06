/**
 * 链式数据模型
 */
export default class LinkedList<T> implements Iterable<LinkedList<T>> {
    private _prev: LinkedList<T> | null; // 上一个节点
    private _next: LinkedList<T> | null; // 下一个节点
    
    constructor() {
        this._prev = null;
        this._next = null;
    }

    // 使对象可被迭代
    [Symbol.iterator]() {
        let point: LinkedList<T> = this;
        return {
            next(): IteratorResult<LinkedList<T>> {
                if (point == null) {
                    return {
                        done: true,
                        value: null
                    }
                } else {
                    let curr = point;
                    point = point.next!;
                    return {
                        done: false,
                        value: curr
                    }
                }
            }
        };
    }

    /**
     * 返回前一个节点
     */
    get prev(): LinkedList<T> | null {
        return this._prev;
    }

    /**
     * 返回下一个节点
     */
    protected get next(): LinkedList<T> | null {
        return this._next;
    }

    /**
     * 在当前节点后面添加指定的数据
     *
     * @param node 待添加的数据
     */
    append(node: LinkedList<T>) {
        node._prev = this;
        
        // node自身也是一个链表，要找到它的最后一个节点
        let nodeLast: LinkedList<T> | null = node;
        while (nodeLast && nodeLast.next != null) {
            nodeLast = nodeLast.next;
        }
        nodeLast._next = this._next;
        this._next = node;
    }

    trace() {
        let p: LinkedList<T> | null = this;
        while (p != null) {
            console.trace(p);
            p = p._next;
        }
    }
} 
