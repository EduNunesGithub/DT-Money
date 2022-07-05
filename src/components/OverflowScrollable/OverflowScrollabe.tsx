import {
    useState,
    useRef,
    useEffect
} from "react";

import {
    ScrollButtonsContainer,
    OverflowScrollabeContainer,
    Wrapper
} from "./OverflowScrollabeStyles";

import iconChevronLeft from "../../assets/chevronLeft.svg";
import iconChevronRight from "../../assets/chevronRight.svg";

interface OverflowScrollabeProps {
    borderRadius?: number;
    buttonSize: number;
    children: React.ReactNode;
    scrollAmount: number;
};

export const OverflowScrollabe = ({
    borderRadius,
    buttonSize,
    children,
    scrollAmount
}: OverflowScrollabeProps) => {
    const [showOverflowArrows, setShowOverflowArrows] = useState<boolean>(false);
    const wrapperElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [wrapperElement]);

    useEffect(() => {
        setShowOverflowArrows(
            wrapperElement.current!.scrollWidth > wrapperElement.current!.clientWidth
        );
    }, [wrapperElement.current?.scrollWidth]);

    const handleResize = () => {
        if (wrapperElement.current === null) return;

        setShowOverflowArrows(
            wrapperElement.current.scrollWidth > wrapperElement.current.clientWidth
        );
    }

    const scrollWrapper = (left: boolean) => {
        if (wrapperElement.current === null) return;

        const wrapperWidth = wrapperElement.current.clientWidth;

        if (left === true) {
            wrapperElement.current!.scrollTo({
                behavior: "smooth",
                left: wrapperElement.current!.scrollLeft - wrapperWidth * scrollAmount,
                top: 0
            });
        } else {
            wrapperElement.current!.scrollTo({
                behavior: "smooth",
                left: wrapperElement.current!.scrollLeft + wrapperWidth * scrollAmount,
                top: 0
            });
        }
    }

    return (
        <OverflowScrollabeContainer borderRadius={borderRadius ?? 0}>
            <Wrapper ref={wrapperElement}>
                {children}
            </Wrapper>

            <ScrollButtonsContainer size={buttonSize}>
                {showOverflowArrows === true && (
                    <>
                        <button onClick={
                            () => scrollWrapper(true)
                        }>
                            <img
                                alt="Chevron Left"
                                src={iconChevronLeft}
                            />
                        </button>

                        <button onClick={
                            () => scrollWrapper(false)
                        }>
                            <img
                                alt="Chevron Right"
                                src={iconChevronRight}
                            />
                        </button>
                    </>
                )}
            </ScrollButtonsContainer>
        </OverflowScrollabeContainer>
    );
}