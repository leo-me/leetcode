/*
 * @lc app=leetcode.cn id=433 lang=javascript
 * @lcpr version=30100
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const bankSet = new Set(bank);

    if (!bankSet.has(endGene)) return -1;

    const genes = ['A', 'C', 'G', 'T'];
    const queue = [[startGene, 0]];

    while (queue.length) {
        const [gene, step] = queue.shift();

        if (gene === endGene) return step;

        for (let i = 0; i < gene.length; i++) {
            for (const g of genes) {
                const newGene = gene.slice(0, i) + g + gene.slice(i + 1);

                if (bankSet.has(newGene)) {
                    queue.push([newGene, step + 1]);
                    bankSet.delete(newGene);
                }
            }
        }
    }

    return -1;
    
};
// @lc code=end



/*
// @lcpr case=start
// "AACCGGTT"\n"AACCGGTA"\n["AACCGGTA"]\n
// @lcpr case=end

// @lcpr case=start
// "AACCGGTT"\n"AAACGGTA"\n["AACCGGTA","AACCGCTA","AAACGGTA"]\n
// @lcpr case=end

// @lcpr case=start
// "AAAAACCC"\n"AACCCCCC"\n["AAAACCCC","AAACCCCC","AACCCCCC"]\n
// @lcpr case=end

 */

