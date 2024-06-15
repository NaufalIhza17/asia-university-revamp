"use client";

import { useUser } from "@/hooks/userContext";
import Image from 'next/image';
import News10Image from '~/public/images/news-10-image.jpg'; 

export default function News() {
  const { user } = useUser();

  return (
    <section>
      <div>
        <h2 className="text-[#2D937C] text-4xl font-bold">President Jeffrey J. P. Tsai of Asia University Interviewed by Cheers Magazine</h2>
      </div>
      <div className="flex">
        <div className="w-1/2 mt-9">
          <Image
            src={News10Image}
            alt="News 10 Image"
          />
        </div>
        <div className="w-1/2 pl-4 mt-9">
          <p>President Jeffrey J.P. Tsai of Asia University was interviewed by Creative Director Fu-Yuan Hsiao for Cheers Magazine. When asked about how a university leader responsible for talent cultivation should respond to the global talent shortage, President Tsai emphasized Asia University’s dedication to becoming a world-class institution, focusing on developing lifelong digital competencies and ensuring graduates are future-proofed in the AI era.</p>
          <p>“Cheers Talent Reception Room” is an interview program by Cheers Magazine that addresses the unprecedented global labor shortage in the post-pandemic era. The program invites leaders from schools, enterprises, and governments to discuss strategies for managing talent sustainability and cultivating interdisciplinary talent in higher education.</p>
          <p>President Tsai highlighted Asia University’s mission to excel as a comprehensive university akin to Harvard, fostering excellence, humanities, and care since its inception. He attributed Asia University’s success to its vision, innovative governance, and commitment to sustainability. He also discussed the university’s internationalization efforts, including strategic partnerships with overseas universities and increasing international student enrollment.</p>
          <p>Regarding recent challenges in higher education such as declining birth rates and the impact of online learning innovations accelerated by the pandemic, President Tsai advocated for differentiation, market orientation, and internationalization. He underscored Asia University’s strategies in international student recruitment and the implementation of digital transformation initiatives to enhance learning quality and faculty empowerment.</p>
          <p>President Tsai quoted Prime Minister Churchill, “Never let a good crisis go to waste,” emphasizing the digital transformation catalyzed by the pandemic. He outlined Asia University’s initiatives in digital empowerment, including advanced learning resources, digital teaching strategies, and cross-disciplinary education in emerging fields like metaverse, NFT, and sustainable development.</p>
          <p>Concluding the interview, President Tsai offered insights into nurturing talent, emphasizing self-discovery, resilience in overcoming failures, and the importance of developing digital competencies and lifelong learning skills to thrive in the AI era.</p>
        </div>
      </div>
    </section>
  );
}

