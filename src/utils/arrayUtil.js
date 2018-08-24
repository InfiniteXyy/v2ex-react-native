const groupBy = list => {
  let ans = [];
  for (let i of list) {
    let flag = false;
    for (let j of ans) {
      if (j.title === i.title[0]) {
        j.data.push(i);
        flag = true;
        break;
      }
    }
    if (!flag) {
      ans.push({ title: i.title[0], data: [i] });
    }
  }
  return ans;
};

export { groupBy };
