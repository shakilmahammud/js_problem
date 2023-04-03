



// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

//example
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

function revmoveL(head, val) {
 if(!head){
    return null;
 }

 while(head && head.val = val){
    head = head.next;
 }
 let curHead = head;
 while(curHead && curHead.next){
    if(curHead.next.val== val){
        curHead.next = curHead.next.next;
    }else{
        curHead = curHead.next ;
    }
 }
 return head;
}