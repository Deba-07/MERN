// for loop

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (i = 1; i <= 5; i++) {
  console.log(`Outer loop value: ${i}`);
  for (j = 10; j <= 12; j++) {
    console.log(`Inner loop value: ${j} and Outer loop value: ${i}`);
  }
}

const arr = ["A", "B", "C", "D", "E"];

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// break and continue

for (i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(`value of i: ${i}`);
}
for (i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`value of i: ${i}`);
}
