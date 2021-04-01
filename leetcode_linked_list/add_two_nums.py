class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        if l1 is None:
            return l2 
        if l2 is None:
            return l1 
        
        dummy = ListNode(-1)
        new_head = dummy
        carry = 0 
        
        while l1 is not None or l2 is not None:
            value = 0
            if l1: 
                value += l1.val 
            if l2: 
                value += l2.val 
            if l1:
                l1 = l1.next 
            if l2:
                l2 = l2.next
            new_val = value%10 
            new_head.next = ListNode( (new_val+ carry)%10 )
            carry = (value + carry)//10 
            
            new_head = new_head.next 
        
        if carry > 0:
            new_head.next = ListNode(carry)
        
        return dummy.next
            