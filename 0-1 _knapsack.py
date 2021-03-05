class Solution:
    def knapsack(self, values, weights, maxWeightConstraint):
        '''
        :type values: list of int
        :type weights: list of int
        :type maxWeightConstraint: int
        :rtype: int
        '''
        cache = [ [0]*(maxWeightConstraint+1)] * (len(values)+1)
        return self.knapsack_find(values, weights, maxWeightConstraint, len(values), cache)
        
    def knapsack_find(self, values, weights, constraint, total_items, cache):
        if total_items == 0 or constraint == 0:
            return 0 
        
        if cache[total_items][constraint] != 0:
            return cache[total_items][constraint]
        
        current_item = total_items - 1
        if weights[current_item] > constraint:
            cache[total_items][constraint] =  self.knapsack_find(values, weights, constraint, total_items-1, cache)
            return cache[total_items][constraint]
        
        with_item = values[current_item] + self.knapsack_find(values, weights, constraint-weights[current_item], total_items-1, cache)
        without_item = self.knapsack_find(values, weights, constraint, total_items-1, cache)
        cache[total_items][constraint] = max(with_item, without_item)
        
        return cache[total_items][constraint]