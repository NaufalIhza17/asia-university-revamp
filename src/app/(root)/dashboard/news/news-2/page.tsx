"use client";

import { useUser } from "@/hooks/userContext";
import Image from 'next/image';
import News2Image from '~/public/images/news-2-image.jpg'; 

export default function News() {
  const { user } = useUser();

  return (
    <section>
      <div>
        <h2 className="text-[#2D937C] text-4xl font-bold">Construction Begins on the "Asia University Fengfu Health Park," Aiming for Launch in 2026</h2>
      </div>
      <div className="flex">
        <div className="w-1/2 mt-9">
          <Image
            src={News2Image}
            alt="News 2 Image"
          />
        </div>
        <div className="w-1/2 pl-4 mt-9">
          <p>Asia University invests 7.5 billion NTD in constructing the Asia University Fengfu Health Park in Fengyuan, marking the groundbreaking ceremony held on the 6th. Mayor Hsiu-Yen Lu of Taichung City expressed gratitude for Asia University's significant investment, stating that this construction project brings "eight major benefits" to the city. Asia University Founder Chang-Hai Tsai pointed out that by constructing hospitals, long-term care facilities, and public daycare centers in the health park, it provides research and development opportunities for Asia University students and faculty in the health industry, aiming to create 2,000 job opportunities and striving for completion and operation by 2026.</p>
          <p>Mayor Hsiu-Yen Lu stated in her address that the construction of the Fengfu Health Park brings "eight major benefits." One of these benefits is that the Fengfu project was originally a Type A maintenance depot for the military, and in 2011, the Taichung City Government acquired the land. However, the commercialization process has been challenging, with four previous mayors attempting various orientations from a financial industrial park, biotechnology industrial park, sports industry park, and then adjusting to a health industry park under her tenure based on industrial development trends and public needs. Finally, with Asia University's significant investment, the original investment amount of 5.5 billion NTD was increased to 7.5 billion NTD by Founder Tsai due to the rise in raw material costs, making it a win for Taichung City.</p>
          <p>Chang-Hai Tsai, the founder of Asia University (middle), expressing plans to invest 7.5 billion NTD to build the "Asia University Fengfu Health Park"; Mayor Hsiu-Yen Lu of Taichung City (right) remarked, "Taichung City gains!"</p>
          <p>Mayor Hsiu-Yen Lu pointed out that another benefit is the construction of long-term care institutions in response to the healthcare needs of the elderly. This is a key development project of the government's health policy. The third benefit is that after the establishment of the Fengyuan Hospital affiliated with Asia University, it will collaborate with relevant companies to provide convenient medical services for the public, addressing the shortage of medical services in the mountainous area. The fourth benefit is that the daycare building will create a nurturing environment for children, ensuring care for all ages in the mountainous areas.</p>
          <p>Mayor Hsiu-Yen Lu mentioned the fifth benefit: in the past, people in Fengyuan used to ask her, "Why doesn't Fengyuan have a university?" Now, the dream has finally come true, with Asia University bringing its resources to Fengyuan, including expanding its Continuing Education Center; fostering more high-level talents and supporting new startup teams to drive the local medical industry's development; The seventh benefit harnesses the effect of "building nests to attract phoenixes," attracting related businesses to settle in, thereby enhancing the living functions of the mountain city. Lastly, with the university and industries arriving, education and employment opportunities will increase, leading to the influx of high-quality, high-level residents.</p>
        </div>
      </div>
    </section>
  );
}
