import { useState } from "react";
import useToastAndApiHandler from "../../../hooks/useToastAndApiHandler";
import { useUpdateCartProdMutation } from "../../../redux/features/cart/cart.api";
import { getUserInfo } from "../../../utils";

const Quantity = ({ cart }: any) => {
  const { userId } = getUserInfo() || {};

  const [defaultValue] = useState(cart?.quantity);

  const [updateCartProd, { isLoading, isSuccess, isError, error, data }] =
    useUpdateCartProdMutation();

  const handleUpdateQuantity = (value: number) => {
    updateCartProd({
      id: cart?.id,
      data: {
        userId: userId as string,
        quantity: value,
        color: cart?.color,
        productId: cart?.productId,
        subTotal: cart?.products?.price * value,
        size: cart?.size,
      },
    });
  };

  const successMessage = "quantity updated successfully";

  useToastAndApiHandler(
    { isLoading, isSuccess, isError, error, data },
    successMessage
  );

  return (
    <td className="px-6 py-4 text-secondary-400 font-semibold">
      <select
        onChange={(e) => handleUpdateQuantity(Number(e.target.value))}
        defaultValue={defaultValue}
        className="select w-full"
      >
        {Array.from({ length: 6 }).map((_, idx) => (
          <option key={idx + 1} value={idx + 1}>
            {idx + 1}
          </option>
        ))}
      </select>
    </td>
  );
};

export default Quantity;
