import getDateValue from "@/hooks/getDateValue";
import { DashboardBannerMain } from "~/public/images";

export default function DashboardHome() {
  const month = getDateValue({ options: "month" });
  const date = getDateValue({ options: "date" });
  const year = getDateValue({ options: "year" });

  return (
    <section>
      <div className="w-full rounded-3xl bg-gradient-to-r from-[#2D937C] to-[#5ABCA6] text-white px-16 py-14 relative overflow-hidden">
        <div className="flex flex-col font-satoshi relative z-50">
          <p className="pb-8">
            {month}, {date} {year}
          </p>
          <p className="text-5xl font-bold">Welcome back, User</p>
          <p className="pt-3">Always stay updated in your student portal</p>
        </div>
        <DashboardBannerMain
          width="392"
          height="273"
          className="absolute right-0 top-0"
        />
      </div>
    </section>
  );
}
