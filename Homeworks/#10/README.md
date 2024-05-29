# Documentation and analysis

## Custom Hash Function
The ```customHashFunction``` takes a string as input and generates a numerical hash value. This value is used to determine the index in a hash table where the string will be stored.

***Function Explanation***:

* **Input**: A string.

* **Output**: A positive integer hash value.

***Steps***:

1. Define prime number prime1 used for hashing.

2. Initialize the hash variable to 0.
Iterate over each character in the string:

3. Multiply the current hash value by prime1 and add the character's Unicode value.

4. Use a bitwise AND operation to limit the size of the hash.

5. Mix the hash value by shifting bits and applying a different prime multiplier.

6. Return the absolute value of the hash to ensure it is a positive integer.

## Hash Table Class
The ```HashTable``` class uses the custom hash function to manage data in a hash table with separate chaining to handle collisions.

Properties:

* **size**: The size of the hash table (number of buckets).
* **buckets**: An array of linked lists, where each list handles collisions for a particular index.

Methods:

1. **Insert** *****O(n)*****: Adds a key-value pair to the hash table.
Uses the custom hash function to determine the index.
Inserts the key-value pair into the appropriate linked list.
2. **Get** ***O(n)***: Fetches the value associated with a given key.
Uses the custom hash function to determine the index.
Searches the appropriate linked list for the key and returns the value.
3. **Delete** ***O(n)***: Deletes a key-value pair from the hash table.
Uses the custom hash function to determine the index.
Removes the key-value pair from the appropriate linked list.

## Linked List Class
The ```LinkedList``` class is used within the HashTable class to handle collisions through separate chaining.

Properties:

* **head**: The head node of the linked list.
* **length**: The number of nodes in the linked list.

Methods:

* **Insert** **O(n)**: Adds a new node to the end of the linked list.
* **Remove** **O(n)**: Deletes a node with a specific value from the linked list.
* **Search** **O(n)**: Finds a node with a specific value in the linked list.
* **Size**: Returns the current length of the linked list.