function reducer (state, action) {
  switch (action.type) {
    case 'PLAYER_WIN': return {
      computerWinCount: state.computerWinCount,
      playerWinCount: state.playerWinCount + 1,
      message: action.message
    }
    case 'COMPUTER_WIN': return {
      computerWinCount: state.computerWinCount + 1,
      playerWinCount: state.playerWinCount,
      message: action.message
    }
    case 'TIE': return {
      computerWinCount: state.computerWinCount,
      playerWinCount: state.playerWinCount,
      message: action.message
    }
    default: return state
  }
}
export default reducer
