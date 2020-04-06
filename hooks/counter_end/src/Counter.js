import React, {Fragment, useState} from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  function incrementCounter(){
    setCount(count + 1)
  }

  return (
    <Fragment>
      <button onClick={incrementCounter}>Increment</button>
      <p>Count is: {count}</p>
    </Fragment>
  )

}

export default Counter;
