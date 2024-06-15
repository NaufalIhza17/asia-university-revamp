"use client";

import { useUser } from "@/hooks/userContext";

export default function Portofolio() {
  const { user } = useUser();

  return (
    <section>
      <div className="flex justify-left items-left py-5">
        <p className="text-[#2D937C] text-4xl font-bold">Hot News!</p>
      </div>
      <div>
        
      </div>
    </section>
  );
}
