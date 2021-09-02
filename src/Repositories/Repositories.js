import React from 'react'
import * as S from './styled';
import {useHistory} from 'react-router-dom'


export default function Repositories({items}){
    const History = useHistory();
    const [repositories, setRepositories] = React.useState([])
    React.useEffect(()=>{
        let repositoriesName  = localStorage.getItem('repositoriesName');
        if(repositoriesName!=null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
        }else{
            History.push('/')
        }
        localStorage.clear();
    },[])


    return(
        <>
        <S.Title>Repositories</S.Title>
        <S.List>
            { repositories.map((repository)=>{
                return(
                    <S.ListItem>{repository}</S.ListItem>
                )
            })
            }
        </S.List>
        <S.LinkHome to="/">Voltar</S.LinkHome>
        </>

    );
}