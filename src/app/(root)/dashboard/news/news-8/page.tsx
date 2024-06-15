"use client";

import { useUser } from "@/hooks/userContext";
import Image from 'next/image';
import News8Image from '~/public/images/news-8-image.jpg'; 

export default function News() {
  const { user } = useUser();

  return (
    <section>
      <div>
        <h2 className="text-[#2D937C] text-4xl font-bold">Asia University Received More Than 21 Million in MOE’s Study Abroad Grants for 2022</h2>
      </div>
      <div className="flex">
        <div className="w-1/2 mt-2">
          <Image
            src={News8Image}
            alt="News 8 Image"
          />
        </div>
        <div className="w-1/2 pl-4 mt-9">
          <p>Asia University received an over twenty-one million (NT$) subsidy from the Ministry of Education, promoting studying abroad for college students. Asia Univ. leads the list in terms of the total amount of the grants awarded among 160 universities, both public and private for the past five consecutive years. Approximately 350 students can benefit from these subsidies and go abroad for semester exchanges and internships in the coming year.</p>
          <p>NT$ 4,900,000 was granted to promote semester study as exchange students in AU’s sister universities around the world. It can provide at least sixty students opportunities to study in partner universities such as Northern Illinois University in the US, the University of Victoria in Canada, the University of Venice (Ca’ Foscari University) in Italy, Regensburg University of Applied Sciences in Germany, Kansai University in Japan, and many others.</p>
          <p>NT$ 7,400,000 was awarded to students who plan to go aboard for internships in the coming year. Along with this internship subsidy, 110 teachers and students will go to Jason Wu Design Office in New York, the laboratory of the University of Washington in the US, the State University of New York at Buffalo Campus in the US, and others will go to Canada, Germany, Spain, Japan, South Korea and other countries.</p>
          <p>Another 9,420,000 NT$ was granted for the New Southbound Internship Program, in which 180 students will go to Singapore Changi Airport, the University of Sydney in Australia, the laboratory of the University of Auckland in New Zealand, the International Office of Airlangga University in Indonesia, Y.S.P. Southeast Asia Holding Berhad in Malaysia and other universities and industries for internship. President Jeffrey J. P. Tsai of Asia University was delighted with the grants from MOE Taiwan, observing that student mobility is one of Asia Univ.’s top priority policies as it enhances our students’ employability as well as their global perspectives. Asia Univ. will ensure, President Tsai continues to point out, that our students will have overseas experience before they graduate from the university. We are dedicated to this mission as we are establishing a comprehensive university worthy of international acclaim.</p>
        </div>
      </div>
    </section>
  );
}


