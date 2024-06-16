import { PaymentData } from "@/interface/page";

const TablePayments = ({
  paymentData,
  onClickPatchPayment,
}: {
  paymentData: PaymentData[];
  onClickPatchPayment: (paymentid: string, status: string) => Promise<void>;
}) => {
  return (
    <div className="rounded-sm">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-white bg-black">
              <th className="min-w-[150px] px-4 py-4 font-medium xl:pl-11">
                Student Name
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium">
                Primary Tuition
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium">
                Additional tuition
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium">
                Scholarship
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium">Total</th>
              <th className="min-w-[150px] px-4 py-4 font-medium">Status</th>
              <th className="min-w-[150px] px-4 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((data, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 xl:pl-11">
                  <h5 className="font-medium text-black">{data.username}</h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5">
                  <p className="text-black">{data.primary_tuition}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5">
                  <p className="text-black">{data.additional_tuition}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5">
                  <p className="text-black">{data.scholarship}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5">
                  <p className="text-black">
                    {data.primary_tuition +
                      data.additional_tuition -
                      data.scholarship}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      data.status === "paid"
                        ? "bg-success text-success"
                        : data.status === "not paid"
                        ? "bg-danger text-danger"
                        : "bg-warning text-warning"
                    }`}
                  >
                    {data.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5">
                  <div className="flex items-center space-x-3.5">
                    <button
                      className="text-rose-500 hover:text-rose-900"
                      onClick={() => onClickPatchPayment(data._id, "paid")}
                      disabled={data.status != "pending"}
                    >
                      <svg
                        fill="#000000"
                        width="18"
                        height="18"
                        viewBox="0 0 14 14"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill="green"
                            d="M13 4.1974q0 .3097-.21677.5265L7.17806 10.329l-1.0529 1.0529q-.21677.2168-.52645.2168-.30968 0-.52645-.2168L4.01935 10.329 1.21677 7.5264Q1 7.3097 1 7t.21677-.5265l1.05291-1.0529q.21677-.2167.52645-.2167.30968 0 .52645.2167l2.27613 2.2839 5.07871-5.0864q.21677-.2168.52645-.2168.30968 0 .52645.2168l1.05291 1.0529Q13 3.8877 13 4.1974z"
                          ></path>
                        </g>
                      </svg>
                    </button>
                    <button
                      className="text-rose-500 hover:text-rose-900"
                      onClick={() => onClickPatchPayment(data._id, "not paid")}
                      disabled={data.status != "pending"}
                    >
                      <svg
                        fill="#000000"
                        width="18"
                        height="18"
                        viewBox="0 0 14 14"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill="red"
                            d="M13 10.65657q0 .40404-.28283.68686l-1.37374 1.37374Q11.06061 13 10.65657 13t-.68687-.28283L7 9.74747l-2.9697 2.9697Q3.74747 13 3.34343 13q-.40404 0-.68686-.28283l-1.37374-1.37374Q1 11.06061 1 10.65657t.28283-.68687L4.25253 7l-2.9697-2.9697Q1 3.74747 1 3.34343q0-.40404.28283-.68686l1.37374-1.37374Q2.93939 1 3.34343 1t.68687.28283L7 4.25253l2.9697-2.9697Q10.25253 1 10.65657 1q.40404 0 .68686.28283l1.37374 1.37374Q13 2.93939 13 3.34343t-.28283.68687L9.74747 7l2.9697 2.9697Q13 10.25253 13 10.65657z"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePayments;
