import axios from "axios";
import { IPost } from "../types/posts";

interface ISocialService {
  // nome do que será implementado + : + tipagem
  loadSocialData: () => Promise<IPost[]>;
}

export default function SocialService(): ISocialService {
  return {
    loadSocialData: async () => {
      const { data } = await axios.get<IPost[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );

      return data;
    },
  };
}
