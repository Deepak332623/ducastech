import React, { useState, useCallback, useEffect } from 'react';
import { RefreshCw, ShieldCheck } from 'lucide-react';

interface CaptchaProps {
  onVerify: (verified: boolean) => void;
}

function generateChallenge() {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 15) + 1;
  const ops = ['+', '-', '×'] as const;
  const op = ops[Math.floor(Math.random() * ops.length)];
  let answer: number;
  let question: string;
  switch (op) {
    case '+': answer = a + b; question = `${a} + ${b}`; break;
    case '-': answer = Math.max(a, b) - Math.min(a, b); question = `${Math.max(a, b)} - ${Math.min(a, b)}`; break;
    case '×': answer = a * b; question = `${a} × ${b}`; break;
  }
  return { question, answer };
}

const MathCaptcha: React.FC<CaptchaProps> = ({ onVerify }) => {
  const [challenge, setChallenge] = useState(generateChallenge);
  const [userAnswer, setUserAnswer] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const refresh = useCallback(() => {
    setChallenge(generateChallenge());
    setUserAnswer('');
    setStatus('idle');
    onVerify(false);
  }, [onVerify]);

  useEffect(() => {
    if (userAnswer === '') { setStatus('idle'); onVerify(false); return; }
    const num = parseInt(userAnswer, 10);
    if (isNaN(num)) { setStatus('idle'); onVerify(false); return; }
    if (num === challenge.answer) { setStatus('correct'); onVerify(true); }
    else { setStatus('wrong'); onVerify(false); }
  }, [userAnswer, challenge.answer, onVerify]);

  return (
    <div className="captcha-box">
      <div className="captcha-header">
        <ShieldCheck size={16} />
        <span>Security Verification</span>
      </div>
      <div className="captcha-challenge">
        <div className="captcha-question">
          <span className="captcha-q-text">{challenge.question} = ?</span>
        </div>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Answer"
          className={`captcha-input ${status === 'correct' ? 'captcha-input--correct' : ''} ${status === 'wrong' && userAnswer ? 'captcha-input--wrong' : ''}`}
          aria-label="CAPTCHA answer"
        />
        <button type="button" className="captcha-refresh" onClick={refresh} aria-label="New challenge" title="New challenge">
          <RefreshCw size={16} />
        </button>
      </div>
      {status === 'correct' && <div className="captcha-status captcha-status--ok">✓ Verified</div>}
      {status === 'wrong' && userAnswer && <div className="captcha-status captcha-status--err">Incorrect, try again</div>}
    </div>
  );
};

export default MathCaptcha;
