import React from 'react'
// import {Pie, Doughnut, Bar} from 'react-chartjs-2';
import Chart from "../components/Chart"
import { CoolNikeCard } from '../components/CoolNikeCard'
// import { CoolNikeCard } from '../components/CoolNikeCard copy'
import nftlogo from "../data/NftProject.png"
import nftlogo2 from "../data/nftimg2.png"
import solanaVotingLogo from "../data/SolanaVoting.png"
import remittancelogo from "../data/remittancePortal.png"
// src/data/remittancePortal.png


export const Development = () => {
  return (
    <div className='flex flex-col bg-white dark:bg-[#262829] justify-between'>
      <div className='place-items-center grid py-5 mt-5'>
        <p className='dark:text-green-400 text-[#FF6464] text-2xl font-bold items-center'>MORE ABOUT ME</p>
      </div>
        <div className='place-items-center grid py-5 mb-20'>
        <p className='dark:text-white text-black text-5xl items-center'>Development</p>
        </div>
      
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between min-h-590 px-20'>

      <CoolNikeCard img={remittancelogo} title={"Tech-G Remittance Web Portal"} description={"A minimalistic web page constructed using React, Springboot and SQL that automatically map fields to one another based on a Single Source of Truth that is fully customizable and easy to use."} github={"https://github.com/jaydenhojingrong/Remittance-Web-Portal"}/>
      <CoolNikeCard img={solanaVotingLogo} title={"Voting App on Solana Blockchain"} description={"A voting application that allows users to create new topics to vote on and register themselves as voters for topics. Built using Rust and Typescript for backend."} github={"https://github.com/maars202/solana-voting"}/>
      <CoolNikeCard img={nftlogo2} title={"NFT Marketplace"} description={"A decentralised web app that allows users to list their NFTs on a marketplace and for others to purchase listed NFTs. Built using Reactjs and Solidity."} github={"https://github.com/maars202/NFT_ArtistsMarket"}/>
      
    </div>

    </div>
  )
}
