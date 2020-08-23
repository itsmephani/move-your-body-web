import { post } from "../../services/http";

export default class SignupService {
  async register(user: {}) {
    return post(user);
  }
}
