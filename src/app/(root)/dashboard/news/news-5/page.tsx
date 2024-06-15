"use client";

import { useUser } from "@/hooks/userContext";
import Image from 'next/image';
import News5Image from '~/public/images/news-5-image.jpg'; 

export default function News() {
  const { user } = useUser();

  return (
    <section>
      <div>
        <h2 className="text-[#2D937C] text-4xl font-bold">Asia University Ranked No. 10th in the Most Favored and Popular Universities Category by Taiwan Corporates and Companies</h2>
      </div>
      <div className="flex">
        <div className="w-1/2 mt-2">
          <Image
            src={News5Image}
            alt="News 5 Image"
          />
        </div>
        <div className="w-1/2 pl-4 mt-9">
          <p>Asia University (AU), Taiwan, ranks 10th in the latest "2023 Corporate Favorite University Survey" and enters the top 10 list for the first time. President Jeffrey J.P. Tsai states that “Asia University has made great leaps in the rankings of world universities for several consecutive years and is now a university worthy of world acclaim that continues to develop rapidly while facing the shrinking number of new students in recruitment." Asia University is committed to cultivating cross-disciplinary talents, boosting students' employability prospects.</p>
          <p>According to the "2023 Corporate Favorite University Survey," conducted jointly by 1111 Job Bank and TUN University Network, the top 10 universities of the "Private University Rankings" in order are: Fu Jen Catholic University, Tamkang University, Tunghai University, Feng Chia University, Soochow University, Chung Yuan Christian University, Taipei Medical University, Shih Hsin University, Chang Gung University, and Asia University. Since the founding of Asia University in 2000, the number of students graduating from the university has increased yearly, and they are serving in a variety of fields. Their superb performances have been recognized by the general public and the industry. As a result, AU made its debut on the list as top 10 in the "Private University Rankings," a new milestone in AU’s development.</p>
          <p>AU’s performance in the corporate world is lauded by the media as follows: “Asia University, which entered the list for the first time, has made great progress in teaching and research in recent years. It has not only provided scholarships to attract top students but has also been very trend-setting by establishing a cloud academy with Amazon AWS and integrating 1460 courses in the school into the 17 SDGs of the United Nations for sustainable development. At the same time, it also created a cross-field net-zero carbon emission program. The university has made great leaps in the rankings of world universities for several consecutive years and is regarded as a university that has continued growing in spite of the declining birthrate.”</p>
          <p>President Tsai pointed out that AU emphasizes the importance of cultivating young talents. He believes that with excellent professional skills, students can perform well in any workplace. AU focuses on promoting cross-domain independent learning, integrating innovative education and university social responsibility, and the self-paced learning courses designed by students independently can definitely strengthen their abilities to cope with their future professional challenges. In addition, free supporting classes for national examinations, English proficiency tests, licenses, etc., are offered annually for interested students. AU educates its students to be responsible and resilient, and its cross-disciplinary "π-shaped talents" policy has won the recognition by most business owners.</p>
        </div>
      </div>
    </section>
  );
}

