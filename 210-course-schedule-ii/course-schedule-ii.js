/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
    const inDegree = new Array(numCourses).fill(0);
    
    // Build adjacency list and in-degree array
    for (const [dest, src] of prerequisites) {
        adj[src].push(dest);
        inDegree[dest]++;
    }
    
    // Queue for vertices with no incoming edges
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    const topoOrder = [];
    let head = 0; // Use a pointer to simulate queue shift in O(1)
    
    while (head < queue.length) {
        const node = queue[head++];
        topoOrder.push(node);
        
        for (const neighbor of adj[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    // If topological sort includes all courses, return it; otherwise, a cycle exists
    return topoOrder.length === numCourses ? topoOrder : [];
};