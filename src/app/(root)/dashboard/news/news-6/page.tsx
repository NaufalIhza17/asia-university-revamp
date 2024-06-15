"use client";

import { useUser } from "@/hooks/userContext";
import Image from 'next/image';
import News6Image from '~/public/images/news-6-image.jpg'; 

export default function News() {
  const { user } = useUser();

  return (
    <section>
      <div>
        <h2 className="text-[#2D937C] text-4xl font-bold">Asia University conferred an honorary doctorate to Dr. Lisa Su, Chair and CEO of AMD</h2>
      </div>
      <div className="flex">
        <div className="w-1/2 mt-9">
          <Image
            src={News6Image}
            alt="News 6 Image"
          />
        </div>
        <div className="w-1/2 pl-4 mt-9">
          <p>Dr. Lisa Su, Chair and CEO of AMD in the United States, was conferred an honorary doctorate by Asia University, Taiwan. “I am honored to receive an honorary doctorate from Asia University,” said Dr. Lisa Su. “As an engineer at heart, I believe technology is critical to solving some of the most important challenges our world faces today. I am inspired by the students at Asia University, who will make up our next generation of innovators and problem solvers,” Lisa Su, Chair and CEO, AMD.</p>
          <p>A delegation from Asia University led by President Jeffrey J.P. Tsai visited Advanced Micro Devices, Inc. (AMD) during the Lunar New Year, where they met with Dr. Lisa Su and presented her with an honorary doctorate. A collaboration for upcoming partnerships was also discussed. President Tsai said, “we look forward to a successful partnership with AMD that will advance AI, chip design, and high-speed computing for use in healthcare, the metaverse, post-quantum cryptography (PQC), SDGs, and many other applications.”</p>
          <p>Dr. Su, originally from Tainan, Taiwan, graduated from the Massachusetts Institute of Technology with a bachelor's, master's, and Ph.D. in electrical engineering. Dr. Su is AMD's first female CEO of Taiwanese descent. She pioneered the use of copper instead of aluminum to connect semiconductor chips and successfully increased chip speed by 20%. The "Robert N. Noyce Medal," regarded as the Nobel Prize in the semiconductor industry, was given to her for the first time to a female scientist.</p>
          <p>It is an honor for Asia University to recognize Dr. Su's outstanding contributions to semiconductor research and development, as well as her exemplary leadership. In light of her extensive experience in the industry, she was appointed by President Biden to the President’s Council of Advisors on Science and Technology. Furthermore, she was named a Fellow of the Institute of Electronics and Electrical Engineers, elected to the National Academy of Engineering and the American Academy of Arts & Science. She has also been awarded 2022 Fortune Most Powerful Women, 2022 International Peace Honors Honoree, 2021 Forbes 100 Most Powerful Women, and many others. It is evident from her numerous awards that she has made a positive impact on technology research and has been a visionary leader and role model for women scientists throughout her career.</p>
          <p>President Tsai said that in 2022, the "Top 2% Top Scientists in the World" was selected by Stanford University from 8 million scientists, and 17 people from Asia University were honored. Indian Professor Brij B. Gupta of the Department of Computer Science & Information Engineering was even selected on the 2022 Highly Cited Researchers list in Computer Science as one of the world’s top 0.1% scientists and is the only scholar in the field of computer science in Taiwan and India. The outstanding faculty shows that Asia University is actively recruiting internationally renowned scholars. In celebration of the coming 22nd anniversary of the university in March, it is great news and an honor to confer Dr. Su an honorary doctorate of Asia University!</p>
        </div>
      </div>
    </section>
  );
}
