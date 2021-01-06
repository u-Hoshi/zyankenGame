document.getElementById('cphand').textContent = "相手の手："
document.getElementById('log').textContent="結果："

function gamestart() {
    var myhand = document.getElementById('myhand').value
    var cphand = Math.floor(Math.random() * 3)
    if (cphand == 0) {
        document.getElementById('cphand').textContent="相手の手：グー"
    } else if (cphand == 1) {
        document.getElementById('cphand').textContent="相手の手：チョキ"
    } else if (cphand == 2) {
        document.getElementById('cphand').textContent="相手の手：パー"
    }

    console.log(cphand)
    console.log(myhand)
    
    if (myhand == 0 && cphand == 0) {
       document.getElementById('log').textContent="結果：引き分け"
    } else if (myhand == 0 && cphand == 1) {
        document.getElementById('log').textContent="結果：勝ち"
    } else if (myhand == 0 && cphand == 2) {
        document.getElementById('log').textContent="結果：負け"
    } else if (myhand == 1 && cphand == 0) {
        document.getElementById('log').textContent="結果：負け"
    } else if (myhand == 1 && cphand == 1) {
        document.getElementById('log').textContent="結果：引き分け"
    } else if (myhand == 1 && cphand == 2) {
        document.getElementById('log').textContent="結果：勝ち"
    } else if (myhand == 2 && cphand == 0) {
        document.getElementById('log').textContent="結果：勝ち"
    } else if (myhand == 2 && cphand == 1) {
        document.getElementById('log').textContent="結果：負け"
    } else if (myhand == 2 && cphand == 2) {
        document.getElementById('log').textContent="結果：引き分け"
    }
}