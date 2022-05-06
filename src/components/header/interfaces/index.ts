import React from "react";

export interface HSCProp {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, payload: string) => void;
}
