var city_chooese = document.getElementById('city');
var select_tphcm = document.getElementById('district-tphcm');
var select_hn = document.getElementById('district-hn');
function checkValue() {
    var value = city_chooese.options[city_chooese.selectedIndex].value;
    console.log(value);
    if(value == 1) {
        select_tphcm.style.display = 'block';
        select_hn.style.display = 'none';
    }

    if(value == 2) {
        select_tphcm.style.display = 'none';
        select_hn.style.display = 'block';
    }
}