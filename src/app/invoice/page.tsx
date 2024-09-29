import React from "react";

export default function page() {
  return (
    <div className="p-8 font-iranSans">
      <div>
        <p className="text-2xl">فاکتور خرید</p>
        <p className="text-sm text-gray-400 mt-1">باتشکر از خرید شما!</p>
      </div>
      <div className="mt-5 px-0">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>تعداد</th>
                <th>نام آیتم</th>
                <th>قیمت آیتم</th>
                <th>مجموع</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="hover">
                <th>1</th>
                <td>زرشک پلو</td>
                <td>250000</td>
                <td>250000</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr className="hover">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
        <a
          href="javascript:window.print()"
          className="bg-red-500 px-3 py-1 rounded-md text-white float-left mt-5 hover:bg-red-400 transition-all duration-300"
        >
          چاپ فاکتور
        </a>
      </div>
    </div>
  );
}
