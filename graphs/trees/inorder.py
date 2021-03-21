class Solution(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        return self.traversalHelp(root, [])
        
    def traversalHelp(self, root, output):
        
        if root is None:
            return;
        
        self.traversalHelp(root.left, output)
        output.append(root.val)
        self.traversalHelp(root.right, output)
        return output



class Solution2(object):
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        stack  = []
        output = []
        curr = root 
        while stack or curr:
            while  curr is not None :
                stack.append(curr)
                curr = curr.left  
                
            curr = stack.pop()
            output.append(curr.val)
            curr = curr.right 
            
        return output