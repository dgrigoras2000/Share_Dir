// Function to print the list
void printLinkedList() {

    if (PendingList.head == NULL) {
        WriteTrace(1,"List is empty.\n");
        return;
    }

    ConnectionsNode *current = PendingList.head;

    while (current != NULL) {
		WriteTrace(1, "Name: %s, Status: %s\n", current->sectionName, current->status);

        current = current->next;
    }
}
