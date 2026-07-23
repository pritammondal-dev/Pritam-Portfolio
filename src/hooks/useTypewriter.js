import { useEffect, useState } from 'react';

export default function useTypewriter(words, typeSpeed = 85, deleteSpeed = 45, delay = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    let timer;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typeSpeed);

      if (text === currentWord) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    } else {
      timer = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deleteSpeed);

      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delay]);

  return text;
}
