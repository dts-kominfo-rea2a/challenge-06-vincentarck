// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (callBack) => {
  let list = [];
  fs.readFile(file1, (err, data) => {
    if (err) return callBack(err, null);

    const splitData = JSON.parse(data).message.split(" ");
    return (!splitData)
      ? callBack("Tidak menemukan data dari file " + file1, null)
      : ((splitData.length < 2)
        ? callBack(
          "Data dari object message dari file " + file1 + " kurang dari dua kata",
          null
        ) : list.push(splitData[1]));
  });

  fs.readFile(file2, (err, data) => {
    if (err) return callBack(err, null);

    const splitData = JSON.parse(data)[0].message.split(" ");
    return (!splitData)
      ? callBack("Tidak menemukan data dari file " + file2, null)
      : ((splitData.length < 2)
        ? callBack(
          "Data dari object message dari file " + file2 + " kurang dari dua kata",
          null
        ) : list.push(splitData[1]))

  });
  fs.readFile(file3, (err, data) => {
    if (err) return callBack(err, null);

    const splitData = JSON.parse(data)[0].data.message.split(" ");
    if (!splitData) {
      return callBack("Tidak menemukan data dari file " + file3, null);
    } else if (splitData.length < 2) {
      return callBack(
        "Data dari object message dari file " + file3 + " kurang dari dua kata",
        null
      );
    } else {
      list.push(splitData[1]);
    }
    return callBack(null, list);
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};