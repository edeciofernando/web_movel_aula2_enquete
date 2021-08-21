import React, { useState } from "react";

const App = () => {

  const [contaSim, setContaSim] = useState(0);
  const [contaNao, setContaNao] = useState(0);
  const [voto, setVoto] = useState("");

//  const handleChange = (e) => {
  const handleChange = e => {
    if (e.target.name === "rbSim") {
      setVoto("sim");
    } else {
      setVoto("nao");
    }
  }

  const handleSubmit = e => {
    // evita o comportamento padrão do submit do form, no caso é enviar o form
    e.preventDefault();

    if (voto === "") {
      alert("Por favor, selecione sim ou não antes de votar...");
    } else if (voto === "sim") {
      setContaSim(contaSim + 1);
    } else {
      setContaNao(contaNao + 1);
    }
    setVoto("");
  }

  return ( 
    <div className="container">
      <div className="row mt-3">
        <div className="col-sm-4">
          <img src="condominio.jpg"
               alt="Condomínio Avenida"
               className="img-fluid" />
        </div>
        <div className="col-sm-8">
          <h3>Enquete: Condomínio Avenida</h3>
          <h4>Você concorda com a pintura do muro?</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input type="radio" className="form-check-input" 
                       name="rbSim"
                       checked={voto === "sim"}
                       onChange={handleChange}/> Sim
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input type="radio" className="form-check-input" 
                       name="rbNao"
                       checked={voto === "nao"}
                       onChange={handleChange}/> Não
              </label>
            </div>
            <input type="submit" value="Votar" className="btn btn-primary ml-5 px-4"/>
          </form>
          <h5 className="text-danger mt-4">Total de Votos Sim: {contaSim}</h5>
          <h5 className="text-danger">Total de Votos Não: {contaNao} </h5>
        </div>
      </div>
    </div>
  );
};

export default App;
