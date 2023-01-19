<script>
let vowel = 'aeiouAEIOU';
let firstname = 'Nick';
let middlename = 'Alexander';
let lastname = 'Grim';

if (vowel.includes(firstname.charAt(0))) {newStr = firstname + 'way';
} else {
let firstletter = firstname.substring(0,1); 
newStr = firstname.substring(1) + firstletter + 'ay';
}

document.getElementById("firstname").innerHTML = newStr;
</script>
