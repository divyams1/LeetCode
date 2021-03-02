
import sys 
class Solution:
    def leastCoins(self, coins, amount):
        '''
        :type coins: list of int
        :type amount: int
        :rtype: int
        '''
        if amount < 1: 
            return 0 
        
        return self.coin_change(coins, amount, [0]*(amount+1))
        
    def coin_change(self, coins, remainder, cache):
        if remainder < 0: 
            return -1  
        if remainder == 0: 
            return 0 
        
        if cache[remainder] != 0:
            return cache[remainder]
        system_max = sys.maxsize 
        minimum = system_max 
        
        for coin in coins: 
            change_result = self.coin_change(coins, remainder-coin, cache)
            
            if change_result >= 0 and change_result < minimum: 
                minimum= 1+ change_result 
            
        cache[remainder] = -1 if(minimum == system_max) else minimum  
        
        return cache[remainder]