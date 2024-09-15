import { PropsWithChildren } from "react";

export default function Sidebar({ children }: PropsWithChildren) {
  return <aside className="bg-dark border-end border-light-subtle text-light text-center">{children}</aside>;
}
