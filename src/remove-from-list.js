exports.removeKFromList=(l,k)=>{if(l.value==k){l=l.next}el=l;while(el.next){el.next.value==k?el.next=el.next.next:el=el.next}return l}
