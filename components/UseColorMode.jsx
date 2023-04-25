import { useTheme } from 'next-themes'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BsSunFill , BsMoonFill } from 'react-icons/bs'

const UseColorMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
      <div>
        <div className="">
          {currentTheme === 'dark' ? (
            <button
              className="bg-black-700 "
              onClick={() => setTheme('light')}
            >
              {' '}
              <BsSunFill />
            </button>
          ) : (
            <button
              className="bg-gray-100"
              onClick={() => setTheme('dark')}
            >
              <BsMoonFill />
            </button>
          )}
        </div>
      </div>
  );
}

export default UseColorMode;
