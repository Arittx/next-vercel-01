//colocar lrimero arriba lo que viene de next
//y luego colocar sus componentes

import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties, FC } from "react";

//son estilos
//se dejan afuera de la funcion para que no sea reprocesado
const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
  //este custom hook es propio de next el useRouter

  const { asPath } = useRouter();

  return (
    <Link legacyBehavior href={href}>
      {/* si el asPath es exactamente al href ?  regresa el style si no es asi regresa un null */}
      {/* se escribe de la siguiente manera  */}
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
