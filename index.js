function scuberGreetingForFeet(yourRide){
  const shortRide = 400
  const mediumRide = 2000
  const longRide = 2500

  if(yourRide <= shortRide){
    return 'This one is on me!'
  } else if(yourRide > shortRide && yourRide <= mediumRide) {
    return 'That will be twenty bucks.'
  } else if(yourRide > mediumRide && yourRide <= longRide) {
    return 'I will gladly take your thirty bucks.'
  } else if(yourRide > longRide) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}