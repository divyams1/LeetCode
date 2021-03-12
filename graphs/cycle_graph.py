class GraphVertex:

    def __init__(self, val, color, adjs):
        self.val = val 
        self.color = color 
        self.adjs = adjs 
class Solution: 

    def isCyclic(self, graph):
        for vertex in graph:
            if (vertex.color == "WHITE" and self.hasCycleFromVertex(vertex) == True):
                return True 
        
        return False 

    def hasCycleFromVertex(self, vertex):
        if vertex.color == "GRAY":
            return True 
        vertex.color = "GRAY"
        for adj in vertex.adjs: 
            if adj.color != "BLACK": 
                if self.hasCycleFromVertex(adj):
                    return True 
        
        vertex.color = "BLACK"
        return False 


