import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(86deg, rgba(150,116,172,1) 0%, rgba(109,70,147,1) 85%);
  padding: 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 88px;
  margin: 8px;
  /* height: 100%; */

  .infos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .temperature {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  & + & {
    margin-top: 16px;
  }
`
