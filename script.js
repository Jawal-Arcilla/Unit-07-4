document.getElementById('button').addEventListener('click', input)

let userInput = 0
let day = 'Monday'

function input () {
  userInput = document.getElementById('age').value
  userInput = parseInt(userInput)
  day = document.getElementById('day').value
  day = parseInt(day)

  if ((day === 'Tuesday'||day === 'Thursday') | (userInput >= 12 & userInput <= 21)) {
    document.getElementById('answer').innerHTML = 'You are eligible for student pricing'}
  else {
  document.getElementById('answer').innerHTML = 'You must pay the regular price'
}
}
