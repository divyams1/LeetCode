class Solution:
    def canVisitAllRooms(self, rooms):
        '''
        :type rooms: list of list of int
        :rtype: bool
        '''
        
        seen = [False] * len(rooms)
        seen[0] = True 
        
        stack = [0]
        
        while stack: 
            node = stack.pop()
            for key in rooms[node]:
                if not seen[key]:
                    seen[key] = True 
                    stack.append(key)
        
        return all(seen)