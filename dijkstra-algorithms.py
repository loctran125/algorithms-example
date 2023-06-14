import sys

# Hàm Dijkstra
def dijkstra(graph, start):
    distances = {node: sys.maxsize for node in graph}
    distances[start] = 0
    visited = set()
    previous = {}

    while len(visited) < len(graph):
        current_node = min(
            [(node, distance) for node, distance in distances.items() if node not in visited],
            key=lambda x: x[1]
        )[0]

        visited.add(current_node)

        for neighbor, weight in graph[current_node].items():
            new_distance = distances[current_node] + weight
            if new_distance < distances[neighbor]:
                distances[neighbor] = new_distance
                previous[neighbor] = current_node

    return distances, previous

# Đồ thị đầu vào
graph = {
    'A': {'B': 5, 'C': 2},
    'B': {'A': 5, 'C': 1, 'D': 3},
    'C': {'A': 2, 'B': 1, 'D': 6},
    'D': {'B': 3, 'C': 6}
}

# Sử dụng thuật toán Dijkstra để tìm đường đi ngắn nhất từ A đến các đỉnh khác trong đồ thị
distances, previous = dijkstra(graph, 'A')

print(distances)  # Khoảng cách từ đỉnh A đến các đỉnh khác
print(previous)  # Đỉnh trước của mỗi đỉnh trên đường đi ngắn nhất từ A
