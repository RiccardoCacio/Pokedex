import { useEffect, useState } from 'react';
import React from 'react'
import axios from 'axios';
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import emptyPokeball from "../../Img/emptyPokeball.png";
import Masterball from "../../Img/masterball.webp";


const Main = () => {
    const [pokemonUrl, setPokemonUrl] = useState();
    const [pokemonInfo, setPokemonInfo] = useState(null);
    const [pokemonIsCharge, setPokemonIsCharge] = useState(true);
    const [chargeIsCorrect, setChargeIsCorrect] = useState(true);


    //rotate img
    const [imgIsFront, setImgIsFront] = useState(true);
    const changeImg = () => { setImgIsFront(imgIsFront => !imgIsFront) };


    const ButtonCall = () => {
        setPokemonIsCharge(false);
        setImgIsFront(true);
        const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonUrl}/`;
        if (!pokemonUrl) return;

        axios.get(pokeUrl)
            .then((response) => {
                setChargeIsCorrect(true);


                const { forms, types, sprites, stats } = response.data;
                let pokemonName = forms[0].name;
                let pokemonType = types[0].type.name;
                let pokemonFrontImg = sprites.front_default;
                let pokemonBackImg = sprites.back_default;
                let pokemonHp = stats[0].base_stat;
                let pokemonAtk = stats[1].base_stat;
                let pokemonDef = stats[2].base_stat;
                setPokemonInfo({ name: pokemonName, type: pokemonType, frontImg: pokemonFrontImg, backImg: pokemonBackImg, hp: pokemonHp, atk: pokemonAtk, def: pokemonDef });

                setPokemonIsCharge(true)
            }).catch((error) => {
                console.error("Errore nel recupero dati");
                setChargeIsCorrect(false);
                setPokemonIsCharge(true)

            });
    }

    return (

        <main className="max-sm:mt-0 mt-[70px] flex justify-center h-full">
            <div className='max-sm:border-0 max-sm:rounded-none max-sm:w-[100%] max-sm:mt-0 max-sm:h-screen mt-[40px] h-[660px] w-[500px] border-solid border-black border-2 rounded-3xl bg-[#CB3234] '>
                <div className='flex'>
                    {/* fotocamera */}
                    <div className='flex justify-center mt-3 ml-3 h-[65px] w-[65px] border-solid border-black border-2 rounded-[50%] bg-slate-300'>

                        <div className='mt-[3px] h-[55px] w-[55px] border-solid border-black border-2 rounded-[50%] bg-emerald-200'></div>
                    </div>
                    {/*fine fotocamera */}
                    <div className='mt-8 ml-3 h-[25px] w-[25px] border-solid border-black border-2 rounded-[50%] bg-red-700'></div>
                    <div className='mt-8 ml-3 h-[25px] w-[25px] border-solid border-black border-2 rounded-[50%] bg-yellow-400'></div>
                    <div className='mt-8 ml-3 h-[25px] w-[25px] border-solid border-black border-2 rounded-[50%] bg-green-500'></div>

                </div>




                <div className='flex'>
                    <hr className=' mt-7 w-[250px] border-t-2 border-black' />
                    <hr className='max-sm:mt-[16px] mt-[13px] ml-[-3px] w-[90px] rotate-[160deg] border-t-2 border-black' />
                    <hr className='max-sm:mt-[4px] mt-[-2px] ml-[-3px] w-[162px] border-t-2 border-black' />
                </div>
                {/* display */}
                <div className='flex justify-center'>
                    <div className='mt-[35px] h-[330px] w-[330px] border-solid rounded-bl-[35px] border-black border-2 bg-slate-300 flex justify-center flex-col'>
                        <div className='flex justify-center gap-5 mt-3'>
                            <div className=' h-3 w-3 rounded-xl bg-[#CB3234] border-solid border-black border-2'></div>
                            <div className=' h-3 w-3 rounded-xl bg-[#CB3234] border-solid border-black border-2'></div>

                        </div>
                        {/* display black */}
                        <div className='justify-center items-center flex flex-col  mt-[17px] h-[250px] w-[270px] border-solid border-black border-2 bg-[#252525] m-auto'>

                            {pokemonIsCharge ?
                                <>
                                    {chargeIsCorrect ?
                                        <>
                                            <h1 className='text-white text-2xl mt-2 capitalize'>{pokemonInfo ? `Name: ${pokemonInfo?.name}` : ""}</h1>
                                            {pokemonInfo && pokemonInfo.frontImg &&
                                                imgIsFront ? <img className='w-[65%]' src={pokemonInfo.frontImg} alt="" />
                                                : <img className='w-[65%]' src={pokemonInfo?.backImg} alt="" />
                                            }
                                            <h2 className='text-white text-xl capitalize'>{pokemonInfo ? `Type: ${pokemonInfo?.type}` : ""}</h2>
                                        </>
                                        :
                                        <>
                                            <h1 className='mb-6 text-3xl text-red-600'>Try Again!</h1>
                                            <img src={emptyPokeball} className='h-28' />
                                            <h2 className='mt-2 text-2xl text-red-600'>Pokemon not found</h2>
                                        </>

                                    }
                                </>
                                :
                                <>
                                    <img src={Masterball} alt="" className='h-40 animate-bounce mt-8 ' />
                                    <h1 className='text-2xl text-violet-500'>Loading...</h1>

                                </>

                            }
                        </div>

                        <div className='flex justify-around'>
                            <div className='h-3 w-3 rounded-xl bg-[#CB3234] border-solid border-black border-2'></div>

                            <div className='mb-3 flex flex-col gap-[1px]'>
                                <hr className='w-[20px] border-t-2 border-black ' />
                                <hr className='w-[20px] border-t-2 border-black ' />
                                <hr className='w-[20px] border-t-2 border-black ' />
                                <hr className='w-[20px] border-t-2 border-black ' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* display */}

                <div>
                    <input typeof='text' onFocus={(e) => e.target.value = ""} onChange={(e) => setPokemonUrl(e.target.value.toLowerCase())} className='mt-2 text-center h-8 text-lg rounded-bl-xl border border-black rounded-tr-xl bg-[#93C572] placeholder:text-stone-700' placeholder="Pokemon's Name" type="text" />
                    <div className='flex ml-[120px] gap-3 '>
                        <div className='mt-4 ml-3 h-[7px] w-[45px] border-solid rounded-xl border-black border-2 bg-red-600' ></div>
                        <div className='mt-4 ml-3 h-[7px] w-[45px] border-solid rounded-xl border-black border-2 bg-blue-600' ></div>
                    </div>

                    <div className='flex'>
                        {/* press button */}
                        <button onClick={() => ButtonCall()} className='max-sm:ml-[30px] ml-[65px] border-solid h-16 w-16 rounded-[50%] border-black bg-[#252525] border-2 text-white hover:shadow-md hover:shadow-stone-700 hover:drop-shadow-md '>Press</button>
                        {/* green display */}
                        <div className='mt-9 ml-7 h-[75px] w-[120px] border-solid border-black border-2 bg-[#93C572]'>
                            <h3 className='text-base text-left ml-[2px]'>{pokemonInfo ? `Hp: ${pokemonInfo?.hp}` : ""}</h3>
                            <h3 className='text-base text-left ml-[2px]'>{pokemonInfo ? `Atk: ${pokemonInfo?.atk}` : ""}</h3>
                            <h3 className='text-base text-left ml-[2px]'>{pokemonInfo ? `Def: ${pokemonInfo?.def}` : ""}</h3>


                        </div>


                        <div className='max-sm:ml-4 flex ml-12 mt-12'>
                            <button onClick={() => changeImg()} className='border-solid h-8 w-14  border-black bg-[#252525]  rounded-bl-xl rounded-tl-xl text-white flex justify-center hover:border hover:border-black hover:border-solid' >< BiLeftArrow className='m-auto' /></button>
                            <button onClick={() => changeImg()} className='border-solid h-8 w-14  border-black bg-[#252525]  rounded-br-xl rounded-tr-xl text-white flex justify-center hover:border hover:border-black hover:border-solid ' >< BiRightArrow className='m-auto' /></button>
                        </div>
                    </div>


                </div>



            </div>
        </main >
    )

}

export default Main
