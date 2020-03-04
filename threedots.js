const ages = [23, 34, 43, 45, 54];
const ages2 = [12, 13, 34, 54, 36];
const ages3 = [34, 34, 65, 78, 09];
const allAges = ages.concat(ages2).concat([100]).concat(ages3);
// console.log(allAges);

const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);
const mazharul = 500;
const sabbir = 600;
const tareq = 1066;
const result = Math.max(mazharul, sabbir, tareq);
const result2 = Math.min(mazharul, sabbir, tareq);

// console.log(result);
// console.log(result2);
const money = [466, 945, 4938, 23894];
const maximum = Math.max(...money);
console.log(maximum);