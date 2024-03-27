import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { GetServerSidePropsContext } from "next";

export function setupAPIClient(ctx: GetServerSidePropsContext | null = null ) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3333",
  });

  return api;
}
