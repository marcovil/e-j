var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  if (box.locked) {
    box.unlock();
    try {
        return body();
    } finally {
        box.lock();
    }
  } else {
    return body();
  }
}

console.log("Before first call");
console.log(box.locked);
withBoxUnlocked(function() {
  box.content.push("gold piece");
});
console.log("After first call");
console.log(box.locked);

console.log("Before second call");
try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true

console.log("Before third call");
box.unlock();
console.log(box.locked);
withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
console.log("After third call");
console.log(box.locked);