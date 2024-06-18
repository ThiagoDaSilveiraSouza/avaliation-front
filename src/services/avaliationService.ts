import { useState } from "react";
import { prodInstance } from "../api";
import { AvaliationProps } from "../interface";

interface CreateAvaliationResponse {}

export const CreateAvaliation = (avaliation: AvaliationProps) => {
  const [data, setData] = useState<CreateAvaliationResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  try {
    setIsLoading(true);
    const avaliationResponse = prodInstance.post<CreateAvaliationResponse>(
      "/avalation",
      avaliation
    );
    setData(avaliationResponse);
  } catch (err) {
    setError(err as Error);
    throw err as Error;
  } finally {
    setIsLoading(false);
  }

  return { data, isLoading, error };
};
