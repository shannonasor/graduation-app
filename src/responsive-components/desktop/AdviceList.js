const AdviceList = ({ allAdvice, title}) => {
    return (
      <div className="advice-list">
        <h2>{ title }</h2>
        {allAdvice.map(advice => (
          <div className="advice-preview" key={advice.id} >
            <h2>{ advice.bePrepared }</h2>
            <p>Written by { advice.keep }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default AdviceList;