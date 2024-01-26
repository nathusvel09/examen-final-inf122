"use client"
import Image from "next/image";
import style from "./Pokemon135.module.css";
import { useEffect,useState } from "react";
function Mayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function Pokemon(){
    const [jolteon,setPerrito]=useState("/vercel.svg");
    const [estado, setEstado]=useState("esperando");
    const [habilidad, setHabilidad] = useState("habilidad");
    const [altura, setAltura] = useState("altura");
    const [peso,setPeso] = useState("peso");
    const [HP,setHP] = useState("HP");
    const [Attack,setAttack] = useState("Attack");
    const [Defense,setDefense] = useState("Defense");
    const [Speed,setSpeed] = useState("Speed");
    const [numero, setNumero] = useState("numero");
    const [Type, setTipo] = useState("Type");
    const url="https://pokeapi.co/api/v2/pokemon/2";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPerrito(data.sprites.front_default),
            setEstado(Mayuscula(data.species.name)),
            setNumero(data.game_indices[3].game_index),
            setTipo(Mayuscula(data.types[0].type.name)),
            setAltura(data.height),
            setPeso(data.weight),
            setHP(data.stats[0].base_stat),
            setAttack(data.stats[1].base_stat),
            setDefense(data.stats[2].base_stat),
            setSpeed(data.stats[3].base_stat),
            setHabilidad(data.moves[0].move.name)
            });
    },[]);
    return(
        <div className={style.contenedor}>
            <h1 className={style.mypokemon}>My Pokemon</h1>
            <h2 className={style.jolteon}>{estado}</h2>
            <p className={style.num}>#{numero}</p>
            <Image src={jolteon} height={250} width={250}/>
            <div className={style.rectangulo}>
                <h1 className={style.about}>About</h1>
                <div className={style.aboutElem}>
                    <h2 >Type</h2>
                    <p >{Type}</p>
                    <h2 >Height</h2>
                    <p >{altura} m</p>
                    <h2 >Weight</h2>
                    <p > {peso} Kg</p>
                    <h2 >Abilities</h2>
                    <p >{habilidad}</p>
                </div>
                <h1 className={style.about}>Stats</h1>
                <div className={style.aboutElem}>
                    <h2 >HP</h2>
                    <p >{HP}</p>
                    <h2 >Attack</h2>
                    <p >{Attack}</p>
                    <h2 >Defense</h2>
                    <p >{Defense}</p>
                    <h2 >Speed</h2>
                    <p >{Speed}</p>
                </div>
            </div>
        </div>
    );
}
export default Pokemon;