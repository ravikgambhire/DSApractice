const topics = {
  "Arrays": [
    ["Array", "What is an array?", "A linear structure storing elements in contiguous memory."],
    ["Traversal", "What is array traversal?", "Visiting each element once."],
    ["Insertion", "What is array insertion?", "Adding an element at a position."],
    ["Deletion", "What is array deletion?", "Removing an element."],
    ["Searching", "What is array searching?", "Finding an element."],
    ["Sorting", "What is array sorting?", "Arranging elements in order."]
  ],

  "Strings": [
    ["String", "What is a string?", "Sequence of characters."],
    ["Palindrome", "What is palindrome check?", "String reads same forward & backward."],
    ["Anagram", "What is anagram?", "Two strings with same character frequency."],
    ["Substring", "What is substring?", "Continuous part of a string."],
    ["Pattern", "What is pattern search?", "Finding occurrences of a pattern."],
    ["Reverse", "What is string reverse?", "Characters reversed order."]
  ],

  "Numbers": [
    ["Prime", "What is a prime number?", "Number divisible only by 1 and itself."],
    ["Fibonacci", "What is Fibonacci?", "Sequence where each number is sum of previous two."],
    ["Factorial", "What is factorial?", "Product of all numbers from 1 to n."],
    ["GCD", "What is GCD?", "Greatest common divisor."],
    ["LCM", "What is LCM?", "Least common multiple."],
    ["Armstrong", "What is Armstrong number?", "Sum of digits^n equals number."]
  ],

  "Stack": [
    ["Stack", "What is stack?", "LIFO data structure."],
    ["Push", "What is push?", "Insert element."],
    ["Pop", "What is pop?", "Remove element."],
    ["Peek", "What is peek?", "View top element."],
    ["Overflow", "What is stack overflow?", "Stack is full."],
    ["Underflow", "What is stack underflow?", "Stack is empty."]
  ],

  "Queue": [
    ["Queue", "What is queue?", "FIFO data structure."],
    ["Enqueue", "What is enqueue?", "Insert element."],
    ["Dequeue", "What is dequeue?", "Remove element."],
    ["Front", "What is front?", "First element."],
    ["Rear", "What is rear?", "Last element."],
    ["Circular Queue", "What is circular queue?", "Queue that wraps around."]
  ],

  "Linked List": [
    ["Linked List", "What is linked list?", "Nodes connected via pointers."],
    ["Node", "What is a node?", "Contains data and next pointer."],
    ["Head", "What is head?", "First node."],
    ["Tail", "What is tail?", "Last node."],
    ["Insertion", "What is LL insertion?", "Add node at position."],
    ["Deletion", "What is LL deletion?", "Remove node."]
  ]
};

// Populate navbar
const topicList = document.getElementById("topic-list");
Object.keys(topics).forEach(topic => {
  const li = document.createElement("li");
  li.textContent = topic;
  li.onclick = () => loadTopic(topic);
  topicList.appendChild(li);
});

// Load topic content
function loadTopic(topic) {
  const content = document.getElementById("content");
  content.innerHTML = `<h2>${topic}</h2><div class="q-container" id="q-box"></div>`;

  const box = document.getElementById("q-box");

  topics[topic].forEach(([label, q, a]) => {
    const btn = document.createElement("button");
    btn.className = "q-btn";
    btn.textContent = label;
    btn.onclick = () => openModal(q, a);
    box.appendChild(btn);
  });

  closeNavbar();
}

// Navbar controls
document.getElementById("open-navbar").onclick = () => {
  document.getElementById("navbar").style.top = "0";
};

document.getElementById("close-btn").onclick = closeNavbar;

function closeNavbar() {
  document.getElementById("navbar").style.top = "-100%";
}

// Modal controls
function openModal(q, a) {
  document.getElementById("modal-question").textContent = q;
  document.getElementById("modal-answer").textContent = a;
  document.getElementById("modal").style.display = "flex";
}

document.getElementById("modal-close").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

window.onclick = (e) => {
  if (e.target.id === "modal") {
    document.getElementById("modal").style.display = "none";
  }
};