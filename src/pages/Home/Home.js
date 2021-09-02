import axios from 'axios';
import React from 'react'
import * as S from './styled.js'
import {useHistory} from 'react-router-dom';

function App() {
  const[usuario,setUsuario] = React.useState('')
  const history = useHistory();
  async function handlePesquisa(){
    const response = await axios.get(`https://api.github.com/users/${usuario}/repos`);
    const repositories = response.data;
    let repositoriesName = [];
    repositories.map((repository)=>{
      repositoriesName.push(repository.name)
    })
    repositoriesName = JSON.stringify(repositoriesName);
    window.localStorage.setItem("repositoriesName",repositoriesName);
    history.push('/repositories')
  }
  
  return (
    <>
    <S.Container>
      <p>{usuario}</p>
      <S.input className="usuarioInput" value={usuario} placeholder="Usuário" onChange={e => setUsuario(e.target.value)}/>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
    </>
  );
}

export default App;