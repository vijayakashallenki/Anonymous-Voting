import React from "react";
import "./Faq.css";
import image1 from "./assests/poki1.png";
import image3 from "./assests/poki3.png";
import image4 from "./assests/poki4.png";

const Faq = () => {
  return (
<div className="my-component">
  <div className="my-content">
    <br />
    <br />
    <h1>FAQ</h1>
    <br/>
    <img src={image1} style={{height:"100px"}}></img>
    <h1 style={{ fontFamily: 'Right Grotesk', fontSize: '1.7em', lineHeight: '1.5' }}>What are Pokemons?</h1>
    <p>Pokémonverse is an imaginative compilation of NFTs based on the iconic Pokémon universe. These digital creatures are procedurally generated and stored as NFTs on the Ethereum blockchain. The inaugural generation comprises 10,000 unique Pokémon, each featuring diverse attributes such as species, types, colors, and special abilities. These Pokémon will be represented with a variety of poses, backgrounds, and themed elements. Some Pokémon may possess rare traits, making them more unique and sought after by trainers. Additionally, there are whispers circulating within the Pokémonverse about the possibility of encountering disguised humans attempting to blend in with these virtual creatures. Is it a mere rumor or an intriguing reality? 🤔</p>
    <br/>
    <img src={image4} style={{height:"100px"}}></img>
    <h1 style={{ fontFamily: 'Right Grotesk', fontSize: '1.7em', lineHeight: '1.5' }}>What do I get?</h1>
    <p>Acquiring your Pokémon NFT is an exciting process! Upon ownership, you receive various image assets for your Pokémon, encompassing an animated GIF, PNG, and an SVG file with resolution flexibility. Each Pokémon comes with the rights to produce and share derivatives. Further details on the license agreement can be explored for a comprehensive understanding of the creative possibilities within your Pokémon collection.</p>
    <br/>
    <img src={image3} style={{height:"100px"}}></img>
    <h1 style={{ fontFamily: 'Right Grotesk', fontSize: '1.7em', lineHeight: '1.5' }}>How do I get my stuff?</h1>
    <p>To obtain your Pokémon NFT, the release of images and Pokémon metadata will occur once all NFTs are sold out. Regular updates will be communicated to collectors via our Discord channel, specifying the date and time when the content will be accessible. Once the metadata is updated, your Pokémon GIF will be featured on OpenSea, and you can easily download additional file formats directly from our website. Stay tuned for announcements to ensure you can promptly acquire and enjoy your Pokémon assets!</p>
    <h1 style={{ fontFamily: 'Right Grotesk', fontSize: '1.7em', lineHeight: '1.5' }}>Why Pokemons?</h1>
    <p>By gathering Pokémon, you become an integral part of our vibrant community, influencing the project's trajectory and contributing to the evolution of the storyline. Valuable insights and creative ideas have already emerged from our community, showcasing the collaborative spirit that fuels our collective imagination. Together, we can foster the growth of the Pokémon ecosystem, ensuring a shared journey filled with excitement and innovation!</p>
    <h1>What's an NFT?</h1>
    <p>NFT stands for "Non-fungible token," which means that it's a unique, digital item with blockchain-managed ownership that users can buy, own, and trade. Some NFT's fundamental function is to be digital art. But they can also offer additional benefits like exclusive access to websites, event tickets, game items, and ownership records for physical objects. Think of it as a unique piece of art that can also work as a "members-only" card. Robotos works like this.</p>
    <h1>How Do I NFT?</h1>
    <p>New to NFTs? No worries, here are some steps on what you need to do to get your Roboto.</p>
    <p>1. Download the metamask.io extension for the Chrome/Brave browser or app on mobile. This will allow you to make purchases with Ethereum and can be found in the extensions tab. If you are on mobile, you must use the Metamask App Browser</p>
    <p>2. You can purchase Ethereum through the Metamask Wallet using Wyre or Send Ethereum from an exchange like Coinbase.</p> 
    <p>3. Click on Connect at the top of the page and connect your Metamask. Once joined, you will be able to purchase the NFTs in the mint section. You will be prompted to sign your transaction. FYI, there will be a fee associated with every transaction related to gas prices.</p>
    <p>4. Once you have made your purchase, your Roboto NFTs will be viewable in your wallet and on OpenSea.</p>
  </div>
 </div>
  );
};

export default Faq;
