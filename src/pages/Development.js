import React from 'react'
import { CoolNikeCard } from '../components/CoolNikeCard'
import nftlogo2 from "../data/nftimg2.png"
import solanaVotingLogo from "../data/SolanaVoting.png"
import remittancelogo from "../data/remittancePortal.png"
import driverLogo from "../data/img_116.jpeg"
import driverLogo2 from "../data/driverLogo2.png"
import driverLogo3 from "../data/driverLogo3.png"


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

      <CoolNikeCard img={remittancelogo} 
      title={"Tech-G Remittance Web Portal"} 
      description={"A minimalistic web page constructed using React, Springboot and SQL that automatically map fields to one another based on a Single Source of Truth that is fully customizable and easy to use."} 
      github={"https://github.com/jaydenhojingrong/Remittance-Web-Portal"}
      websitelink={""}/>
      <CoolNikeCard img={solanaVotingLogo} 
      title={"Voting App on Solana Blockchain"} 
      description={"A voting application that allows users to create new topics to vote on and register themselves as voters for topics. Built using Rust and Typescript for backend."} 
      github={"https://github.com/maars202/solana-voting"}
      websitelink={""}/>
      <CoolNikeCard img={nftlogo2} title={"NFT Marketplace"} 
      description={"A decentralised web app that allows users to list their NFTs on a marketplace and for others to purchase listed NFTs. Built using Reactjs and Solidity."} 
      github={"https://github.com/maars202/NFT_ArtistsMarket"}
      websitelink={""}/>
      <CoolNikeCard img={driverLogo3} title={"Image Classifation Project"} description={"As part of the 7th Installment of the Data Associate Programme by SMU Business Intelligence and Analytics, a group of friends and I developed a ensemble machine learning model that determines the state of a person while he/she is driving over 12 weeks. We visualised the models with class activation maps to better understand how the different models work."}
      github={"https://github.com/maars202/SMU_BIA_Actual_Idiots"} 
      websitelink={"https://maars202-smu-bia-actual-idiots-app-9l8fmc.streamlitapp.com/"}/>
      {/* <CoolNikeCard img={driverLogo3} title={"Image Classifation Project"} description={"As part of the 7th Installment of the Data Associate Programme by SMU Business Intelligence and Analytics, a group of friends and I developed a ensemble machine learning model that determines the state of a person while he/she is driving over 12 weeks. We visualised the models with class activation maps to better understand how the different models work."}/> */}
    </div>

    </div>
  )
}
