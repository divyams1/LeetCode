class Solution:
    def eraseOverlapIntervals(self, intervals):
        '''
        :type intervals: list of list of int
        :rtype: int
        '''
        if len(intervals) == 0:
            return 0 
            
        
        def takeEnd(item):
            return item[1]
            
        intervals.sort(key=takeEnd)
        end_of_active = intervals[0][1]
        current_total = 1
        for interval in intervals:
            start = interval[0]
            end = interval[1]
            
            if start >= end_of_active: 
                end_of_active = end 
                current_total += 1 
        
        return len(intervals) - current_total
            