class Solution(object):
    def preorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        if root is None: 
            return [] 
    
        stack = [root]
        output = []
        
        while stack: 
            root = stack.pop()
            if root is not None:
                output.append(root.val)
                if root.right is not None:
                    stack.append(root.right)
                if root.left is not None:
                    stack.append(root.left)
        return output



class SolutionRecrusive(object):
    def preorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        return self.preOrderHelper(root, [])
        
    def preOrderHelper(self,root,output):
        if root is None:
            return []
        
        output.append(root.val)
        self.preOrderHelper(root.left, output)
        self.preOrderHelper(root.right, output)
        return output
        