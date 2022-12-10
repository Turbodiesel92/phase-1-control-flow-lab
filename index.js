function scuberGreetingForFeet(distance){
  const shortDistance = 400
  const mediumDistance = 2000
  const longDistance = 2500

  if (distance <= shortDistance) {
    return 'This one is on me!'
  } else if (distance > shortDistance && distance <= mediumDistance) {
    return 'That will be twenty bucks.'
  } else if (distance > mediumDistance && distance <= longDistance) {
    return 'I will gladly take your thirty bucks.'
  } else if (distance > longDistance) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){

  return city === 'NYC' ? "Ok, sounds good." : "No go."
  }


function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}