#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Define a struct for each node in the list
struct Node {
    char *name;
    char *status;
    struct Node *next;
};

char check_connection(){
    return "Y";
}

// Function to parse the file and update the list
void parseFileAndUpdateList(const char *filename, const char *keyword, struct Node **head) {
    FILE *file = fopen(filename, "r");
    if (file == NULL) {
        printf("Error opening file.\n");
        return;
    }

    char line[256];
    while (fgets(line, sizeof(line), file)) {
        char *startBracket = strchr(line, '[');
        char *endBracket = strchr(line, ']');

        while (startBracket != NULL && endBracket != NULL && startBracket < endBracket) {
            char *contentStart = startBracket + 1;
            *endBracket = '\0';

            if (strstr(contentStart, keyword) != NULL) {
                size_t contentLength = strlen(contentStart);
                char *content = (char *)malloc(contentLength + 1);

                if (content != NULL) {
                    strcpy(content, contentStart);

                    // Check if content is connected from a function
                    // For demonstration purposes, assuming it's connected if it contains "()"
                    char isConnected[1] = check_connection();

                    // Create a new Node
                    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
                    if (newNode != NULL) {
                        // Update the node with dynamically allocated strings
                        newNode->name = strdup(content);
                        newNode->status = (char *)malloc(2);
                        snprintf(newNode->status, 2, "%d", isConnected);

                        // Add the node to the list
                        newNode->next = *head;
                        *head = newNode;

                        printf("Added to list: Name: %s, Status: %s\n", newNode->name, newNode->status);
                    } else {
                        printf("Memory allocation error for Node.\n");
                    }

                    free(content);
                } else {
                    printf("Memory allocation error for content.\n");
                }
            }

            startBracket = strchr(endBracket + 1, '[');
            endBracket = strchr(endBracket + 1, ']');
        }
    }

    fclose(file);
}

// Function to print the list
void printList(struct Node *head) {
    struct Node *current = head;
    while (current != NULL) {
        printf("Name: %s, Status: %s\n", current->name, current->status);
        current = current->next;
    }
}

// Function to free the memory allocated for the list
void freeList(struct Node *head) {
    struct Node *current = head;
    while (current != NULL) {
        struct Node *temp = current;
        current = current->next;
        free(temp->name);
        free(temp->status);
        free(temp);
    }
}

int main() {
    const char *filename = "your_file.txt";
    const char *keyword = "gencards";

    struct Node *head = NULL;

    parseFileAndUpdateList(filename, keyword, &head);

    // Print the list
    printf("\nList contents:\n");
    printList(head);

    // Free the memory allocated for the list
    freeList(head);

    return 0;
}
