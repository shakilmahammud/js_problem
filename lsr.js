



// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]  
// Output: [5,4,3,2,1]

function rev_linkedList(){
    let prev = null;
    let cur = head;
    while (cur !== null){
        const nxt = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nxt;
    }
    return prev;
}

