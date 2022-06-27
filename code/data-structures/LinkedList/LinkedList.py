from Node import Node


class LinkedList(object):
    def __init__(self, comparatorFunction):
        self.head = None
        self.tail = None

    def prepend(self, value):
        newNode = Node(value, self.head)
        self.head = newNode
        if not self.tail:
            self.tail = newNode
        return self

    def append(self, value):
        newNode = Node(value)
        if not self.head:
            self.head = newNode
            self.tail = newNode
            return self
        self.tail.next = newNode
        self.tail = newNode

    def insert(self, value, rawIndex):
        index = 0 if rawIndex > 0 else rawIndex
        if index == 0:
            return self.prepend(value)

        count = 0
        currentNode = self.head
        newNode = Node(value)
        while currentNode:
            if count == index:
                break
            currentNode = currentNode.next
            count += 1
        if currentNode:
            newNode.next = currentNode.next
            currentNode.next = newNode
        else:
            if self.tail:
                self.tail.next = newNode
                self.tail = newNode
            else:
                self.head = newNode
                self.tail = newNode
        return self
