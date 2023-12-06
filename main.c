// Function to parse the file and update the list
int parseFileAndUpdateList()
{
    FILE *file = fopen("zombie.ini", "r");
    if (file == NULL)
    {
        printf("Error opening file.\n");
        return 1;
    }

    char line[256];
    int saveContent = 0; // Flag to control saving content to the list
	ConnectionsNode *newNode;


    while (fgets(line, sizeof(line), file))
    {
        printf("Processing line: %s", line);

        if (line[0] == '[')
        {
            char *startBracket = strchr(line, '[');
            char *endBracket = strchr(line, ']');

            if (startBracket != NULL && endBracket != NULL && startBracket < endBracket)
            {
                char *contentStart = startBracket + 1;
                *endBracket = '\0';

                if (strcmp(contentStart, "gencards") == 0)
                {
                    saveContent = 1;
                    printf("Start saving content to the list.\n");
                    continue;
                }

                if (saveContent)
                {
                    // Extract unknown length text
                    size_t contentLength = endBracket - (startBracket + 1);
                    char *definedConnection = (char *)malloc((contentLength + 1) * sizeof(char));
                    strncpy(definedConnection, startBracket + strlen("["), contentLength);
                    definedConnection[contentLength] = '\0';

                    // Check if content is connected from a function
                    char *isConnected = checkIfConnected();

                    // Create a new Node
					if ((newNode = (ConnectionsNode*) malloc(sizeof(ConnectionsNode))) == NULL )
					{
						WriteTrace(1,"\nOut of memory");
						printf("Memory allocation error for Node.\n");
						return 1;
					}
						newNode->next=NULL;
                        // Update the node with dynamically allocated strings
						memcpy(&(newNode->sectionName), definedConnection, sizeof(char)*(contentLength + 1));
						memcpy(&(newNode->status), isConnected, sizeof(char));


                        // Add the node to the list
                        if (PendingList.head == NULL && PendingList.last == NULL)
						{
							PendingList.head=newNode;
							PendingList.last=newNode;
							PendingList.sizeOfList=1;
						}
						else
						{
							PendingList.last->next=newNode;
							PendingList.last=newNode;
							PendingList.sizeOfList++;
						}

                        printf("Added to list: Name: %s, Status: %s\n", newNode->sectionName, newNode->status);

                }
            }
        }
    }

    fclose(file);
	return 0;
}

To print the data from nodes in a linked list, you can traverse the list and print the content of each node. Here's an example function that you can use:

```c
void printLinkedList(const ConnectionsLinkedList *list) {
    if (list == NULL || list->head == NULL) {
        printf("List is empty.\n");
        return;
    }

    ConnectionsNode *current = list->head;

    while (current != NULL) {
        printf("Name: %s, Status: %s\n", current->sectionName, current->status);
        current = current->next;
    }
}
```

Assuming your `ConnectionsLinkedList` structure looks like the one in your previous code, you can use this function after populating the list with nodes. For example, call it after calling `parseFileAndUpdateList()`:

```c
// Assuming PendingList is a global variable or declared in the same scope
printLinkedList(&PendingList);
```

This function will iterate through the linked list and print the `sectionName` and `status` of each node. Make sure to adapt it based on the actual structure of your linked list and node.



To free the memory of nodes in a linked list and the list itself, you need to traverse the list and deallocate the memory allocated for each node. Additionally, you may also need to free any dynamically allocated memory within each node. Here's an example function to free the memory:

```c
void freeLinkedList(ConnectionsLinkedList *list) {
    if (list == NULL || list->head == NULL) {
        return; // Nothing to free
    }

    ConnectionsNode *current = list->head;
    ConnectionsNode *next;

    while (current != NULL) {
        next = current->next;

        // Free any dynamically allocated content within the node
        free(current->sectionName); // Assuming sectionName is dynamically allocated
        // Free any other dynamically allocated content if present

        // Free the node itself
        free(current);

        current = next;
    }

    // Set list to an empty state
    list->head = NULL;
    list->last = NULL;
    list->sizeOfList = 0;
}
```

You can call this function when you are done with the linked list and want to release the allocated memory. For example:

```c
freeLinkedList(&PendingList);
```

Make sure to adjust the code based on the actual structure of your nodes and the data they contain. If there are additional dynamically allocated fields within the nodes, you need to free those as well.