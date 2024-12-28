```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(interval); // Cleanup function
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>The count is: {count}</p>
    </div>
  );
}
```