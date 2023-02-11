import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.purple.main};
  position: fixed;
  bottom: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.purple.light};
  border-radius: 4px;
  padding: 0 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;


  h4 {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.purple.light};
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 8px;

    a img {
      width: 20px;
      padding: 0;
    }
  }
`

