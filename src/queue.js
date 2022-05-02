const{ListNode}=require('../extensions/list-node.js');
exports.Queue=class Queue{getUnderlyingList(){return this.hd}
enqueue(value){var y=new ListNode(value);if(!this.hd){this.hd=y}else{var cr=this.hd;
while(cr){if(!cr.next){cr.next=y;break}cr=cr.next}}}dequeue(){var z=this.hd.value;this.hd=this.hd.next;return z}}
