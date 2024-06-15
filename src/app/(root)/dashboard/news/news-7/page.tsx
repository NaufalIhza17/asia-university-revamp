"use client";

import { useUser } from "@/hooks/userContext";
import Image from 'next/image';
import News7Image from '~/public/images/news-7-image.jpg'; 

export default function News() {
  const { user } = useUser();

  return (
    <section>
      <div>
        <h2 className="text-[#2D937C] text-4xl font-bold">University Social Responsibility EXPO 2022</h2>
      </div>
      <div className="flex">
        <div className="w-1/2 mt-2">
          <Image
            src={News7Image}
            alt="News 7 Image"
          />
        </div>
        <div className="w-1/2 pl-4 mt-9">
          <p>This year the University Social Responsibility (USR) EXPO was held at Song Shan Cultural and Creative Park (SCCP), Taipei, on November 20th. Asia University’s USR project, "Building an Elderly Dementia-Friendly Town: Dementia and Cognitive Ability x Wisdom Upgrade x Intelligent Assistance," was displayed and presented to show the project team’s strenuous efforts in working with Wufeng District, Taichung City, for the past five years. On the exhibition site, the theme of "Dementia Friendly Metaverse" was eye-catching and won three awards, namely the "Popular Photography Award," the "Popular Interactive Award" and the "Excellence Award".</p>
          <p>Dr. Wen-Chung Pan, the Minister of Education, Legislator Su-Yao Wu, and Prof. Yu-Long Su, Chief Host of the USR Promotion Center, visited Asia Univ.’s exhibition and were impressed by the university’s USR project. Minister Pan was amazed by Asia Univ.’s dementia prevention robot. He interacted with the robot to experience the care service rendered. A total of 91 colleges and universities and 196 project teams participated in the EXPO, displaying, in a nutshell, each university’s USR achievements over the past five years.</p>
          <p>In his opening remarks Minister Pan observed that the universities have played an essential role in both teaching and academic research. And with the USR project, students gain a valuable opportunity to learn how to fulfill their responsibility as citizens of a global society, and in turn, the general public can appreciate the value and worth of the university.</p>
          <p>Prof. Hua-Shan Wu, Dean of the College of Nursing at Asia University, points out that the project of "Building an Elderly Dementia-Friendly Town: Dementia and Cognitive Ability x Wisdom Upgrade x Intelligent Assistance" is a five-year effort and exhaustive observation and academic involvement in the life of people at Wufeng District, Taichung City. The project helped the Bei-Liu community to establish Wufeng's first dementia care center and the “Bei-Liu Memory Station,” which provides sustainable dementia-friendly care services. The project in total offered 69 teaching innovation courses, and 8,925 teachers and students participated in this service work.</p>
          <p>Asia Univ. invited the public on site to experience the virtual teaching plans through head-mounted VR. It also displayed digital picture books on cognitive dementia specially developed for elementary school children by Asia Univ.’s nursing students during the epidemic. The "Smart Anti-Dementia Mobile Game App" can help the elder citizens to delay their cognitive degeneration.</p>
          <p>At the closing ceremony, Asia Univ. won the "Popular Photography Award," the "Popularity Interactive Award" and the "Excellence Award."</p>
        </div>
      </div>
    </section>
  );
}

