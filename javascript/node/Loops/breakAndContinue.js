console.log(
  "--------------------------------Break--------------------------------",
);
for (let i = 1; i <= 10; i++) {
  if (i == 5) break;
  console.log(i);
}
// when break is encountered the loop is exited from that line of code

console.log(
  "--------------------------------Continue--------------------------------",
);

for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

// when continue is encountered, the current iteration is
// halted from that line of code, continues the next iteration
