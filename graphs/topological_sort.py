class Graph:
    def __init__(self, vertices, adjList):
        self.graph = adjList
        self.V = vertices 

    def addEdge(self, u,v):
        self.graph[u].append(v)

    def topologicalSortHelper(self,v,visited,stack):
        visited[v] =  True 
        for i in self.graph[v]:
            if visited[i] == False:
                self.topologicalSortHelper(i,visited,stack)
            
        stack.append(v)
    
    def topoligcalSort(self):
        visited = [False]*self.V
        stack = [] 

        for i in range(self.V):
            if visited[i] == False:
                self.topologicalSortHelper(i, visited, stack)
        