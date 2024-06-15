"use client";

import { useUser } from "@/hooks/userContext";
import Image from 'next/image';
import News4Image from '~/public/images/news-4-image.jpg'; 

export default function News() {
  const { user } = useUser();

  return (
    <section>
      <div>
        <h2 className="text-[#2D937C] text-4xl font-bold">Asia University has made its debut in the "2024 QS World University Subject Rankings," with its Computer Science and Medicine programs</h2>
      </div>
      <div className="flex">
        <div className="w-1/2 mt-9">
          <Image
            src={News4Image}
            alt="News 4 Image"
          />
        </div>
        <div className="w-1/2 pl-4 mt-9">
          <p>The UK Higher Education Survey Agency QS (Quacquarelli Symonds), following last June's release of the "2024 World University Rankings", saw Asian universities break into the top 1000 globally, with rankings falling within the range of 901-950. This positioned Asia University as 14th in Taiwan, 3rd among private universities, and 1st among private non-medical schools. In the latest "2024 QS World University Rankings" unveiled on April 10th this year, Asia University made its debut in two subjects. In the fields of "Computer Science" and "Medicine," its global rankings range between 651 and 700, with Computer Science placing 10th in Taiwan and 1st among private universities, while Medicine ranks 9th nationwide and 5th among private universities.</p>
          <p>This year's QS World University Rankings, now in its 14th year, encompassed over 96 countries, more than 1500 universities, and 55 subjects. Ben Sowter, Senior Vice President of QS, emphasized the significance of supporting higher education and international student mobility amidst global inflation, political instability, and numerous elections worldwide, citing their role in driving innovation and societal progress.</p>
          <p>President Jeffrey J.P. Tsai highlighted Asia University's consistent recognition in global university rankings, including QS, Times Higher Education (THE), US News & World Report, and ShanghaiRanking (formerly Academic Ranking of World Universities, ARWU). He noted that Asia University has been ranked among the top 1000 universities globally for ten consecutive years. President Tsai further emphasized Asia University's notable performance in THE “World University Rankings" across fields such as Computer Science, Business & Economics, and Social Sciences, where it ranks first among private universities in Taiwan. Additionally, in Clinical and Health disciplines, as well as Life Sciences, Asia University ranks second among private institutions, with all five major disciplines ranking within the top ten among Taiwanese universities. Being listed again in the "2024 QS World University Rankings" is further evidence of Asia University's recognized academic performance on a global scale.</p>
          <p>Ching-Hsien Hsu, the Research and Development Director of Asia University, stated that Asia University is dedicated to fostering talent in the AI-based smart healthcare industry and staying abreast of the latest global developments in artificial intelligence. Recently, under the leadership of President Tsai, Asia University's "AI Intelligence and Smart Healthcare" team of faculty members attended the NVIDIA GTC 2024 conference in Silicon Valley, visited the headquarters of AMD and Supermicro in California, and actively engaged in discussions with American counterparts to deepen cooperation in the field of smart healthcare. Their efforts include the development of AI medical platforms beneficial to humanity. These multinational and interdisciplinary collaborations have garnered attention worldwide, and the positive outcomes are reflected in the rankings and evaluations of global university subjects.</p>
        </div>
      </div>
    </section>
  );
}

