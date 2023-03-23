function attackMonster(min = 8, max = 12) {
    //get attach value
    var attack_value = getattackValue(min, max)
    var monster_life = document.getElementsByClassName("healthbar__value__monster");
    //get current monster life
    var curr_monster_life = parseInt(monster_life[0].style.width);
    //set new monster life
    if ((curr_monster_life - attack_value) <= 0) {
        monster_life[0].style.width = "0%"
        alert("Player wins")
        heal()
        return
    } else {
        monster_life[0].style.width = (curr_monster_life - attack_value) + "%"
    }
    //change color when life is less than 40
    if (curr_monster_life < 40) {
        monster_life[0].style.background = "red";
    }
    if (attack_value % 3 == 0) {
        specialAttack('active')
    } else {
        specialAttack('inactive')
    }
    document.getElementById('log').innerHTML += '<p style="color:#88005b">You played ' + attack_value + ' moves.</br></p>';
    attackPlayer()
}
function attackPlayer() {
    //get attach value
    var attack_value = getattackValue(12, 15)
    var player_life = document.getElementsByClassName("healthbar__value__me");
    //get current monster life
    var curr_player_life = parseInt(player_life[0].style.width);
    //set new monster life
    if ((curr_player_life - attack_value) <= 0) {
        alert("Computer wins")
        heal()
        return
    } else {
        player_life[0].style.width = (curr_player_life - attack_value) + "%"
    }
    if (curr_player_life < 40) {
        player_life[0].style.background = "red";
    }
    document.getElementById('log').innerHTML += '<p style="color:blue">Computer played ' + attack_value + ' moves.</br></p>';
}
function specialAttack(status) {
    if (status == "active") {
        document.querySelector('#special_attack').disabled = false;
    } else {
        document.querySelector('#special_attack').disabled = true;
    }
}
function getattackValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function heal() {
    var monster_life = document.getElementsByClassName("healthbar__value__monster");
    monster_life[0].style.width = "100%"
    monster_life[0].style.background = "#00a876";
    var player_life = document.getElementsByClassName("healthbar__value__me");
    player_life[0].style.width = "100%"
    player_life[0].style.background = "#00a876";
    //disable special attack button
    document.querySelector('#special_attack').disabled = true;
    //clear logs
    document.getElementById('log').innerHTML = "";
}
function surrender() {
    alert("You are a looser,you have surrendered!!")
    heal()
}