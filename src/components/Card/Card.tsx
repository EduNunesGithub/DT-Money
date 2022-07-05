import { valueToCurrencyNoSymbol } from "../../utils/currencyFormater";

import { CardContainer } from "./CardStyles";

interface CardProps {
    background: string;
    color: string;
    icon: string;
    lastEntrance: Date;
    name: string;
    value: number;
};

export const Card = ({
    background,
    color,
    icon,
    lastEntrance,
    name,
    value
}: CardProps) => {
    const dateToLastEntrance = (date: Date) => {
        const stringDate = date.toString();
        const stringNewDate = new Date(0).toString();

        if (stringDate === stringNewDate) {
            return "Nenhuma nova transação";
        } else {
            return `Última transação dia ${date.getDate()} de ${date.toLocaleString("pt-BR", {month: "long"})}`;
        }
    }

    return (
        <CardContainer
            background={background}
            color={color}
        >
            <img
                alt={name}
                src={icon}
            />

            <h2>{name}</h2>

            <strong>
                <span>{value < 0 ? "- R$" : "RS"}</span> {valueToCurrencyNoSymbol(value)}
            </strong>

            <span className="mobile-span">{dateToLastEntrance(lastEntrance)}</span>
        </CardContainer>
    );
}