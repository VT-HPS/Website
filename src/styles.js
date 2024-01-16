import styled from 'styled-components';

const chicagoMaroon = 'rgb(134, 31, 65)';
const burntOrange = 'rgb(229, 117, 31)';
const hokieStone = 'rgb(117, 120, 123)';
const yardlineWhite = 'rgb(255, 255, 255)';

export const Container = styled.div`
  border-bottom: 2px solid ${hokieStone};
  display: flex;
`;

export const Entity = styled.div`
  color: ${chicagoMaroon};
  border: 1px solid ${hokieStone};
  border-radius: 10px; /* Added border-radius for rounded corners */
  max-width: 690px;
  width: 99%;
  margin-bottom: 10px;
  margin: auto;
  &:first-of-type {
    margin-top: 0;
  }
`;

export const Inner = styled.div`
  padding: 10px;
  max-width: 800px;
  margin: auto;
  flex-direction: column;
  display: flex;
`;

export const Question = styled.div`
  font-size: 18px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  background: ${burntOrange};
  padding: 0.75em 1.12em;
  align-items: center;
  border-radius: 5px; /* Added border-radius for rounded corners */
`;

export const Text = styled.p`
  max-height: 400px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  background: ${yardlineWhite};
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;
  border: 1px solid ${hokieStone};
  border-top: 0;
  border-radius: 5px; /* Added border-radius for rounded corners */

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

export const Header = styled.h1`
  color: ${chicagoMaroon};
  line-height: 7;
  margin: -80px 0;
  font-size: 35px;
  text-align: center;
  border-radius: 10px; /* Added border-radius for rounded corners */

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

/*
import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 9px solid #070707;
  display: flex;
`;
export const Entity = styled.div`
  color: #070707;
  border: 1px solid #070707;
  max-width: 690px;
  width: 99%;
  margin-bottom: 10px;
  margin: auto;
  &:first-of-type {
    margin-top: 1.5em;
  }
`;
export const Inner = styled.div`
  padding: 75px 40px;
  max-width: 800px;
  margin: auto;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  background: #1a1919;
  padding: 0.75em 1.12em;
  align-items: center;
`;
export const Text = styled.p`
  max-height: 1190px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  background: #303030;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Header = styled.h1`
  color: #070707;
  line-height: 7;
  margin-top: 0 !important;
  font-size: 45px;
  margin-bottom: 9px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 33px;
  }

  color: #070707;
`;
*/