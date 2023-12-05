void parseFileAndUpdateList(struct Node **head)
{
    // ... (rest of the code)

    if (saveContent)
    {
        // ... (rest of the code)

        // Create a new Node
        nodenew = (struct Node *)malloc(sizeof(struct Node));
        if (nodenew != NULL)
        {
            // Update the node with dynamically allocated strings
            nodenew->sectionname = (char *)malloc(contentLength + 1);
            strncpy(nodenew->sectionname, definedConnection, contentLength);
            nodenew->sectionname[contentLength] = '\0';

            nodenew->status = (char *)malloc(sizeof(char));
            strncpy(nodenew->status, isConnected, sizeof(char));

            // Add the node to the list
            nodenew->next = *head;
            *head = nodenew;

            printf("Added to list: Name: %s, Status: %s\n", nodenew->sectionname, nodenew->status);
        }
        else
        {
            printf("Memory allocation error for Node.\n");
        }

        // ... (rest of the code)
    }

    // ... (rest of the code)
}
