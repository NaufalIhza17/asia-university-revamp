"use client";

import { useUser } from "@/hooks/userContext";
import Image from 'next/image';
import News3Image from '~/public/images/news-3-image.jpg'; 

export default function News() {
  const { user } = useUser();

  return (
    <section>
      <div>
        <h2 className="text-[#2D937C] text-4xl font-bold">Asia University is honored with the title of "2024 Best University in Asia" and ranks third among private universities in Taiwan</h2>
      </div>
      <div className="flex">
        <div className="w-1/2 mt-2">
          <Image
            src={News3Image}
            alt="News 3 Image"
          />
        </div>
        <div className="w-1/2 pl-4 mt-9">
          <p>The Times Higher Education (THE) recently announced the latest ranking of "2024 Best Universities in Asia," where Asia University secured the 103rd position. Notably, Asia University performed impressively in various criteria of evaluation, with its research ranking 2nd and internationalization ranking 5th nationwide.</p>
          <p>President Jeffrey J.P. Tsai stated that Asia University places great emphasis on nurturing students who can grasp future trends and align with society. Asia University has held the title of "World's Best University" for ten consecutive years. In the "2024 World University Rankings," it secured the top spot in five subjects among private universities in Taiwan, with two more subjects ranking second nationwide. Additionally, 19 professors were recognized as "World's Top 2% Scientists." Asia University houses research centers such as the Center for Precision Health Research, Big Data Research Center, and Fintech & Blockchain Research Center. These centers operate relying on high-speed computing power to drive campus-wide AI-based teaching. Asia University is also recognized as a "Green University" focusing on sustainable development and serving as the cradle for nurturing the "AI-enabled Intelligent Healthcare Industry." These dedicated efforts are reflected in the ranking of "2024 THE Best Universities in Asia."</p>
          <p>Ching-Hsien Hsu, the Research and Development Director of Asia University, pointed out that the evaluation criteria for the "2024 THE Best Universities in Asia" ranking include research, industry-academia collaboration, teaching, and internationalization. Asia University promptly grasps the latest global trends in artificial intelligence. President Jeffrey J.P. Tsai recently led the Asia University "AI Intelligence and Intelligent Healthcare" teaching team to attend the NVIDIA GTC 2024 conference in Silicon Valley, USA, and visit the headquarters of semiconductor companies such as AMD and Supermicro in Silicon Valley. These endeavors aim to deepen collaboration in the field of intelligent healthcare and develop AI medical platforms beneficial to humanity, thereby strengthening academic-industry integration. Asia University has also established the "AMD Logic and Computation Laboratory" to support multiple courses related to artificial intelligence offered by the Department of Information Engineering, utilizing AMD computing resources.</p>
          <p>Ching-Hsien Hsu, the Research and Development Director, further emphasized that Asia University's faculty continually advance in academia and teaching practices, keeping pace with international standards. These achievements serve as key indicators, positioning Asia University as the top non-medical private university in Taiwan in THE's "2024 Best Universities in Asia" ranking, with its research ranking second nationwide and internationalization ranking fifth.</p>
        </div>
      </div>
    </section>
  );
}


