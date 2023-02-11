import styled from "styled-components";

export const Container = styled.div`
width: 100%;
  margin: 16px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.purple.dark};
  padding: 8px;
  border-radius: 32px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  box-shadow: -1px 7px 24px 1px rgba(5,5,5,0.28);
  opacity: 0.8;
  background-image: url('https://images.unsplash.com/photo-1469365556835-3da3db4c253b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-position: center;

  .date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;

    strong {
      font-size: 22px;
    }
  }

  .temperature {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 32px;

    h2 {
      font-size: 42px;
    }
  }
`
