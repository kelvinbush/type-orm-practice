import { getRepository } from "typeorm";
import { User } from "./entity/User";
import { log } from "util";

export const Boot = async () => {
  const userRepo = getRepository(User);
  const user = userRepo.create({
    firstName: "Kelvin",
    lastName: "Bush",
    age: 22,
  });

  await userRepo.save(user).catch((err) => console.log(err));
  console.log("New User: ", user);
};
