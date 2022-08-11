/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap = capacity;
    this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)) {
        let val = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, val);
        return val;
    }

    return -1;

};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)) {
        this.map.delete(key);
    }

    this.map.set(key, value);

    // 一个一个插入，因此只需要删除一个
    if(this.map.size > this.cap) {
        let iterator = this.map.keys();
        this.map.delete(iterator.next().value);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

