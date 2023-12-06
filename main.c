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
