import { FC } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { IData } from "./types";
import { IoIosHome } from "react-icons/io";

interface IProps {
  data: IData | undefined;
}

export const Home: FC<IProps> = ({ data }) => {
  return (
    <>
      {data ? (
        <>
          <BsFillPatchCheckFill size={36} />
          <h1>Done!</h1>
          <p>
            The information required for generating the contract
            <br /> was already submitted and validated. You can edit the data,
            preview, and send <br />
            the contract to the customer by using the actions at the top-right
            corner.
          </p>
          <br />
          <table>
            <tr>
              <th>Name</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Surname</th>
              <td>{data.surname}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{data.email}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{data.address}</td>
            </tr>
            <tr>
              <th>Total contract value</th>
              <td>R${data.total.toLocaleString()}.00</td>
            </tr>
            <tr>
              <th>Discount Package</th>
              <td>{data.discount}</td>
            </tr>
          </table>
        </>
      ) : (
        <>
          <IoIosHome size={36} />
          <h1>Welcome to the Contract Generator App</h1>
          <p>
            Here you can enter the contractual and customer data and <br />
            we will produce a new contract with the corresponding <br />
            information for you, just like magic 🧙🏼‍♂️.
          </p>
        </>
      )}
    </>
  );
};
