import { getRepository } from "typeorm";
import { User } from "./entity/User";
import { log } from "util";
import * as console from "console";
import { Tweet } from "./entity/Tweet";

export const Boot = async () => {
  const userRepo = getRepository(User);
  const user = userRepo.create({
    firstName: "Wachiye",
    lastName: "Kelvin",
    age: 22,
  });

  await userRepo.save(user).catch((err) => console.log(err));
  console.log("New User: ", user);

  const tweetRepo = getRepository(Tweet);
  const tweet = new Tweet();
  tweet.title = "I finally got a new job";
  tweet.content =
    "Well I am looking forward to having a good time at my new job environment";
  tweet.user = Promise.resolve(user);
  await tweetRepo.save(tweet).catch((err) => console.log(err));
  console.log("New Tweet: ", tweet);
};

export const GetAll = async () => {
  const userRepo = getRepository(User);
  const me = await userRepo
    .findOne({ where: { firstName: "Wachiye" } })
    .catch((err) => console.log(err));

  if (me) {
    console.log("User: ", me);
    console.log("Tweets:", await me.tweets);
  }
};
