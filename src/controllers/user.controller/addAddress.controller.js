import { Users } from "../../schemas/users.schema.js";

const addAddress = async (req, res) => {
  const { address } = req.body;

  console.log(req.params);
  console.log(address);
  try {
    const addedAddress = await Users.findByIdAndUpdate(req.params.id, {
      address,
    });

    res
      .send({
        addedAddress,
        message: "added user address successfuly",
      })
      .status(200);
  } catch (error) {
    console.log(error);
  }
};

export default addAddress;
