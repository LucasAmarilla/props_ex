export default function Card(props) {
  return (
    <div className="card">
        <div className="top">
            <h3 className="name">{props.name}</h3>
            <img className="circle-img" src={props.img} alt="" />

        </div>
        <div className="bottom">
            <p className="info">{props.info1}</p>
            <p className="info">{props.info2}</p>
        </div>
    </div>
  );
}
