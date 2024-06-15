"use client";

import { useUser } from "@/hooks/userContext";
import Image from 'next/image';
import News9Image from '~/public/images/news-9-image.jpg'; 

export default function News() {
  const { user } = useUser();

  return (
    <section>
      <div>
        <h2 className="text-[#2D937C] text-4xl font-bold">Taiwan's First Coral Restoration NFT</h2> 
      </div>
      <div className="flex">
        <div className="w-1/2 mt-9">
          <Image
            src={News9Image}
            alt="News 9 Image"
          />
        </div>
        <div className="w-1/2 pl-4 mt-9">
          <p>Asia University (AU) and Delta Electronic Foundation jointly are conducting an "Earth Pulsing" on ecology and art at the Asia University Museum of Modern Art. This exhibition is Taiwan's first initiative to create (generate) coral artworks through programming, to trade them on cryptocurrency platforms, and then to restore corals in the ocean. It is an innovative attempt to promote marine conservation. AU and the Delta Electronic Foundation jointly formed the "Coral Restoration NFT" team.</p>
          <p>Professor Jeffrey J.P. Tsai, President of AU, stated that the first art NFT series (group) of "Staghorn Coral" was created by the artist Nai-Ting Liu, who successfully combined Metaverse and NFT to promote the innovative and sustainable development of environmental protection technology.</p>
          <p>Dr. Zhao-Neng Wang, Director of AU’s Industry-Academia Collaboration Office, announced that the project of "Coral Art NFT" had its first release in 5 batches. The first batch contains 80 generated coral art NFTs. The medium of the transaction uses the cryptocurrency "Tezos" and they could be purchased on the "fxhash" platform starting from 11:00 pm, October 5th. They were completely sold out in 14 seconds. The starting price is 5 Tezos (about 300 New Taiwan Dollars), and the highest selling price in the secondary reseller market reaches 300 Tezos. One fifth of the revenue of each art work resold will be returned to the original creator to encourage them to create more coral art NFTs.</p>
          <p>Mr. Yang-Qian Zhang, CEO of Delta Electronic Foundation, said “If the rise in ocean temperature not maintained below 1.5°C, the global climate catastrophe will continue and its result will be unthinkable. When the water temperature rises above 2°C, coral bleaching will become more severe, and up to 99% of corals may vanish eventually.” Currently, the coral restoration project promoted by Delta Electronic Foundation on the northeast corner off Taiwan island has planted a variety of corals, such as Acropora digitifera, Acropora intermedia Brook, Acropora, Montipora grisea, and Pavona decussata. It is hoped that 1,000 coral seedlings can be cultivated within three years.</p>
          <p>Generative artist Nai-Ting Liu said that "The Generative Octopuses" is his first generative art work series focusing on ocean-related themes. By observing the living condition of the coral, he generated 660 distinct coral art NFTs, which will be sold on the cryptocurrency platform. The funds raised will be invested in other environmental preservation initiatives by NGOs. Each time a collector buys an NFT, the Delta Electronic Foundation will plant a coral in the tidal waters outside the Keelung Aquarium. This public welfare action of generating coral NFT was initiated and jointly supported by Formosa Art Bank (FAB DAO).</p>
          <p>Kuei-Chih Lee, the landscape artist, was invited to join this coral restoration project and created a piece of the land artwork, "The Birth," which is now on display at the AU’s Museum of Modern Art as part of this exhibition.</p>
        </div>
      </div>
    </section>
  );
}

