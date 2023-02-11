import styled from "styled-components";

export const Container = styled.div`
  min-width: 187px;
  height: 84px;
  width: 100%;
  background: linear-gradient(86deg, rgba(150,116,172,1) 0%, rgba(109,70,147,1) 85%);
  border: 1px solid ${({ theme }) => theme.colors.purple.light};
  border-radius: 32px;
  padding: 16px 64px;
  margin: 16px;
  color: ${({ theme }) => theme.colors.purple.light};
  flex: 1;
  box-shadow: -1px 7px 24px 1px rgba(5,5,5,0.28);
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 250px;


  img {
    width: 16%;
    background-color: ${({ theme }) => theme.colors.purple.light};
    border-radius: 64px;
    padding: 8px;
    color: ${({ theme }) => theme.colors.purple.main};
    align-self: flex-start;
    margin-right: 8px;
  }

  .infos {



    h2 {
      font-size: 22px;
    }
  }

`
