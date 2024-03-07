function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;
  if (percentage === 100) emoji = '👑';
  if (percentage >= 50 && percentage < 100) emoji = '🥈';
  if (percentage >= 0 && percentage < 50) emoji = '🥉';

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of{' '}
        {maxPossiblePoints} ({percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
  
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
