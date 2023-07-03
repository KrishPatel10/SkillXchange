export default function Profile_details() {
    return(
        <div className="table-auto border rounded-xl w-full bg-white h-auto mt-8 mb-5">
            <table class="min-w-full text-center font-light">
                <tbody>
                    <tr className="border-b dark:border-neutral-500 py-10 px-8 w-full">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium"><strong>Name</strong></td>
                        <td className="whitespace-nowrap  px-6 py-4 ">Krunal Patel</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="border-b dark:border-neutral-500 py-10 px-8 w-full">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium"><strong>Email</strong></td>
                        <td className="whitespace-nowrap  px-6 py-4 "> krunalpatel2002@gmail.com </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="border-b dark:border-neutral-500 py-10 px-8 w-full">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium"><strong>Phone Number</strong></td>
                        <td className="whitespace-nowrap  px-6 py-4 "> 8469801566 </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="py-10 px-8 w-full">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium"><strong>Address</strong></td>
                        <td className="whitespace-nowrap  px-6 py-4 "> DAIICT-Gandhinagar </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};