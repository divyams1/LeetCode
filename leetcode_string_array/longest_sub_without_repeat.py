class Solution:
    def longest_string(self,s):
        last_seen ={} 
        start_index = 0

        max_len = 0 

        for i in range(0, len(s)):
            if s[i] in last_seen: 
                start_index = max( i, last_seen[ s[i]] +1 )
            max_len = max( i-start_index + 1, max_len)
            last_seen[ s[i] ] = i 
        return max_len 