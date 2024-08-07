// const playerName = "AutoBye";
// const playerPoints = 123;
// const playerHandsome = false;
// const playerFat = "little bit";

const player = {
    name : "AutoBye",
    points : 123,
    Handsome : false,
}

console.log(player.name);
player.points = player.points + 15;
console.log(player.points);

console.log(player.Handsome);

console.log(player["name"]);

player.fat = true;
console.log(player.fat);

// console.log(player);
// player = false;
// console.log(player);
//Uncaught TypeError TypeError: Assignment to constant variable.
//오브젝트 안의 무언가를 변경하는건 문제되지 않으나 player 변경시 에러발생

// 설명이 필요하지 않은 데이터 리스트들은 array로,
// 설명이 필요한 정보가 담긴 데이터 리스트들은 object로!