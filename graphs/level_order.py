class Solution:
    
    def levelOrderTraversal(self, root):
        '''
        :type root: TreeNode
        :rtype: list of list of int
        '''
        results = []
        
        if root is None: 
            return results 
        
        queue = []
        queue.append(root)
        
        while len(queue) > 0:
            queueSize = len(queue)
            level = []
            while queueSize > 0: 
                currentNode = queue.pop(0)
                if currentNode.left != None:
                    queue.append( currentNode.left)
                if currentNode.right != None:
                    queue.append( currentNode.right)
                level.append(currentNode.val)
                queueSize -= 1
            results.append(level)
            
        return results