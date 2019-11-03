function removeKthNodeFromEnd(head, k) {

  let left = head;
  let right = head
  for (let i = 0; i < k; i++) {
    right = right.next
  }

  // means we're removing the head
  if (right === null) {
    head.value = head.next.value
    head.next = head.next.next
    return
  }
  while (right.next) {
    right = right.next
    left = left.next
  }

  const removed = left.next
  left.next = removed.next
  removed.next = null
  return removed.value
}

// Do not edit the line below.
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
