export function incrementPlayer (message) {
  return {
    type: 'PLAYER_WIN',
    message
  }
}

export function incrementComputer (message) {
  return {
    type: 'COMPUTER_WIN',
    message
  }
}

export function declareTie (message) {
  return {
    type: 'TIE',
    message
  }
}
