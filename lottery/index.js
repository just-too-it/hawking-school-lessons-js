/** Переписать пример лотереи на async/await.  
function lottery() {
    console.log("Вы начали игру");
    let promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
      }, 1000);
    });
    return promise;
  }
  
  lottery()
    .then(() => console.log("Вы выиграли"))
    .then(() => console.log("Вам заплатили"))
    .catch(() => console.log("Вы проиграли"))
    .finally(() => console.log("Игра закончена"));
*/

function lottery() {
    console.log("Вы начали игру");
    let promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
      }, 1000);
    });
    return promise;
  }
  
let game = async () => {
  try {
    await lottery();
    console.log("Вы выиграли");
    console.log("Вам заплатили");
  } catch (error) {
    console.log("Вы проиграли")
  } finally {
    console.log("Игра закончена")
  }
}

game()