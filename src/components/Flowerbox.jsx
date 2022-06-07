function Flowerbox(props) {
  return (
    <>
      <div className="box">
        <img src={props.image} />
        <div id="textcontent">
          <h4 id="name">{props.name}</h4>
          <p id="tags">{props.tags}</p>
          <p>{props.price}</p>
        </div>
      </div>
    </>
  );
}

export default Flowerbox;
