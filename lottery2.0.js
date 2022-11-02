

async function lottery() {
  console.log("Вы начали игру");
  let promise = await new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
    }, 1);
  });
  return promise;

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}
//переписать на трай кетч и кастопных ошибках
lottery()
  .then(() => console.log("Вы выиграли"))
  .then(() => console.log("Вам заплатили"))
  .catch(() => console.log("Вы проиграли"))
  .finally(() => console.log("Игра закончена"));
