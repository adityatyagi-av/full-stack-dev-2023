function Counter() {
  let number =0;

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleClick}></button>
    </div>
  )
}

export default Counter
