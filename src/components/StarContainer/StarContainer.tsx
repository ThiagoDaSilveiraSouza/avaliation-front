import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const Container = styled.div`
  display: flex;
  gap: 10px;
  div {
    svg {
      &:hover {
        cursor: pointer;
        transform: scale(1.3);
      }
    }
  }
`;

interface StarsContainerProps {
  selectedStarsState: [number, Dispatch<SetStateAction<number>>];
}

export const StarContainer = ({ selectedStarsState }: StarsContainerProps) => {
  const [selectedStars, setSelectedStars] = selectedStarsState;

  const startList = Array(5).fill("");

  return (
    <Container>
      {startList.map((_, index) => {
        const currentStarIsFill = index <= selectedStars;

        return (
          <div key={index} onClick={() => setSelectedStars(index)}>
            {currentStarIsFill ? (
              <IoMdStar fill="gold" size={35} />
            ) : (
              <IoMdStarOutline fill="gold" size={35} />
            )}
          </div>
        );
      })}
    </Container>
  );
};
