const logins = [
  { timestamp: "2025-11-12T08:30:00Z", student: 1 },
  { timestamp: "2025-11-12T09:15:00Z", student: 2 },
  { timestamp: "2025-11-12T09:45:00Z", student: 3 },
  { timestamp: "2025-11-12T10:10:00Z", student: 1 },
  { timestamp: "2025-11-12T10:40:00Z", student: 5 },
  { timestamp: "2025-11-12T11:00:00Z", student: 4 },
];

const interval = 30 * 60 * 1000; // 30 মিনিট

const getUser = (timestamp) => {
  const date = new Date(timestamp);
  // প্রতিটি সময়কে interval অনুযায়ী নিচের নিকটতম সময় slot-এ নামিয়ে আনা হচ্ছে
  const floorDate = Math.floor(date.getTime() / interval) * interval;
  console.log("FloorDate:", new Date(floorDate).toISOString());
  return new Date(floorDate).toISOString();
};

const mainUser = logins.reduce((acc, curr) => {
  const bin = getUser(curr.timestamp);
  if (!acc[bin]) {
    acc[bin] = { total: 0 };
  }
  acc[bin].total += 1;
  return acc;
}, {});

console.log(mainUser);
