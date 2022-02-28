console.log(responses)

var totalPoints = 0
for ( var i = 0; i < length; i++) {
    totalPoints += responses[i].point
}


document.getElementById('result').innerHTML = totalPoints