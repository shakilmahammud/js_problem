


 function removeDublicats(head) {
    let crt = head;
    while (crt){
        if(crt.next!==null && crt.val == crt.next.val){
            crt.next = crt.next.next;
        }else{
            crt = crt.next;
        }
    }
    return head;
};
1>2>3>4