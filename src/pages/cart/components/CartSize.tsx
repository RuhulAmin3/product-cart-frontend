import { useEffect, useState } from "react";
import useToastAndApiHandler from "../../../hooks/useToastAndApiHandler";
import { useUpdateCartProdMutation } from "../../../redux/features/cart/cart.api";
import { getUserInfo } from "../../../utils";

const CartSize = ({ cart }: any) => {
  const { userId } = getUserInfo() || {};

  const [defaultValue, setDefaultValue] = useState(cart?.size);

  const [updateCartProd, { isLoading, isSuccess, isError, error, data }] =
    useUpdateCartProdMutation();

  const handleUpdateCart = (value: string) => {
    updateCartProd({
      id: cart?.id,
      data: {
        userId: userId as string,
        quantity: cart?.quantity,
        color: cart?.color,
        productId: cart?.productId,
        subTotal: cart?.subTotal,
        size: value,
      },
    });
  };

  const successMessage = "cart updated successfully";

  useEffect(() => {
    if (isError) {
      setDefaultValue(cart?.size);
    }
  }, [cart?.size, isError]);

  useToastAndApiHandler(
    { isLoading, isSuccess, isError, error, data },
    successMessage
  );

  return (
    <td className="px-6 py-4 text-secondary-400 font-semibold">
      <select
        onChange={(e) => handleUpdateCart(e.target.value)}
        defaultValue={defaultValue}
        className="select w-full"
      >
        {cart?.products?.size.map((size: string) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </td>
  );
};

export default CartSize;
