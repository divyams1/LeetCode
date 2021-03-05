class Solution:
    def levenshteinDistance(self, s1, s2):
        '''
        :type s1: str
        :type s2: str
        :rtype: int
        '''
        cache = [ [-1]*len(s2)] * len(s1)
        return self.top_down(s1, len(s1)-1, s2, len(s2)-1, cache)
        
    def top_down(self, s1, index_1, s2, index_2, cache):
        if index_1 < 0:
            return index_2 + 1 
        if index_2 < 0:
            return index_1 + 1 
        if cache[index_1][index_2] != -1:
            return cache[index_1][index_2]
        if  s1[index_1] == s2[index_2]:
            cache[index_1][index_2] = self.top_down(s1, index_1 - 1, s2, index_2 -1, cache)
        else:
            delete = self.top_down(s1, index_1 -1, s2, index_2, cache)
            insert = self.top_down(s1, index_1, s2, index_2 - 1, cache)
            sub = self.top_down(s1, index_1-1, s2, index_2 - 1, cache)
            
            cache[index_1][index_2] = 1 + min(delete, min(insert, sub))
        
        return cache[index_1][index_2]