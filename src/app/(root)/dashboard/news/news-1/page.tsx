"use client";

import { useUser } from "@/hooks/userContext";
import Image from 'next/image'; // Import Image component from Next.js
import News1Image from '~/public/images/news-1-image.png'; 

export default function News() {
  const { user } = useUser();

  return (
    <section>
      <div className="flex justify-left items-left py-5">
        <h2 className="text-[#2D937C] text-5xl font-bold">Asia University President Jeffrey J.P. Tsai visits Harvard University in the United States to discuss research collaboration with the International Center for Genetic Disease</h2>
      </div>
      <div className="flex">
        <div className="w-1/2 mt-9">
          <Image
            src={News1Image}
            alt="News 1 Image"
            width={700}
            height={475}
          />
        </div>
        <div className="w-1/2 pl-4 mt-9">
          <p>President Jeffrey J.P. Tsai and Chair Professor Kuan-Tsae Huang from Asia University visited the International Center for Genetic Disease (ICGD) at Harvard Medical School in the United States in August. They engaged in discussions with Professor Alireza Haghighi, the founding director of the center, and the research team. The two sides are planning to collaborate on various clinical research projects, such as disease gene discovery and screening analysis, gene therapy, medical genetic tourism, and population genetic screening programs. They also aim to provide international courses in clinical genomic medicine, molecular genomic medicine, and bioinformatics to promote diverse collaborations and breakthroughs in the field of biomedical informatics and genetics research.</p>
          <p>During the visit to Harvard University's ICGD, President Jeffrey J.P. Tsai and his delegation had discussions with Professor Alireza Haghighi and others. The discussions focused on topics related to Harvard Medical School's international genetic initiatives, data science, genetics of complex diseases, and artificial intelligence applications in genomic medicine. Attendees included: Dr. Anthony Philippakis, Chief Data Officer of Broad Institute, a leading genetic and biomedical research institution jointly established by Harvard University and MIT; Professor Soumya Raychaudhuri, Director of Center for Data Sciences; Professor Manolis Kellis from the Department of Computer Science at MIT; Amir Haghighi, Director of Research, ICGD; Danielle Coifani, Senior Director of Data Strategy and Partnerships, Data Sciences Platform, Broad Institute. The discussions revolved around how to use data and technology to enhance human health and well-being.</p>
          <p>Asia University President Jeffrey J.P. Tsai (3rd from the right), Chair Professor Kuan-Tsae Huang of the Department of Computer Science and Information Engineering at Asia University (4th from the right), Professor Alireza Haghighi, the founding director of the International Center for Genetic Disease at Harvard University (6th from the right), and team members engage in discussions and cooperation talks.</p>
          <p>President Jeffrey J.P. Tsai mentioned that Asia University has established the Center for Precision Health Research, AI Research Center, and Big Data Research Center. The university has implemented several long-term integrated projects funded by the National Science and Technology Council, including the "Intelligent Cardiothoracic Ratio (iCTR) Estimation System," which has received SaMD (Software as a Medical Device) listing approval from health authorities in the United States and Taiwan. Additionally, over the past six years, Asia University has received 16 National Innovation Awards and National Innovation Excelsior Award, and it has engaged in industry-academia collaboration, including technology transfers with Ever Fortune AI.</p>
          <p>President Tsai highlighted that within the "China Medical University-Asia University System (CMU-AU System)" consisting of Asia University and China Medical University, there are affiliated hospitals and medical institutions. In the future, AU plans to establish the Asia University-affiliated Fengyuan Hospital and a private Fengyuan long-term care institution in the Fengyuan area of Taichung. With these combined medical clinical and research capabilities, we hope to achieve significant advancements and developments in the fields of biomedical informatics and genetics research through practical collaborations and research with Harvard University.</p>
          <p>Professor Alireza Haghighi introduced that ICGD brings together clinical doctors and scientists from different parts of the world with the aim of identifying genetic causes of diseases and translating these findings into better diagnostic, therapeutic, and preventive strategies. The center collaborates internationally in genomic research of human health and diseases, with the goal of advancing the implementation of genetic medicine on a global scale.</p>
          <p>Both parties reached an agreement to collaborate on clinical research initiatives, including disease gene discovery, diagnosis, and screening analysis; translational and clinical implementations in related areas such as population genetic screening program and establishing services for undiagnosed diseases in Taiwan; creating commercial services like gene therapy and medical genetic tourism. Additionally, AU and ICGD will collaborate on international courses in clinical genomic medicine, molecular genomic medicine, and bioinformatics, as well as technology transfer in bioinformatics tools and pipelines, enabling more diverse and in-depth exchanges in related courses and training.</p>
        </div>
      </div>
    </section>
  );
}
