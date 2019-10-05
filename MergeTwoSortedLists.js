/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
    var returnList = new ListNode(0);
    var returnHead = returnList
    var l1Walker = l1
    var l2Walker = l2

    if (l1Walker === null) {
        return l2Walker
    }
    if (l2Walker === null) {
        return l1Walker
    }


    while (l1Walker != null || l2Walker != null) {

        var l1Value
        var l2Value

        if (l1Walker === null) {
            l1Value = 1000000
        }
        else {
            l1Value = l1Walker.val
        }
        if (l2Walker === null) {
            l2Value = 1000000
        }
        else {
            l2Value = l2Walker.val
        }


        if (l1Value < l2Value) {
            console.log("appened l1 to returnList")
            var newl1Node = new ListNode(l1Value)
            returnList.next = newl1Node
            returnList = newl1Node
            l1Walker = l1Walker.next
        }
        if (l2Value < l1Value) {
            console.log("appened l2 to returnList")
            var newl2Node = new ListNode(l2Value)
            returnList.next = newl2Node
            returnList = newl2Node
            l2Walker = l2Walker.next
        }
        if (l1Value === l2Value) {
            console.log("appened both!")
            var newl1Node = new ListNode(l1Value)
            returnList.next = newl1Node
            returnList = newl1Node
            var newl2Node = new ListNode(l2Value)
            returnList.next = newl2Node
            returnList = newl2Node
            l1Walker = l1Walker.next
            l2Walker = l2Walker.next
        }

    }
    return returnHead.next


};

// walk through the linked lists 
    //compare first two heads
        // if head of l1 is less than head of l2
        //append lower value to new data structure
            //put higher value on end
        //return new structure