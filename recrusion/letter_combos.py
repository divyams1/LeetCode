class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
  
        return self.findCombos(digits, "", [])

    def findCombos(self, digits, current_str , combos):
        
        if len(digits) == 0:
            combos.append( current_str)
            return;
    
        combo ={
            "2": "abc",
            "3": 'def',
            '4': "ghi",
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        
        options = combo[ digits[0] ]
        
        for i in options:
            new_str = current_str + i 
            self.findCombos( digits[1:], new_str, combos ) 
        
        return combos
        