import "./App.css";
import Card from "./Components/Card";
function App() {
  return (
    <div className="center">
      <h1>Meus contatos</h1>
      <Card
        name="Simpson Gamer"
        img="https://i.ytimg.com/vi/7QYyEAV1MnU/maxresdefault.jpg"
        info1="Ele está no canal"
        info2="Esse canal é bom dms"
      />

      <Card
        name="Bob"
        img="https://static-images.ifood.com.br/image/upload/t_low/logosgde/201811171132_ec5c65de-b8a5-48c0-a3c1-2fc960519b98.png"
        info1="Pizzaria"
        info2="pizza@bobera.com"
      />

      <Card
        name="Lexus es300"
        img="https://bringatrailer.com/wp-content/uploads/2022/07/1998_lexus_es_02-3-46610-scaled.jpg?fit=940%2C627"
        info1="Vrummmmm"
        info2=""
      />
    </div>
  );
}

export default App;
