interface Params {
  username: string;
  password: string;
  env: string;
  port: string | number;
}

export default function genUri({ username, password, env, port }: Params) {
  if (env === "development") {
    return `mongodb://${username}:${password}:${port}/myapp`;
  } else if (env === "production") {
    return `mongodb+srv://${username}:${password}@cluster0.orpih.mongodb.net/presidents-api?retryWrites=true&w=majority`
  } else {
    throw "Must specify a node environment in order to generate Mongo URI ... ";
  }
}
