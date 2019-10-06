/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    var currentNode = head;
    while (currentNode != null) {
        var nextNode = currentNode.next
        var duplicateFlag = false;
        console.log(currentNode.val);
        if (nextNode != null) {
            if (currentNode.val == nextNode.val) {
                console.log("This is a duplicate!")
                duplicateFlag = true;
                currentNode.next = nextNode.next
            }
        }
        if (duplicateFlag == false) {
            currentNode = currentNode.next
        }
    }
    return head
};


// set current node to head 
// traverse linked list
//  if current node val is equal to current node.next val
    // set next node pointer to current node.next val
    // if no next pointer assign pointer of current to null
    // else assign pointer of current node to pointer next node 
// return head
