const{ListNode}=require('../extensions/list-node.js');
exports.Queue=class Queue{getUnderlyingList(){return this.hd}
enqueue(value){var node=new ListNode(value);if(!this.hd){this.hd=node}else{var cr=this.hd;
while(cr){if(!cr.next){cr.next=node;break}cr=cr.next}}}dequeue(){var z=this.hd.value;this.hd=this.hd.next;return z}}
