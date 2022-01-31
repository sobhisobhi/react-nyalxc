import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const Message = (props) => {
  const r = useRef(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    r.current = show;
  });

  useEffect(() => {
    setInterval(() => {
      setShow(!r.current);
    }, 1000);
  }, []);

  return (
    <h1 style={{ visibility: show ? 'visible' : 'hidden' }}>{props.text}</h1>
  );
};

export default function App() {
  return (
    <div>
      <Message text="Hello StackBlitz!" />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
